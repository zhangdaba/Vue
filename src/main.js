// 入口文件
import Vue from 'vue/dist/vue.js'

//导入app组件
import app from './app.vue'

//引入mint-ui组件（按需导入）
import { Header,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
//引入轮播图组件
// import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


//引入mui组件样式
import './lib/MUI/css/mui.min.css'
import './lib/MUI/css/icons-extra.css'




//1.1导入路由的包（制作页面a标签跳转）
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter)
//1.3导入自己的router.js模块
import router from './router.js'

//2.1导入vue-resource
import VueResource from 'vue-resource'
//2.2安装vue-resource
Vue.use(VueResource)


//new vue对象
var vm=new Vue({
    el:"#dv",
    data:{},
    menthods:{},
    //webpack中的vue中组件只能用render
    // render:function(c){
    //      return c(app);
    // }
    render:c =>c(app),
    //挂载路由对象到vue对象上
    router:router
});