var express = require('express');
var router = express.Router();

const userController = require('../controllers').user;

router.get('/', userController.list);
router.get('/:id', userController.getById);
router.post('/', userController.add);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

module.exports = router;
