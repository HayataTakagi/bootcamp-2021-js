import Todo from "./todo.js";
import Api from "../api.js"

class TodoList {
    constructor() {
        this.todoList = [];
        this.dom = document.getElementById("todoUl");
    }

    async mount() {
        const res = await Api.getTodoList();
        for (const item of res.todoList) {
            this.todoList.push(new Todo(item.id, item.name, item.done));
        }
        this.renderer();
    }

    renderer() {
        this.dom.innerHTML = "";
        for (const listItem of this.todoList) {
            this.dom.appendChild(listItem.renderer());
        }
    }

    appendTodo(id, name, done) {
        const newTodo = new Todo(id, name, done);
        this.todoList.push(newTodo);
    }
}

export default TodoList;
