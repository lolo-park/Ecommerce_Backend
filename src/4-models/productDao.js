const { loloDatabase } = require("./data-source");

const getProductByCategoryId = async (categoryId) => {
	return await loloDatabase.query(
		`
    SELECT
      p.id,
      p.name
    FROM products p
    WHERE category_id = ?`,
		[categoryId]
	);
};

const getProductByProductName = async (productName) => {
	return await loloDatabase.query(
		`
      SELECT 
      p.id,
      p.name
      FROM products p 
      WHERE p.name LIKE ?`,
		["%" + productName + "%"]
	);
};

module.exports = { getProductByCategoryId, getProductByProductName };

/*

category Id로 무엇을 찾을 것인가!
이 category Id 에 해당하는 product를 불러오고 
product의 정보들을 불러온다. 그렇다면 product 테이블로의 접근이 필요하다
*/
