//获得数据
// var leaveSeconds=document.getElementById('leave-seconds');

//输出现在的时间
//思路:先创建一个new date() ;获取他的方法:年 月 日等. 注意:星期需要转换!
function time(){
    var getTime=new Date();
    var year=getTime.getFullYear();
    var month=getTime.getMonth();
    var date=getTime.getDate();
    var hour=getTime.getHours();
    hour=check(hour);
    var minute=getTime.getMinutes();
    minute=check(minute);
    var second=getTime.getSeconds();
    second=check(second);
    document.getElementById('now-time').innerHTML=year+'年'+(month+1)+'月'+date+'日'+hour+'时'+minute+'分'+second+'秒';
}
//用setTimeOut进行循环,让出现动态的效果.
function repeat(){
    setInterval(time,1000);
}
//为<10的数字前加0
function check(i){
    if(i<10){
        i='0'+i;
    }
    return i;
}
repeat();

//倒计时
//思路:用截止时间减去现在的时间
function countDown() {
    var deadline=new Date('2019,1,1');//截止时间
    var nowTime=new Date();//当前时间
    document.getElementById('leave-days').innerHTML=Math.ceil((deadline.getTime() - nowTime.getTime()) / 86400000);
    //截止时间-当前时间 再转化成毫秒:getTime() ;将毫秒转换成天:86400000 ;进行向上取整数:Math.ceil;
}
countDown();

//限时抢购
//思路:和倒计时思路相同.
function count(){
    var deadline=new Date('2018/2/22 00:00:00');//截止的具体时间
    var nowTime=new Date();//当前时间
    var time=Math.floor((deadline.getTime()-nowTime.getTime())/1000);
    var day=Math.floor(time/(24*60*60));
    var hour=Math.floor((time-day*24*60*60)/(60*60));
    hour=check(hour);
    var minute=Math.floor((time-day*24*60*60-hour*60*60)/60);
    minute=check(minute);
    var second=Math.floor(time-day*24*60*60-hour*60*60-minute*60);
    second=check(second);
    document.getElementById('leave-seconds').innerHTML=day+'天'+hour+'时'+minute+'分'+second+'秒';
}
function set(){
    setInterval(count,1000);
}
set();
