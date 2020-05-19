import axios from "axios"

const API = {
    googleSearch: function(search) {
       return axios.get("/api/books/googlebooks/"+search)
    },
    getBooks: function() {
        return axios.get("/api/books");
      },
      // Deletes the book with the given id
      deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
      },
      // Saves a book to the database
      saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
      }
}

export default API