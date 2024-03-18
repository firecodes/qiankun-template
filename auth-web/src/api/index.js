import { request } from '@/utils'

export default {
  // 获取用户信息
  getUser: () => request.get('/user/detail'),
  // 刷新token
  refreshToken: () => request.get('/auth/refresh/token'),
  // 登出
  logout: () => request.post('/auth/logout'),
  // 获取角色权限
  getRolePermissions: () => request.get('/role/permissions/tree'),
  // 验证菜单路径
  validateMenuPath: (path) => request.get(`/permission/menu/validate?path=${path}`),

  toggleRole: (data) => request.post('/auth/role/toggle', data),
  login: (data) => request.post('/auth/login', data, { noNeedToken: true }),
}
