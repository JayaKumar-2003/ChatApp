import React from 'react'
import { Container } from 'react-bootstrap';
import NavBar from './NavbarSide';
import Search from './Search';
const Sidebar = () => {
  return (
   <Container>
    <NavBar></NavBar>
    <Search></Search>
   </Container>
  )
}

export default Sidebar;