const express = require('express');
const router = express.Router();
const productController = require('../controller/product');

router.get('/shop',productController.getShopPage);

router.get('/product-page',productController.getProductPage);

router.post('/product-page',productController.postProductPage);

module.exports = router;