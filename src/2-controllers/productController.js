const productService = require("../3-services/productService");

const getProductByCategoryId = async (req, res) => {
	try {
		const categoryId = req.params.categoryId;

		const result = await productService.getProductByCategoryId(categoryId);

		return res.status(200).json({ result });
	} catch (err) {
		throw new Error("productService Error");
	}
};

module.exports = { getProductByCategoryId };
