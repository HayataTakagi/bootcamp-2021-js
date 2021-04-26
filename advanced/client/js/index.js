import TodoList from "./components/todo-list.js";

const main = () => {
    const todoListDom = document.getElementById("todoUl");
    const submitButton = document.getElementById("submitButton");
    const todoInput = document.getElementById("todoNameInput");

    let todoListData = [];

    const todolist = new TodoList();
    todolist.mount();
    todolist.renderer();


    submitButton.addEventListener('click', event => {
        fetch("http://localhost:3000/todo", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name: todoInput.value})
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                todoListDom.appendChild(getTodoItemDom(data));
                todoInput.value = "";
            });
    });
};

const getTodoItemDom = (todoData) => {
    const newLm = document.createElement('li');
    newLm.classList.add('todo-item')
    newLm.innerHTML = `<label class="todo-toggle__container">
              <input
                data-todo-id="${todoData.id}"
                type="checkbox"
                class="todo-toggle"
                value="checked"
              />
              <span class="todo-toggle__checkmark"></span>
            </label>
            <div class="todo-name">${todoData.name}</div>
            <div data-todo-id="${todoData.id}" class="todo-remove-button">x</div>`;
    return newLm;
};

main();
