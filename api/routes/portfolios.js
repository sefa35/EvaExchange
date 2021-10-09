var express = require('express');
var router = express.Router();

const portfolioController = require('../controllers').portfolio;

router.get('/', portfolioController.list);
router.get('/:id', portfolioController.getById);
router.post('/', portfolioController.add);
router.put('/:id', portfolioController.update);
router.delete('/:id', portfolioController.delete);

module.exports = router;
