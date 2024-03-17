
const env = import.meta.env;

export const envObject = env;
export const isDev = env.NODE_ENV === `development`
export function getPublicPath(): string {
  return env.VITE_PUBLIC_PATH;
}
export function getRootPath(): string {
  return env.VITE_PUBLIC_PATH;
}
