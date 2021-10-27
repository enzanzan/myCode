(function(){
	var $={};
//ajax封装	
function ajax(param){
  try{
	   if(typeof param=="object" && param!=undefined){
		    //执行ajax过程:
			//1.创建ajax对象
			if(window.XMLHttpRequest){
				 var xmlHttp=new XMLHttpRequest();
				}else{
					//IE6
					var xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
					}
		     //2.设置请求方法和目标地址
			 //2.1post方法和不带参数的get请求
			 xmlHttp.open(param.type,param.url);
			 //2.2 get方法带参数
			 if(param.type=="GET" && param.data!=undefined){
				   xmlHttp.open(param.type,param.url+"?"+param.data);
				 }
				 //全局事件:
			 xmlHttp.onloadend=function(){
				   if(typeof param.complete=="function"){
				      param.complete();
				   }
				 };
		     //3.设置数据编码
			 if(param.data!=undefined){
			   switch(param.contentType){
				  case "urlencoded":
				    xmlHttp.setRequestHeader("content-type","application/x-www-form-urlencoded");   
			         break;
				  case "json":
				    xmlHttp.setRequestHeader("content-type","application/json");   
			         break;
				  default:
				      xmlHttp.setRequestHeader("content-type","application/x-www-form-urlencoded");   
			   }   
			   	 
			 }
			 //4.监控ajax请求过程:
			 xmlHttp.onreadystatechange=function(){
				   if(xmlHttp.readyState==4 && xmlHttp.status==200){
					      var data=xmlHttp.responseText;
						  switch(param.dataType){
							  case "json":
							     data=JSON.parse(data);
								 break;
								 
						  }
						  param.success(data);
					   } 
			  };
			  //5.发送请求
			  if(param.type=="POST" && param.data!=undefined){
				    xmlHttp.send(param.data);
				  }else{
					  xmlHttp.send();
					  }
			 
			 
		   }else{
			   throw new Error("不是对象或对象为undefined");
			   }
	  }catch(e){
		 alert(e.message);  
	  }   	
}
		
//ajax封装

//addEvent封装
function addEvent(elem,eventType,func){
  try{
	   if(elem!=null && typeof elem=="object"){
		    if(window.addEventListener){
				elem.addEventListener(eventType,func);
				}else{
					//IE6/7/8
					elem.attachEvent("on"+eventType,func);
					}
		   }else{
			   throw new Error("不是对象或对象为null");
			   }
	 }catch(e){
	    alert(e.message);	 
	 }	
}
//addEvent封装

$.ajax=ajax;
$.addEvent=addEvent;
//将共享方法输出
window.$=$;
})();
