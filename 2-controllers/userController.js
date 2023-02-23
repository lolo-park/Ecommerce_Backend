const userService = require("../3-services/userService");

const kakaoLogin = async (req, res) => {
	try {
		const kakaoToken = req.headers.authorization;

		if (!kakaoToken) {
			return res.status(400).jsonn({ message: "Invalid KakaoToken" });
		}

		const accessToken = await userService.kakaoLogin(kakaoId);

		return res.status(200).json({ accessToken: accessToken });
	} catch (err) {
		throw new Error(" accessToken Error ");
	}
};

module.exports = { kakaoLogin };
