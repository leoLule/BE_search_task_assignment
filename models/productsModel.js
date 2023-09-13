const fs = require('fs');
const path = require('path');
const pathToProductsJson = path.resolve(__dirname, '../db/productsDB.json');

function getAllProductsModel() {
  const allProducts = fs.readFileSync(pathToProductsJson, 'utf8');

  return JSON.parse(allProducts); // this gives me an array of objects like normal .js obj, Q: what do i need on the FRONTEND?? - A: think the normal .js obj
  //  {
  //     path: 'https://drive.google.com/file/d/121RdWuPtfGIfcDtY-bgtPgc9JHCFe5X6/view?usp=share_link',
  //     keywords: [ 'orange', 'fruit' ],
  //     score: '2',
  //     id: '12'
  //   },

  //   return allProducts;
  // not sure if i need to parse or not for the FRONT END to use it! -_-
  // this gives me  an array of objects but all in strings like json format

  // {
  // "path": "https://drive.google.com/file/d/121RdWuPtfGIfcDtY-bgtPgc9JHCFe5X6/view?usp=share_link",
  // "keywords": ["orange", "fruit"],
  // "score": "2",
  // "id": "12"
  // },
}

module.exports = { getAllProductsModel };
