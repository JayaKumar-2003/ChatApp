import React from 'react'
import Button from 'react-bootstrap/Button';
import{Container,Col,Row}from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './Styles/Register.css';
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth , storage} from "../firebase";
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {doc , setDoc} from "firebase/firestore";
import { db } from '../firebase';
import { useNavigate ,Link} from 'react-router-dom';
const Register = () => {
  const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      const displayName = e.target[0].value;
      const email = e.target[1].value;
      const password = e.target[2].value;
      const file = e.target[3].files[0];
      console.log(e);
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const storageRef = ref(storage, displayName);
        console.log(" " + storage + " " + storageRef, displayName);
        const uploadTask = uploadBytesResumable(storageRef, file);
        console.log(uploadTask);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload progress: " + progress + "%");
          },
          (error) => {
            console.log(error);
          },
          () => {
            console.log("entered");
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
              console.log("user");
              console.log("user present");
              await res.user.getIdToken();
              await updateProfile(res.user, {
                displayName,
                photoURL: downloadURL,
              });
  
              await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                displayName,
                email,
                photoURL: downloadURL,
              });

              await setDoc(doc(db,"userChats", res.user.uid), {});
              navigate("/");
            });
          }
        );
      } catch (err) {
        console.log(err);
      }
    };
  
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
            <Form.Group className="mb-3">
                <Form.Control type='text' placeholder='display name'  className="myFormControl"></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control type='email' placeholder='email'  className="myFormControl"></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control type='password' className="myFormControl"></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control type='file'></Form.Control>
            </Form.Group>
            <Button variant='primary' type="submit">Sign up</Button>
        </Form>
        <p>You do have an account ? <Link to='/login'>Login</Link></p>
        </Col>
        </Container>
    </Row>
   </Container>
  )
}

export default Register;