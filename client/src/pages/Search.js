import React, { useState } from "react"
import Input from "../components/Form"
import { List, ListItem } from "../components/List"
import API from "../util/API"
import "../App.css"
// import create from "../controllers/bookController.js"

function Search() {

    const [search, setSearch] = useState("")
    const [books, setBooks] = useState([])


    function handleChange(event) {
        setSearch(event.target.value)
    }

    function handleClick(event) {
        event.preventDefault()
        API.googleSearch(search).then(function (res) {
            console.log(res.data.items)
            setBooks(res.data.items)
        })
    }

    function saveBook() {
        console.log()
    }

    return (
        
        <div className="container">
            <h1>Search for your Next Book!</h1>
            <br />
            <form>
                <input value={search} type="text" name="search" onChange={handleChange} />
                <button onClick={handleClick}>Search</button>


            </form>
            <div>
                <List>
                    {books.map(book => (
                        <ListItem key={book.id}>
                            <div>
                            <strong>
                                {book.volumeInfo.title}</strong> by <strong>{book.volumeInfo.authors.join(", ")}
                            </strong>
                            </div>
                            <div>
                            <img src={book.volumeInfo.imageLinks.smallThumbnail} />
                            </div>
                            <br />
                            <p className="bookDescription">
                                {book.volumeInfo.description}
                            </p>
                            <a href={book.volumeInfo.previewLink}>Preview Book</a>
                            <br/>
                            <button id="saveBtn" type="primary" onClick={() => saveBook(book)}>Save Book</button>
                        </ListItem>
                    ))}
                </List>

            </div>


        </div>
    )
}

export default Search