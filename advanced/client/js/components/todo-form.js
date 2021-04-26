import Api from "../api.js";

class TodoForm {
    constructor(todoList) {
        this.todoName = "";
        this.button = document.getElementById("submitButton");
        this.input = document.getElementById("todoNameInput");
        this.todoList = todoList;
    }
    async mount() {
        this.button.addEventListener('click', async (event) => {
            this.todoName = this.input.value;
            const res = await Api.postTodoItem(this.todoName);
            this.todoList.appendTodo(res.id, res.name, res.done);
            this.todoName = "";
            this.todoList.renderer();
            this.renderer();
        });
    }
    renderer() {
        this.input.value = this.todoName;
    }
}

export default TodoForm;
