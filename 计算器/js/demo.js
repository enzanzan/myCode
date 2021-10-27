var ipt = document.getElementById("ipt");
    function addCount(num) {
        ipt.value += num;
    }

    // 返回结果
    // eval():函数计算或执行参数
    function result() {
        ipt.value = eval(ipt.value);
        // setTimeout(function () {
        //     ipt.value = "";
        // }, 3000)
    }

    // 清除数据
    function clean() {
        ipt.value = "";
    }

    // 退格
    function back() {
        ipt.value = ipt.value.slice(0, ipt.value.length - 1);
    }