const cors = require('cors');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const productRouters = require('./routes/productRoutes');
require('dotenv').config();

// global middleware routes
app.use(cors({ origin: 'http://localhost:5173' }));

app.use(express.json());
app.use('/products', productRouters);

// //search
// app.get('/search', (req, res) => {
//   try {
//     const searchProducts = searchProductsModel();
//     console.log(searchProducts);
//     res.send(searchProducts);
//   } catch (err) {
//     console.log(err);
//     res.status(500).send(err.message);
//   }
// });

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
