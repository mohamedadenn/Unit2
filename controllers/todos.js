  var Todo = require('../model/todo');

  module.exports = {
      create,
      index,
      deleteTodo
  };

  function deleteTodo(req, res) {
      console.log(req.params.id)
      Todo.deleteOne(req.params.id);
      res.redirect('/');
  }


  function create(req, res) {
      console.log(req.body)
      req.body.done = false;
      Todo.create(req.body);
      res.render('index', { todos: Todo.getAll() });
  }

  function index(req, res) {
      res.render('index', {
          todos: Todo.getAll()
      });
  }