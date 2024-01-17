let title = document.getElementById('title');
let priority = document.getElementById('priority');
let color = document.getElementById('color');
let description = document.getElementById('description');
let addBtn = document.getElementById('addReminder');
let showBtn = document.getElementById('showReminders');
let content = document.getElementById('content');
let table = document.getElementById('table');

table.style.border = '4px ridge black';
table.style.visibility = 'hidden';
let reminders = [];

function Reminder(title, priority, color, description) {
    this.title = title.value,
    this.priority = priority.value,
    this.color = color.value,
    this.description = description.value
} 

function addReminder() {
    if (
        !title.value ||
        !priority.value ||
        !color.value ||
        !description.value
    ) {
        alert('Please make sure you fill in all the fields!');
        return;
    }

    let reminder = new Reminder(title, priority, color, description);
    reminders.push(reminder);
    title.value = '';
    priority.value = ''
    color.value = '' 
    description.value = ''

}

function showReminders() {
    table.innerHTML = '';
    if (reminders.length < 1) {
        alert('You don\'t have any reminders!');
    } else {
        table.style.visibility = 'visible';
        for (let i = 0; i < reminders.length; i++) {
            let tableRow = table.insertRow(i);
            let object = reminders[i];
            let keys = Object.keys(object);

            let titleCell = tableRow.insertCell(0);
            titleCell.innerText = object.title;
            titleCell.style.color = object.color;
            titleCell.style.fontWeight = 'bold';

            for (let b = 1; b < keys.length; b++) {
                let key = keys[b];
                let value = object[key];
                let tableCells = tableRow.insertCell(b);
                tableCells.innerText = `${value}`;
            }
        }
    }
}

addBtn.addEventListener('click', function() {
    addReminder();
})

showBtn.addEventListener('click', function() {
    showReminders();
})