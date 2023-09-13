const cors = require('cors');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
require('dotenv').config();

const { getAllProductsModel } = require('./models/productsModel.js');

// global middleware routes
// app.use(cors({ origin: 'http://localhost:5173' }));

app.use(express.json());

// NOTE: i m fetch all products and i will only display 5 random products in the FE , not sure yet if I will write the logic for randomize products in the FRONT or BACK end.

// TODO: create Front End and display all products component (app,productsList,products)
// NOTE:fetch in App so it is easier to pass data down

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

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
