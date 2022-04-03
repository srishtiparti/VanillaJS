/* When submit is clicked, formSubmit is called. 
It clears all the fields with class errorMsg which is used to display errors.

It also calls validateReceipt function to validate input and calculate receipt*/
function formSubmit() {
    document.querySelectorAll('.errorMsg').forEach(element => {
        element.textContent = '';
    });
    validateReceipt();
    return false;
}

// function validateUser to validate  name, email and credit card information such as credit card, year and month
function validateUser() {
    let error = '';

    // setting the format required for month, year, credit card number and making sure that name and email field is not empty
    var monthRegex = /^[A-Za-z]{3}$/;
    var yearRegex = /^[0-9]{4}$/;
    var cardRegex = /^[0-9]{4}[-][0-9]{4}[-][0-9]{4}[-][0-9]{4}$/;
    var nameRegex = /^[A-Za-z]{1,100}$/;
    var emailRegex = /^\S{1,100}$/;

    // testing credit card expiry year format
    if (!yearRegex.test(document.getElementById('year').value)) {
        error = "Bear Bear, Check your year :P <br/>";
        document.getElementById('errorYear').innerHTML = error;
    }

    // testing credit card number format
    if (!cardRegex.test(document.getElementById('creditCard').value)) {
        error = "Slumber Slumber! Check Credit Card Number <br/>";
        document.getElementById('errorCard').innerHTML = error;
    }

    // testing credit card expiry month format
    if (!monthRegex.test(document.getElementById('month').value)) {
        error = "Hit a Bump :( You entered wrong month <br/>";
        document.getElementById('errorMonth').innerHTML = error;
    }

    // testing customer name field is not empty
    if (!nameRegex.test(document.getElementById('custName').value)) {
        error = "I can call you cutie, but receipt needs a name <br/>";
        document.getElementById('errorName').innerHTML = error;
    }

    // testing email feild is not empty
    if (!emailRegex.test(document.getElementById('email').value)) {
        error = "What's the email address of the pupper?<br/>";
        document.getElementById('errorEmail').innerHTML = error;
    }

    return error;
}

// validateReceipt function to validate the qunatities entered and making sure that atleast one item is bought
function validateReceipt() {

    // getting the value of tshirts, pupsicles, caps, mugs, pupcorn and shampoos
    let error = '';
    let tshirts = document.getElementById('tshirt').value;
    let pupsicle = document.getElementById('pupsicle').value;
    let caps = document.getElementById('caps').value;
    let mugs = document.getElementById('mugs').value;
    let pupcorn = document.getElementById('pupcorn').value;
    let shampoo = document.getElementById('shampoo').value;

    // checking if the tshirts quantity is a positive number 
    if (isNaN(tshirts) || parseInt(tshirts)<0) {
        error += "Tshirt Quantity is invalid <br/>";
    }

    // checking if the pupsicle quantity is a positive number 
    if (isNaN(pupsicle) || parseInt(pupsicle)<0) {
        error += "Pupsicle Quantity is invalid <br/>";
    }

    // checking if the caps quantity is a positive number 
    if (isNaN(caps) ||  parseInt(caps)<0) {
        error += "Koalaty Caps Quantity is invalid <br/>";
    }

    // checking if the mugs quantity is a positive number 
    if (isNaN(mugs) || parseInt(mugs)<0) {
        error += "Paw-ffee Mugs Quantity is invalid <br/>";
    }

    // checking if the pupcorn quantity is a positive number 
    if (isNaN(pupcorn) ||  parseInt(pupcorn)<0) {
        error += "Pupcorn Quantity is invalid <br/>";
    }

    // checking if the shampoo quantity is a positive number 
    if (isNaN(shampoo) ||  parseInt(shampoo)<0) {
        error += "Shampoodle Quantity is invalid <br/>";
    }

    // parsing the quantity to integer. If the string is empty, value is 0 
    tshirts = quantityValue(tshirts);
    pupsicle = quantityValue(pupsicle);
    caps = quantityValue(caps);
    mugs = quantityValue(mugs);
    pupcorn = quantityValue(pupcorn);
    shampoo = quantityValue(shampoo);

    //checking if the total quantity is 0. 
    let quantity = tshirts + pupcorn + pupsicle + caps + mugs + shampoo;
    if (quantity == 0) {
        error += "Please Buy Something. Our Fur Friends need you";
    }
    document.getElementById('receipt').innerHTML = error;

    //if there are no error messages from validateUSer and error is an empty string (no error in quantities) then print the receipt
    if (validateUser() == '' && error == '') {
        printReceipt(tshirts, pupsicle, caps, mugs, pupcorn, shampoo, quantity);
   }
}

// parsing string to integer. If the string is empty, value is 0 
function quantityValue(value) {
    if (value.trim() == '') {
        value = 0;
    }
    else {
        value = parseInt(value);
    }
    return value;

}

//printing receipt
function printReceipt(tshirts, pupsicle, caps, mugs, pupcorn, shampoo, quantity) {
    let donatedAmount = 0;
    let totalCost = 0;

    //Calculating total cost for tshirt, pupsicle, caps, mugs, pupcorn and shampoo
    let tshirtCost = tshirts * 5;
    let pupsicleCost = pupsicle * 2;
    let capsCost = caps * 2;
    let mugsCost = mugs * 3;
    let pupcornCost = pupcorn * 1;
    let shampooCost = shampoo * 3;

    // calculating total cost.
    let total = tshirtCost + capsCost + pupcornCost + pupsicleCost + mugsCost + shampooCost;

    // calculating the amount donated
    if (total * 0.1 < 10) {
        donatedAmount = 10;
    }
    else {
        donatedAmount = total * 0.1;
    }

    // calculating cost including donation
    totalCost = total + donatedAmount;

    //printing receipt in a table with customer name, credit card info (last 4 digits) and email address
    let table = '<table border= "1" align="center" id="receiptTable">';
    table += `<tr> <td colspan = '3' style='border:none;'><h2> Receipt </h2> <hr> <b> Customer name </b>: ${document.getElementById('custName').value} </td> </tr>`;

    table += `<tr> <td colspan = '2' style='border:none;'> <b> Email </b> : ${document.getElementById('email').value}</td> </tr>`;

    table += `<tr> <td colspan = '2' style='border:none;'> <b> Credit Card </b>: xxxx-xxxx-xxxx-${document.getElementById('creditCard').value.slice(15)} </td> </tr>`;

    table += '<tr>';
    table += '<td> Item </td>';
    table += '<td> Quantity </td>';
    table += '<td> Amount </td>';
    table += '</tr>';

    // printing items, quantities and cost
    for (var i = 0; i < 6; i++) {
        table += '<tr>';

        if (i == 0 && tshirts != 0) {             // printing Dogtor T-shirt quantity and cost
            table += '<td> Dogtor T-shirt </td>';
            table += `<td> ${tshirts} </td>`;
            table += `<td> $ ${tshirtCost} </td>`;
        }

        if (i == 1 && pupsicle != 0) {               // printing Pupscile flavor, quantity and cost
            table += `<td> ${document.getElementById('pupsicleFlavor').value}\n Pupsicle </td>`;
            table += `<td> ${pupsicle} </td>`;
            table += `<td> $ ${pupsicleCost} </td>`;
        }

        if (i == 2 && caps != 0) {           // printing Koalaty Caps quantity and cost
            table += '<td> Koalaty Caps </td>';
            table += `<td> ${caps} </td>`;
            table += `<td> $ ${capsCost} </td>`;
        }

        if (i == 3 && mugs != 0) {          // printing paw-ffee mugs  quantity and cost
            table += '<td> Paw-ffee Mugs </td>';
            table += `<td> ${mugs} </td>`;
            table += `<td> $ ${mugsCost} </td>`;
        }

        if (i == 4 && pupcorn != 0) {              // printing pupcorn quantity and cost
            table += '<td> Pup-corn </td>';
            table += `<td> ${pupcorn} </td>`;
            table += `<td> $ ${pupcornCost} </td>`;
        }

        if (i == 5 && shampoo != 0) {              // printing shampoodle quantity and cost
            table += '<td> Shampoodle </td>';
            table += `<td> ${shampoo} </td>`;
            table += `<td> $ ${shampooCost} </td>`;
        }
    }

    // printing the total quantity and cost
    table += `<tr>`;
    table += `<td style> Amount </td>`;
    table += `<td> ${quantity} </td>`;
    table += `<td> $ ${total} </td>`;
    table += '</tr>';

    // printing the amount donated
    table += '<tr>';
    table += `<td colspan = '2' style='border:none;'> Money Donated</td>`;
    table += `<td style='border:none;'> $ ${donatedAmount.toFixed(2)} </td>`;
    table += '</tr>';

    // printing total cost 
    table += '<tr>';
    table += `<td colspan = '2' style='border:none;'> Total </td>`;
    table += `<td style='border:none;'> $ ${totalCost.toFixed(2)} </td>`;
    table += '</tr>';

    // printing receipt in form
    table += '</table>';
    document.getElementById('receipt').innerHTML = table;
}