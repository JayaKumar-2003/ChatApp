import React, { useContext, useEffect, useState } from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import './Chat.css';
import Messages from './Messages';
import Input from './Input';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';
const Chat = () => {
  const {currentUser} = useContext(AuthContext);
  const [chats,setChats] =useState([]);
  useEffect(()=>{
    const unsub = onSnapshot(doc(db,"userChats",currentUser.uid,(doc)=>{
      setChats(doc.data);
    }));
    return () =>{
      unsub();
    }
  },[currentUser.uid])
  return (
    <Container className='chat'>
        <Row className='nav'>
            <Col>
              <span>Jane</span>
            </Col>
            <Col>
              <Row>
                <Col className="icons">
                <span class="material-symbols-outlined">video_call</span>
                <span class="material-symbols-outlined">person_add</span>
                <span class="material-symbols-outlined">more_horiz</span>
                </Col>
              </Row>
            </Col>
        </Row>
        <Row className='Message'>
            <Messages></Messages>
        </Row>
        <Row className='Input'>
        <Input></Input>
        </Row>
    </Container>
  )
}

export default Chat;