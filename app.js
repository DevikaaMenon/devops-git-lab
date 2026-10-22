const express = require("express");
const app = express();

const version = process.env.APP_VERSION || "v1";

app.get("/", (req, res) => {
    res.send(`version 2:Hello! Git and Docker integration is working. Version: ${version}`);
});

app.get("/health", (req, res) => {
    res.json({
        status: "OK",
        version: version
    });
});

app.get("/api/info", (req, res) => {
    res.json({
        application: "Git-Docker Lab",
        framework: "Express",
        version: version
    });
});

app.listen(3000, "0.0.0.0", () => {
    console.log(`Express server running on port 3000, version ${version}`);
});
