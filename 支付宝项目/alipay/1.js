      // 总支出
      var zc = 0;
      //金额数组
      var monarr = [];
      // 获取时间和金额
      function hqtm() {
        var mydate = new Date();
        var month =
          mydate.getMonth() + 1 < 10
            ? "0" + (mydate.getMonth() + 1)
            : mydate.getMonth() + 1;
        var date =
          mydate.getDate() < 10 ? "0" + mydate.getDate() : mydate.getDate();
        var hours =
          mydate.getHours() < 10 ? "0" + mydate.getHours() : mydate.getHours();
        var minutes =
          mydate.getMinutes() < 10
            ? "0" + mydate.getMinutes()
            : mydate.getMinutes();
        month1.innerText = month + "月";
        var tmarr = [];
        tmarr.push(month + "-" + date + " " + hours + ":" + minutes);
        tmarr.push((money.value - 0).toFixed(2));
        monarr.push(tmarr);
      }
      // 可用余额3000赋值给全局x
      var x = 3000;
      // 键盘显示 提现隐藏函数
      function hid(na) {
        boxd.style.display = "block";
        btnd.style.display = "none";
      }
      // 提现变色函数;
      function txColor(na) {
        if (
          na.value == "" ||
          na.value == 0 ||
          na.value == "." ||
          na.value > x
        ) {
          tx.className = "dd1";
          btnd.style.background = "rgba(55,117,246,0.5)";
        } else {
          tx.className = "dd2";
          btnd.style.background = "rgb(55,117,246)";
        }
      }
      // x按钮显示
      function cbtn(na) {
        if (na.value != "") {
          qc.style.display = "block";
        } else {
          qc.style.display = "none";
        }
      }
      // 单位转换函数
      function dwChange(na) {
        if (na.value >= 100) {
          dw.className = "change1";
          dw.innerText = "百";
          if (na.value >= 1000) {
            dw.className = "change1";
            dw.innerText = "千";
            if (na.value >= 10000) {
              dw.className = "change1";
              dw.innerText = "万";
              if (na.value >= 100000) {
                dw.className = "change1";
                dw.innerText = "十万";
                if (na.value >= 1000000) {
                  dw.className = "change1";
                  dw.innerText = "百万";
                  if (na.value >= 10000000) {
                    dw.className = "change1";
                    dw.innerText = "千万";
                    if (na.value >= 100000000) {
                      dw.className = "change1";
                      dw.innerText = "亿";
                      if (na.value >= 1000000000) {
                        dw.className = "change1";
                        dw.innerText = "你有那么多钱吗？穷b";
                      }
                    }
                  }
                }
              }
            }
          }
        } else {
          dw.className = "change";
        }
      }
      // 删除长度函数
      function dele(na) {
        na.value = na.value.substr(0, na.value.length - 1);
        return na.value;
      }
      // 超出余额
      function out(na) {
        if (na.value > x) {
          much1.innerText = "输入金额超过可用余额";
          all.innerText = "";
          much1.className = "money2";
        } else {
          much1.innerText = "可用余额 ￥"+ x.toFixed(2);
          all.innerText = "全部提现";
          much1.className = "money1";
        }
      }

      window.onload = function () {
        // 创建提现记录
        function ctx() {
          var div1 = document.createElement("div");
          var div2 = document.createElement("div");
          var ul1 = document.createElement("ul");
          var li1 = document.createElement("li");
          var li2 = document.createElement("li");
          var li3 = document.createElement("li");
          var img1 = document.createElement("img");
          var div3 = document.createElement("div");
          var div4 = document.createElement("div");
          img1.src = "img/bank.png";
          div1.className = "lib";
          div2.className = "gsyh";
          li1.className = "liye";
          li1.innerText = "余额提现";
          li2.className = "lizh";
          li2.innerText = "账户存取";
          li3.className = "litime";
          div3.className = "gold";
          div4.className = "gdl";
          ul1.appendChild(li1);
          ul1.appendChild(li2);
          ul1.appendChild(li3);
          div2.appendChild(ul1);
          div2.appendChild(img1);
          div2.appendChild(div3);
          div2.appendChild(div4);
          div1.appendChild(div2);
          cxjl.appendChild(div1);
          zc = 0;
          for (i = 0; i < monarr.length; i++) {
            li3.innerText = monarr[i][0];
            div3.innerText = "-" + monarr[i][1];
            zc = zc + (monarr[i][1] - 0);
          }
          numb.innerText = zc.toFixed(2);
        }
        // 左上角时间
        function $(x) {
          return document.getElementById(x);
        }
        var time = $("time");
        var myDate = new Date();
        var hours =
          myDate.getHours() < 10 ? "0" + myDate.getHours() : myDate.getHours();
        var minutes =
          myDate.getMinutes() < 10
            ? "0" + myDate.getMinutes()
            : myDate.getMinutes();
        time.innerText = hours + ":" + minutes;
        setInterval(function () {
          myDate = new Date();
          hours =
            myDate.getHours() < 10
              ? "0" + myDate.getHours()
              : myDate.getHours();
          minutes =
            myDate.getMinutes() < 10
              ? "0" + myDate.getMinutes()
              : myDate.getMinutes();
          time.innerText = hours + ":" + minutes;
        }, 1000);
        // }
        // tm();

        var con = $("con");
        var money = $("money");
        var dw = $("dw");
        var much = $("much");
        var much = $("much1");
        var qc = $("qc");
        var all = $("all");
        var hid1 = $("hid1");
        var t1 = $("t1");
        var t2 = $("t2");
        var del = $("del");
        var tx = $("tx");
        var boxd = $("boxd");
        var tc = $("tc");
        var txq = $("txq");
        var zzc = $("zzc");
        var exit = $("exit");
        var close = $("close");
        var mr = $("mr");
        var tcm = $("tcm");
        var fwf = $("fwf");
        var jm = $("jm");
        var txjl = $("txjl");
        var toptx = $("toptx");
        var txcg = $("txcg");
        var txxs = $("txxs");
        var month1 = $("month1");
        var numb = $("numb");
        var ck1 = $("ck1");
        var cxjl = document.querySelector(".jltop");
        var num = t2.getElementsByTagName("td");
        // 确认提现

        txq.onclick = function () {
          hqtm();
          console.log(monarr);
          tc.style.display = "none";
          mr.style.display = "block";
          zzc.style.display = "none";
          setTimeout(function () {
            txcg.style.display = "block";
          }, 1500);
          function jf() {
            x = x - money.value;
            return x;
          }
          much1.innerText = "可用余额 ￥" + jf().toFixed(2);
          ctx();
        };
        // 输入金额事件
        money.oninput = function () {
          txColor(money);
          dwChange(money);
          out(money);
          cbtn(money);
        };
        // 全部提现事件
        all.onclick = function () {
          money.value = x;
          txColor(money);
          dwChange(money);
          btnd.style.display = "block";
          boxd.style.display = "none";
        };
        // 循环绑定键盘
        for (i = 0; i < num.length; i++) {
          num[i].index = i;
          // 点击键盘事件
          num[i].onclick = function () {
            boxd.style.display = "block";
            money.value += this.innerText + "";
            txColor(money);
            dwChange(money);
            out(money);
            cbtn(money);
          };
        }
        // 删除点击事件
        del.onclick = function () {
          dele(money);
          dwChange(money);
          txColor(money);
          out(money);
          cbtn(money);
        };
        // 键盘显示 提现按钮隐藏
        money.onfocus = function () {
          boxd.style.display = "block";
          btnd.style.display = "none";
        };
        // 键盘隐藏 提现按钮显示
        hid1.onclick = function () {
          boxd.style.display = "none";
          btnd.style.display = "block";
        };
        // 弹窗事件
        tx.onclick = function () {
          var y = money.value;
          if (tx.className == "dd2") {
            zzc.style.display = "block";
            tc.style.display = "block";
            boxd.style.display = "none";
            tcm.innerText = "￥" + (y - 0).toFixed(2);
            fwf.innerText = "￥" + (y * 0.001 - 0).toFixed(2);
            jm.innerText = "￥" + "0.00";
          }
        };
        // 退出弹窗
        close.onclick = function () {
          zzc.style.display = "none";
          tc.style.display = "none";
          boxd.style.display = "block";
        };
        // 下方提现事件
        btnd.onclick = function () {
          if (tx.className == "dd2") {
            zzc.style.display = "block";
            tc.style.display = "block";
            boxd.style.display = "none";
            btnd.style.display = "none";
            tcm.innerText = "￥" + money.value + ".00";
            fwf.innerText = "￥" + money.value * 0.001;
            jm.innerText = "￥" + "0.00";
          }
        };

        // 提现成功
        // mr.onclick = function () {
        //   txcg.style.display = "block";
        //   zzc.style.display = "none";
        // };
        // 点击清除金额
        qc.onclick = function () {
          money.value = "";
          dele(money);
          dwChange(money);
          txColor(money);
          out(money);
          cbtn(money);
        };
        // 返回事件
        exit.onclick = function () {
          zzc.style.display = "none";
          mr.style.display = "none";
          txcg.style.display = "none";
          txxs.style.display = "none";
          toptx.innerHTML = '提<span class="k1">现</span>';
          money.value = "";
          txColor(money);
          dwChange(money);
          cbtn(money);
        };
        // 查看账单
        txjl.onclick = function () {
          txxs.style.display = "block";
          toptx.innerText = "提现记录";
        };
        // 查看账单2
        ck1.onclick = function () {
          txxs.style.display = "block";
          toptx.innerText = "提现记录";
        };
      };