import React, {useState} from 'react';
import { Axios } from '../firebase/firebaseConfig'
import $ from 'jquery';

const Contact = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    
    const validate = () => {
      let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (name == ""){
        console.log("name is not correct")
        return false;
      } 
      if (emailReg.test(email)){
        console.log("email is not correct")
        return false;
      }
      if(message.length < 10){
        console.log("message is small")
        return false;
      }

      return true;
    }
   const submitForm = (event) => {
     event.preventDefault();
     if(validate()){
    sendEmail()
    setName("")
    setEmail("")
    setMessage("")
     }
  } 
  const sendEmail = () => {
    Axios.post(
      'https://us-central1-portfolio-7fe3f.cloudfunctions.net/submit',
      {
        name: name,
        email: email,
        message: message
      }
    ).catch(error => {
      console.log(error)
    })
  }
  function closecontact(){
    $("#contact_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideOutDown");
        $("#contact_container").css("display","none");
    },800);
}
    return(<div id="contact_container" className="container">
    <div onClick={closecontact}><i className="fas fa-angle-down" /></div>
    <h1>contact.</h1>
    <section>
      <h2>contact me</h2>
      <p>
      </p><form>
        <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="name" required />
        <input value={email} onChange={e => setEmail(e.target.value)}type="email" placeholder="email" required /><br />
        <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="your message" required rows={5}  /><br />
        <button type="button" className="btn_one" onClick={submitForm}>send</button>
      </form> 
      <p />
    </section>
  </div>)
}

export default Contact;