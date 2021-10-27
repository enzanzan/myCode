Mock.mock('check.php','post',function(options){
    //options获取的是客户端ajax请求信息
    console.log("options",options);
    //json字符串 options.body-->转换成js对象
   var userName= JSON.parse(options.body).userName;
   var password= JSON.parse(options.body).password;
   if(userName=="tom" && password=="123"){
      return Mock.mock({"status":10001,"message":"登录成功"});
   }else{
    return Mock.mock({"status":30001,"message":"用户名或密码错误"});
   }
});
