import { request } from "@/utils";
import * as utils from "@/utils";
import apiUserDetail from "@mock/apiUserDetail.json";
import apiRolePermissionsMenu from "@mock/apiRolePermissionsMenu.json";
export default {
  // 获取用户信息
  getUser: () => {
    return utils.env.isProd ? apiUserDetail : request.get("/user/detail");
  },
  // 刷新token
  refreshToken: () => request.get("/auth/refresh/token"),
  // 登出
  logout: () => request.post("/auth/logout"),
  // 切换当前角色
  switchCurrentRole: (role) => request.post(`/auth/current-role/switch/${role}`),
  // 获取角色权限
  getRolePermissions: () => {
    return apiRolePermissionsMenu; //utils.env.isProd ?  : request.get("/role/permissions/tree")
  },
  // 验证菜单路径
  validateMenuPath: (path) => request.get(`/permission/menu/validate?path=${path}`),
  changePassword: (data) => request.post("/auth/password", data),
  updateProfile: (data) => request.patch(`/user/profile/${data.id}`, data),
};
