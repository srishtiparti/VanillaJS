// declaring array of weekdays

const weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// getting all constant values

const deadline = document.querySelector(".deadline");
const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".mins");
const seconds = document.querySelector(".seconds");

// setting future date 
var futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 10);
console.log(futureDate)
var furYear = futureDate.getFullYear()
var furDate = futureDate.getDate()
var furMonth = futureDate.getMonth()

var giveaway = weekday[futureDate.getDay()] + ', ' + furDate + ' ' + futureDate.toLocaleString('default', { month: 'long' }) + ' ' + furYear
console.log(furDate)

let date = new Date(furYear, furMonth, furDate, 11, 30, 0).getTime()

// printing the giveaway date
deadline.innerHTML = giveaway;


// setting intervals to 1 second
setInterval(function() {
    var curDate = new Date().getTime();

    // calculating difference between now and future date (in milliseconds)
    var difference = date - curDate

    // calculating days, hours, minutes and secomds left
    var daysleft = difference / (24 * 60 * 60 * 1000)
    var hoursleft = (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    var minutesleft = (difference % (1000 * 60 * 60)) / (1000 * 60)
    var secondsleft = (difference % (1000 * 60)) / (1000)

    // printing days, hours, minutes and secomds left
    days.innerHTML = Math.floor(daysleft)
    hours.innerHTML = Math.floor(hoursleft)
    minutes.innerHTML = Math.floor(minutesleft)
    seconds.innerHTML = Math.floor(secondsleft)

})