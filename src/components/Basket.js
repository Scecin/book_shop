import React from "react";
import styled from 'styled-components';
import {MdClose} from 'react-icons/md'

const BackGround = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalWrapper = styled.div`
    width: 800px;
    height: 100%;
    box-shadow: 0 5px  16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    position: relative;
    z-index: 10;
    border-radius: 10px;
    margin: 48px;
`
const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;
`

const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height:32px;
    padding: 0;
    z-index: 10;
`

const Basket = ({basketList, showModal, setShowModal, deleteBookBasket}) => {

    const basketNodes = basketList.map((book, index) => {
        return <p id="basket-item">
                <img id="img-basket" src={
                book.volumeInfo.imageLinks === undefined
                    ? ""
                : `${book.volumeInfo.imageLinks.thumbnail}`
                }/>
                {book.volumeInfo.title}
                <button id="button2" onClick={deleteBookBasket}>Delete</button>
                </p>
    })

    const totalBasket = basketList.length

    return (
        <>
        {showModal ? (
            <BackGround>
                <ModalWrapper>
                    <ModalContent>
                        <h2> Basket : </h2>  
                        <ul>
                            {basketNodes}
                            <hr/>
                            <p> Total : {totalBasket} books on the .</p>
                        </ul> 
                    </ModalContent>
                    <CloseModalButton aria-label="close modal" onClick={() =>   setShowModal(prev => !prev)}>
                    </CloseModalButton>
                </ModalWrapper>
            </BackGround>
        ) : null}
        </>
    )
}

export default Basket;