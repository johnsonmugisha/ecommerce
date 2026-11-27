const products = require('../data/products');

const getProducts = (req, res) => {
  res.status(200).json({
    count: products.length,
    data: products,
  });
};

module.exports = { getProducts };
