import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from "framer-motion"


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u6ytoi2', 'template_epg0lne', form.current, '81Y9OlY9r_TKWeoJw')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <motion.article
            className="contact__option"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>nehak78800@gmail.com</h5>
            <a href="mailto:nehak78800@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
          </motion.article>

          <motion.article
            className="contact__option"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >        <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+91 7880049324</h5>
            <a href="https://wa.me/917880049324?text=Hello" target='_blank' rel="noreferrer">Send a message</a>
          </motion.article>

        </div>

        {/* end of contact options */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
          <motion.button
            type='submit'
            className='btn btn-primary'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>)
}

export default Contact