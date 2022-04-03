const togglebtn = document.querySelector(".sidebar-toggle");
const closebtn = document.querySelector(".close-button");
const sidebar = document.querySelector(".sidebar");

togglebtn.addEventListener("click", function() {
    sidebar.classList.toggle("show-sidebar");
})

closebtn.addEventListener("click", function() {
    sidebar.classList.remove("show-sidebar");
})