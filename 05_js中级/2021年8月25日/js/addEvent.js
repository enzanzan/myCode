// elem -- DOM对象
// eventType -- 事件类型
// func -- 处理函数
function addEvent(elem,eventType,func){
    //容错
    try{
        if(elem && typeof elem == "object"){
            // 兼容
            if(window.addEventListener){
                // IE9+
                // 冒泡
                elem.addEventListener(eventType,func,false);
                // 捕获
                // elem.addEventListener(eventType,func,true);
            }else{
                // IE6/7/8
                elem.attachEvent("on"+eventType,func);
            }
        }else{
                throw new Error("对象为空或不是对象");
            }
    }catch(e){
        alert(e.message);
    }
}