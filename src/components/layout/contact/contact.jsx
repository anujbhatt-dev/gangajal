import React, {Component} from "react"
import $ from "jquery"

  class Contact extends Component{

    componentDidMount=()=>{
      window.scrollTo({
        top:0,
        behavior:"auto"
      })

      // $(window).scrollTop();
    }

    render(){

      return (
          <div className="contact">
          <h3 className="contact__mail">have a query or want to talk?</h3>
               <h1 className="contact__head">Reach Out.</h1>
               <h3 className="contact__mail">say Hello at <a className="contact__mail_mail" href="mailto:anujbhatt@gmail.com?subject=query">anujbhatt023@gmail.com</a></h3>
               <h3 className="contact__mail">or make a Call at <a className="contact__mail_call" href="tel:7895330052">+91 6395005644</a></h3>
               <h3 className="contact__mail">or have a Chat on <a className="contact__mail_whatsapp" href="tel:7895330052">whatsapp.</a></h3>
          </div>
      )
    }
  }


 export default Contact;
