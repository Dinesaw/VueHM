/*
  请求地址:http://wthrcdn.etouch.cn/weather_mini
  请求方法:get
  请求参数:city(城市名)
  响应内容:天气信息

  1. 点击回车
  2. 查询数据
  3. 渲染数据
  */
 var app = new Vue({
     el:"#app",
     data:{
         city:'',
         weatherList:[]
     },
     methods: {
         searchWeather:function(){
            console.log('天气查询');
            console.log(this.city);
            // 调用接口
            // 保存this
            var that = this;
            axios.get('http://ajax-api.itheima.net/api/weather?city='+this.city) //有时候可能是接口不可用了，这个是新的接口
            .then(function(response){
                // console.log(response); 查看回复
                 console.log(response.data.data.data); //找到天气数组位置，查看信息
                 that.weatherList = response.data.data.data
            })
            .catch(function(err){})
         }
     },
 })