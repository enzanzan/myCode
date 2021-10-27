// elem--DOM对象
// eventType--事件类型
// func--处理函数
function addEvent(elem,eventType,func){
    // 容错
    try{
        // elem  undefined--没有传值
        // elem  null--没有获取DOM对象 
        //如果不是空 undefined null 并且是对象
        if(elem && typeof elem == "object"){
            //兼容
            if(window.addEventListener){
                //IE9+
                elem.addEventListener(eventType,func);
            }else{
                //IE6/7/8
                elem.attachEvent("on"+eventType,func);
            }
        }else{
            throw new Error("对象为空或不是对象！");
        }
    }catch(e){
        alert(e.message);
    }
}