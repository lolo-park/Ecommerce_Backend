const userDao = require("../4-models/userDao");
const axios = require("axios");
const jwt = require("jsonwebtoken");

const kakaoLogin = async (kakaoToken) => {
	const result = await axios.get("https://kapi.kakao.com/v2/user/me", {
		headers: {
			Authorization: `Bearer ${kakaoToken}`,
			"Content-type": "application/x-www-form-urlencoded;charset=utf-8",
		},
	});

	const { data } = result;
	const kakaoId = data.id;
	const name = data.kakao_account.profile.nickname;
	const email = data.kakao_account.email;
	const profileImage = data.kakao_account.profile.profile_image_url;

	const user = await userDao.getUserById(kakaoId);

	const userId = user.id; // getUserById api 에서 이 userId를 받아 조회..?

	if (!user) {
		const newUser = await userDao.createUser(
			kakaoId,
			name,
			email,
			profileImage
		);
		userId = newUser.insertId;
	}

	const payload = {
		userId: userId,
	};

	const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
		algorithm: process.env.ALGORITHM,
		expiresIn: process.env.JWT_EXPIRES_IN,
	});

	return accessToken;
};

module.exports = { kakaoLogin };
