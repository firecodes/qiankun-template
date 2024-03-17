
// import VXEUtils from 'vxe-utils'
// import XEUtils from 'xe-utils'
import * as utils from '@/utils'

/**
 * 注册全局方法 待完善
 * @param app
 */
export function setupGlobalMethods(app: any) {
  app.config.globalProperties.$utils = utils
  console.log("vue setupGlobalMethodsn", utils);
}
