const express = require("express");
const productController = require("../2-controllers/productController");

const router = express.Router();

router.get("/category/:categoryId", productController.getProductByCategoryId);
router.get("/name", productController.getProductByProductName);
//http://127.0.0.1:3000/products/name?productName=신

module.exports = router;
