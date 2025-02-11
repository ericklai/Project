const todoList = loadTasksFromLocalStorage()
renderToDolist()

function loadTasksFromLocalStorage() {
    const todoListJSON = localStorage.getItem('todoList')
    return todoListJSON ? JSON.parse(todoListJSON) : []
}

function saveTasksToLocalStorage(){
    localStorage.setItem('todoList', JSON.stringify(todoList))
}

function renderToDolist(){
let todoListHTML = ''
for (let i = 0; i < todoList.length; i++) {
    let todoObject = todoList[i]
    const {name, dueDate} = todoObject
    let html = `
        <input type="checkbox" class="checkbox"/>
        <span>${name}</span>
        <span>${dueDate}</span> 
        <button onclick="
        todoList.splice(${i}, 1)
        localStorage.setItem('todoList', JSON.stringify(todoList))
        renderToDolist()
        " class="delete-button">Delete</button>
        `
    todoListHTML += html
}
console.log(todoListHTML)
document.querySelector('.js-toDo-List')
.innerHTML = todoListHTML
}
function addToDo() {
    const inputElement =document.querySelector('.js-name-input')
    const name =inputElement.value
    
    const dateInputElement = document.querySelector('.js-due-date-input')
    const dueDate = dateInputElement.value
    
    if (name === '' || dueDate === '') {
        alert('Please enter a task and time')
    }else{
        todoList.push({name, dueDate})
console.log(todoList)
inputElement.value = ''
dateInputElement.value = ''
saveTasksToLocalStorage()
renderToDolist()
}
}



