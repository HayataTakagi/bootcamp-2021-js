const endpoint = "http://localhost:3000";

class Api {
    static getTodoList() {
        return fetch(`${endpoint}/todo`)
            .then(response => response.json())
    }

    static postTodoItem(name) {
        return fetch("http://localhost:3000/todo", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name: name})
        })
            .then(response => response.json())
    }
}

export default Api;
