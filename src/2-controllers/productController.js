const productService = require("../3-services/productService");

const getAllProducts = async (req, res) => {
	try {
		const allProducts = req.params;

		const result = await productService.getAllProducts(allProducts);

		return res.status(200).json({ result });
	} catch (err) {
		throw new Error("prductController error - getAllProducts");
	}
};

const getProductByCategoryId = async (req, res) => {
	try {
		const categoryId = req.params.categoryId;

		const result = await productService.getProductByCategoryId(categoryId);

		return res.status(200).json({ result });
	} catch (err) {
		throw new Error("productController Error - getProductByCategoryId");
	}
};

const getProductByProductName = async (req, res) => {
	try {
		const productName = req.query.productName;

		const result = await productService.getProductByProductName(productName);
		//console.log(result); ==> [ { id: 3, name: '신발3' } ]
		return res.status(200).json({ result });
	} catch (err) {
		throw new Error("productController Error - getProductByProductName");
	}
};

module.exports = {
	getAllProducts,
	getProductByCategoryId,
	getProductByProductName,
};
