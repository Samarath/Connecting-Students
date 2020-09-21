import React from 'react';
import {Navbar, Nav, Image, Card, Button} from 'react-bootstrap';
import mainImg from '../Images/Langing page/main.png';
import './landing.css'
import Footer from '../Components/Footer/Footer'

const Landing = () => {
    return (
        <div>
            <div>
                <Navbar bg="dark" variant="dark">
                  <Navbar.Brand href="#home">Logo</Navbar.Brand>
                  <Nav className="ml-auto">
                    <Nav.Link href="#home">Contact</Nav.Link>
                    <Nav.Link href="#features">About</Nav.Link>
                    <Nav.Link href="#pricing">Login</Nav.Link>
                    <Nav.Link href="#pricing">Register</Nav.Link>
                  </Nav>
                </Navbar>
            </div>
            <div className='mb-5'>
               <Image src={mainImg} fluid />
            </div>
            <div className='cards'>
               <div className='inside_card'>
                <Card style={{ width: '18rem' }}>
                   <Card.Img variant="top" src={mainImg} />
                   <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                   </Card.Body>
                </Card>
               </div> 
               <div className='inside_card'>
                <Card style={{ width: '18rem' }}>
                   <Card.Img variant="top" src={mainImg} />
                   <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                   </Card.Body>
                </Card>
               </div> 
               <div className='inside_card'>
                <Card style={{ width: '18rem' }}>
                   <Card.Img variant="top" src={mainImg} />
                   <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                   </Card.Body>
                </Card>
               </div>      
            </div>
            <div className="features">
                <Card>
                  <Card.Img variant="top" src={mainImg} />
                  <Card.Body>
                     <Card.Text>
                     Some quick example text to build on the card title and make up the bulk
                     of the card's content.
                     </Card.Text>
                  </Card.Body>
               </Card>
            </div>
            <div>
               <Footer />
            </div>
        </div>
    )
}

export default Landing;