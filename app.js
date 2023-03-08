require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const { loloDatabase } = require("./src/4-models/data-source");
const { router } = require("./src/1-routers");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("combined"));
app.use(router);

app.get("/ping", function (req, res, next) {
	res.json({ message: "pong!" });
});

loloDatabase
	.initialize()
	.then(() => {
		console.log(" 🐳 서버 돌아가는 중 🐳 ");
	})
	.catch((err) => {
		console.log(" ❌ 서버돌리는데 에러 ❌ ", error);
	});

const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log(`${PORT} 번 포트에서 돌아가는 중`);
});
