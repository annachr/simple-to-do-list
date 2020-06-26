const inputField = document.getElementById('inputField')
const todoItems = document.getElementById('todoItems')
const doneItems = document.getElementById('doneItems')
const createItemButton = document.getElementById('createInput');
const clearAll = document.getElementById('clearAll')
const addToFavourites = document.getElementById('addFavourite')
const select = document.getElementById('select')
const favourite = document.getElementById('favourite')
const removeFavourite = document.getElementById('removeFavourite')
const options = document.querySelectorAll('option')

let toDos = []
let favourites = []
let done = []

function init() {
  clearInput();
}

inputField.addEventListener('keyup', function (event) {
  createItemButton.disabled = Boolean(!event.target)
})

function addItem() {
    const itemToAdd = {
      id: toDos.length + 1,
      name: inputField.value,
    }
    toDos.push(itemToAdd);
    clearInput();
    displayToDo(itemToAdd);
}

addToFavourites.addEventListener('click', addFavourite);

function addFavourite() {
  const favouriteToAdd = inputField.value;
  favourites.push(favouriteToAdd);
  displayFavourite(favouriteToAdd);
  clearInput();
}

function displayFavourite() {
  const option = document.createElement('option');
  option.innerText = inputField.value;
  select.appendChild(option);
  console.log(inputField.value)

}

function clearInput() {
  inputField.focus();
  inputField.value = '';
  createItemButton.disabled = true;
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

  doneBtn.addEventListener('click', addToDone);

  deleteBtn.addEventListener('click', removeItem);
}

favourite.addEventListener('click', addFavouriteToDo)
function addFavouriteToDo() {
  const itemToAdd = {
    id: toDos.length + 1,
    name: select.value,
  }
  toDos.push(itemToAdd);
  clearInput();
  displayToDo(itemToAdd);
}


function removeItem(e) {
  let li = e.target.parentElement;
  e.target.parentElement.remove(li)
}

removeFavourite.addEventListener('click', removeFavouriteItem)

function removeFavouriteItem() {
  select.remove(select.selectedIndex)
}

function addToDone(e) {
  let doneItem = e.target.parentElement.firstChild.textContent;
  displayDone(doneItem);
  e.target.parentElement.remove();
}

function displayDone(element) {
  const list = document.createElement('li');
  list.innerHTML = element;
  doneItems.appendChild(list)
}


clearAll.addEventListener('click', clear);
function clear() {
  window.location.reload()
}

