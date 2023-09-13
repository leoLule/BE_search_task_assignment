const cors = require('cors');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
require('dotenv').config();

const { getAllProductsModel } = require('./models/productsModel.js');

// global middleware routes
// app.use(cors({ origin: 'http://localhost:5173' }));

app.use(express.json());

app.get('/products', (req, res) => {
  try {
    const allProducts = getAllProductsModel();
    res.send(allProducts);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
