import React from 'react';
import {Form, Button} from 'react-bootstrap';
import './signup.css';
import Navbar from '../Navbar/navbar';

const Signup = () => {
    return (
        <>
        <div>
            <Navbar />
        </div>    
        <div className='sign'>
            <p>Sign up</p>
            <Form>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Normal text" />
            </Form.Group>   
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
            <Button variant="primary" type="submit">
                Signup
            </Button>
          </Form>
        </div>
         
        </>
    );
}

export default Signup;