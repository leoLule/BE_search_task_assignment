const fs = require('fs');
const path = require('path');
const pathToProductsJson = path.resolve(__dirname, '../db/productsDB.json');

const allProducts = fs.readFileSync(pathToProductsJson, 'utf8');

function getAllProductsModel() {
  return JSON.parse(allProducts);
}

function incrementProductModel(id) {
  try {
    const products = JSON.parse(allProducts);

    const product = products.find((p) => p.id === id);
    if (!product) {
      return { message: 'Product not found', ok: false };
    }

    product.score = (parseInt(product.score) + 1).toString();

    const updatedData = JSON.stringify(products, null, 2);
    fs.writeFileSync(pathToProductsJson, updatedData);

    return { score: product.score, ok: true };
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getAllProductsModel, incrementProductModel };
