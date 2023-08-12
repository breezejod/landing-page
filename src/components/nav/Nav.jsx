import React from 'react';

const navData = [
    { name: "Home", link: "/" },
    { name: "Header", link: "/" },
    { name: "Body", link: "/" },
    { name: "Footer", link: "/" }
];

const Nav = () => {
    return (
        <div>
            <Nav className="navbar navbar-expand-lg fixed-top"/> 
        </div>
    );
};

export default Nav;
