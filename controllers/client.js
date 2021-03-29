const Product = require('../models/product');

let products;

const getKitchenProducts = (req, res, next) => {
  Product.find({ name: 'doc' }, (err, data) => {
    if (err) {
      return res.send({ "Failed": err });
    }
    // console.log(data)
    res.render('client/kitchen', { page: 'Kitchen', products: data })
  })
};

const getSofaProducts = (req, res, next) => {
  Product.find({ collectionName: 'sofa' }, (err, data) => {
    if (err) {
      return res.send({ "Failed": err });
    }
    res.render('client/chairs-sofa', { page: 'Sofa', products: data })
  })
}

module.exports = {
  getKitchenProducts,
  getSofaProducts
}