const cors = require('cors');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
require('dotenv').config();

// global middleware routes
// app.use(cors({ origin: 'http://localhost:5173' }));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
