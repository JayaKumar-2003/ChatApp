import React from 'react'
import { Container,Row,Col} from 'react-bootstrap';
import jane from '../img/jane.jpg'
const Search = () => {
  return (
    <Container className='search-container'>
        <Row className='find'>
            <input type="text" placeholder='find a user' className='input'></input>
        </Row>
        <Row>
         <Col>
         <img src={jane} alt='on' className='chat-image'></img>
         </Col>
          <Col>
          <div className='userChat'>
                <span>Jane</span>
                <p>Hello</p>
           </div>
          </Col>
        </Row>
        <Row>
         <Col>
         <img src={jane} alt='on' className='chat-image'></img>
         </Col>
          <Col>
          <div className='userChat'>
                <span>Jane</span>
                <p>Hello</p>
           </div>
          </Col>
        </Row>
        <Row>
         <Col>
         <img src={jane} alt='on' className='chat-image'></img>
         </Col>
          <Col>
          <div className='userChat'>
                <span>Jane</span>
                <p>Hello</p>
           </div>
          </Col>
        </Row>
    </Container>
  )
}

export default Search;