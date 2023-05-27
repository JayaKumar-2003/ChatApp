import React from 'react'
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';
import { Col,Container,Row } from 'react-bootstrap';
import './Styles/Register.css';
const Home = () => {
  return (
    <Container className='container-h'>
        <Row>
          <Col  xs={3} className='Sidebar'>
          <Sidebar></Sidebar>
          </Col>
          <Col  xs={6} className='Chat' >
          <Chat></Chat>
          </Col>
        </Row>
    </Container>
  )
}

export default Home;