import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <ul className="flex space-x-4">
                <li>
                    <Link to="/" className="text-white">Home</Link>
                </li>
                <li>
                    <Link to="/" className="text-white">Contact</Link>
                </li>
                <li>
                    <Link to="/" className="text-white">About Us</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;

