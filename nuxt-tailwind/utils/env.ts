const env = import.meta.env
export const devMode = 'development'
export const prodMode = 'production'
export function getEnvObject(): any {
  return env
}
export function getEnv(): any {
  return import.meta.env
}
export function isDevMode(): boolean {
  return import.meta.env.DEV
}
export function isProdMode(): boolean {
  return import.meta.env.PROD
}

export function getPublicPath() {
  return import.meta.env.NUXT_PUBLIC_ROOT || '/'
}

export function getPath(path = '') {
  return `${getPublicPath()}${path}`
}
