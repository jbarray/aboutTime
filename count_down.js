//获得数据
var thisTime=document.getElementById('now-time');
var leaveTime=document.getElementById('leave-days');
var leaveSeconds=document.getElementById('leave-seconds');

//输出现在的时间
//思路:先创建一个new date() ;获取他的方法:年 月 日等. 注意:星期需要转换!
function time(){
    var getTime=new Date();
    // thisTime.innerHTML=getTime;
    var year=getTime.getFullYear();
    var month=getTime.getMonth();
    var date=getTime.getDate();
    var hour=getTime.getHours();
    var minute=getTime.getMinutes();
    var second=getTime.getSeconds();
    document.getElementById('now-time').innerHTML=year+'年'+(month+1)+'月'+date+'日'+hour+'时'+minute+'分'+second+'秒';
}
//用setTimeOut进行循环,让出现动态的效果.
function repeat(){
    setInterval(time,1000);
}
repeat();

//倒计时
//思路:用截止时间减去现在的时间
