import React, { useRef } from 'react'
import './contact.css'
import Twitter from '../../assets/twi.png'
import Instagram from '../../assets/instagram.png'
import GitHub from '../../assets/Git.png'
import LinkedIn from '../../assets/LinkedIn.png'
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_p713a2o', 'template_yzuozk8', form.current, {
        publicKey: 'gwAy8GuD4y3W3rgi1',
      })
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email sent!')
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <section id='contactPage'>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='from_name'/>
                <input type='email' className='email' placeholder='Your Email' name='reply_to'/>
                <textarea className="msg" name="message" rows='5' placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className='contactBtn'>Submit</button><br/>
                <div className='links'>
                 <a href='https://www.linkedin.com/in/aarush-raj-gandhari/' target="_blank" rel="noopener noreferrer"> <img src={LinkedIn} alt='linkedin' className='link'/></a>
                  <a href='https://github.com/G-Aarush-Raj' target='_blank' rel="noopener noreferrer"><img src={GitHub} alt='github' className='link' href='https://github.com/G-Aarush-Raj'/></a>
                   <a href='https://x.com/GandhariRaj' target='_blank' rel="noopener noreferrer"><img src={Twitter} alt='twitter' className='link'/></a>
                   <a href='https://www.instagram.com/_aarush._.raj_/'target='_blank' rel="noopener noreferrer"><img src={Instagram} alt='instagram' className='link'/></a>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
