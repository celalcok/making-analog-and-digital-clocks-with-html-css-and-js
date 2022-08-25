var hourHand = document.getElementById('hour');
var digitHour = document.getElementById('digit_hour');
var digitMinute = document.getElementById('digit_minute');
var digitSecond = document.getElementById('digit_second');
var minuteHand = document.getElementById('minute');
var secondHand = document.getElementById('second');
var hourDegree=0;
var minuteDegree=0;
var secondDegree=0;
var currentDate = new Date();
var hour=currentDate.getHours();
var minute=currentDate.getMinutes();
var second = currentDate.getSeconds();

function changeDigitHourToAnalogHour(h, m){
    var hourDegree =(h*30)+(m*0.5);
    return hourDegree%360;
}

function changeDigitMinuteToAnalogMinute(minute) {
    var degree = minute*6;
    return degree;
}
function changeDigitSecondToAnalogSecond(second) {
    var degree = second*6;
    return degree;
}
function showDigits(){
    digitHour.innerHTML=hour<10?"0"+hour:hour;
    digitMinute.innerHTML=minute<10?"0"+minute:minute;
    digitSecond.innerHTML=second<10?"0"+second:second;
}

function showAnalog(){
    secondHand.style.transform ="rotate(" +changeDigitSecondToAnalogSecond(second)+"deg)";
    minuteHand.style.transform ="rotate(" +changeDigitMinuteToAnalogMinute(minute)+"deg)";
    hourHand.style.transform ="rotate(" +changeDigitHourToAnalogHour(hour,minute)+"deg)";
}

function run(){
    secondDegree+=6;
    second++;
    if(second >59){
        second=0;
        minute++;
        minuteDegree+=6;
        hourDegree+=0.5;
 
        if(minute>59){
            minute=0;
            hour++;
            if(hour>23){
                hour=0;                
            }
        }
    }
    showDigits();
    showAnalog();
}
setInterval(run, 1000);