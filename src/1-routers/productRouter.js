const express = require("express");
const productController = require("../2-controllers/productController");

const router = express.Router();

router.get("/category/:categoryId", productController.getProductByCategoryId);

module.exports = router;
