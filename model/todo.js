const todos = [];

function create(todo) {
    todo.id = Date.now() % 1000000;
    todo.done = false;
    console.log(todo);
    todos.push(todo);

}

function getAll() {
    return todos;
}

function deleteOne(id) {
    const idx = todos.findIndex(todo => todo.id === parseInt(id));
    todos.splice(idx, 1);
}

module.exports = {
    create,
    getAll,
    deleteOne
};