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