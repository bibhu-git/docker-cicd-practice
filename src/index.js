const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.json({
        message: "Docker CI/CD application",
        version: "1.0.0",
    });
});

app.get("/health", (req, res) => {
    res.json({
        status: "healthy",
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});