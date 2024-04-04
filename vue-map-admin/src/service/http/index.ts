import { createAlovaInstance } from './alova'
import { serviceConfig } from '@/../service.config'
import { generateProxyPattern } from '@/../build/proxy'

const isHttpProxy = import.meta.env.VITE_HTTP_PROXY === 'Y' || false
const envConfig = serviceConfig[import.meta.env.MODE]
const { url } = generateProxyPattern(envConfig)
console.log("request baseURL", url, envConfig)
export const request = createAlovaInstance({
  baseURL: isHttpProxy ? url.proxy : url.value,
})

export const blankInstance = createAlovaInstance({
  baseURL: '',
})
