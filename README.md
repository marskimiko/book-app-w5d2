# Learning Resources Showcase

## Overview

This is a single page React application designed to show all of my favorite educational books as well as give the user the ability to create and delete books as well.

## Setting Up and Running the Application Locally

To run project locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the necessary dependencies.
4. Run `npm start` to start the development server.
5. Open your browser and visit `http://localhost:3000` to view the application.

## Project Structure and Organization of Files

The project structure is organized as follows:

learning-resources-showcase/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Book/
|   |        ├── Book.js
|   |        ├── Books.js
|   |        ├── CreateBook.js
|   |        └── BooksStyles.css
│   │   ├── LandingPage/
|   |        ├── LandingPage.js
|   |        └── LandingPageStyles.css
│   │   └── Nav/
|   |       ├── Nav.js
|   |        └── NaVStyles.css
│   ├── App.js
│   ├── index.js
│   └── index.css
└── README.md


- **`public/`**: contains index.html
- **`src/`**: Contains the React components and application logic.
- **`Books.js`**: sets the initial state of the books array and contains the handleAddBook functions and handleAddDelete functions which get passed down to other components. Books is mapped over here and passed down to the book component
- **`Book.js`**: essentially a card component to render each of the individual books. HandleDeleteBook is passed down to Book.js where the handleDeleteButton function deletes the book based off id and is triggered by an onClick via the delete button
- **`CreateBook.js`**: Receives the handleAddBook function. Set state variables for title, author, and cover which are used in the handle submit where we create a new book as well as within the form to allow a user to import information to add a new book and then update the state of the values in the form before submitting 
- **`App.js`**: defines the apps structure and routes with react router

## External Libraries and Dependencies

- `react-router-dom`: React router library for routing 
