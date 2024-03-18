
import axios from 'axios'
import { setupInterceptors } from './interceptors'
import * as env from '../env'

export function createAxios(options = {}) {
  const defaultOptions = {
    baseURL: env.isProd ? env.getProxyTarget() : '/api',
    timeout: 12000,
  }
  const service = axios.create({
    ...defaultOptions,
    ...options,
  })
  setupInterceptors(service)
  return service
}

export const request = createAxios()
