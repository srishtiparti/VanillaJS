const colors = ["red", "yellow", "blue", "purple", "green", "#000000", "rgba((0,0,0))" ];
const color = document.querySelector("#color");
const btn = document.getElementById("btn");
const btnHex = document.getElementById("btnHex");

btn?.addEventListener("click",function(){
    const randomNumber = randomNumberGenerator(0,6);
    console.log(randomNumber)
    document.body.style.background = colors[randomNumber];
    color.textContent = colors[randomNumber];

})
hexBtn?.addEventListener("click",function(){

    const randomColor = getRandomColor();
    console.log(randomColor)
    document.body.style.background = randomColor;
    color.textContent = randomColor;
})
function randomNumberGenerator(min, max){
    return Math.floor(Math.random()*(max - min) + min)
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }