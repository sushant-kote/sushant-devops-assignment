const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send(`
        <h1>DevOps Assignment</h1>
        <h2>Hello from AWS EC2!</h2>
        <p>Application deployed successfully.</p>
    `);
});

app.get("/health", (req, res) => {
    res.json({
        status: "healthy",
        server: "running"
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
