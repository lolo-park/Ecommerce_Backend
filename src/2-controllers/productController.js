const productService = require("../3-services/productService");

const getProductByCategoryId = async (req, res) => {
	try {
		const categoryId = req.params.categoryId;

		const result = await productService.getProductByCategoryId(categoryId);

		return res.status(200).json({ result });
	} catch (err) {
		throw new Error("productService Error - getProductByCategoryId");
	}
};

const getProductByProductName = async (req, res) => {
	try {
		const productName = req.query.productName;

		const result = await productService.getProductByProductName(productName);
		return res.status(200).json({ result });
	} catch (err) {
		throw new Error("product Service Error - getProductByProductName");
	}
};

module.exports = { getProductByCategoryId, getProductByProductName };
