import React from 'react'
import './BooksStyles.css'

function Book({ book }) {
  return (
    <div className="book-card">
      <img src={book.cover} className="book-cover"/>
      <h2 className="book-title">{book.title}</h2>
      <p className="book-author">Author: {book.author}</p>
    </div>
  )
}

export default Book;