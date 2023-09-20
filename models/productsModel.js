const fs = require('fs');
const path = require('path');
const pathToProductsJson = path.resolve(__dirname, '../db/productsDB.json');

function getAllProductsModel() {
  const allProducts = fs.readFileSync(pathToProductsJson, 'utf8');

  return JSON.parse(allProducts); // this gives me an array of objects like normal .js obj, Q: what do i need on the FRONTEND?? - A: think the normal .js obj
}

function incrementProductModel() {
  //logic to connect to DB to increment
}

module.exports = { getAllProductsModel, incrementProductModel };
