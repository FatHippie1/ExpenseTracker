const add = document.getElementById('addexpense');
const type = document.getElementById('type');
const date = document.getElementById('date');
const description = document.getElementById('description');
const locale = document.getElementById('locale');
const amount = document.getElementById('amount');
const tableBody = document.getElementById('table-body');


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

    const newIconTD = document.createElement('td');
    newIconTD.classList.add('td');
    newIconTD.setAttribute('id', 'iconTD');

    const newButtonIcon = document.createElement('i');
    newButtonIcon.classList.add('fa-solid');
    newButtonIcon.classList.add('fa-trash');
    newButtonIcon.setAttribute('onclick', 'deleteExpense(event)');
    newButtonIcon.setAttribute('type', 'button');
    newButtonIcon.setAttribute('id', 'deleteIcon');
    newIconTD.appendChild(newButtonIcon);


    newRow.appendChild(newType);
    tableBody.appendChild(newRow);
    type.value = '';

    newRow.appendChild(newDate);
    tableBody.appendChild(newRow);
    date.value = '';

    newRow.appendChild(newDescription);
    tableBody.appendChild(newRow);
    description.value = '';

    newRow.appendChild(newLocale);
    tableBody.appendChild(newRow);
    locale.value = '';

    newRow.appendChild(newAmount);
    tableBody.appendChild(newRow);
    amount.value = '';

    newRow.appendChild(newIconTD);
    tableBody.appendChild(newRow);

    console.log('Expense Added!');
}

function deleteExpense(e) {
    const target = e.target;
    const parentTD = target.parentElement;
    const parentTR = parentTD.parentElement;

    parentTR.remove();
    console.log('Expense Deleted!');
}

