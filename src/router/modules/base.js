const routes = [
  { path: "*", name: "404", component: require("@/components/error/Error").default },
  { path: "/index", name: "首页", icon: "el-icon-s-home", component: require("@/components/Index").default },
]

export default routes
