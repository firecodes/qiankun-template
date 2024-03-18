
const env = import.meta.env;

export const envObject = env;
export const isDev = env.MODE === `development`
export function getPublicPath(): string {
  return env.VITE_PUBLIC_PATH || '/';
}
export function getRootPath(): string {
  return env.VITE_ROOT_PATH || '/';
}
