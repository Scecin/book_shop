import React from "react";
import BookItem from "./BookItem";

const BookList = ({books}) => {

    const booksNodes = books.map((book, index) => {
        return <BookItem book={book} key={index}/>
    })

    return (
        <div className="list">
            <h2>Books by Author: </h2>
            <ul id="list">
                {booksNodes}
            </ul>
        </div>
    )
}
export default BookList;