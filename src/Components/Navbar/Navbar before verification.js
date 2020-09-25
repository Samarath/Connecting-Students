import React from 'react';
// import {Navbar,Nav} from 'react-bootstrap';
import './navbar.css';

const Navbar_before_verification = () => {
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

export default  Navbar_before_verification;