function addClass(elem,newClass){
    elem.className+=" "+newClass;
}
function removeClass(elem,reClass){
    var arr=[]
    arr=elem.className.split(" ");
    var num=arr.indexOf(reClass)
    if(num>0){
        arr.splice(num,1)
        elem.className=arr.join(" ")
        alert("删除成功")
    }else{
        alert("删除失败，DOM对象中没有使用该类")
    }
}