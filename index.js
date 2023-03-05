process.on('unhandledRejection', console.error);
process.on('uncaughtException', console.error);

const express = require("express");
const app = express();

const link = {
    website: "https://ferna.my.id",
    discord: "https://discord.ferna.my.id",
    invite: "https://invite.ferna.my.id",
};

app.use(express.static("assets"));

app.get("*", (req, res) => {
    res.sendFile("./404.html");
});

app.get("/", (req, res) => {
    res.sendFile("./index.html");
});

app.get("/commands", (req, res) => {
    res.sendFile("./cooming-soon.html");
});

app.get("/discord", (req, res) => {
    res.redirect(link.discord);
});

app.get("/invite", (req, res) => {
    res.redirect(link.invite);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Web server listening on port ${port}`)
});

module.exports = app;