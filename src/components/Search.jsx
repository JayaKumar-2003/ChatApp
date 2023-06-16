import React, { useContext, useState } from 'react'
import { Container,Row,Col} from 'react-bootstrap';
import { db } from '../firebase';
import {  collection , doc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore';
import { AuthContext } from '../context/AuthContext';
const Search = () => {
  const [username,setUsername] = useState("");
  const [user,setUser] = useState("");
  const [err,Seterr] = useState(false);
  const {currentUser} = useContext(AuthContext);
  const handleSearch = async ()=>{
    const q = query(collection(db,"users"),where("displayName","==",username));
    try{
      const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc)=>{
      setUser(doc.data())
    })
    }catch(err) {
      Seterr(true);
    }
  };
  

  const handleKey = (e) =>{
    e.code ==="Enter" && handleSearch();
  };
  const handleSelect = async() =>{
    const combinedId =currentUser.uid > user.uid ? currentUser.uid +user.uid : user.uid +currentUser.uid;
   try{
    const res = await getDocs(doc,(db,"chats",combinedId));
    if(!res.exists()) {
      await setDoc(doc,(db,"chats",combinedId),{messages:[]});
     
     await updateDoc(doc(db,"userChats",currentUser.uid),{
      [combinedId+"userInfo"]:{
        uid:currentUser.uid,
        displayName:currentUser.displayName,
        photoURL:currentUser.photoURL
      },
      [combinedId+".date"]: serverTimestamp()
     })
    }
   }
   catch(err) {

   }
   setUser(null);
   setUsername("");
  }

  return (
    <Container className='search-container'>
        <Row className='find'>
            <input style={{color:'black'}} type="text" placeholder='find a user' className='input'onKeyDown={handleKey} onChange={(e)=>{setUsername(e.target.value)}} value={username}></input>
        </Row>
        {err && <span>User not found</span>}
       {user && <Row onClick={handleSelect}> 
        <Col>
         <img src={user.photoURL} alt='on' className='chat-image'></img>
         </Col>
          <Col>
          <div className='userChat'>
                <span>{user.displayname}</span>
                <p>Hello</p>
           </div>
          </Col> 
        </Row> }
        
    </Container>
  )
}

export default Search;