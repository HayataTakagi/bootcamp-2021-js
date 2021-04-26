
const main = () => {
  const todoListDom = document.getElementById("todoUl");
  let todoListData = [];

    fetch("http://localhost:3000/todo")
        .then(response => response.json())
        .then(data => {
            for (const todoItemData of data.todoList) {
                todoListDom.appendChild(getTodoItemDom(todoItemData));
            }
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
}

main();
