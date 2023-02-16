require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const routes = express.Router();

const { DataSource } = require("typeorm");

const myDatabase = new DataSource({
	type: process.env.DB_TYPE,
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
});

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("combined"));
app.use(routes);

app.get("/ping", function (req, res, next) {
	res.json({ message: "pong!" });
});

myDatabase
	.initialize()
	.then(() => {
		console.log(" 🐳 서버 돌아가는 중 🐳 ");
	})
	.catch(err => {
		console.log(" ❌ 서버돌리는데 에러 ❌ ", error);
	});

const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log(`${PORT} 번 포트에서 돌아가는 중`);
});
