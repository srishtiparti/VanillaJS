// uncomment buttons in html
// menu items

const menu = [{
        id: 1,
        title: "Buttermilk Pancakes",
        category: "breakfast",
        price: 15.99,
        img: "images/pancakes.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "Bacon Diner",
        category: "lunch",
        price: 13.99,
        img: "images/baconBurger.jpg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "American Classic",
        category: "lunch",
        price: 12.99,
        img: "images/burger.jpg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "English Breakfast",
        category: "breakfast",
        price: 20.99,
        img: "images/englishbreakfast.jpg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "Coffee Shake",
        category: "shakes",
        price: 8.99,
        img: "images/coffeeShake.jpg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "Donut dreams",
        category: "shakes",
        price: 8.99,
        img: "images/donutShake.jpg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "Oreo Shake",
        category: "shakes",
        price: 8.99,
        img: "images/oreoShake.jpg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "Tomato Eggplant Pasta",
        category: "dinner",
        price: 17.99,
        img: "images/pasta.jpg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "Shrimp Stir-fry Rice",
        category: "dinner",
        price: 16.99,
        img: "images/shrimpRice.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "Italian Spaghetti",
        category: "dinner",
        price: 17.99,
        img: "images/spaghetti.jpg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 11,
        title: "Steak Dinner",
        category: "dinner",
        price: 18.99,
        img: "images/spaghetti.jpg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 12,
        title: "Strawberry Shortcake Shake",
        category: "shakes",
        price: 10.99,
        img: "images/strawberryShake.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 13,
        title: "Waffle Dream",
        category: "breakfast",
        price: 10.99,
        img: "images/waffle.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];
// when buttons are added in html
// get parent elements
const item = document.querySelector(".menu-items")
    // displaying all items as soon as window is loaded
window.addEventListener("DOMContentLoaded", function() {
    displayMenuItem(menu, "all");
})

const btns = document.querySelectorAll(".btn");
// // when buttons are clicked... filtering them
// btns.forEach(function(btn) {
//     btn.addEventListener("click", function(e) {
//         var button = e.currentTarget.classList;
//         if (button.contains("shakes")) {
//             displayMenuItem(menu, "shakes")
//         }
//         if (button.contains("lunch")) {
//             displayMenuItem(menu, "lunch")
//         }
//         if (button.contains("breakfast")) {
//             displayMenuItem(menu, "breakfast")
//         }
//         if (button.contains("dinner")) {
//             displayMenuItem(menu, "dinner")
//         }
//         if (button.contains("all")) {
//             displayMenuItem(menu, "all")
//         }
//     })
// })
// using data-id to filter

btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        console.log(e.currentTarget.dataset)
        var click = (e.currentTarget.dataset.id)
        console.log(click)
        displayMenuItem(menu, click);
    })
})

// display function to display menu items.
// using map.. we get a new array which goes through a function. each element is called callback element
function displayMenuItem(menuItem, category) {
    let displayMenu = menuItem.map(function(item) {
        if (item.category == category || category == "all") {
            // displaying array items for given category
            return `<article class="item">
<div class="image">
    <img src=${item.img} class="item-img" />
</div>
<div class="item-details">
    <header>
        <h4 class="item-name">${item.title} </h4>
        <h4 class="item-price">$${item.price}</h4>
    </header>
    <div class="item-desc">
        <p> ${item.desc}</p>
    </div>
</div>
</div>
</article>`
        }
        // if it doesn't match then displaying nothing
        else {}
    });
    // so map gives us an array.. we need to join all the elements without coma(",") thus giving no parameter("")
    displayMenu = displayMenu.join("");
    //displaying it in class - menu-item
    item.innerHTML = displayMenu
}