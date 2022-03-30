const data =[
    {
        id: 1,
        name: "sara jones",
        job: "Ux Developer",
        img: "reviewImages/author-sara.jfif",
        info:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque excepturi cupiditate explicabo voluptas asperiores aperiam voluptate magni autem ab, ratione, repellat provident doloribus, officiiscommodi sit voluptatem. Perferendis, rem maiores?",
    },
    {
        id: 2,
        name: "katan Kobes",
        job: "Intern",
        img: "reviewImages/intern-katan.jpg",
        info:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque excepturi cupiditate explicabo voluptas asperiores aperiam voluptate magni autem ab, ratione, repellat provident doloribus, officiiscommodi sit voluptatem. Perferendis, rem maiores?",
    },
    {
        id: 3,
        name: "Rob jones",
        job: "Intern",
        img: "reviewImages/intern-rob.jpg",
        info:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque excepturi cupiditate explicabo voluptas asperiores aperiam voluptate magni autem ab, ratione, repellat provident doloribus, officiiscommodi sit voluptatem. Perferendis, rem maiores?",
    },
    {
        id: 4,
        name: "Casper parti",
        job: "Senior Lead",
        img: "reviewImages/senior-lead-casper.jfif",
        info:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque excepturi cupiditate explicabo voluptas asperiores aperiam voluptate magni autem ab, ratione, repellat provident doloribus, officiiscommodi sit voluptatem. Perferendis, rem maiores?",
    },
    {
        id: 5,
        name: "Cobb uni",
        job: "Web developer",
        img: "reviewImages/web-dev-cobb.jpg",
        info:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque excepturi cupiditate explicabo voluptas asperiores aperiam voluptate magni autem ab, ratione, repellat provident doloribus, officiiscommodi sit voluptatem. Perferendis, rem maiores?",
    }
]

// select items
const btns = document.querySelectorAll(".btn");
const img = document.getElementById("person-img");
const name = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

// set starting item
var item = 0;

window.addEventListener("DOMContentLoaded",function(){
    showPerson(item);
})

btns.forEach(function(btn){
btn.addEventListener("click",function(e){
    var button =e.currentTarget.classList
    if(button.contains("btnNext")){
        item ++;
        if(item > data.length - 1){
            item = 0;
        }
            showPerson(item);
    }
    if(button.contains("btnPrev")){
        item --;
        if(item < 0){
            item = data.length - 1;
        }
            showPerson(item);
    }
    if(button.contains("btnRandom")){
        item = Math.floor(Math.random() * 5);
        showPerson(item);
    }
})
})

// show person based on item

function showPerson(item){
    var curItem = data[item]; 
    img.src = curItem.img;
    name.textContent = curItem.name;
    job.textContent = curItem.job;
    info.textContent = curItem.info;
}