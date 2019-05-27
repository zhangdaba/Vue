<template>
    <div>
        <mt-swipe :auto="4000">
            <!-- 循环的时候一定要加上key属性 -->
            <mt-swipe-item v-for="item in lunbo" :key="item.url"><img :src="item.img"></mt-swipe-item>
        </mt-swipe>


          <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../../images/menu1.png" alt=""/>
		                    <div class="mui-media-body">新闻资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="../../images/menu2.png" alt=""/><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu3.png" alt=""/>
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="../../images/menu4.png" alt=""/>
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu5.png" alt=""/>
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="../../images/menu6.png" alt=""/>
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul> 
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
        data:function(){
            return{
                lunbo:[]
            }
        },
        //只要组件初始化完成就会执行方法（执行声明周期函数）
        created(){
            getlist();
        },
        methods:{
                //轮播图获取数据的方法
                getlist(){
                        this.$http.get("http://vue.studyit.io/api/getlunbo").then(function(data){
                                console.log(data.body);
                                if(data.body==0){
                                        this.lunbo=data.body.message;
                                }else{
                                    Toast(加载轮播图失败);
                                }
                        },function(){
                          alert("地址错误！");
                        });
                }
        },

        
}
</script>
<style >

    .mint-swipe{
        height: 200px;
    }
    .mint-swipe-item:nth-child(1){
        background: red;
    }
     .mint-swipe-item:nth-child(2){
        background:pink;
    }
     .mint-swipe-item:nth-child(3){
        background:yellow;
    }
    .mint-swipe-item img{
        width:100%;
        height:100%;
    }
    .mui-grid-view.mui-grid-9 {
        background-color: #fff;
        border: none;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border:none;
    }
    .mui-grid-view.mui-grid-9 img{
        width: 60px;
        height: 60px;
    }
    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
        font-size:13px;
    }
</style>