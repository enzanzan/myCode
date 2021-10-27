function addEvent(elem,eventType,func){
    if(elem && typeof elem=="object"){
        if(window.addEventListener){
            // IE9+
            elem.addEventListener(eventType,func);
        }
        if(window.attachEvent){
            // IE6/7/8
            elem.attachEvent("no"+eventType,func);
        }
    }else{
            alert("对象为空或不是对象");
    }
}