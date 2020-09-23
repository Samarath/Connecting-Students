import React from 'react';
// import {Navbar,Nav} from 'react-bootstrap';
import './navbar.css';

const CustomNavbar = () => {
    return (
        <div className='navdark'>
           <div className="navbar_logo">
               <a href='#'>Logo</a>
           </div>
           <div className='navbar_logo'>
               <a href='#'>LogIn</a>
               <a href='#'>SignUp</a>
           </div>
        </div>
    )
}

export default  CustomNavbar;