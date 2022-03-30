const weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const deadline = document.querySelector(".deadline");

var curDate = new Date();
var today = new Date();
today.setDate(today.getDate() + 10);
var furDate = weekday[today.getDay()] + ', ' + today.getDate() + ' ' + today.toLocaleString('default', { month: 'long' }) + ' ' + today.getFullYear()
console.log(furDate)

deadline.innerHTML = furDate;

// const _MS_PER_DAY = 24 * 60 * 60 * 1000

// var utc1 = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
// var utc2 = Date.UTC(curDate.getFullYear(), curDate.getMonth(), curDate.getDate());

// var days = (utc1 - utc2) / _MS_PER_DAY;
// console.log(days)