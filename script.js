const form = document.getElementById("form");
const input = document.getElementById("input");
const todoUl = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach((todo) => addTodo(todo));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoLi = document.createElement("li");
    if (todo && todo.completed) {
      todoLi.classList.add("completed");
    }

    todoLi.innerText = todoText;

    todoLi.addEventListener("click", () => {
      todoLi.classList.toggle("completed");
      updateLS();
    });

    todoLi.addEventListener("contextmenu", (e) => {
      e.preventDefault();

      todoLi.remove();
      updateLS();
    });

    todoUl.appendChild(todoLi).classList.add('tasks-todo')

    input.value = "";

    updateLS();
  }
}

function updateLS() {
    todosLi = document.querySelectorAll('li')

    const todos = []

    todosLi.forEach(todoLi => {
        todos.push({
            text: todoLi.innerText,
            completed: todoLi.classList.contains('completed')
        })
    });

    localStorage.setItem('todos', JSON.stringify(todos))
}