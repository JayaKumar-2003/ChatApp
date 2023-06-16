import React from 'react'
import Button from 'react-bootstrap/Button';
import{Container,Col,Row}from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './Styles/Register.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate ,Link} from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        try {
            await signInWithEmailAndPassword(auth , email , password);
            console.log('yes');
            navigate('/');
        }catch(err){
            console.log(err);
        }
    }
  return (
    <Container className='container-x'>
    <Row>
        <Container>
        <Col className='formContainer'>
        <Form onSubmit={handleSubmit}>
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
        <p>You do have an account ?<Link to='/register'>register</Link> </p>
        </Col>
        </Container>
    </Row>
   </Container>
  )
}

export default Login;