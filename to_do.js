const inputField = document.getElementById('inputField')
const todoItems = document.getElementById('todoItems')
const doneItems = document.getElementById('doneItems')
const createItemButton = document.getElementById('createInput');
const clearAll = document.getElementById('clearAll')

let toDos = []
let done = []

function init() {
  clearInput()
}

inputField.addEventListener('keyup', function (event) {
  createItemButton.disabled = Boolean(!event.target)
})

function addItem() {
    const itemToAdd = {
      id: toDos.length + 1,
      name: inputField.value,
    }
    toDos.push(itemToAdd)
    clearInput()
    displayToDo(itemToAdd)
}

function clearInput() {
  inputField.focus();
  inputField.value = ''
  createItemButton.disabled = true
}


function displayToDo(element) {
  const li = document.createElement('li')
  li.innerHTML = element.name;
  todoItems.appendChild(li);

  const doneBtn = document.createElement('button');
  doneBtn.className = 'doneButton';
  doneBtn.appendChild(document.createTextNode('✓'));
  li.appendChild(doneBtn);

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'deleteButton';
  deleteBtn.appendChild(document.createTextNode('✗'));
  li.appendChild(deleteBtn);

  doneBtn.addEventListener('click', addToDone)

  deleteBtn.addEventListener('click', removeItem);
}

function removeItem(e) {
  let li = e.target.parentElement;
  e.target.parentElement.remove(li);
}

function addToDone(e) {
  let doneItem = e.target.parentElement.firstChild.textContent
  // done.push({
  //   id: done.length + 1,
  //   name: doneItem
  // })
  displayDone(doneItem);
  e.target.parentElement.remove();
  console.log(doneItem)
}

// function addToDone() {
//   const doneItem = toDos.pop()
//   done.push({
//     id: done.length + 1,
//     name: doneItem.name
//   })
//   displayDone(doneItem);
// }

function displayDone(element) {
  const list = document.createElement('li')
  list.innerHTML = element
  doneItems.appendChild(list)
  // refreshToDos()
}

// function refreshToDos() {
//   todoItems.lastChild.remove()
// }

clearAll.addEventListener('click', clear)
function clear() {
  window.location.reload()
}

