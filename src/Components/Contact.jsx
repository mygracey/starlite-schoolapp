
 import { useState } from 'react';

import {FaLocationPin} from "react-icons/fa6"
import {FaEnvelope} from "react-icons/fa6"
import {FaPhone} from "react-icons/fa6"
import {FaWhatsapp} from "react-icons/fa6"


function ContactPage(){


  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "dce7e738-3e1d-4c00-9e53-24f6189921a7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
    setTimeout(()=>{
         event.target.reset()
        
    },2000)
   
  };




    return(
        <section className="contactpage">

            <h2>Our Contact</h2>

       
            <div className="contact-details">
                <div className="card-left">
                    <ul>
                        <div className="footer-icon-wrapper">
                            
                                 <FaLocationPin className="icon"/>
                            
                             <p>No.3, Demo mode street</p>
                        </div>
                       
                       <div className="footer-icon-wrapper">
                             
                                <FaEnvelope className="icon"/>
                             
                             <p>demomode@demo.com</p>
                       </div>
                        
                        <div className="footer-icon-wrapper">
                            
                                  <FaPhone className="icon"/> 
                            
                           <p> 000-000-000</p>
                        </div>
                       
                       <div className="footer-icon-wrapper">
                            
                                <FaWhatsapp className="icon"/>
                            
                              <p>000-000-000</p>
                       </div>
                       
                    </ul>
                </div>
                <div className="card-right">
                    <form onSubmit={onSubmit}>
                        <input type="text" name="name" placeholder="Enter your full name" required/><br />
                        <input type="text" name="email" placeholder="Enter your email address" required/><br />
                        <input type="text" name="mobile" placeholder="Enter your mobile number" required/><br />
                        <textarea name="message" placeholder="Type your message here..." required></textarea><br />

                        <button type="submit" name="submit">Submit my message</button>
                         <p id="submission-result">{result}</p>
                    </form>
                </div>
            </div>


      
        </section>
    )

}




export default ContactPage