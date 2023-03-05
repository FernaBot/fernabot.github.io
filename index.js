process.on("unhandledRejection", (error) => console.error(error));
process.on("uncaughtException", (error) => console.error(error));

const express = require("express");
const app = express();

app.use(express.static("assets"));

app.get("*", (req, res) => {
    res.sendFile("./404.html");
});

app.get("/", (req, res) => {
    res.sendFile("./index.html");
});

app.listen(port, () => {
    console.log(`WebServer Listening on port ${port}.`);
});

module.exports = app;