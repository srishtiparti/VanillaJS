// Set 1, Name- Srishti Parti, Student ID- 8693901
// When submit is clicked formSubmit is called.
// The inputs are verified. If there is an error in any input, it is displayed under the input field
// If all inputs are correct, the receipt is generated.

function formSubmit() {

    // clearing all error statements and previous recepit using class errorMsg
    document.querySelectorAll('.errorMsg').forEach(element => {
        element.textContent = "";
    });
    document.getElementById('receipt').innerHTML="";
    let error = "";

    // the format required for the phone number
    var regexNumber = /^\([0-9]{3}\)-[0-9]{3}-[0-9]{4}$/;
    var Number = document.getElementById('phNumber').value;

    // getting input of items- tshirt, caps and jackets
    let tshirts = document.getElementById('tshirts').value;
    let caps = document.getElementById('caps').value;
    let jackets = document.getElementById('jackets').value;
    
    // testing phone number format
    if (!regexNumber.test(Number)) {
        error = "Please check the phone number";
        document.getElementById('errorNumber').innerHTML = error;
    }

    // checking if the tshirt quantity is a positive integer and parsing if it is
    if (isNaN(tshirts) || parseInt(tshirts) < 0) {
        error = "Tshirt Quantity is invalid <br/>";
        document.getElementById('errorTshirts').innerHTML = error;
    }
    else {
        tshirts = parsing(tshirts);
    }

    // checking if the cap quantity is a positive integer and parsing if it is
    if (isNaN(caps) || parseInt(caps) < 0) {
        error = "Cap Quantity is invalid <br/>";
        document.getElementById('errorCaps').innerHTML = error;
    }
    else {
        caps = parsing(caps);
    }

    // checking if the jacket quantity is a positive integer and parsing if it is
    if (isNaN(jackets) || parseInt(jackets) < 0) {
        error = "Jackets Quantity is invalid <br/>";
        document.getElementById('errorJackets').innerHTML = error;
    }
    else {
        jackets = parsing(jackets);
    }

    // if there is no error message, that is, there are no errors in user input, print recipt is called
    // we pass quantities of all the items (tshirts, jackets and caps) in the function printReceipt.
    // the receipt is only printed if all the inputs are correct 
    if (error == "") {
        printReceipt(tshirts, caps, jackets);
    }
    return false;
}

// function to parse value. The value is 0 for quantities that are empty strings. 
function parsing(quantity) {
    if (quantity.trim() == '') {
        quantity = 0;
    }
    else {
        quantity = parseInt(quantity);
    }
    return quantity;
}

// printing receipts using tshirts,caps and jackets as arguments.
function printReceipt(tshirts, caps, jackets) {

    // unit cost of tshirt, cap and jacket
    let tshirtUnitCost = 15;
    let capUnitCost = 10;
    let jacketUnitCost = 50;

    // cost of tshirts, caps and jackets purchased are calculated. The quantity is multiplied by unit cost
    let tshirtsCost = tshirts * tshirtUnitCost;
    let capsCost = caps * capUnitCost;
    let jacketsCost = jackets *jacketUnitCost;

    // total quantity of the items purchased by the customer
    let quantity = tshirts + jackets +caps;
    // cost of all items before tax
    let cost = tshirtsCost + capsCost + jacketsCost;
    // tax (13%) amount of the purchased items 
    let tax = 0.13 * cost;
    // total cost including tax
    totalCost = tax + cost;

    //printing receipt in a table 
    let table = `<table border = '1' align="center">`;
    table += `<tr>`;
    table += `<td colspan = '4' style='border:none;'> <h2> Receipt </h2> </td>`;
    table += `</tr>`;

    // printing customer name and phone number
    table += `<tr>`;
    table += `<td colspan = '2' style='border:none;'> <b> Customer Name </b>: ${document.getElementById('custName').value}<br/>
                     <b> Phone Number </b>: ${document.getElementById('phNumber').value} </td>`;
    table += `</tr>`;

    // headings of the table
    table += `<tr>`;
    table += `<td> Item </td>`;
    table += `<td> Unit Price </td>`;
    table += `<td> Quantity </td>`;
    table += `<td> Total Item Price </td>`;
    table += `</tr>`;

    // printing items, quantities, unit price and total item price
    for (var i = 0; i < 3; i++) {
        table += '<tr>';

        if (i == 0 && tshirts != 0) {             // printing T-shirt quantity, unit price and cost
            table += '<td> T-shirt </td>';
            table += `<td> $${tshirtUnitCost} </td>`;
            table += `<td> ${tshirts} </td>`;
            table += `<td> $ ${tshirtsCost} </td>`;
        }

        if (i == 1 && caps != 0) {               // printing caps, unit price, quantity and cost
            table += `<td> Cap </td>`;
            table += `<td> $${capUnitCost} </td>`;
            table += `<td> ${caps} </td>`;
            table += `<td> $ ${capsCost} </td>`;
        }

        if (i == 2 && jackets != 0) {           // printing jackets, quantity, unit price and cost
            table += '<td> Jacket </td>';
            table += `<td> $${jacketUnitCost} </td>`;
            table += `<td> ${jackets} </td>`;
            table += `<td> $ ${jacketsCost} </td>`;
        }
    }

    // printing total before tax
    table += `<tr>`;
    table += `<td colspan = '3' style='border:none;'> Total </td>`;
    table += `<td style='border:none;'> $${cost} </td>`;
    table += `</tr>`;

    // printing tax amount
    table += `<tr>`;
    table += `<td colspan = '3' style='border:none;'> Tax (13%) </td>`;
    table += `<td style='border:none;'> $${tax.toFixed(2)} </td>`;
    table += `</tr>`;

    //printing total cost including tax
    table += `<tr>`;
    table += `<td colspan = '2' style='border:none;'> Total Amount </td>`;
    table += `<td style='border:none;'> ${quantity} </td>`;
    table += `<td style='border:none;'> $${totalCost.toFixed(2)} </td>`;
    table += `</tr>`;

    table += `</table>`;
    document.getElementById('receipt').innerHTML = table;
}