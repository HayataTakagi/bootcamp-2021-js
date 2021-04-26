class TodoForm {
    constructor(todoList) {
        this.todoName = "";
        this.button = document.getElementById("submitButton");
        this.input = document.getElementById("todoNameInput");
        this.todoList = todoList;
    }
    async mount() {
        this.button.addEventListener('click', event => {
            this.todoName = this.input.value;
            fetch("http://localhost:3000/todo", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name: this.todoName})
            })
                .then(response => response.json())
                .then(data => {
                    this.todoList.appendTodo(data.id, data.name, data.done);
                    this.todoName = "";
                    this.todoList.renderer();
                    this.renderer();
                });
        });
    }
    renderer() {
        this.input.value = this.todoName;
    }
}

export default TodoForm;
