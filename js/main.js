// VARIABLES====================
let toDoForm = document.getElementById('todo-form');
let toDoInput = document.getElementById('todo-input');
let toDoList = document.getElementById('todo-list');
let allBtn = document.getElementById('all');
let completedBtn = document.getElementById('completed');
let inCompletedBtn = document.getElementById('in-completed');
let toDoSubmitButton = document.getElementById('todo__submit-buttons');

// VARIABLES====================
// EVENTS=======================
toDoForm.addEventListener('submit', toDoFormAddItem);
toDoList.addEventListener('click', toDoListItemTextClick);
toDoList.addEventListener('click', deleteItem);
all.addEventListener('click', allList);
completedBtn.addEventListener('click', completedList);
inCompletedBtn.addEventListener('click', inCompletedList);
// EVENTS=======================
// FUNCTIONS====================
function toDoFormAddItem(e) {
    e.preventDefault();
    
    if(toDoInput.value != '') {
        // Creating item into toDoList
        let toDoInputValue = toDoInput.value;
        let li = document.createElement('li');
        let liContentSpan = document.createElement('span');
        let div = document.createElement('div');
        let buttonPencil = document.createElement('button');
        let buttonPencilIcon = document.createElement('i');
        let buttonDelete = document.createElement('button');
        let buttonDeleteIcon = document.createElement('i');
        let editInput = document.createElement('input');

        // Naming classes of created elements
        // ul > li 
        li.className = 'todo__item in-completed animate__animated  animate__fadeInRightBig';

        // ul > li > span
        liContentSpan.className = 'todo__item-content';
        liContentSpan.appendChild(document.createTextNode(toDoInputValue));
        li.appendChild(liContentSpan);

        // ul > input
        editInput.className = 'todo__edit-input';
        editInput.type = 'text';
        editInput.style.display = 'none';
        li.appendChild(editInput);

        // ul > li > div.todo__items-buttons    
        div.className = 'todo__item-buttons';
        li.appendChild(div);

        // ul > li > div.todo__items-buttons > button-pencil
        buttonPencil.className = 'todo__item-btn pencil';
        div.appendChild(buttonPencil);

        // ul > li > div.todo__items-buttons > button-pencil > icon
        buttonPencilIcon.className = 'fal fa-pencil';
        buttonPencil.appendChild(buttonPencilIcon);
        // ========

        // ul > li > div.todo__items-buttons > button-delete
        buttonDelete.className = 'todo__item-btn delete';
        div.appendChild(buttonDelete);
        // ul > li > div.todo__items-buttons > button-delete > icon
        buttonDeleteIcon.className = 'fal fa-times-circle';
        buttonDelete.appendChild(buttonDeleteIcon);
        toDoList.appendChild(li);
    }

    if(document.getElementById('todo-input').value == '') {
        alert('Sorry you entered empty value!!!');
    }
    document.getElementById('todo-input').value = '';

}
// Function for deleting item
function deleteItem(e) {
    li = e.target;
    if(li.classList.contains('delete')) {
        toDoList.removeChild(li.parentElement.parentElement);
    }
}
// Function for events on click of item
function toDoListItemTextClick(e) {
    let counter = 0;

    if(e.target.classList.contains('todo__item-content')) {
        if(e.target.parentElement.lastChild.lastChild.firstChild.classList.contains('fa-times-circle')) {
            e.target.parentElement.classList.add('completed');
            e.target.parentElement.lastChild.lastChild.firstChild.classList.remove('fa-times-circle')
            e.target.parentElement.lastChild.lastChild.firstChild.classList.add('fa-check-circle');
            e.target.parentElement.lastChild.lastChild.classList.remove('delete');
            e.target.parentElement.lastChild.lastChild.style.backgroundColor = '#75cea6';
            e.target.parentElement.lastChild.lastChild.style.color = '#fff';
            e.target.parentElement.lastChild.lastChild.style.borderColor = '#75cea6';
            e.target.parentElement.lastChild.firstChild.style.display = 'none';
            counter = 1;
            if(e.target.parentElement.classList.contains('completed')) {
                e.target.parentElement.classList.remove('in-completed');
                
            } 
        } 
    } 
    if(e.target.classList.contains('todo__item-content')) {
        if(e.target.parentElement.lastChild.lastChild.firstChild.classList.contains('fa-check-circle') && counter == 0) {
            e.target.parentElement.classList.remove('completed');
            e.target.parentElement.classList.add('in-completed');
            e.target.parentElement.lastChild.lastChild.firstChild.classList.add('fa-times-circle')
            e.target.parentElement.lastChild.lastChild.firstChild.classList.remove('fa-check-circle');
            e.target.parentElement.lastChild.lastChild.classList.add('delete');
            e.target.parentElement.lastChild.lastChild.style.backgroundColor = '#ff5252';
            e.target.parentElement.lastChild.lastChild.style.color = '#fff';
            e.target.parentElement.lastChild.lastChild.style.borderColor = '#ff5252';
            e.target.parentElement.lastChild.firstChild.style.display = 'block';
        }
    }
}
// Function for sorting elements
function allList(e) {
    let li = e.target.parentElement.parentElement.previousSibling.previousSibling.children
    for(let i = 0; i < li.length; i++) {
        if(li[i].classList.contains('in-completed')) {
            li[i].style.display  = 'flex';
        }
        if(li[i].classList.contains('completed')) {
            li[i].style.display  = 'flex';
        }
    }
}

function completedList(e) {
    let li = e.target.parentElement.parentElement.previousSibling.previousSibling.children
    for(let i = 0; i < li.length; i++) {
        if(li[i].classList.contains('in-completed')) {
            li[i].style.display  = 'none';
        }
        if(li[i].classList.contains('completed')) {
            li[i].style.display  = 'flex';
        }
    }
}

function inCompletedList(e) {
    let li = e.target.parentElement.parentElement.previousSibling.previousSibling.children
    for(let i = 0; i < li.length; i++) {
        if(li[i].classList.contains('in-completed')) {
            li[i].style.display = 'flex';
        }
        if(li[i].classList.contains('completed')) {
            li[i].style.display = 'none';
        }
    }
}
// Function for sorting elements
// FUNCTIONS====================
