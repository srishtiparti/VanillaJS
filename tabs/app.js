const data = [{
        id: 1,
        button: "history",
        info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus nam porro ipsa consequuntur, sit culpa numquam ullam adipisci error assumenda nihil maxime dolor harum animi est a commodi eaque quod mollitia alias sequi! Asperiores, inventore sunt magnam, tempore sapiente, error possimus illo dolorem tenetur odio obcaecati. Assumenda commodi quisquam laborum!",
    },
    {
        id: 2,
        button: "vision",
        info: "dolor sit amet consectetur adipisicing elit. Delectus nam porro ipsa consequuntur, sit culpa numquam ullam adipisci error assumenda nihil maxime dolor harum animi est a commodi eaque quod mollitia alias sequi! Asperiores, inventore sunt magnam, tempore sapiente, error possimus illo dolorem tenetur odio obcaecati. Assumenda commodi quisquam laborum!"
    },
    {
        id: 3,
        button: "goals",
        info: "amet consectetur adipisicing elit. Delectus nam porro ipsa consequuntur, sit culpa numquam ullam adipisci error assumenda nihil maxime dolor harum animi est a commodi eaque quod mollitia alias sequi! Asperiores, inventore sunt magnam, tempore sapiente, error possimus illo dolorem tenetur odio obcaecati. Assumenda commodi quisquam laborum!"
    },
]

const show = document.querySelector(".info");
const tabs = document.querySelectorAll(".tabs")

window.addEventListener("DOMContentLoaded", function() {
    displayItem(data, "history")
})

tabs.forEach(function(tab) {
    tab.addEventListener("click", function(e) {
        id = e.currentTarget.id
        displayItem(data, id)
        tab.classList.add("active")
        tabs.forEach(function(curtab) {
            if (curtab !== tab) {
                curtab.classList.remove("active")
            }
        })
    })
})

function displayItem(dataset, button) {
    let displayData = dataset.map(function(item) {
        if (item.button == button) {
            return `<article class="info">
            <p>${item.info}</p>
            </article>`
        } else {}
    })
    displayData = displayData.join("")
    show.innerHTML = displayData
}