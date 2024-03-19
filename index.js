// Date & Time 
var today = new Date();
var day = today.getDay();
var daylist = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
console.log('Today is : ' + daylist[day] + '.');
var hours = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hours >= 12)? 'PM':'AM';
hours = (hours >=12)? hours - 12: hours;
if (hours===0 && prepand==='PM'){
    if (minute===0 && second===0)
    {
        hours=12;
        prepand= 'PM';
    }
}
if (hours===0 && prepand==='Am'){
    if (minute===0 && second===0){
        hours=12;
        prepand='Midnight';
    }
    else {
        hour=12;
        prepand='Am';
    }
}
console.log('Current Time :' +hours +prepand + ':' + minute + ':' + second);