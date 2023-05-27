import React from 'react'
import { Button } from 'react-bootstrap'
import './Chat.css';
import Attach from '../img/attach.jpg';
import image from '../img/images.jpg'
const Input = () => {
  return (
   <div className='input'>
        <input type='text' placeholder='Type Something....'></input>
        <div className='send'>
        <img src={Attach} alt='' className='attach'></img>
        <input type='file' style={{display:"none"}} id="file"></input>
        <label htmlFor='file'>
            <img src={image} alt='' className='attach'></img>
        </label>
        <Button>Send</Button>
        </div>
   </div>
  )
}

export default Input;