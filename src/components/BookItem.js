import React from "react";

const BookItem = ({book, addBookBasket, onClick}) => {

    const handlebasketButton = (() => {
        addBookBasket(book)
    })

    return (
        <div className="book">
            <li id="book">
                <img id="img" src={
                    book.volumeInfo.imageLinks === undefined
                        ? ""
                        : `${book.volumeInfo.imageLinks.thumbnail}`
                }/>
                <div id="book-info">
                    <li>{book.volumeInfo.title}</li>
                    <br/>
                    <li>{book.volumeInfo.authors}</li>
                </div>
                <button className="button2" onClick={handlebasketButton} > Buy
                </button>
            </li>
        </div>
    )

}

export default BookItem;