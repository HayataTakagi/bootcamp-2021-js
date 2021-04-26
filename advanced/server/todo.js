const express = require("express");
const router = express.Router();
const TodoList = require("./model");

const todoList = new TodoList();

router.post("/", (req, res, next) => {
    const addedItem = todoList.addItem(escapeHTML(req.body.name));
    return res.status(201).send(addedItem);
});

router.get("/", (req, res, next) => {
    return res.send({todoList: todoList.getList()});
});

router.patch("/:id", (req, res, next) => {
    const id = req.params.id;
    const todo = todoList.find(todo => todo.id == id);
    const {name, done} = req.body;
    todo.name = name;
    todo.done = done;
    return res.status(201).send(todo);
});

router.delete("/:id", (req, res, next) => {
    const id = req.params.id;
    const index = todoList.findIndex(todo => todo.id == id);
    todoList.splice(index, 1);
    return res.status(204).send("done");
});


const escapeHTML = (s) => {
    return s.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

module.exports = router;
