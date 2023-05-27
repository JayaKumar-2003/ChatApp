import React from 'react'
import Button from 'react-bootstrap/Button';
import{Container,Col,Row}from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './Styles/Register.css';
const Login = () => {
  return (
    <Container className='container-x'>
    <Row>
        <Container>
        <Col className='formContainer'>
        <Form >
           <Row className='Brand'>
           <Col><Form.Text>JK Chat</Form.Text></Col>
           <Col> <Form.Text>Register</Form.Text></Col>
           </Row>
            <Form.Group>
                <Form.Control type='email' placeholder='email'  className="myFormControl"></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Control type='password' className="myFormControl"></Form.Control>
            </Form.Group>
            <Button variant='primary' type="submit">Sign In</Button>
        </Form>
        <p>You do have an account ? Login</p>
        </Col>
        </Container>
    </Row>
   </Container>
  )
}

export default Login;