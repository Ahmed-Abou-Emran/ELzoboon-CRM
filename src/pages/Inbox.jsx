import { useState, useEffect } from "react";
import axios from "axios";
import MailCard from '../components/Mail/MailCard'
import MailContent from '../components/Mail/MailContent'

import "./inbox.css"











const Inbox = () => {

  const [emails, setEmails] = useState([]);
  const [prevEmail, setprevEmail] = useState(0);
  const [emailContent, setemailContent] = useState({
    sender: '',
    desc:'',
    body: ''
  }

  );
  const [viewContent, setviewContent] = useState(true);

  let values = []
  function mailCard(email) {



    return (
    <MailCard 
     onClick={() => setEmailData(email)}
     key = {email.id}
     sender = {email.Subject}
     desc = {email.From}
     body = {email.Message}
      />
    )
  
  }

  function setEmailData(email){


    if(email.id === prevEmail){
      setviewContent(!viewContent)
    }else{
      setprevEmail(email.id)
      setemailContent({
        sender: email.From,
        desc: email.Subject ,
        body: email.Message
      })
    
    }


  }
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/google/google")
      .then((response) => {

        setEmails(response.data);
      });},
      []
    );
    
    useEffect(() => {
      

   
    }, [emails]);

    useEffect(() => {
      
      setviewContent(false);
   
    }, [emailContent]);
  
  

  return (
    <div className='main-container-inbox'>
       <div className='left-container-inbox'>
       <div className='mail-card-inbox'>
       { emails.length > 0 ?
        emails.map(mailCard) : <h1>No Mails</h1>}

       </div>
        
       </div>

       <div style={{overflowWrap: "break-word"}} className='right-container-inbox'>

       
       {viewContent  ?  <h1 style={{overflowWrap: "break-word",textAlign :  "center", marginTop:"40%"}}> Please Select Mail</h1> : <MailContent
             sender = {emailContent.sender}
             desc = {emailContent.desc}
             body = {emailContent.body.replace(/([&][^&; ]+[;])/g)}
       />}

       </div>
    </div>
  )
}

export default Inbox
