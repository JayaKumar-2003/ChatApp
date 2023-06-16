import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import './NavbarSide.css';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext';
const NavBar = () => {
  const {currentUser} = useContext(AuthContext);
  return (
     <Navbar bg="transparent" expand="lg">
      <Navbar.Brand href="#home">SideBar</Navbar.Brand>  
    <Navbar.Collapse className="justify-content-end">    
    <img
        className='image'
        src={currentUser.photoURL}
        alt='reload'
        ></img>  
        <Navbar.Text>
            <a href="#login" className='text'><span className='text'>{currentUser.displayName}</span></a>
          </Navbar.Text>
          <Button variant='primary' type="submit" onClick={()=>signOut(auth)}>Sign out</Button>
        </Navbar.Collapse>
    <Navbar.Toggle />
  </Navbar>
  )
}

export default NavBar;