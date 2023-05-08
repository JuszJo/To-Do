function resetInput(task) {
    task.value = '';
}

function handleTaskDelete() {
    let task = this.parentElement.previousElementSibling.innerHTML;

    for(let i = 0; i < localStorage.length; ++i) if(localStorage.getItem(localStorage.key(i)) == task) deleteTask(localStorage.key(i));

    let taskContainer = this.parentElement.parentElement;

    taskContainer.remove();
}

function deleteTask(id) {
    localStorage.removeItem(id);
}

function storeTask(task) {
    localStorage.setItem(`${Date.now()}`, task);
}

function addStyles(itemContainer, buttonContainer) {
    itemContainer.classList.add('item-container');
    buttonContainer.classList.add('button-div'); 
}

function addTaskToDOM(task) {
    let list = document.querySelector('.list');
    let itemContainer = document.createElement('div');
    let taskDOM = document.createElement('p');
    let buttonContainer = document.createElement('div')
    let button = document.createElement('button');

    addStyles(itemContainer, buttonContainer);

    button.innerHTML = "Delete";
    button.addEventListener('click', handleTaskDelete);

    taskDOM.innerHTML = task;

    buttonContainer.append(button);
    itemContainer.append(taskDOM, buttonContainer);

    list.append(itemContainer);
}

function handleSubmit(e) {
    if(e.key != "Enter") return;

    let task = document.getElementById('task');

    if(!task.value) return;

    storeTask(task.value);

    addTaskToDOM(task.value);

    resetInput(task);
}

function getAllTasks() {
    if(localStorage.length < 1) return;

    for(let i = 0; i < localStorage.length; ++i) {
        console.log(localStorage.getItem(localStorage.key(i)))
        addTaskToDOM(localStorage.getItem(localStorage.key(i)))
    };
}

getAllTasks();

let deleteButtons = document.querySelectorAll('button');

let submitButton = document.getElementById('task');

window.addEventListener('keydown', handleSubmit);