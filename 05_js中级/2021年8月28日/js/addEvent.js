function addEvent(elem,eventType,func){
    if(elem && typeof elem=="object"){
        if(window.addEventListener){
            // IE9+
            elem.addEventListener(eventType,func);
            }
        if(window.attacheEvent){
            // IE6/7/8
            elem.attacheEvent("on"+eventType,func);
        }           
    }else{
        alert("对象为空或者不是对象");
    }
}