const router = require("express").Router()
const booksController = require("../../controllers/booksController")
const axios = require("axios")

router.route("/")
    .get(booksController.findAll)
    .post(booksController.create)

router.delete("/:id", booksController.remove)

router.get("/googlebooks/:search", booksController.bookSearch)


module.exports = router