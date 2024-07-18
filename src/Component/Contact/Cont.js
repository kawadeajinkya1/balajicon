import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


import classes from './Cont.module.css';
import contact from '../../Component/Contact/book/IMG_6831.jpg';
import visit from '../../Component/About/pix/home.png';
import phone from '../../Component/About/pix/call.png';
import mail from '../../Component/About/pix/email.png';



const Cont = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1n792tk', 'template_e2jr2up', form.current, 'xSB01PC6tLOxFYP8j')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className={classes.Cmain}> 
      
      <div className={classes.top}>
        <div>
        <img src={contact} className={classes.image}></img>
        </div>
        <div className={classes.flex}>
        <div className={classes.para1}>
          <h1>Contact Us</h1>
          <p>Need an Expert?<br/>
          You are more than welcome to leave your <br></br>contact info and we will be in touch shortly</p>
          </div>
          <div className={classes.left}>
          <form ref={form} onSubmit={sendEmail} className={classes.bg}>
              <label> First Name</label><br></br>
              <input type='text' name="name" className={classes.bg1}/><br></br><br></br>
              <label> Last Name</label><br></br>
              <input type='text' name="Lname" className={classes.bg1}></input><br></br><br></br>
              <label> Email address</label><br></br>
              <input type='text'name="email" className={classes.bg1}></input><br></br><br></br>
              <label>Comments</label><br></br>
              <textarea cols='45' rows='10' name="message" className={classes.bg1}>

              </textarea><br></br>
              <div>
                <button type="submit" value="Send" className={classes.btn}>SEND</button>
              </div>


            </form>
          </div>
         </div>
      </div>
      <div className={classes.add}>
        <div className={classes.first}>
          <div className={classes.A1}>
          <img src={visit} className={classes.vicon}></img>

          <h3 className={classes.h}>Visit Us</h3>
          <p className={classes.visit}>Office No A-314 Nyati Empress beside Giga space IT park,<br></br> Viman Nagar, Pune - 411014, <br></br> Maharashtra, India.</p>
          </div>
        </div>
        <div className={classes.second}>
          <div className={classes.A2}>
          <img src={phone} className={classes.picon}></img>
          <h3 className={classes.hs}>Call Us</h3>
          <p><a href='tel:083079000'>+917083079000</a></p>
          <p><a href='tel:9028079000'>+919028079000</a></p>
     
          </div>

        </div>


        <div className={classes.third}>
          <div className={classes.A3}>
          <img src={mail}className={ classes.micon}></img>
          <h3 className={classes.hss}>Message Us</h3>
          <p><a href='mailto:admin@balajiconstruction.in'>admin@balajiconstruction.in</a></p>
          <p><a href='mailto: accounts@balajiconstruction.in'> accounts@balajiconstruction.in</a></p>
          <p><a href='mailto:info@balajiconstruction.in'>info@balajiconstruction.in</a></p>
          <p><a href='mailto: santosh@balajiconstruction.in'>santosh@balajiconstruction.in</a></p>
          </div>

         
        </div>
      </div>

      <br></br>
      <div className={classes.bottom}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30254.311763690897!2d73.96225125842734!3d18.583550376717955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c49d044a51b7%3A0x3ceafc0ed6e98528!2sOxy%20Primo!5e0!3m2!1sen!2sin!4v1697607385630!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"className ={classes.map}></iframe>

      </div>

    </div>
  )
  
}

export default Cont;