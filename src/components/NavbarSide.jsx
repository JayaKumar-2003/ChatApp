import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import './NavbarSide.css';
const NavBar = () => {
  return (
     <Navbar bg="transparent" expand="lg">
      <Navbar.Brand href="#home">SideBar</Navbar.Brand>  
    <Navbar.Collapse className="justify-content-end">    
    <img
        className='image'
        alt='reload'
        ></img>  
        <Navbar.Text>
            <a href="#login" className='text'><span className='text'>Jai</span></a>
          </Navbar.Text>
          <Button variant='primary' type="submit">Sign up</Button>
        </Navbar.Collapse>
    <Navbar.Toggle />
  </Navbar>
  )
}

export default NavBar;