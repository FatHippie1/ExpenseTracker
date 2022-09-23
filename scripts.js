const add = document.getElementById('addexpense');
const type = document.getElementById('type');
const date = document.getElementById('date');
const description = document.getElementById('description');
const locale = document.getElementById('locale');
const amount = document.getElementById('amount');
const expenseItem = document.querySelector('table');
const expenseType = document.querySelector('table');


//add.addEventListener(click, function () {
//  console.log('clicked');
//})

function addExpense(e) {

    expenseItem.innerHTML += `
    <td>${type.value}</td>
    <td>${date.value}</td>
    <td>${description.value}</td>
    <td>${locale.value}</td>
    <td>${amount.value}</td>
    <td><button id="delete" type="button"><i class="fa-solid fa-trash" onclick="deleteExpense(event)"></i></button></td> 
    `
    expenseType.innerHTML.insertAdjacentElement(expenseItem) = `
    <td>${type.value}</td>`
    //if (type.value == 'bitcoin') {
    //  icon += `<i class="fa-solid fa-bitcoin-sign"></i>`
    // }
    console.log('clicked button');
    console.log(type.value);
    console.log(date.value);
    console.log(description.value);
    console.log(locale.value);
    console.log(amount.value);

}

function deleteExpense(e) {
    const target = e.target;
    const parentButton = target.parentElement;
    const parentTD = parentButton.parentElement;
    const parentTR = parentTD.parentElement;
    //const parentTB = parentTR.parentElement;
    parentTR.remove();
    console.log('deleted!');
}

