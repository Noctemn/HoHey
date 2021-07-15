import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <> 
      <div className="topnav">
        <Link to="/">
          Home
        </Link>
        <Link to="/upload">
          Upload Video
        </Link>
     </div>
    </>
  );
}

export default Nav;
