import React from "react";
import imagen from '../img/nike-icon.svg'
import './navbar.css';
import Cart from './Cart';



const Navbar = () => {
    return (
        <header className="header">
        
        <div className="header__navigation">

            <img className="nike-icon" src={imagen} alt="nike-icon" />

            <nav className="navbar">
                <ul className="navbar__items">
                    <li><a className="navbar__link" href="#"></a>Hombre</li>
                    <li><a className="navbar__link" href="#"></a>Mujer</li>
                    <li><a className="navbar__link" href="#"></a>Niño/a</li>

                </ul>
            </nav>
            <Cart/>
        </div>
        </header>
    )
}

export default Navbar;