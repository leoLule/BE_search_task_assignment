const cors = require('cors');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
require('dotenv').config();

const {
  getAllProductsModel,
  searchProductsModel,
} = require('./models/productsModel.js');

// global middleware routes
app.use(cors({ origin: 'http://localhost:5173' }));

app.use(express.json());

// NOTE: i m fetch all products and i will only display 5 random products in the FE , not sure yet if I will write the logic for randomize products in the FRONT or BACK end.

app.get('/products', (req, res) => {
  try {
    const allProducts = getAllProductsModel();
    console.log(allProducts);
    res.send(allProducts);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

//search
app.get('/search', (req, res) => {
  try {
    const searchProducts = searchProductsModel();
    console.log(searchProducts);
    res.send(searchProducts);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
