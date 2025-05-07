const todoList = loadTasksFromLocalStorage()
renderToDolist()

function loadTasksFromLocalStorage() {
    try {
        const todoListJSON = localStorage.getItem('todoList');
        return todoListJSON ? JSON.parse(todoListJSON) : [];
    } catch (error) {
        console.error('Error loading tasks:', error);
        return [];
    }
}

function saveTasksToLocalStorage(){
    localStorage.setItem('todoList', JSON.stringify(todoList))
}

function renderToDolist(){
let todoListHTML = ''
for (let i = 0; i < todoList.length; i++) {
    let todoObject = todoList[i]
    const {name, dueDate, completed} = todoObject
    todoListHTML += `
     <div class="todo-item" data-index="${i}">
        <input type="checkbox" class="checkbox" ${completed ? 'checked' : ''}/>
        <span class="${completed ? 'strikethrough' : ''}">${name}</span>
        <span class="${completed ? 'strikethrough' : ''}">${dueDate}</span> 
        <button onclick="
        todoList.splice(${i}, 1)
        localStorage.setItem('todoList', JSON.stringify(todoList))
        renderToDolist()
        " class="delete-button">Delete</button>
        </div>
        `
    
}
// console.log(todoListHTML)
document.querySelector('.js-toDo-List')
.innerHTML = todoListHTML
}

document.querySelector('.js-toDo-List').addEventListener('change', function(event) {
    if (event.target.classList.contains('checkbox')) {
        const index = event.target.closest('.todo-item').dataset.index;
        todoList[index].completed = event.target.checked;
        saveTasksToLocalStorage();
        renderToDolist();
    }
});

function addToDo() {
    const inputElement =document.querySelector('.js-name-input')
    const name =inputElement.value
    
    const dateInputElement = document.querySelector('.js-due-date-input')
    const dueDate = dateInputElement.value
    
    if (name === '' || dueDate === '') {
        alert('Please enter a task and time')
    }else{
        todoList.push({name, dueDate, completed: false})
console.log(todoList)
inputElement.value = ''
dateInputElement.value = ''
saveTasksToLocalStorage()
renderToDolist()
}
}

// let theme = document.querySelector('.theme-btn').addEventListener('click', ()=>{
//     document.body.style.background = 'black'
//     let theme = document.querySelector('.theme-btn')
//     theme.style.background = 'grey'

// }
// )

