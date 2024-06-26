import React, { useState } from 'react';
import './BooksStyles.css';
import Book from './Book';
import CreateBook from './CreateBook';

function Books() {
  const [books, setBooks] = useState([
    { id: 1, title: "Eloquent Javascript", author: "Marjin Haverbeke", cover: 'https://m.media-amazon.com/images/I/81HqVRRwp3L._AC_UF1000,1000_QL80_.jpg' },
    { id: 2, title: "Grokking Algorithms", author: "Aditya Y. Bhargava", cover:'https://m.media-amazon.com/images/I/81BdMC18EUL._AC_UF1000,1000_QL80_.jpg' },
    { id: 3, title: "Practical Object-Oriented Design in Ruby", author: "Sandi Metz", cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1358916543i/13507787.jpg' }
  ]);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <>
    <CreateBook handleAddBook={handleAddBook}/>
    <div className="book-container">
      {books.map(book => (
        <Book key={book.id} book={book} handleDeleteBook={handleDeleteBook}/>
      ))}
    </div>
    </>
  )
}

export default Books