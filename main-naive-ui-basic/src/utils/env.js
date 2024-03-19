
const env = import.meta.env;
export const envObject = env;
export const isProd = env.MODE === `production`
export const isDev = env.MODE === `development`
export function getPublicPath() {
  return env.VITE_PUBLIC_PATH || '/';
}
export function getRootPath() {
  return env.VITE_ROOT_PATH || '/';
}

export function getProxyTarget() {
  return env.VITE_PROXY_TARGET || '/';
}