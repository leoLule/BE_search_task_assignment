const { incrementProductModel } = require('../models/productsModel');

const fs = require('fs');
const path = require('path');
const pathToProductsJson = path.resolve(__dirname, '../db/productsDB.json');

const incrementProduct = async (req, res) => {
  try {
    // Load the product data from the JSON file
    const rawData = fs.readFileSync(pathToProductsJson);
    const products = JSON.parse(rawData);

    const { id } = req.body;

    // Find the product by ID
    const product = products.find((p) => p.id === id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Increment the score
    product.score = (parseInt(product.score) + 1).toString();

    // Write the updated data back to the JSON file
    const updatedData = JSON.stringify(products, null, 2);
    fs.writeFileSync(pathToProductsJson, updatedData);

    return res.json({ score: product.score });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { incrementProduct };
