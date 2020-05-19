
// saved books add a database item
// pull the database items here

import React, { useState, useEffect } from "react"
import { List, ListItem } from "../components/List"
import API from "../util/API"
import "../App.css"



function Saved () {

    const [books, setBooks] = useState([])

    function removeBook(book) {
        // event.preventDefault()
        API.deleteBook(book._id).then(
            console.log("book deleted")
        )
    }

    useEffect(() => {
        API.getBooks().then((res) => {
            setBooks(res.data)
        })
    }, [books])

    return(
        <div className="container"> 
        <h1>Your Saved Books</h1>
        <hr />
        <div>
                <List>
                    {books.map(book => (
                        <ListItem key={book._id}>
                            <div>
                            <strong>
                                {book.title}</strong> by <strong>{book.authors.join(", ")}
                            </strong>
                            </div>
                            <div>
                            <img className="bookImage" src={book.image} />
                            </div>
                            <br />
                            <p className="bookDescription">
                                {book.description}
                            </p>
                            <a href={book.link}>Find on Google Books</a>
                            <br/>
                            <button id="saveBtn" type="primary" onClick={() => removeBook(book)}>Remove Book</button>
                        </ListItem>
                    ))}
                </List>
                </div>
        </div>
    )
}

export default Saved;