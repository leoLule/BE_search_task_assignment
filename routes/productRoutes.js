const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/', productsController.getAllProducts);

router.put('/:id/increment', productsController.incrementProduct);

module.exports = router;
