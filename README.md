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