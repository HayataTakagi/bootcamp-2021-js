import TodoList from "./components/todo-list.js";
import TodoForm from "./components/todo-form.js";

const main = () => {
    const todolist = new TodoList();
    const todoForm = new TodoForm(todolist);
    todolist.mount();
    todoForm.mount();
    todolist.renderer();
};

main();
