jQuery.fn.extend({
    myTest:function(value){
        $(this).text(value);
        // 实现连式写法
        return $(this);
    }
    // 多个插件可以接着写
    //,
    //a:function(){

    //}
})