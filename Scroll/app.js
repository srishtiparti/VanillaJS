// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// if we add or remove links in navbar, our toggle won't work efficiently because we have statically set the height

const btn = document.querySelector(".nav-toggle")
const linksContainer = document.querySelector(".links-container")
const links = document.querySelector(".links")

//adding toggle button

btn.addEventListener("click", function() {
    // links.classList.toggle("show-links");
    let containerHeight = linksContainer.getBoundingClientRect().height;
    let linksHeight = links.getBoundingClientRect().height;
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`
    } else {
        linksContainer.style.height = 0;
    }
})

//set year

const date = document.getElementById("year");
date.innerHTML = new Date().getFullYear();


// sticking when scrolling

const navbar = document.getElementById("nav")
let navHeight = navbar.getBoundingClientRect().height;

window.addEventListener("scroll", function() {
    var offset_t = this.window.pageYOffset;
    if (offset_t >= navHeight) {
        navbar.classList.add("sticky")
    }
})


// smooth scrolling

const scrollLinks = document.querySelectorAll(".scroll-link")

scrollLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        let elementPos = element.offsetTop - navHeight;
        // window.scrollTo({
        //     left: 0,
        //     top: elementPos,
        // })
        // the first click doesnt work the way we want because the nav bar isnt fixed
        const fixedNav = navbar.classList.contains("sticky");
        if (!fixedNav) {
            elementPos = elementPos - navHeight;
        }
        // problem is with smaller screen now
        const containerHeight = linksContainer.getBoundingClientRect().height;
        // console.log(navHeight);
        if (navHeight > 80) {
            elementPos = elementPos + containerHeight
        }
        window.scrollTo({
            left: 0,
            top: elementPos,
        })

        linksContainer.style.height = 0;
    })
})