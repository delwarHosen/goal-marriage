import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='nav-info'>
                <h2>Goal Marraige</h2>
            </div>
            <div className='nav-item'>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/inventory">Inventory</a>
                <a href="/contact">Conatct</a>
            </div>
        </div>
    );
};

export default Header;