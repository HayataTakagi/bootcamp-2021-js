import Todo from "./todo.js";
import Api from "../api.js"

const todoListDom = document.getElementById("todoUl");

class TodoList {
    constructor() {
        this.todoList = [];
    }

    async mount() {
        const res = await Api.getTodoList();
        for (const item of res.todoList) {
            this.todoList.push(new Todo(item.id, item.name, item.done));
        }
        this.renderer();
    }

    renderer() {
        todoListDom.innerHTML = "";
        for (const listItem of this.todoList) {
            todoListDom.appendChild(listItem.renderer());
        }
    }

    appendTodo(id, name, done) {
        const newTodo = new Todo(id, name, done);
        this.todoList.push(newTodo);
    }
}

export default TodoList;
