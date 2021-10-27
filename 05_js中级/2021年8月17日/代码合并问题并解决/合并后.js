//A前端a.js
(function () {
    var $={}    //#1234添加需要对外提供的API函数
    var x, y;
    x = 1;
    y = 2;
    function ajax(){    //#2223
        alert("执行ajax");
    }
    $.a=ajax;    //{ajax:#2223}
    window.$=$;     //#1234添加一个全局变量$，可以在任何地方使用
})();
    //B前端b.js
    (function () {
        var x, z;
        x = 100;
        z = 200;
    })();
    //C前端c.js
    (function () {
        var x, t;
        x = 900;
        t = "我是帅哥";
        $.a();
    })();