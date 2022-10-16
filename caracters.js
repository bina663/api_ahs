const mongoose = require("mongoose");
const schema = mongoose.Schema;

const caractersSchma = new schema({
    name: String,
    intérprete: String,
    image: String
}, {collection: "caracters"});

const caracters = mongoose.model('caracters', caractersSchma);

module.exports = caracters;