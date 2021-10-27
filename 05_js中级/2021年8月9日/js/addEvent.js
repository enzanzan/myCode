// elem--DOM对象--window
// eventType  事件类型
// func  处理函数  回调函数
function addEvent(elem,eventType,func){
    try {
        // 如果elem不是空 并且 是对象
        if(elem  && typeof elem=="object"){
            if(elem.addEventListener){
                //IE9+
                // 绑定事件
                elem.addEventListener(eventType,func);
            }else{
                // IE6/7/8
                elem.attachEvent("on"+eventType,func);
            }
        }else{
            // 抛出异常
            throw new Error("对象为空或不是对象");
        }
    }catch(e){
        alert(e.message);
    }
}