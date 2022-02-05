import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

const Header = () => {
    const auth  = useContext(AuthContext)
    const handlerLogout = (e) =>{
        e.preventDefault()
        auth.logout()
    }
  return(
      <header>
          <div className="logo">ZAYMAX</div>
          <div className="menu">
                <Link to="/links">Links</Link>
                <Link to="/">Create</Link>
                <a href="/" onClick={handlerLogout}>Exit</a>
          </div>
      </header>
  );
};

export default Header;
