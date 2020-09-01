import Vue from 'vue'
import VueRouter from 'vue-router'
// 1.安装插件
Vue.use(VueRouter)
// 2.创建实例
const routes = []
// 懒加载
const home = () => import('')

const router = new VueRouter({

})
// 3.导出
export default router
