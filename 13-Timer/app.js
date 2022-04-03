// getting all the constant values from html

const btn = document.querySelector(".submit")
const hoursShow = document.querySelector(".hours");
const minutesShow = document.querySelector(".mins");
const secondsShow = document.querySelector(".seconds");
timevalue=null

// when button is clicked

btn?.addEventListener("click",function(){

    // clearing the interval so that if button is clicked again when timer is working, old value doesn't interfere with the new value

    halfFunction()

    // getting hours, minutes and seconds entered by the user
    var hours = document.getElementById("hoursInput").value
    if(hours===null || isNaN(hours)|| hours.trim().length===0){
        hours = 0
    }
    var minutes = document.getElementById("minsInput").value
    if(minutes==null || isNaN(minutes)|| minutes.trim().length===0){
        minutes = 0
    }
    var seconds = document.getElementById("secsInput").value
    if(seconds==null || isNaN(seconds)|| seconds.trim().length===0){
        seconds = 0
    }

    //calling calcMilliseconds function to calculate milliseconds
  calcMilliseconds(hours,minutes,seconds)
})

// calculating milliseconds

function calcMilliseconds(hours, minutes, seconds){
    hours = hours * 60 * 60 * 1000
    minutes = minutes * 60 * 1000
    seconds = seconds * 1000
    var milliseconds = hours + minutes + seconds
    calcTime(milliseconds)
}

// calculating time in terms of hours, seconds and minutes using total milliseconds

function calcTime(milliseconds){
    console.log(milliseconds)
   timevalue = setInterval(function(){
        var hoursleft = Math.floor((milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        var minutesleft = Math.floor((milliseconds%(60 * 60* 1000))/(1000 * 60))
        var secondsleft = Math.floor((milliseconds%(60 * 1000))/(1000))
        milliseconds = milliseconds - 1000
        if(secondsleft<0|| hoursleft<0||minutesleft<0|| hoursleft>24){
            hoursleft= 0
            minutesleft=0
            secondsleft=0
            return
        }
        displayTime(hoursleft,minutesleft,secondsleft)
    },1000)
}

// halt function to clear interval

function halfFunction(){
    clearInterval(timevalue);
}

// displaying time in terms of hours, seconds and minutes

function displayTime(hoursleft,minutesleft,secondsleft){
    hoursShow.innerHTML = (hoursleft)
    minutesShow.innerHTML = (minutesleft)
    secondsShow.innerHTML = (secondsleft)
}