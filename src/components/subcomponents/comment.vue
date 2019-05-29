<template>
    <div class="container">
        <h3>我是评论组件</h3>
        <hr>
        <textarea name="" id="" cols="30" rows="10" placeholder="请输入内容，最毒输入120字" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
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
                page:1,//默认展示第一页数据
                list:[],//所有评论数据
                msg:""//评论输入的内容
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
            },
            // 发表评论
                // 参数1： 请求的URL地址
                // 参数2： 提交给服务器的数据对象 { content: this.msg }
                // 参数3： 定义提交时候，表单中数据的格式  { emulateJSON:true }
            postComment(){
                //校验文本域的内容是否为空
                if(this.msg.trim().length==0){
                   return     Toast('评论内容不能为空')
                }
                    this.$http.post("地址",this.$route.params.id,{ content:this.msg.trim()})
                    .then(function(data){
                            if(data.body.status==0){
                                    //拼接一个评论对象
                                    var cmt={
                                        user_name:'匿名用户',
                                        add_time:Date.now(),
                                        comtent:this.msg.trim()
                                        }
                                    this.list.unshift(cmt);
                                    this.msg="";    
                            }

                    });
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
