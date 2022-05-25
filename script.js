var hourHand = document.getElementById('hour');
var digitHour = document.getElementById('digit_hour');
var digitMinute = document.getElementById('digit_minute');
var digitSecond = document.getElementById('digit_second');
var minuteHand = document.getElementById('minute');
var secondHand = document.getElementById('second');
var hourDegree=0;
var minuteDegree=0;
var secondDegree=0;
var hour=0;
var minute=0;
var second = 0;
digitHour.innerHTML="0"+hour;
digitMinute.innerHTML="0"+minute;
digitHour.innerHTML="0"+hour.toString();

setInterval(function() {
    secondDegree+=6;
    second++;
    secondHand.style.transform ="rotate(" +secondDegree+"deg)";
    
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
        minuteHand.style.transform ="rotate(" +minuteDegree+"deg)";
        hourHand.style.transform ="rotate(" +hourDegree+"deg)";
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