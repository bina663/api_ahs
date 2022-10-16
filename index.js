const express = require("express");
const mongoose = require("mongoose");
const app = express();
const caracters = require("./caracters");
const port = process.env.PORT || 8080;


mongoose.connect('mongodb+srv://root123:root123@cluster0.jkoel2y.mongodb.net/asylum?retryWrites=true&w=majority').
    then(console.log("Connect ok")).catch(e => console.log("err:" +  e.message));

app.get("/", (req, res) => {
    caracters.find({}).exec((err, caracter) => {
        res.send(caracter)
    })
});


app.listen(port, () => {
    console.log("Server running in port: " + port);
})


