import React from "react";

const BookCard = ({book}) => {
    return(
        <div className="book-card">
            <img src={book.image} alt={book.name} className="book-image"/>
            <h3 className="book-title">{book.name}</h3>
            <p className="book-genre">Genre: {book.genre}</p>
            <p className="book-author">Author: {book.author}</p>

        </div>
    );
};

export default BookCard;