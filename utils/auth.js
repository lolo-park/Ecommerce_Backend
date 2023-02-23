const jwt = require("jsonwebtoken");
const userDao = require("../4-models/userDao"); //나중에 Models 폴더 만들어넣기

//이제 미들웨어를 만든다 미들웨어 이름은 loginRequired 라고 하자
const loginRequired = async (req, res, next) => {
	//user가 로그인 req 시 header에 accessToken을 가져오도록한다

	const accessToken = req.headers.authorization;

	if (!accessToken) {
		throw new Error(" No access ");
	}

	const userId = await jwt.verify(accessToken, process.env.JWT_SECRET).userId;

	const user = await userDao.getUserbyId(userId);

	if (!user) {
		throw new Error(" User Not Exists ");
	}

	req.user = user;

	next();
};

module.exports = { loginRequired };
