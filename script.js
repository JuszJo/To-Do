
function resetInput(task) {
    task.value = ''
}

function handleTaskDelete() {
    let taskContainer = this.parentElement.parentElement;

    taskContainer.remove();
}

function storeTask(task) {
    localStorage.setItem(`${Date.now()}`, task)
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

    storeTask(task.value)

    addTaskToDOM(task.value)

    resetInput(task)
}


let deleteButtons = document.querySelectorAll('button');

let submitButton = document.getElementById('task');

deleteButtons.forEach(value => value.addEventListener('click', handleTaskDelete));

window.addEventListener('keydown', handleSubmit)

