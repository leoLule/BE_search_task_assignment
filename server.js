const cors = require('cors');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const productRouters = require('./routes/productRoutes');
require('dotenv').config();

app.use(cors({ origin: 'http://localhost:5173' }));

app.use(express.json());
app.use('/products', productRouters);

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
