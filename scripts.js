const add = document.getElementById('addexpense');
const type = document.getElementById('type');
const date = document.getElementById('date');
const description = document.getElementById('description');
const locale = document.getElementById('locale');
const amount = document.getElementById('amount');
const expenseItem = document.querySelector('table');
const expenseType = document.querySelector('table');
const tableBody = document.getElementById('table-body');

//add.addEventListener(click, function () {
//  console.log('clicked');
//})

function addExpense(e) {
    var newRow = document.createElement('tr');

    var newType = document.createElement('td');
    newType.classList.add('td');
    newType.innerText = type.value;

    var newDate = document.createElement('td');
    newDate.classList.add('td');
    newDate.innerText = date.value;

    var newDescription = document.createElement('td');
    newDescription.classList.add('td');
    newDescription.innerText = description.value;

    var newLocale = document.createElement('td');
    newLocale.classList.add('td');
    newLocale.innerText = locale.value;

    var newAmount = document.createElement('td');
    newAmount.classList.add('td');
    newAmount.innerText = amount.value;

    //var deleteButton = document.createElement('<td><button id="delete" type="button"><i class="fa-solid fa-trash" onclick="deleteExpense(event)"></i></button></td>');
    //deleteButton.classList.add('')

    newRow.appendChild(newType);
    tableBody.appendChild(newRow);
    type.value = '';

    newRow.appendChild(newDate);
    tableBody.appendChild(newRow);
    date.value = '';

    newRow.appendChild(newDescription);
    tableBody.appendChild(newRow);
    description.value - '';

    newRow.appendChild(newLocale);
    tableBody.appendChild(newRow);
    description.value = '';

    newRow.appendChild(newAmount);
    tableBody.appendChild(newRow);
    amount.value = '';
    /*
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
*/

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

