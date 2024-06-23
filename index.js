const express = require("express");
const app = express();
const caracters = require("./caracters.json");
const port = process.env.PORT || 8080;
const cors = require("cors");

// Configurar CORS
app.use(cors());

app.get("/", (req, res) => {
    res.send(caracters);
});

app.listen(port, () => {
    console.log("Server running on port: " + port);
});
