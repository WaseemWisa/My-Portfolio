import React, { useRef } from 'react'
import SectionHeading from './SectionHeading'
import '../Styles/components/contact.scss'
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tru1isj', 'template_6k3chk7', form.current, '9iGOH7wCoGO4Xn0fq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id="contact">
      <div className="container">
        <SectionHeading title={'contact'} desc={'Feel free to Contact me by submitting the form below and I will get back to you as soon as possible'}/>
        <form ref={form} onSubmit={sendEmail} method='post'>
          <div className="">
            <label htmlFor="user_name">Name</label>
            <input type="text" name='user_name' placeholder='Enter Your Name' />
          </div>
          <div className="">
            <label htmlFor="user_email">Email</label>
            <input type="email" name='user_email' placeholder='Enter Your Email' />
          </div>
          <div className="">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="" cols="30" rows="10" placeholder='Enter Your Message'></textarea>
          </div>
          <button type="submit">Send Now</button>
        </form>
      </div>
    </section>
  )
}

export default Contact