let inputField = document.querySelector('#todoInput');
let searchField = document.querySelector('#searchInput');
let list = document.querySelector('.list');
let error = document.querySelector('.error');

function addTodo() {
  let value = inputField.value.trim();
  if (value) {
    const todoItem = document.createElement('ul');
    todoItem.innerHTML = `
      <li>
        <span class="todo-text">${value}</span>
        <button class='deletebtn' onclick='deleteTodo(this)'>Delete</button>
      </li>`;
    list.appendChild(todoItem);

    inputField.value = '';
    error.textContent = '';
  } else {
    error.textContent = 'Please enter a todo item.';
  }
}

function deleteTodo(button) {
  button.closest('ul').remove();
}

function searchTodos() {
  const searchValue = searchField.value.toLowerCase();
  const todos = document.querySelectorAll('.list ul');

  todos.forEach(todo => {
    const text = todo.querySelector('.todo-text').textContent.toLowerCase();
    todo.style.display = text.includes(searchValue) ? '' : 'none';
  });
}
