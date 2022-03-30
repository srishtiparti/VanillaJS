// getting all the buttons and questions

//const btns = document.querySelectorAll(".button");
const questions = document.querySelectorAll(".question");

//Method 1-> using selectors inside elements

// //going through each question

questions.forEach(function(question) {
    console.log(question);
    const btn = question.querySelector(".button")
    console.log(btn);
    btn.addEventListener("click", function() {
        questions.forEach(function(item) {
            if (item !== question) {
                item.classList.remove("show-text")
            }
        })
        console.log(question.classList);
        question.classList.toggle("show-text");
    })
})

// //Method 2->Dom Traversing 
// //for each button we are adding event listener
// btns.forEach(function(btn){
//     btn?.addEventListener("click", function(e){
//         // if the button is clicked (icon-plus or icon minus)-> we check parent element -> question-title go to it's parent item-> question
//         const question = e.currentTarget.parentElement.parentElement;
//         // toggle show-text, does toggling answer class, minus-icon, plus-icon (check css)
//         question.classList.toggle("show-text");
//         questions.forEach(function(item){
//             if(item!==question){
//                 item.classList.remove("show-text");
//             }
//         })
//     })
// })