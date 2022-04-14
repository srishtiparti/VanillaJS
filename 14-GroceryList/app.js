//********        Select  Items          ********

var submitBtn = document.querySelector(".submitButton")
var list = document.querySelector(".displayItem")
var alert = document.querySelector(".alert");
var userInput = document.getElementById("userInput")

// Edit option

let editElement;
var editFlag = false
var editId = ''

// When window loads, display the grocery list from the local storage
window.addEventListener("DOMContentLoaded", setUpList)

// If empty value is added, we'll display that "empty value" on alert and won't add to our local storage. 
// Check if alert has class alert-danger or alert-success if so then remove it so it doesn't get overwitten.

submitBtn?.addEventListener("click", function() {

    var userInputValue = userInput.value;
    clearAlerts();

    // checking if the value is not empty and editFlag is false

    if (userInputValue && !editFlag) {
        addItem(userInputValue)
        setBackToDefault();
    } 
    else if(userInputValue && editFlag){
        editElement.innerHTML = userInputValue
        displayAlert("Value Changed Successfully", "success")
        editLocalStorage(editId,userInputValue)
        setBackToDefault();
    }
    else {
        displayAlert("Empty Value", "danger")
    }
})

// displayAlert function to display alert and a timeout function to remove it after 5 seconds
function displayAlert(text, action) {
    alert.innerHTML = text;
    alert.classList.add(`alert-${action}`)
    setTimeout(function() {
        clearAlerts()
    }, 5000)
}


// Clear Alert function to clear alerts
function clearAlerts() {
    alert.innerHTML = '';
    if (alert.classList.contains("alert-danger")) {
        alert.classList.remove("alert-danger")
    }
    if (alert.classList.contains("alert-success")) {
        alert.classList.remove("alert-success")
    }
}

// function to add items and display alert 
function addItem(userInput) {

    //setting up a unique id for each input. Creating an element for list and add an attribute data-id to it
    let id = new Date().getTime().toString();
    createList(id,userInput);
    if(!editFlag){
    // display Alert that the input is successfully added
    displayAlert(`${userInput} added successfully`, "success");
    }
    addToLocalStorage(id,userInput);
    setBackToDefault();

}

// function to edit item
function editItem(e) {
    clearAlerts();
    const element = e.currentTarget.parentElement.parentElement;
    // Can also use e.currentTarget.parentElement.previousElementSibling;
    editElement = e.currentTarget.parentNode.parentNode.firstChild
    console.log(editElement)
    userInput.value = editElement.innerHTML
    editFlag = true;
    editId = element.dataset.id
    submitBtn.textContent = 'Edit';
}

// function to delete an item
function deleteItem(e){
    clearAlerts();
    const element = e.currentTarget.parentElement.parentElement;
    // get element name
    // came to <h3 class="item">${userInput}</h3> - firstChild, firstElementChild
    // came to H3 - firstChild.nodename
    const elementName = e.currentTarget.parentNode.parentNode.firstChild.innerHTML
    const id = element.dataset.id;

    // const item = document.querySelector(`.${element}`) 
    
    list.removeChild(element)
    displayAlert(`${elementName} Removed`, `danger`)
    removeFromLocalStorage(id)
    setBackToDefault()
}

// set back to default function to clear input and change the button to submit and clear edit flag and id
function setBackToDefault() {
    userInput.value = '';
    editId =''
    editElement =''
    editFlag = false;
    submitBtn.textContent = 'Submit';
}

// function for clear list  - ####currently not working####
function clearItems(){
    clearAlerts();
    const items =document.querySelectorAll(".displayItem")
    if(items > 0){
        items.forEach(function(item){
            list.removeChild(item);
        })
    }
    displayAlert("List Cleared", danger)
    localStorage.removeItem("list")
    setBackToDefault();
}

// ************************* Local Storage ****************************
// localStorage API
// setItem
// getItem
// remove item
// save as string

// Example check application->local storage ->
// localStorage.setItem("orange", JSON.stringify(["item1","item2"]));
// // to get these items
// const oranges = JSON.parse(localStorage.getItem("orange"))
// console.log(oranges)
// // remove from local storage
// localStorage.removeItem("orange")


function addToLocalStorage(id, value){
    // in ES6 we can just write {id,value}
    const grocery = {id:id,value:value}
    console.log(grocery)

    // getting the list from local storage. if there is no list present in local storage, it will just return an empty array
    let items = getLocalStorage();
    console.log(items);
    items.push(grocery);
    localStorage.setItem("list",JSON.stringify(items));
}

function getLocalStorage(){
    return localStorage.getItem('list')? JSON.parse(localStorage.getItem('list')):[];
}

function removeFromLocalStorage(id){
    let items = getLocalStorage();
    console.log(items)
    items = items.filter(function(item){
        if(item.id!==id.toString()){
            return item;
        }
    })
    console.log(items)
    localStorage.setItem("list",JSON.stringify(items));
}

function editLocalStorage(id,value){
    let items = getLocalStorage()
    items = items.map(function(item){
        if(item.id === id){
            item.value = value
        }
        return item;
    })
    localStorage.setItem("list",JSON.stringify(items))
}

// set up list
function setUpList(){
    let items = getLocalStorage();
    if(items.length>0){
        items.forEach(function(item){
            createList(item.id,item.value)
        })
    }
}
//  creating list when item is added
function createList(id,userInput){
    const element = document.createElement("li");
    let attr = document.createAttribute("data-id");
    attr.value = id
    element.setAttributeNode(attr);

    // add displayItem class to the element

    element.classList.add("displayItem");
    element.innerHTML= `<h3 class="item">${userInput}</h3>
    <div class="buttons">
        <button class="itemButton edit"><i class="fas fa-edit"></i></button>
        <button class="itemButton delete"><i class="fas fa-trash"></i></button>
    </div>`

    // Append list
    list.appendChild(element)
     // add event listeners to both buttons
    const deleteBtn = element.querySelector(".delete");
    deleteBtn.addEventListener("click", deleteItem);
    const editBtn = element.querySelector(".edit");
    editBtn.addEventListener("click", editItem);
}