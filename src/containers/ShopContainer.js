import React, { useEffect, useState } from "react";
import BookList from "../components/BookList";
import Basket from "../components/Basket";

const ShopContainer = () => {

    const [books, setBooks] = useState([])
    const [author, setAuthor] = useState("")
    const [basketList, setBasketList] = useState([])
    const [showModal, setShowModal] = useState(false);

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
        if(author === undefined) {
            setAuthor("was not found. Please try again")
        } else {
            getBooks(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}&key=AIzaSyBp9J7d0sMA3R9GFDEFDGK3pAwBZVsm-P8`)

        }
    }

    const addBookBasket = (selectedBook) => {
        const basketListCopy = [...basketList]
        basketListCopy.push(selectedBook)
        setBasketList(basketListCopy)
    }

    const openModal = () => {
        setShowModal(!showModal)
    }

    const totalBasket = basketList.length

    const deleteBookBasket = (selectedBook) => {
        const basketListCopy = [...basketList]
        basketListCopy.splice(selectedBook, 1)
        setBasketList(basketListCopy)
    }
    
    return (
        <div className="container">
            {/* <Modal 
                isOpen={isModalOpen}
                ariaHideApp={false}
                contentLabel="User options"
                > */}
                <h1>Books</h1>
                <hr/>
                <div id="searching-bar">
                    <form onSubmit={searchAuthor}>
                        <label id="input-title" htmlFor="author">Search Author : </label>
                        <input id="author" type="text" onChange={handleAuthorInput} value={author}/>
                        <input type="submit" value="Search " className={"button"}/>
                    </form>
                    <button id="button" onClick={openModal}> {totalBasket} 🛒</button>
                </div>
                <Basket basketList={basketList} showModal={showModal} setShowModal={setShowModal} deleteBookBasket={deleteBookBasket}/>
                <BookList books={books} addBookBasket={addBookBasket}/>
            {/* </Modal> */}
        </div>
    )
}

export default ShopContainer;