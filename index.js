const express = require("express");
//const mongoose = require("mongoose");
const app = express();
const caracters = require("./caracters.json");
const port = process.env.PORT || 8080;

//A plataforma não permite se conecta com o mongodb, então usei um file.json
// mongoose.connect('mongodb+srv://root123:root123@cluster0.jkoel2y.mongodb.net/asylum?retryWrites=true&w=majority').
//     then(console.log("Connect ok")).catch(e => console.log("err:" +  e.message));

<<<<<<< HEAD
app.get("/caractersAsylum", (req, res) => {
=======
app.get("/caractersasylum", (req, res) => {
>>>>>>> 96fd40e5a0a0704c018d757b96e39c6c88ae08d2
    res.send(caracters)
});


app.listen(port, () => {
    console.log("Server running in port: " + port);
})


