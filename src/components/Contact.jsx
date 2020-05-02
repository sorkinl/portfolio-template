import React from 'react';
import $ from 'jquery';

const Contact = () => {
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
        <input type="text" placeholder="name" required />
        <input type="email" placeholder="email" required /><br />
        <textarea placeholder="your message" required rows={5} defaultValue={""} /><br />
        <button className="btn_one">send</button>
      </form> 
      <p />
    </section>
  </div>)
}

export default Contact;