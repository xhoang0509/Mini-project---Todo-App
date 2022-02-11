import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

Header.propTypes = {};

function Header(props) {
    return (
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="cart">Cart</NavLink>
            </li>
            <li>
                <NavLink to="photos">Photos</NavLink>
            </li>
        </ul>
    );
}

export default Header;
