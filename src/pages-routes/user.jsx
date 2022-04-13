import React from 'react';
import { Link } from 'react-router-dom';

const User = () =>{
  return (
    <div>
      <h1>Página User</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default User;