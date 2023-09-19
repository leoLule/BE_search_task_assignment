const { searchProductsModel } = require('../models/productsModel');
const getSearch = async (req, res) => {
  console.log(req.query.keywords);
  try {
    const searchedProduct = await searchProductsModel(req.query.keywords);
    res.send(searchedProduct);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getSearch };
