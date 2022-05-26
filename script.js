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
digitHour.innerHTML=hour;
digitMinute.innerHTML=minute;
digitSecond.innerHTML=second;
updateHands();

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


function updateHands(){
    secondHand.style.transform ="rotate(" +changeDigitSecondToAnalogSecond(second)+"deg)";
    minuteHand.style.transform ="rotate(" +changeDigitMinuteToAnalogMinute(minute)+"deg)";
    hourHand.style.transform ="rotate(" +changeDigitHourToAnalogHour(hour,minute)+"deg)";
}
setInterval(function() {
    secondDegree+=6;
    second++;
    digitSecond.innerHTML=second.toString();
   updateHands();
    
    if(second<10){
        digitSecond.innerHTML="0"+second.toString();
    }else if(second<=59){
        digitSecond.innerHTML=second.toString();
    }else{
        second=0;
        minute++;
        minuteDegree+=6;
        hourDegree+=0.5;
        digitSecond.innerHTML="0"+second.toString();
        updateHands();
        if(minute<10){
            digitMinute.innerHTML="0"+minute.toString();
        }
        else if(minute<=59){
            digitMinute.innerHTML=minute.toString();
        }
        else{
            minute=0;
            hour++;
            digitMinute.innerHTML="0"+minute.toString();
            if(hour<10){
                digitHour.innerHTML="0"+hour.toString();
            }
            else if(hour<=23){
                digitHour.innerHTML=hour.toString();
            }
            else{
                hour=0;
                digitHour.innerHTML="0"+hour.toString();
                
            }
        }
    }
    
},1000);