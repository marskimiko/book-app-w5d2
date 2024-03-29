import React, { useState, useId } from 'react';
import './BooksStyles.css';


function CreateBook({ handleAddBook}) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [cover, setCover] = useState('');

  const generateId = useId();

  function handleSubmit(e) {
    e.preventDefault();
   
    const newBook = {
      id: generateId,
      title: title,
      author: author,
      cover: cover
    }
    handleAddBook(newBook);
  }

  return (
    <div className="form-container">
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Author" 
        value={author} 
        onChange={(e) => setAuthor(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Cover Image" 
        value={cover} 
        onChange={(e) => setCover(e.target.value)} 
      />
      <button type="submit">Create Book</button>
    </form>
    </div>
  )
}

export default CreateBook