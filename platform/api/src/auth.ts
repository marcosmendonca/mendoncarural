const encoder = new TextEncoder();
export const COOKIE_NAME = 'mr_session';
export const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7;

function b64(bytes: Uint8Array){let s='';for(const b of bytes)s+=String.fromCharCode(b);return btoa(s)}
function unb64(value:string){const s=atob(value);return Uint8Array.from(s,c=>c.charCodeAt(0))}
export function token(){return b64(crypto.getRandomValues(new Uint8Array(32))).replaceAll('+','-').replaceAll('/','_').replaceAll('=','')}
export async function sha256(value:string){return b64(new Uint8Array(await crypto.subtle.digest('SHA-256',encoder.encode(value))))}
export async function hashPassword(password:string){const salt=crypto.getRandomValues(new Uint8Array(16));const iterations=210000;const key=await crypto.subtle.importKey('raw',encoder.encode(password),'PBKDF2',false,['deriveBits']);const bits=new Uint8Array(await crypto.subtle.deriveBits({name:'PBKDF2',hash:'SHA-256',salt,iterations},key,256));return `pbkdf2-sha256$${iterations}$${b64(salt)}$${b64(bits)}`}
export async function verifyPassword(password:string,encoded:string){const [alg,it,saltRaw,expectedRaw]=encoded.split('$');if(alg!=='pbkdf2-sha256'||!it||!saltRaw||!expectedRaw)return false;const iterations=Number(it);if(!Number.isSafeInteger(iterations)||iterations<100000)return false;const key=await crypto.subtle.importKey('raw',encoder.encode(password),'PBKDF2',false,['deriveBits']);const actual=new Uint8Array(await crypto.subtle.deriveBits({name:'PBKDF2',hash:'SHA-256',salt:unb64(saltRaw),iterations},key,256));const expected=unb64(expectedRaw);if(actual.length!==expected.length)return false;let diff=0;for(let i=0;i<actual.length;i++)diff|=actual[i]^expected[i];return diff===0}
