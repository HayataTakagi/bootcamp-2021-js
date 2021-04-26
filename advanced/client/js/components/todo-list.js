import Todo from "./todo.js";

const todoListDom = document.getElementById("todoUl");

class TodoList {
    constructor() {
        this.todoList = [
            new Todo(1, "hogehoge", false)
        ];
    }

    mount() {
        fetch("http://localhost:3000/todo")
            .then(response => response.json())
            .then(data => {
                for (const item of data.todoList) {
                    this.todoList.push(new Todo(item.id, item.name, item.done));
                }
            }).then(() => this.renderer());
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
