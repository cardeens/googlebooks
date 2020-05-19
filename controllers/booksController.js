const db = require("../models");
const axios = require("axios")

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Books
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Books
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
//   req is the object
  create: function(req, res) {
    db.Books
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
//   update: function(req, res) {
//     db.Books
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
  remove: function(req, res) {
    db.Books
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  bookSearch: function(req, res) {
      const queryUrl = `https://www.googleapis.com/books/v1/volumes?q=${req.params.search}`
      axios.get(queryUrl).then(function(response) {
          return res.json(response.data)
      })
  }
};