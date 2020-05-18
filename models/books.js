const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
    authors: {
      type: Array,
      required: true
    },
  // url string for thumbnail image
  image: {
    type: String,
    default: ""
  },
  // url for recipe web page - unique index
  link: {
    type: String,
    default: "",
    unique: true
  },

  // Not all ingredients, just the recommended ingredients from scraped web pages
  // from which seed data was sourced
});

const Books = mongoose.model("Books", bookSchema);

module.exports = Books;