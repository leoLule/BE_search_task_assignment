const fs = require('fs');
const path = require('path');
const pathToProductsJson = path.resolve(__dirname, '../db/productsDB.json');

function getAllProductsModel() {
  const allProducts = fs.readFileSync(pathToProductsJson, 'utf8');
  return JSON.parse(allProducts);
}

module.exports = { getAllProductsModel };
