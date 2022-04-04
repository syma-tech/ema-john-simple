import './Header.css';
import React from 'react';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';   
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    // const element = <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
    return (
        <div className='header'>
            <img  className='logo' src={logo} alt="" />
            <nav>
                <a href="/shop">shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory here</a>
            </nav>
            <div className="search">
                <input type="text" className="search-input" placeholder='type here to search'/> 
                <span className="cart-icon">{element}</span>
            </div>
        </div>
    );
};

export default Header;