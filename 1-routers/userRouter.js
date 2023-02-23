const express = require("express");
const userController = require("../2-controllers/userController");

const router = express.Router();

router.post("/kakao/login", userController.kakaoLogin);

module.exports = router;
