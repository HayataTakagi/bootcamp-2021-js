class Todo {
    constructor(id, name, done) {
        this.id = id;
        this.name = name;
        this.done = done;
    }
    mount() {

    }
    renderer() {
        return getTodoItemDom(this);
    }
}

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

export default Todo;
