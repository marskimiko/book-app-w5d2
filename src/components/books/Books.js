import React, { useState } from 'react';
import './BooksStyles.css';
import Book from './Book';

function Books() {
  const [books, setBooks] = useState([
    { id: 1, title: "Eloquent Javascript", author: "Marjin Haverbeke", cover: './images/eloquent.jpg' },
    { id: 2, title: "Grokking Algorithms", author: "Aditya Y. Bhargava", cover:'./images/grokking.jpg' },
    { id: 3, title: "Practical Object-Oriented Design in Ruby", author: "Sandi Metz", cover: './images/ruby.jpg' }
  ]);

  return (
    <div className="book-container">
      <h3>Books</h3>
      {books.map(book => (
        <Book key={book.id} book={book}/>
      ))}
    </div>
  )
}

export default Books