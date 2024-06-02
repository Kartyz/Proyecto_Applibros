import React from "react";
import Books from "../Books/Books";
import { useState } from "react";


const BookCard = ({ book }) => {

    const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();
    console.log(book)
    return (
        <>
            {Array.isArray(book) && book.map((item, index) => {
                let thumbnail = item.volumeInfo?.imageLinks?.smallThumbnail || item.imagenes;
                let title = item.volumeInfo?.title || item.titulo;

                // Render all books, including local books without price information
                if (thumbnail !== undefined) {
                    return (
                        <div key={index} className="bookCard" onClick={() => { setShow(true); setItem(item); }}>
                            <img src={thumbnail} alt="book cover" />
                            <div className="bottom">
                                <h3 className="title">{title}</h3>
                            </div>
                        </div>
                    )
                }
            })}
            {bookItem && <Books show={show} item={bookItem} onClose={() => setShow(false)} />}
        </>
    )
}
export default BookCard;