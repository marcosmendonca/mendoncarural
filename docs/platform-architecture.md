# Mendonça Rural — Fundação da Plataforma

## Objetivo

Evoluir o site institucional existente para uma arquitetura com duas áreas claramente separadas:

- **Site público**: conteúdo institucional, SEO, blog, calculadoras e páginas públicas já existentes.
- **Plataforma privada**: área autenticada em `/app`, preparada para receber ferramentas B2B da Mendonça Rural.

## Princípios

1. Preservar o site Astro existente.
2. Cloudflare-first e serverless.
3. Autenticação e autorização antes dos módulos de negócio.
4. Multiempresa desde a modelagem inicial.
5. Permissões por ferramenta (entitlements).
6. Auditoria das ações relevantes.
7. Nenhum dado sensível ou senha em texto puro.
8. Módulos de negócio desacoplados da autenticação.

## Estrutura alvo

```text
Site público
  /
  /sobre
  /solucoes
  /blog
  /calculadoras
  /login

Plataforma privada
  /app
  /app/conformidade
  /app/<futuras-ferramentas>
  /conta
```

## Infraestrutura alvo

- Astro + TypeScript + Tailwind
- Cloudflare Workers/Pages runtime
- Cloudflare D1 para dados transacionais
- Cloudflare R2 para documentos, relatórios e evidências
- Cloudflare Queues/Workflows quando houver processamento assíncrono
- GitHub para código e CI/CD

## Domínios da plataforma

### Identity
Usuários, credenciais, sessões e recuperação de acesso.

### Organizations
Empresas/organizações e seus membros. Todo dado de negócio futuro deve possuir escopo de organização quando aplicável.

### Authorization
Papéis e permissões por ferramenta.

### Tools
Catálogo interno das ferramentas disponíveis na plataforma.

### Audit
Registro append-only das ações relevantes do sistema.

### Compliance
Módulo futuro de Conformidade Socioambiental. Não faz parte da Sprint 00.

## Regras de segurança para autenticação

A implementação da autenticação deverá:

- armazenar somente hash de senha usando algoritmo adequado ao runtime;
- usar sessão opaca e revogável;
- armazenar apenas hash do token de sessão no banco;
- entregar o token ao navegador em cookie `HttpOnly`, `Secure` e `SameSite`;
- possuir expiração e logout/revogação;
- impedir acesso a `/app/*` sem sessão válida;
- aplicar rate limiting nas operações sensíveis;
- registrar eventos relevantes em `audit_logs`;
- nunca confiar apenas em proteção de interface: autorização deve ocorrer no servidor.

## Status da Sprint 00

A Sprint 00 define a fundação arquitetural e o contrato dos domínios. A criação efetiva de login, hashing, cookies, middleware e rotas protegidas pertence à Sprint 01.
