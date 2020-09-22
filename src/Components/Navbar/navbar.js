import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';

const CustomNavbar = () => {
    return (
        <div>
           <Navbar bg="dark" variant="dark">
                 <Navbar.Brand href="#home">Logo</Navbar.Brand>
                 <Nav className="ml-auto">
                 <Nav.Link href="#pricing">Login</Nav.Link>
                 <Nav.Link href="#pricing">Signup</Nav.Link>
                 </Nav>
           </Navbar>
        </div>
    )
}

export default  CustomNavbar;