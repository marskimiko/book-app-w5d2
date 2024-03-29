import { Link } from 'react-router-dom';
import React from 'react'

import './NavStyles.css';

function Nav() {
  return (
    <div className="nav">
      <ul className="nav-list">
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav