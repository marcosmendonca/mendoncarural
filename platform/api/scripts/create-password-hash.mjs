import { webcrypto } from 'node:crypto';

const password = process.argv[2];
if (!password || password.length < 12) {
  console.error('Uso: node scripts/create-password-hash.mjs "uma-senha-com-12+-caracteres"');
  process.exit(1);
}
const crypto = webcrypto;
const encoder = new TextEncoder();
const salt = crypto.getRandomValues(new Uint8Array(16));
const iterations = 210000;
const key = await crypto.subtle.importKey('raw', encoder.encode(password), 'PBKDF2', false, ['deriveBits']);
const bits = new Uint8Array(await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt, iterations }, key, 256));
const b64 = bytes => Buffer.from(bytes).toString('base64');
console.log(`pbkdf2-sha256$${iterations}$${b64(salt)}$${b64(bits)}`);
