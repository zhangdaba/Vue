// 入口文件
import Vue from 'vue/dist/vue.js'

//导入app组件
import app from './app.vue'

//引入mint-ui组件（按需导入）
import { Header,Swipe, SwipeItem,Button } from 'mint-ui';
Vue.component(Header.name, Header);
//引入轮播图组件
// import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

//引入mui组件样式
import './lib/MUI/css/mui.min.css'
import './lib/MUI/css/icons-extra.css'




//1.1导入路由的包（制作页面a标签跳转）
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter)
//1.3导入自己的router.js模块
import router from './router.js'
//1.4导入时间js文件moment.js
import moment from 'moment'


//定义全局过滤器(定义时间)
Vue.filter('dataformat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
 //return   moment(dataStr).format(pattern);
 return moment().format(pattern)//这是当前时间
})


//2.1导入vue-resource
import VueResource from 'vue-resource'
//2.2安装vue-resource
Vue.use(VueResource)
//2.3设置请求的根路径
// Vue.http.options.root = 'http://vue.studyit.io';
// 2.4全局设置 post 时候表单数据格式组织形式   application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;


//new vue对象
var vm=new Vue({
    el:"#dv",
    data:{},
    menthods:{
    },
    //webpack中的vue中组件只能用render
    // render:function(c){
    //      return c(app);
    // }
    render:c =>c(app),
    //挂载路由对象到vue对象上
    router:router

});