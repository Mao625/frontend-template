/**
 * roles：页面级别权限，这里模拟二种 "admin"、"common"
 * admin：管理员角色
 * common：普通角色
 */

export default {
  path: "/admin",
  redirect: "/admin/user/userManage",
  meta: {
    title: "后台管理",
    icon: "lollipop",
    rank: 10,
    roles: ["admin"]
  },
  children: [
    {
      path: "/admin/user/userManage",
      name: "UserManage",
      component: () => import("@/views/permission/user/userManage.vue"),
      meta: {
        title: "用户管理"
      }
    },
    {
      path: "/admin/api/apiManage",
      name: "ApiManage",
      component: () => import("@/views/permission/api/apiManage.vue"),
      meta: {
        title: "API管理"
      }
    },
    {
      path: "/admin/client/clientManage",
      name: "ClientManage",
      component: () => import("@/views/permission/client/clientManage.vue"),
      meta: {
        title: "API接入方管理"
      }
    }
  ]
} as RouteConfigsTable;
