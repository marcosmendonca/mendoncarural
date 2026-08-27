# Plataforma Mendonça Rural

O site institucional permanece no projeto Astro da raiz e continua independente da aplicação privada.

## Arquitetura

- `mendoncarural.com.br` — Astro/Tailwind institucional, estático e orientado a SEO.
- `app.mendoncarural.com.br` — `platform/app`, React + Vite + TypeScript.
- `api.mendoncarural.com.br` — `platform/api`, Cloudflare Worker + Hono.
- Cloudflare D1 — identidade, organizações, sessões, permissões e dados transacionais.
- Cloudflare R2/Queues/Workflows — serão adicionados conforme os módulos exigirem.

## Sprint 01

A aplicação privada possui fluxo inicial de login, restauração de sessão e logout. A API mantém senha somente como hash e sessão somente como hash do token no D1.

Antes do deploy real:
1. criar o D1 `mendoncarural-platform`;
2. aplicar `migrations/0001_platform_foundation.sql`;
3. substituir `REPLACE_WITH_D1_DATABASE_ID` em `platform/api/wrangler.jsonc`;
4. criar o primeiro usuário administrador com password hash compatível;
5. publicar o Worker e apontar `api.mendoncarural.com.br`;
6. publicar `platform/app` e configurar `VITE_API_URL=https://api.mendoncarural.com.br`;
7. apontar `app.mendoncarural.com.br` para a aplicação.

O Astro institucional não depende do Worker para renderizar páginas públicas.
