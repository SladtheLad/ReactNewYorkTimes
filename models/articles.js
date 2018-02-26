const mongoose = require("mongoose");

const articlesSchema = mongoose.Schema({
    title: {
        type:String,
        unique: true
    },
    url: String,
    date: String
});

module.exports = mongoose.model("Articles", articlesSchema);