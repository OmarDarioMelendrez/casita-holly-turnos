const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const router = require("./routes");
const { Client, Pet, Turn } = require("./models");
const db = require("./db");
const path = require("path");

// parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve static files
app.use(express.static(path.join(__dirname,"client", "build")));

// logger of request
app.use(morgan("tiny"));

// routes
app.use("/api", router);

// return the static server
app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "client","build", "index.html"));
});

// startup server
db.sync({ force: false }).then(() => {
	console.log("Db connected.");
	app.listen(port, () => {
		console.log(`Example app listening at http://localhost:${port}`);
	});
});
