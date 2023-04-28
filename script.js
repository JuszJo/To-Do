let submit = document.querySelector('input[type="submit"]');
let input = document.querySelector('input');
let list = document.querySelector('.list');
let arr = [];

input.focus()

function storage(value) {
    localStorage.setItem(`${parseInt(localStorage.length) + 1}`, value);
    console.log(localStorage.length)
}

function removeStorage(key) {
    localStorage.removeItem(key)
}

function addStyle(element) {
    element.style.display = "flex";
    element.style.alignItems = "center";
    element.style.padding = "1rem 1rem 1rem 0";
}

function getStorage() {
    if(parseInt(localStorage.length) > 0) {
        for(let i = 0; i < parseInt(localStorage.length); ++i) {
            let getdiv = document.createElement('div');
            let getelement = document.createElement('p');
            let getdeleteButton = document.createElement('button');

            addStyle(getdiv)
        
            getdeleteButton.innerHTML = "delete";
            
            let value = localStorage.getItem(`${i + 1}`);
            getelement.innerHTML = value;
            
            list.appendChild(getdiv);
            
            getdiv.append(getelement, getdeleteButton)
        
            getdeleteButton.addEventListener('click', () => {
                getdiv.remove();
                removeStorage(i + 1);
            });
        }
    }
}

getStorage();

input.addEventListener('keypress', (e) => {
    if(e.key == "Enter") {
        submit.click();
        input.value = "";
    }
})

submit.addEventListener('click', () => {
    let div = document.createElement('div');
    let element = document.createElement('p');
    let deleteButton = document.createElement('button');
    let key = parseInt(localStorage.length) + 1

    addStyle(div);

    deleteButton.innerHTML = "delete";
    
    let value = input.value;
    element.innerHTML = value;

    storage(value);
    
    list.appendChild(div);
    
    div.append(element, deleteButton)

    deleteButton.addEventListener('click', () => {
        div.remove();
        removeStorage(key)
    });

    input.value = "";

    input.focus()
});  
