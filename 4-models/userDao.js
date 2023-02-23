const loloDatabase = require("./dataSource");
//loloDatabase

//기존 유저인지 조회하는 api
//params에 어떤 값들을 받아야 확인할 수 있을까?

const getUserById = async (userId) => {
	const [user] = await loloDatabase.query(
		`SELECT 
      id,
      kakao_id,
      email,
      nickname, 
      profile_image
    FROM users 
    WHERE id = ?`,
		[userId]
	);
	return user; //여기서 이렇게 user의 값을 return 해주어야 service, controller단으로 넘어가지
};

//기존 유저가 아니라면 DB에 저장하는 api
const createUser = async (kakaoId, email, name, profileImage) => {
	try {
		const result = await loloDatabase.query(
			`
      INSERT INTO users(
        kakao_id,
        email,
        nickname,
        profile_image,
        point
      ) VALUES (?,?,?,?)`,
			[kakaoId, email, name, profileImage]
		);

		return result;
	} catch (err) {
		throw new Error("createUser Error");
	}
};

module.exports = { getUserById, createUser };
