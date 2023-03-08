const productDao = require("../4-models/productDao");

const getAllProducts = async (allProducts) => {
	return await productDao.getAllProducts(allProducts);
};

const getProductByCategoryId = async (categoryId) => {
	return await productDao.getProductByCategoryId(categoryId);
};

const getProductByProductName = async (productName) => {
	return await productDao.getProductByProductName(productName);
};

module.exports = {
	getAllProducts,
	getProductByCategoryId,
	getProductByProductName,
};

/*
service단에서는 무엇을 구현해야할까
특별히 service단에서 건드려야할 것이 없다면 바로 dao로 넘겨줘도 될 듯
*/
