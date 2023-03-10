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
		console.log(" π³ μλ² λμκ°λ μ€ π³ ");
	})
	.catch(err => {
		console.log(" β μλ²λλ¦¬λλ° μλ¬ β ", error);
	});

const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log(`${PORT} λ² ν¬νΈμμ λμκ°λ μ€`);
});
