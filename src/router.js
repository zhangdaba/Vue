import VueRouter from 'vue-router'
//导入对应的路由组件
import home from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import search from './components/tabbar/search.vue'
import shop from './components/tabbar/shop.vue'
import newsList from './components/news/newsList.vue'
import newsinfo from './components/news/newsinfo.vue'
// 3. 创建路由对象
var router = new VueRouter({
  routes: [
      {path:'/',redirect:'/home'},
      {path:'/home',component:home},
      {path:'/member',component:member},
      {path:'/shopcar',component:shop},
      {path:'/search',component:search},
      {path:'/home/newList',component:newsList},
      {path:'/home/newsinfo/:id',component:newsinfo}
  ],

  linkActiveClass:'mui-active' //覆盖默认的路由高亮的类
})

export default router