<template>
    <div class="container">
        <h3>我是评论组件</h3>
        <hr>
        <textarea name="" id="" cols="30" rows="10" placeholder="请输入内容，最毒输入120字"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in list" :key="item.pubDate">
                <div class="cmt-title">
                        第{{i+1}}楼&nbsp;&nbsp;用户：{{item.areaName}}匿名用户&nbsp;&nbsp;发表时间：{{item.pubDate | dataformat}}
                </div>
                <div class="cmt-body">
                       <!-- {{item.title}} -->
                    此用户很懒啥都没说
                </div>
            </div>
        </div>
        
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>  
    
</template>
<script>
import {Toast} from 'mint-ui'
export default {
        data:function(){
            return{
                page:1,
                list:[]
            }
        },
        created(){
            this.getcomment();
        },
        methods:{
            //获取评论数据
            getcomment(){
                this.$http.get("http://route.showapi.com/170-47?showapi_appid=78127&showapi_sign=5ae3601619964bfda4039836db08ed81&page="+this.page+"")
                .then(function(data){
                        console.log(data);
                        //将两个数组拼接起来，concat（）
                        this.list=this.list.concat(data.body.showapi_res_body.pagebean.contentlist)
                },function(){
                        Toast("接口地址过期了！！");
                })
            },
            //获取加载更多数据
            getMore(){
                this.page++;
                this.getcomment();
            }
        },
        props:["id"]

}
</script>
<style scoped>
    .container h3{
        font-size: 18px;
    }
    .container textarea{
        margin: 0;
        font-size: 14px;
        height:85px;
    }
    .cmt-item{
        background-color: #9999;
        border-bottom: 1px solid blue;
        margin-bottom: 5px;
        line-height: 20px;
    }
</style>
