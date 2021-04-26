class Todo {
    constructor(id, name, done) {
        this.id = id;
        this.name = name;
        this.done = done;
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            done: this.done
        };
    }
}

class TodoList {
    constructor() {
        this.todoList = [];
    }
    getList() {
        return this.todoList;
    }
    addItem(name) {
        const id = this.todoList.length ? this.todoList[this.todoList.length - 1].id + 1 : 0;
        const item = new Todo(id, name, false);
        this.todoList.push(item);
        return item;
    }
}

module.exports = TodoList;
