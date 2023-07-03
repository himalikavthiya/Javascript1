let budget = [];
let totalAmount = 0;
let totalExpenses = 0;
let balance = 0;

const setBudgetInput = document.getElementById('setBudgetInput');
const setBudgetBtn = document.getElementById('setBudgetBtn');
const newBudgetBtn = document.getElementById('addNewBudgetbtn');
const totalAmountDis = document.getElementById('totalamount');

const expenseDesInput = document.getElementById('expenseDes');
const expenseAmountInput = document.getElementById('expenseAmount');
const addExpenseBtn = document.getElementById('addExpenseBtn');
const totalExpensesDis = document.getElementById('totalExpenses');
const balanceDis = document.getElementById('balanceAmount');

setBudgetBtn.addEventListener('click', setBudget);
newBudgetBtn.addEventListener('click', addNewBudget);
addExpenseBtn.addEventListener('click', addExpense);
// set budget amount
function setBudget() {
    const amount = +setBudgetInput.value;

    if (isNaN(amount) || amount <= 0) {
        document.getElementById("error").innerHTML='Please enter a valid amount.';
        return;
    }
    totalAmount += amount;
    totalAmountDis.textContent = totalAmount;

    budget.push(totalAmount);
    setBudgetInput.value = '';
    console.log(amount);

    calculateBudget();
    saveBudgetData();
    
}
//newBudget add button
function addNewBudget() {
    const newAmount = parseInt(prompt("Enter new amount"));

    if (isNaN(newAmount) || newAmount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }
    const currentAmount = +totalAmountDis.textContent;
    totalAmount = currentAmount + newAmount;
    totalAmountDis.textContent = totalAmount;

    budget.push(newAmount);
    setBudgetInput.value = '';

    calculateBudget();
    saveBudgetData();
}

// add Expense in budget
function addExpense() {
    const desc = expenseDesInput.value;
    const amount = +expenseAmountInput.value;

    if (desc.trim() === '' || isNaN(amount) || amount <= 0) {
        document.getElementById('errormsg').innerHTML = 'Please enter a valid description and amount*';
        return;
    }
    totalExpenses += amount;
    totalExpensesDis.textContent = totalExpenses;

    const expenseproduct = {
        desc,
        amount,
    };
        budget.push(expenseproduct);
        expenseDesInput.value = '';
        expenseAmountInput.value = '';
        calculateBudget();
        displayItems();
        saveBudgetData();
}

//Budget calculation
function calculateBudget() {
    balance = totalAmount - totalExpenses;
    balanceDis.textContent = balance;
    
    if (balance < 0) {
        alert('Warning: Your balance is negative.');
    } 
}

//Budget display
function displayItems() {
    const itemList = document.getElementById('list');
    itemList.innerHTML = '';

    budget.forEach((item, index) => {
        const listItem = document.createElement('li');
        if (typeof item !== 'number') {
            const descriptionSpan = document.createElement('span');
            descriptionSpan.textContent = item.desc;
            const amountSpan = document.createElement('span');
            amountSpan.textContent = item.amount;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => deleteItem(index));
            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', () => editItem(index));

            listItem.appendChild(descriptionSpan);
            listItem.appendChild(amountSpan);
            listItem.appendChild(editBtn);
            listItem.appendChild(deleteBtn);
        }
        itemList.appendChild(listItem);
    });
}

//item delete
function deleteItem(index) {
    const item = budget[index];
    if (typeof item === 'object') {
        const confirmDelete = confirm('Are you sure you want to delete this item?');
        if (confirmDelete) {
            const deletedItemAmount = item.amount;
            budget.splice(index, 1);
            totalExpenses -= deletedItemAmount; // Subtract deleted item's amount
            balance = totalAmount - totalExpenses;

            calculateBudget();
            saveBudgetData();
            displayItems();
        }
    }
}

//item edit
function editItem(index) {
    const item = budget[index];
    if (typeof item === 'object') {
        const newDescription = prompt('Enter new description:', item.des);
        const newAmount = parseFloat(prompt('Enter new amount:', item.amount));
        if (newDescription.trim() !== '' && !isNaN(newAmount) && newAmount > 0) {
            const oldAmount = item.amount;
            item.desc = newDescription;
            item.amount = newAmount;

            totalExpenses -= oldAmount; // Subtract old amount
            totalExpenses += newAmount; // Add new amount
            balance = totalAmount - totalExpenses;

            calculateBudget();
            saveBudgetData();
            displayItems();
        } else {
            alert('Invalid input. Please enter a valid description and amount.');
        }
    }
}

function saveBudgetData() {
    const budgetData = {
        items: budget
    };

    localStorage.setItem('budgetData', JSON.stringify(budgetData));
}
