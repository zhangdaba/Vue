// 入口文件
import Vue from 'vue/dist/vue.js'

//导入app组件
import app from './app.vue'

//引入mint-ui组件（按需导入）
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

//引入mui组件样式
import './lib/MUI/css/mui.min.css'

//new vue对象
var vm=new Vue({
    el:"#dv",
    data:{},
    menthods:{},
    //webpack中的vue中组件只能用render
    // render:function(c){
    //      return c(app);
    // }
    render:c =>c(app)

});