let count = 0;
let value = document.getElementById("value");
const inc = document.getElementById("increase");
const dec = document.getElementById("decrease");
const reset = document.getElementById("reset");
const btns = document.querySelectorAll(".button")

inc?.addEventListener("click",function(){
    count = count + 1;
    value.textContent = count;
    console.log(count)
})

dec?.addEventListener("click",function(){
    count = count - 1;
    value.textContent = count;
    console.log(count)
})

reset?.addEventListener("click",function(){
    count = 0;
    value.textContent = count;
    console.log(count)
})
// btns.forEach(function(btn){
//     btn.addEventListener("click",function(e){
//         const style = e.currentTarget.classList
//         if(style.contains("increase")){
//             count++;
//         }
//     })
// })