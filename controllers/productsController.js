const {
  incrementProductModel,
  getAllProductsModel,
} = require('../models/productsModel');

const getAllProducts = (req, res) => {
  try {
    const allProducts = getAllProductsModel();
    res.send(allProducts);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const incrementProduct = (req, res) => {
  try {
    const id = req.params.id;
    const productData = incrementProductModel(id);
    if (!productData.ok) {
      return res.status(404).json({ message: productData.message });
    }

    return res.json(productData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { incrementProduct, getAllProducts };
