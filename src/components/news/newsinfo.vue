<template>
    <div>
        <!-- <h1>我是newsinfo========{{$route.params.id}}</h1> -->
        <div class="title">
            <h3>新闻详情标题</h3>
            <p class="pp">
                <span class="s1">发表时间：</span>
                <span class="s2">点击次数：0次</span>
            </p>

            <hr>

            <div class="content">
                    <!-- 评论子组件 -->
                    <comment-box :id="this.id"></comment-box>
            </div>
        </div>
        
    </div>    
</template>
<script>
    //1.导入评论子组件
    import comment from '../subcomponents/comment.vue'


    export default{
        data(){
          return   {
            id:this.$route.params.id
            //console.log(this.$route.params.id)
          }
        },
        // created(){
        //     getNewsinfo();
        // },
        methods:{
            getNewsinfo(){
                //获取新闻详情数据
                this.$http.get('http://route.showapi.com/170-47?showapi_appid=78127&showapi_sign=5ae3601619964bfda4039836db08ed81').then(function(data){
                                var obj=JSON.parse(data);
                                console.log(obj);
                    });
            }
        },
        components:{
            'comment-box':comment
        }
    }
</script>

<style scoped>
    .title h3{
        text-align: center;
        padding-top: 10px;
    }
    .s1, .s2{
        padding:0 10px;
        color:blue;
    }
    .pp{
        display: flex;
        justify-content: space-between;
    }
</style>
