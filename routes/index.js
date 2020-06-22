var express = require('express');
var router = express.Router();
var todoCtrl = require('../controllers/todos');


router.get('/', todoCtrl.index);

router.post('/', todoCtrl.create);
router.delete('/:id', todoCtrl.deleteTodo);

module.exports = router;