(function(){
    var $={};
    // addEvent.js
    function addEvent(elem,eventType,func){
        try{
            if(elem && typeof elem=="object"){
                if(window.addEventListener){
                    elem.addEventListener(eventType,func);
                }else{
                    elem.attachEvent("on"+eventType,func);
                }
            }else{
                throw new Error("对象为空或不是对象！");
            }
        }catch(e){
            alert(e.message);
        }
    }

    //ajax.js
    function ajax(param){
        try{
            if(param && typeof param=="object"){
                // 执行ajax过程
                // 1.创建ajax对象
                var xmlHttp=new XMLHttpRequest();
                // 2.设置请求方法和目标地址
                // 2.1 post方法和不带参数的get方法
                xmlHttp.open(param.type,param.url);
                // 2.2 get方法带参数
                if(param.data!=undefined && param.type=="GET"){
                    xmlHttp.open(param.type,param.url+"?"+param.data);
                }
                // 3.准备要发送的数据--数据编码
                if(param.data!=undefined){
                    switch(param.contentType){
                        case 'urlencoded':
                            xmlHttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
                            break;
                        case 'json':
                            xmlHttp.setRequestHeader("content-type","application/json");
                            break;
                        default:
                            xmlHttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
                    }
                }
                // 4.监控ajax请求过程
                xmlHttp.onreadystatechange=function(){
                    if(xmlHttp.readyState==4 && xmlHttp.status==200){
                        var data=xmlHttp.responseText;
                        switch(param.dataType){
                            case 'json':
                                try{
                                    data=JSON.parse(data);
                                }catch(e){
                                    alert(e.message);
                                }
                                break;
                            case "xml":
                                data=xmlHttp.responseXML;
                                break;
                        }
                        param.success(data);
                    }
                }
                // 5.发送数据
                if(param.type=="POST" && param.data!=undefined){
                    xmlHttp.send(param.data);
                }else{
                    xmlHttp.send();
                }
            }else{
                throw new Error("对象为空或不是对象！");
            }
        }catch(e){
            alert(e.message);
        }
    }
    $.addEvent=addEvent;
    $.ajax=ajax;
    window.$=$;
})()