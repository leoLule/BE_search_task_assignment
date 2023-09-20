const express = require('express');
const router = express.Router();
const { getAllProductsModel } = require('../models/productsModel.js');
const productsController = require('../controllers/productsController');

router.get('/', (req, res) => {
  try {
    const allProducts = getAllProductsModel();
    console.log(allProducts);
    res.send(allProducts);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

router.put('/increment', productsController.incrementProduct);

module.exports = router;
