
const env = import.meta.env;

export const envObject = env;
export const isDev = env.NODE_ENV === `development`
export function getPublickPath(): string {
  return env.VITE_PUBLIC_PATH;
}
