import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8787';

type User = { id: string; name: string; email: string };

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  async function loadSession() {
    try {
      const response = await fetch(`${API_URL}/auth/me`, { credentials: 'include' });
      if (response.ok) setUser((await response.json()).user);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { void loadSession(); }, []);

  async function login(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    const data = new FormData(event.currentTarget);
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: data.get('email'), password: data.get('password') }),
    });
    if (!response.ok) return setError('E-mail ou senha inválidos.');
    setUser((await response.json()).user);
  }

  async function logout() {
    await fetch(`${API_URL}/auth/logout`, { method: 'POST', credentials: 'include' });
    setUser(null);
  }

  if (loading) return <main className="center"><p>Carregando…</p></main>;

  if (!user) return (
    <main className="center">
      <form className="card" onSubmit={login}>
        <p className="eyebrow">MENDONÇA RURAL</p>
        <h1>Acessar plataforma</h1>
        <p className="muted">Entre com seu e-mail e senha.</p>
        <label>E-mail<input name="email" type="email" autoComplete="email" required /></label>
        <label>Senha<input name="password" type="password" autoComplete="current-password" required /></label>
        {error && <p className="error">{error}</p>}
        <button type="submit">Entrar</button>
      </form>
    </main>
  );

  return (
    <main className="dashboard">
      <header><div><p className="eyebrow">MENDONÇA RURAL</p><h1>Plataforma</h1></div><button onClick={logout}>Sair</button></header>
      <section className="card"><h2>Olá, {user.name}</h2><p className="muted">Sua área privada está pronta para receber as ferramentas da Mendonça Rural.</p></section>
      <section className="tools"><article className="card"><h2>Conformidade Socioambiental</h2><p className="muted">Análises, evidências e monitoramento socioambiental.</p><span>Em desenvolvimento</span></article></section>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
