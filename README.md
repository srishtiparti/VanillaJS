# VanillaJS
Some projects using DOM to make websites components such as buttons, tabs etc dynamic that are beginner friendly (at the start) and intermediate (end).

# Content-

## 1) Color Flipper (beginner)-
An easy project where the background changes as you click button. There are 2 options-
1) Select a color from an array
2) Generate random colors using hex code
new functions used:
- addEventListener()
- randomNumberGenerator()
- querySelector()
## 2) Counter (beginner)
A basic DOM project to create a Counter
It has three options- Decrease, Reset and Increase. The color changes as the value becomes positive or negative
new functions used:
- querySelectorAll()
- forEach()
- contains()
## 3) Review Carousel (beginner)
A DOM project to create a carousel of reviews with a button that generates random reviews. This feature can be found on many websites to showcase reviews
It has next and previous feature to views reviews and also a "surprise me" button to show random reviews.
new functions used:
- windows.addEventListener("DOMContentLoaded",function(){})
- Math.floor()
## 4) Responsive Navbar (beginner)
A DOM project to create a responsive navbar that will show the hamburger menu for smaller devices. It has feature of transforming hamburger sign to 90 degrees when hovered.
new functions used:
- toggle()
## 5) Sidebar (beginner)
A DOM project to create sidebar with animations
new functions user:
- add()
- remove()
## 6) Modal (beginner)
A DOM project to create Modal window to show user something specific
## 7) FAQ Page (Intermediate)
A DOM project to create a frequently asked questions page.
When one question is selected, all the other answers are hided automatically.
DOM traversing
## 8) Restaurant Menu page (Intermediate)
A DOM project to make a restaurant menu page that filters through the different food menus using higher order functions like map, reduce and filter
The filter buttons are added dynamically. 
new functions used-
- map()
- push()
- reduce()
- join()
- filter()
## 9) Video background
A DOM project to make a video background with a play and pause feature.
There is also a preloader which is displayed while the website is loading.
new function used:
- window.addEventListener("load", function() {})
## 10) Navigation bar on scroll (Intermediate)
A DOM project to create a navbar that slides down when scrolling and then stays at a fixed position at a certain height.
Dynamically setting buttons of navbar because if we add or remove links in navbar, our toggle won't work efficiently as we have statically set the height.
- getBoundingClientREct().height
- Date()
- getFullYear()
- this.window.pageYOffset
- preventDefault()
- window.scrollTo({})
## 11) Tabs that display different content (Intermediate)
A DOM project to create tabs that will display different content when selected.
- map()
## 12) Countdown (Intermediate)
A DOM project to make a countdown clock
new function used:
- setDate()
- getFullYear()
- getDate()
- getMonth()
- toLocaleString('default', { month: 'long' })
- new Date()
- getTime()
- setInterval(function(){})
## 13) Timer
A DOM project using setInterval and clearInterval to make a timer using user's input.
new functions used:
- trim()
- clearInterval()
## 14) Grocery list (Intermediate)
A DOM project to update and delete items from a grocery list and create a simple CRUD (Create, Read, Update, and Delete) application.
Stores data in local storage so the data isn't lost when page is refreshed.
It uses
- createElement()
- createAttribute()
- setAttributeNode()
- e.curentTarget.parentElement
- parentNode
- parentNode.firstChild.innerhtml
- appendChild()
- localStorage - setItem(), getItem(), removeItem()
- Json.stringify
## 15) Garage Sale Fund Raiser
A vanilla js project using forms and regex validation to validate input. A class assignment that helped me understand lots of concepts. For more details on what it includes, check this [Garage Sale](https://github.com/srishtiparti/garageSale). It also contains printing receipt and lots of puns.
## 16)StorePage (jquery)
A vanilla js project using jquery to toggle hide button. Check the three buttons on home page. The 2nd page is the receipt page where you can buy items and get a receipt. The phone number has validation.

