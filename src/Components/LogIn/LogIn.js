import React from 'react';
import {Form, Button} from 'react-bootstrap';
import './login.css';
import Navbar_before from '../Navbar/Navbar before verification';

const LogIn = () => {
    return (
        <>
        <div>
            <Navbar_before />
        </div>    
        <div className='log'>
            <p>LogIn</p>
            <Form> 
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <button type='submit' className='loginBtn'>
                LogIn
            </button>
          </Form>
        </div>
         
        </>
    );
}

export default LogIn;