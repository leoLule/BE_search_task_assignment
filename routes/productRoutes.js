const express = require('express');
const router = express.Router();
const {
  getAllProductsModel,
  // searchProductsModel,
} = require('../models/productsModel.js');

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
module.exports = router;
