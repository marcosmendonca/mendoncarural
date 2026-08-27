export const API_URL = (import.meta.env.VITE_API_URL ?? 'http://localhost:8787').replace(/\/$/, '');

export async function apiFetch(path: string, init?: RequestInit) {
  return fetch(`${API_URL}${path}`, { ...init, credentials: 'include' });
}
