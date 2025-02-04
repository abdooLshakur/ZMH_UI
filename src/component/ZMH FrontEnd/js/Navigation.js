import React, { useState } from "react";
import ZMHLogo from "../ZMH Images/ZMH-collections Logo.jpeg";
import { IoPerson, IoCartSharp, IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="nav-contents-wrapper">
            <nav className="navbar">
                <img className="ZMH-logo" src={ZMHLogo} alt="ZMH Logo" />
                <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
                    <ul>
                        <li>Shop All</li>
                        <li>Shoes</li>
                        <li>Bags</li>
                        <li>Bridal wears</li>
                        <li>Materials</li>
                        <li>About</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="nav-links2">
                    <IoSearchSharp id="user-search-icon" />
                    <IoPerson id="user-icon" />
                    <p id="user-cart-total">$0.00</p>
                    <Link to={"/cart"}>
                        <IoCartSharp id="cart-icon" />
                    </Link>
                    <span className="cart-count">0</span>
                </div>
                <button className="hamburger" onClick={toggleMenu}>
                    {isMenuOpen ? <IoClose /> : <IoMenu />}
                </button>
            </nav>
        </div>
    );
}

export default Navigation;
