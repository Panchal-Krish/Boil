const mongoose = require("mongoose");

let gamesSchema = new mongoose.Schema({
    name: {
        type: String
    },
    image: {
        type: String
    },
    storage: {
        type: String
    },
    desc: {
        type: String
    },
    trailerLink: {
        type: String
    },
    downLink: {
        type: String
    },
}, {
    collection: "Games"
});

module.exports = mongoose.model("Games", gamesSchema);