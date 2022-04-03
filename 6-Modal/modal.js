// selecting open button, close button and overlay-modal

const openBtn = document.querySelector(".btn");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay-modal");

// checking if open button is clicked. If clicked then we are adding open-overlay class to overlay-modal

openBtn?.addEventListener("click", function() {
    overlay.classList.add("open-overlay");
})

closeBtn?.addEventListener("click", function(){
    overlay.classList.remove("open-overlay");
})