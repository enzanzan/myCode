    window.onload=function(){

    var $ = function (id) {
        return document.getElementById(id);
    }
    var time = $("time");

    // 获取时间
    function showTime() {
        var date = new Date();
        var hour = date.getHours();
        var minute = date.getMinutes();
        if (minute < 10) {
            minute = "0" + minute;
        }
        time.innerText = hour + ":" + minute;

    }
    showTime();
    var sid = setInterval(function () {
        showTime();
    }, 1000)

    // 输入框获取焦点键盘显示
    var money = $("money");
    var sr = document.querySelector(".sr");
    money.onfocus = function () {
        sr.style.display = "block";
        content_qrtx.style.display="none";

    }

    // 单击收起键盘
    // 收齐键盘提现显示
    var sq = $("sq");
    var content_qrtx=$("content_qrtx");
    sq.onclick = function () {
        sr.style.display = "none";
        content_qrtx.style.display="block";
    }

    // 把输入的数字显示在输入框
    var td = document.getElementsByTagName("td");
    for (var i = 0; i < td.length; i++) {
        td[i].onclick = function () {
            money.value += this.innerText;
            txColor();
        }
        money.oninput = function () {
            money.value += this.innerText;
            txColor();
        }
    }

    // 删除
    var sc = $("sc");
    sc.onclick = function () {
        money.value = money.value.slice(0, money.value.length - 1);
        txColor();
    }

    // 提现高亮
    var tx = $("tx");
    function txColor() {
        if (money.value.length == 0) {
            tx.className = "tx";
            content_qrtx.className="content_qrtx";
        } else {
            tx.className = "tx_highlight";
            content_qrtx.className="content_qrtx_highlight";
        }
    }
}

