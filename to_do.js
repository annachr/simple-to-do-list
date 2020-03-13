const inputField = document.getElementById('inputField')
const todoItems = document.getElementById('todoItems')
const doneItems = document.getElementById('doneItems')

let toDos = []
let done = []

function clearInput() {
  inputField.focus();
  inputField.value = ' '
}

function addItem() {
  const itemToAdd = {
    id: toDos.length + 1,
    name: inputField.value
  }
  toDos.push(itemToAdd)
  clearInput()
  displayToDo(itemToAdd)
}

function displayToDo(element) {
  const li = document.createElement('li')
  li.innerHTML = element.name
  todoItems.appendChild(li)
}


function addToDone() {
  const doneItem = toDos.pop()
  done.push({
    id: done.length + 1,
    name: doneItem.name
  })
  displayDone(doneItem);
}

function displayDone(element) {
  const list = document.createElement('li')
  list.innerHTML = element.name
  doneItems.appendChild(list)
  refreshToDos()
}

function refreshToDos() {
  todoItems.lastChild.remove()
}





