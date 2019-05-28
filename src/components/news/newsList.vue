<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newlist" :key="item.classifyId">
					<router-link :to="'/home/newsinfo/'+ item.classifyId">
						<img class="mui-media-object mui-pull-left" src="https://avatars2.githubusercontent.com/u/42637279?s=40&v=4">
						<div class="mui-media-body">
							<h1>{{item.classify}}</h1>
							<p class="mui-ellipsis">
                                <span>发表时间:{{item.classify | dataformat}}</span>
                                <span>点击：{{item.classifyId}}次</span>
                            </p>
						</div>
					</router-link>
				</li>
				
			</ul>
   
   
    </div>
</template>
<script>
import { Toast} from 'mint-ui'
export default {    
        data:function(){
            return {
                newlist:[]//新闻列表
            }
        },
        created(){
            this.getlistNews();
            
        },
        methods:{
                getlistNews(){
                    this.$http.get('http://route.showapi.com/1700-1?showapi_appid=78127&showapi_sign=5ae3601619964bfda4039836db08ed81').then(function(data){
                        if(data.body.showapi_res_code==0){
                                this.newlist=data.body.showapi_res_body.storylist;
                        }else{
                            Toast(获取数据失败);
                        }
                        console.log(data);
                    });
                }
        },

}
</script>
<style>
    .mui-h1, h1{
        font-size: 16px;
    }
    .mui-ellipsis {
        color: blue;
        display:flex;
        justify-content:space-between;
    }
</style>
