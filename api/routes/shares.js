var express = require('express');
var router = express.Router();

const shareController = require('../controllers').share;

router.get('/', shareController.list);
router.get('/:id', shareController.getById);
router.post('/', shareController.add);
router.put('/:id', shareController.update);
router.delete('/:id', shareController.delete);

module.exports = router;
