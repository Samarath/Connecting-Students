import React from 'react';
// import {Navbar,Nav} from 'react-bootstrap';
import './navbar.css';

const CustomNavbar = () => {
    return (
        <div className='navdark'>
           <div className="navbar_logo">
               <a href='/'>Logo</a>
           </div>
           <div className='navbar_logo'>
               <a href='/'>All institute</a>
               <a href='/'>Profile</a>
           </div>
        </div>
    )
}

export default  CustomNavbar;