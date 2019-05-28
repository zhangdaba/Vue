#这是一个牛逼的项目
#niubo

##正常git提交指令
# 1.git add.  git commit -m '提交信息'
# 2.git push


##制作首页App组件
1.第一步制作首页的header区域（使用了mint-ui中的header组件）
2.制作首页的tabbar区域使用的是mui的tabbar
3.要制作中间区域，要在中间区域放置一个router-view来展示路由匹配到的组件


##改造tabbar为router-link

##设置路由高亮

##点击tabbar展示对应的路由组件


##加载首页轮播图数据
1.获取数据，使用vue-resouse（类似于ajax）来获取数据
2.使用vue-resource的this.$http.get获取数据
3.获取到的数据保存到data上
4.使用v-for循环渲染每个item项（其中一定要加上key属性只能是字符串或者int类型）



##改造9宫格区域的样式


##改造新闻资讯路由链接

##新闻资讯页面制作
1.绘制页面（使用mui中的media-list.html）
2.使用vue-resource获取数据
3.渲染真实数据


##实现新闻资讯列表，点击跳转到新闻详情
1.把列表中的每一项改造为router-link，同时提供id标识符（参数）
2.创建新闻详情组件页面，Newsinfo.vue
3.在路由模块中，将新闻详情路由地址和组件页面对应起来


##实现新闻详情的页面布局和数据渲染


##单独封装一个comment.vue评论子组件
1.先创建一个单独的comment.vue子组件
2.在需要使用comment组建的页面中，先手动导入comment组件(import comment from '/comment.vue')\
3.在父组件中使用components属性，将刚才导入的comment组件注册为自己的子组件
4.将注册子组件时候的注册名称，以标签形式引用即可



##获取搜有的评论数据显示在页面中


##点击加载更多显示数据

1.为加载更多按钮绑定点击事件，在事件中请求下一页数据
2.点击加载更多后，让page+1，然后重新调用this.getcomment()方法重新获取最新一页的数据
3.为了防止新数据覆盖老数据的情况，我们再点击加载更多的时候，使用了concat（）数组方法，凭借上新数组
