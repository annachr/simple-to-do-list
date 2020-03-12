const newInput = document.getElementById('newInput');
const inputField = document.getElementById('inputField');
const listItems = document.getElementById('myList');
const doneItems = document.getElementById('doneItems');

newInput.addEventListener('submit', (e) => {
  e.preventDefault();
  newItem(inputField.value);
})

function newItem() {
  const htmlText = `
    <li>
      <span>${inputField.value}</span>
      <button onclick="deleteItem(this)">Delete</button>
      <button onclick="doneItem(this)">Done</button>
    </li>`;
  listItems.insertAdjacentHTML('beforeend', htmlText);
  inputField.value = '';
  inputField.focus();
}

function doneItem(param) {
  const completeItem = `
  <li>
    ${param.parentElement.firstElementChild.textContent}
  </li>`;
  doneItems.insertAdjacentHTML('beforeend', completeItem);
  param.parentElement.remove();
  console.log(completeItem)
}

function deleteItem(toBeDeleted) {
  toBeDeleted.parentElement.remove()
}



