import axios from "axios"

const API = {
    googleSearch: function(search) {
       return axios.get("http://localhost:3001/api/books/googlebooks/"+search)
    }
}

export default API