import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { deleteCookie, getCookie, setCookie } from 'hono/cookie';
import { COOKIE_NAME, SESSION_TTL_SECONDS, sha256, token, verifyPassword } from './auth';

type Bindings = { DB: D1Database; APP_ORIGIN: string };
type UserRow = { id: string; email: string; name: string; password_hash: string; status: string };

type AppEnv = { Bindings: Bindings };
const app = new Hono<AppEnv>();

app.use('*', async (c, next) =>
  cors({
    origin: c.env.APP_ORIGIN,
    credentials: true,
    allowHeaders: ['Content-Type'],
    allowMethods: ['GET', 'POST', 'OPTIONS'],
  })(c, next),
);

app.get('/health', (c) => c.json({ ok: true, service: 'mendoncarural-api' }));

app.post('/auth/login', async (c) => {
  const body = await c.req.json<{ email?: string; password?: string }>().catch(() => ({}));
  const email = body.email?.trim().toLowerCase();
  const password = body.password ?? '';
  if (!email || !password) return c.json({ error: 'invalid_credentials' }, 401);

  const user = await c.env.DB.prepare(
    'SELECT id,email,name,password_hash,status FROM users WHERE email=? LIMIT 1',
  ).bind(email).first<UserRow>();

  if (!user || user.status !== 'active' || !(await verifyPassword(password, user.password_hash))) {
    return c.json({ error: 'invalid_credentials' }, 401);
  }

  const raw = token();
  const tokenHash = await sha256(raw);
  const expires = new Date(Date.now() + SESSION_TTL_SECONDS * 1000).toISOString();

  await c.env.DB.prepare(
    'INSERT INTO sessions (id,user_id,token_hash,expires_at) VALUES (?,?,?,?)',
  ).bind(crypto.randomUUID(), user.id, tokenHash, expires).run();

  const isHttps = new URL(c.req.url).protocol === 'https:';
  setCookie(c, COOKIE_NAME, raw, {
    httpOnly: true,
    secure: isHttps,
    sameSite: 'Lax',
    path: '/',
    maxAge: SESSION_TTL_SECONDS,
  });

  return c.json({ user: { id: user.id, email: user.email, name: user.name } });
});

async function currentUser(c: any) {
  const raw = getCookie(c, COOKIE_NAME);
  if (!raw) return null;
  const hash = await sha256(raw);
  return c.env.DB.prepare(`
    SELECT u.id,u.email,u.name
    FROM sessions s
    JOIN users u ON u.id=s.user_id
    WHERE s.token_hash=?
      AND s.revoked_at IS NULL
      AND datetime(s.expires_at) > datetime('now')
      AND u.status='active'
    LIMIT 1
  `).bind(hash).first();
}

app.get('/auth/me', async (c) => {
  const user = await currentUser(c);
  return user ? c.json({ user }) : c.json({ error: 'unauthorized' }, 401);
});

app.post('/auth/logout', async (c) => {
  const raw = getCookie(c, COOKIE_NAME);
  if (raw) {
    const hash = await sha256(raw);
    await c.env.DB.prepare(
      'UPDATE sessions SET revoked_at=CURRENT_TIMESTAMP WHERE token_hash=? AND revoked_at IS NULL',
    ).bind(hash).run();
  }
  deleteCookie(c, COOKIE_NAME, { path: '/' });
  return c.json({ ok: true });
});

export default app;
