
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

function addTaskToDOM(task) {
    let itemContainer = document.createElement('div');
    let buttonContainer = document.createElement('button')

}

function handleSubmit(e) {
    if(e.key != "Enter") return;

    let task = document.getElementById('task');

    if(!task.value) return;

    storeTask(task.value)

    resetInput(task)
}


let deleteButtons = document.querySelectorAll('button');

let submitButton = document.getElementById('task');

deleteButtons.forEach(value => value.addEventListener('click', handleTaskDelete));

window.addEventListener('keydown', handleSubmit)

