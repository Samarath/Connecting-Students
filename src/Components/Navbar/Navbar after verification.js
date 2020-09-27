import React from 'react';
// import {Navbar,Nav} from 'react-bootstrap';
import './navbar.css';

const Navbar_after_verification = () => {
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

export default  Navbar_after_verification;