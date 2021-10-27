// str 存储的为运算表达式 answer显示的为运算式或者点击等号后的最终结果 answer2为实时运算结果
function dy() {
    // 函数为点击等号 第一行显示运算结果第二行清空
    answer.innerHTML = eval(str);
    answer2.innerHTML="";
}
function clean() {
    // 点击c清空存储用字符串以及第一第二行显示内容
    str="";
    answer.innerHTML=str;
    answer2.innerHTML = str;
}
var str="";
// 用于存放要计算的表达式
function chu() {
    if (str === "") {
        answer2.innerHTML ="第一位不为 ÷";
    } else {
        // 使用截取表达式最后一位如果为运算符那么再次点击运算符时用新的运算符将其替换
        if (str.substr(str.length - 1, 1) == "+" || str.substr(str.length - 1, 1) == "*" || str.substr(str.length - 1, 1) == "-" || str.substr(str.length - 1, 1) == "/") {
            str = str.substr(0, str.length - 1) + "/";
            answer.innerHTML = str;
        } else {
            // 否则正常输入
            str = str + "/"
            answer.innerHTML = str;
        }
    }
}
function cheng() {
    // 与同理chu
    if (str === "") {
        answer2.innerHTML = "第一位不为 ×";
    } else {
        if (str.substr(str.length - 1, 1) == "+" || str.substr(str.length - 1, 1) == "*" || str.substr(str.length - 1, 1) == "-" || str.substr(str.length - 1, 1) == "/") {
            str = str.substr(0, str.length - 1) + "*";
            answer.innerHTML = str;
        } else {
            str = str + "*"
            answer.innerHTML = str;
        }
    }
}
function jia() {
    // 第一位是+-时有意义 允许输入
    if (str === "") {
        str += "+";
        answer.innerHTML = str;
    } else {
        // 与同理chu
        if (str.substr(str.length - 1, 1) == "+" || str.substr(str.length - 1, 1) == "*" || str.substr(str.length - 1, 1) == "-" || str.substr(str.length - 1, 1) == "/") {
            str = str.substr(0, str.length - 1) + "+";
            answer.innerHTML = str;
        } else {
            str = str + "+"
            answer.innerHTML = str;
        }
    }
}
function jian() {
    // 与jia同理
    if (str === "") {
        str += "-";
        answer.innerHTML = str;
    } else {
        if (str.substr(str.length - 1, 1) == "+" || str.substr(str.length - 1, 1) == "*" || str.substr(str.length - 1, 1) == "-" || str.substr(str.length - 1, 1) == "/") {
            str = str.substr(0, str.length - 1) + "-";
            answer.innerHTML = str;
        } else {
            str = str + "-"
            answer.innerHTML = str;
        }
    }
}
function del() {
    // 点击删除键时删除表达式最后一位刷线显示内容
    str = str.substring(0,str.length-1);
    answer.innerHTML = str;
}
function press(y) {
    // 点击数字在表达上添加数字 刷新显示内容
    str += y;
    answer.innerHTML = str;
    // 下面为判断表达式里面有没有运算符如果有点击数字时（也就是改变表达式时）实时在第二行显示运算结果 当字符串中没有运算符号时第二行不进行操作
    if (str.indexOf("+") !== -1 || str.indexOf("-") !== -1 || str.indexOf("*") !== -1 || str.indexOf("/") !== -1) {
        answer2.innerHTML = Number(eval(str));
    }
}
var e="",f="",g="",h="",j="",k="";
// 用于存储下方运算符位置
function pressdian() {
    if(str==""){
        // 当表达式为空时用户点击“点” 那么帮用户添加一个0 形成"0."的效果
        str += "0"+".";
        answer.innerHTML = str;
    } else {
        // 表达式不为空时则需要进行判断
        if (str.substr(str.length - 1, 1) == "+" || str.substr(str.length - 1, 1) == "*" || str.substr(str.length - 1, 1) == "-" || str.substr(str.length - 1, 1) == "/") {
            //当表达式最后一位是运算符时那么 用户点击“点” 那么帮用户添加一个0 形成"0."的效果
            str += "0" + ".";
            answer.innerHTML = str;
        }else{
            if (str.substr(str.length - 1, 1)=="."){
                // 当最后一位是点时不允许再输入一个点此时无操作
            }else{
                // 这个时候就是最后一位既不是运算符又不是点了那么是不是就应该直接让他输入点呢？
                // 且慢如果我要是输入9+9.6.3这种形式呢 他即有运算符最后一位也不是点是通过了我们的校验的 
                // 但是这显然这不合理 于是我从按照人类思想进行判断 先看看他里面是不是已经输入点了
                //比如6+0.3+6.03这时点的位置是比上一个运算符的位置靠后的所以就有了以下判断     
                h = str.lastIndexOf("+");
                e = str.lastIndexOf("-");
                f = str.lastIndexOf("*");
                g = str.lastIndexOf("/");
                j = Math.max(h, e, f, g);
                // 搜索表达式返回各个运算符号的位置取最大的一个也就是最右边的一个
                k = str.lastIndexOf(".");
                // 搜索上一个点的位置
                if (k=="-1"){
                    // 此时整个表达式没有出现点 允许输入点 
                    str += ".";
                    answer.innerHTML = str;
                } else {
                    if(k>j){
                        // 我们需要判断上一个点和运算符谁在前面 
                        // 6+6.3+6.此时可以输入点 6+6.3.此时不可以输入
                        // k与j进行比较 如果k小于j
                        // 此时情况即为我们要排除的错误情况（在上一个运算符之后存在了一个点那么此时不允许输入点eg：1+6.3.←这个点是不允许出现的） 不进行操作即可
                    }else{
                        // 这时为整个表达式里出现了点 但是点在上一个运算符前面 与女无瓜允许正常输入
                        str += ".";
                        answer.innerHTML = str;
                    }
                }        
            }
        }
    }
}
function presszero() {
    // 提出问题：如果你进行了详细的测试你会发现如果用eval处理021+1或者1+021之类0开头的表达式那么结果并不是你想象的22
    // 那么我们就需要对0进行处理首先我们思考什么时候会出现错误
    // 分析得出什么时候出现错误：错误情况为第一位是0 或者运算符之后直接是一个0开头的非小数 
    // （1）当第一位输入是零的情况下 如果后面点击的是数字 即点击顺序为023之类我们希望的结果是在表达式中记录23而不是023
    // 于是有了我们第一次判断 当表达式为空点击0时我们不对表达式（str）进行操作
        // 当然你点击0没有任何反应 用户可能认为你的计算器有毛病那么我们就为用户显示一个0 并不在表达式中记录这个0
            // 然后再点击其他数字时自然那个0就没有于是实现了023正确显示并记录为23
    // 有的人可能已经想到了如果我第一位要输0.3之类的小数怎么办？
        // 没关系我们来走一走流程用户点0显示0 然后点击点 进入我们点的函数此时表达式为空（刚才的0只是显示并没有记录到表达式）结果字符串变为了0.显示存储正确无需处理
    // （2）如果我们表达式最后一位是运算符  此时会出错那么我们想到了解决思路与上面一样：仅显示不存储
    // 如果不是运算符那么就是点或者其他数字了允许正常输入
    if(str===""){
        answer.innerHTML = 0;
        // 为用户显示一个0
    }else{
        if (str.substr(str.length - 1, 1) == "+" || str.substr(str.length - 1, 1) == "*" || str.substr(str.length - 1, 1) == "-" || str.substr(str.length - 1, 1) == "/")
         {
        answer.innerHTML = str+"0";    
        // 仅显示不存储(不修改str)
        }else{
            // 允许正常输入
            str += 0;
            answer.innerHTML =str;
            answer2.innerHTML = Number(eval(str));
        }
    } 
}
// ----------------------------------------------------------------------------
// 下面来到百分号 好多同学将百分号设置为了取模 但是我个人认为这并不符合大部分用户对于计算器上百分号的理解 于是我将百分号设置功能如下:如果表达式是一个数字比如999那么直接变为9.99 如果是99+6*999那么变为 99+6*9.99 (经测试大多数手机计算器均为此逻辑)
// 功能确定后就是具体实现我们依然按照上面的思路一步一步来

var a = "", b = "", c = "", d = "", i = "";
function pressbf() {
    // (1) 如果表达式为数字 那么表达式除100并记录
    if (!isNaN(str)) {
        str = str / "100";
        answer.innerHTML = str;
        answer2.innerHTML = str;
    }
    else {
    // (2)如果表达式最后一位是运算符这时是没有意义的我们不进行任何操作
        if (str.substr(str.length - 1, 1) == "+" || str.substr(str.length - 1, 1) == "*" || str.substr(str.length - 1, 1) == "-" || str.substr(str.length - 1, 1) == "/") {
        } else {
    // (3)如果接下来实现第二个功能99+6*999变为 99+6*9.99 我们需要知道最后一个运算符的位置才可以继续
            a = str.lastIndexOf("+");
            b = str.lastIndexOf("-");
            c = str.lastIndexOf("*");
            d = str.lastIndexOf("/");
            i = Math.max(a, b, c, d);
            // 取最大值即为最右面的运算符位置
            str = str.substr(0, i + 1) + (str.substr(i + 1, str.length - i) / 100);
            // 截取表达式第一位到运算符那一位连接上"运算符后面的数字/100" 存入新表达式
            answer.innerHTML = str;
            // 显示结果
            answer2.innerHTML = eval(str);
            // 功能成功实现
        }
    }
}
//     document.write(isNaN(123));
//     document.write(isNaN(-1.23));
//     document.write(isNaN(5-2));————————isNaN("5-2")
//     document.write(isNaN(0));
//     document.write(isNaN("Hello"));
//     document.write(isNaN("2005/12/12"));
// false
// false
// false
// false
// true
// true
// 判断里面有没有运算符号isNaN不好使加引号就好使
// (str.indexOf("+") == -1) && (str.indexOf("-") == -1) && (str.indexOf("*") == -1) && (str.indexOf("/") == -1)另一种

// ------------------------------------------