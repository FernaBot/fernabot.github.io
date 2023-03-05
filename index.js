process.on("unhandledRejection", (error) => console.error(error));
process.on("uncaughtException", (error) => console.error(error));

const express = require("express");
const app = express();

const path = require("node:path");

app.use("assets", express.static(__dirname+"/assets"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

/*
app.get("*", (req, res) => {
    res.status(404);
    res.sendFile(path.join(__dirname, "404.html"));
});
*/

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`WebServer Listening on port ${port}.`);
});

module.exports = app;