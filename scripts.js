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
    const newRow = document.createElement('tr');

    const newType = document.createElement('td');
    newType.classList.add('td');
    newType.innerText = type.value;

    const newDate = document.createElement('td');
    newDate.classList.add('td');
    newDate.innerText = date.value;

    const newDescription = document.createElement('td');
    newDescription.classList.add('td');
    newDescription.innerText = description.value;

    const newLocale = document.createElement('td');
    newLocale.classList.add('td');
    newLocale.innerText = locale.value;

    const newAmount = document.createElement('td');
    newAmount.classList.add('td');
    newAmount.innerText = amount.value;

    const newDeleteButton = document.createElement('button');
    newDeleteButton.setAttribute = ('id', 'delete');
    newDeleteButton.setAttribute = ('onClick', 'deleteExpense(event');
    newDeleteButton.classList.add('td');
    //newDeleteButton.setAttribute = ('type', 'button');
    newDeleteButton.innerText = 'Delete';

    //newDeleteButtonTD.setAttribute('id', 'delete');
    //newDeleteButtonTD.setAttribute('type', 'button');
    //newDeleteButtonTD.innerText = `<i class="fa-solid fa-trash" onclick="deleteExpense(event)"></i>`;

    //const newDeleteButtonButton = document.createElement('button');
    //newDeleteButtonButton.classList.add('td');
    //newDeleteButtonButton.setAttribute('type', 'button');

    //const deleteIcon = document.getElementById('delete');

    //    const

    //  < button id="delete" type="button" > <i class="fa-solid fa-trash" onclick="deleteExpense(event)"></i></button ></td > ');
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
    locale.value = '';

    newRow.appendChild(newAmount);
    tableBody.appendChild(newRow);
    amount.value = '';

    newRow.appendChild(newDeleteButton)
    tableBody.appendChild(newRow);

    //newDeleteButton.setAttribute = ('onClick', 'deleteExpense(event');
    //newDeleteButtonButton

    //newRow.appendChild(newDeleteButtonButton)
    //tableBody.appendChild(newRow);
    //newDeleteButtonButton

    //newRow.nextSibling(deleteButtonTD);
    //tableBody.appendChild(newRow);
    //deleteIcon.innerText = '<i class="fa-solid fa-trash" onclick="deleteExpense(event)"></i>';
    //tableBody.nextSibling = '<i class="fa-solid fa-trash" onclick="deleteExpense(event)"></i>';


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

