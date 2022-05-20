import React, { useEffect, useState } from "react";
import BookList from "../components/BookList";

const ShopContainer = () => {

    const [books, setBooks] = useState([])
    const [author, setAuthor] = useState("")
    const [selectedBook, setSelectedBook] = useState(null)

    useEffect(() => {
        getBooks()
    }, [])

    const getBooks = ((url) => {
        fetch(url)
        .then(res => res.json())
        .then (books => setBooks(books.items))
        .catch(err => console.error)
    })

    const handleAuthorInput = (evt) => {
        setAuthor(evt.target.value);
    }

    const searchAuthor = (event) => {
        event.preventDefault()
        getBooks(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}&key=AIzaSyBp9J7d0sMA3R9GFDEFDGK3pAwBZVsm-P8`)

    }

    return (
        <div className="container">
            <h1>Books</h1>
            <hr/>
            <form onSubmit={searchAuthor}>
                <label id="input-title" htmlFor="author">Search Author : </label>
                <input id="author" type="text" onChange={handleAuthorInput } value={author}/>
                <input type="submit" value="Search " className={"button"}/>
            </form>
            <BookList books={books}/>
        </div>
    )
}

export default ShopContainer;