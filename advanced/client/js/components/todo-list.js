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
                    this.todoList.append(new Todo(item.id, item.name, item.done));
                }
            });
    }

    renderer() {
        for (const listItem of this.todoList) {
            todoListDom.appendChild(listItem.renderer());
        }
    }
}

export default TodoList;
