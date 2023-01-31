import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpeg'
import HeaderSocials from './HeaderSocials'
import { motion } from "framer-motion";




const Header = () => {


  return (
 <header>
  <div className="container header__container">
    <h4>Hello I'm</h4>
    <h1>Neha Kumari</h1>
    <h3 className="text-light">Fullstack Developer</h3>
    <CTA />
    <HeaderSocials />

    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      <motion.img 
      src={ME} 
      alt="me" 
      className="me"
      whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        />
    </motion.div>

    <a href="#contact" className='scroll__down'>Scroll Down</a>

  </div>
 </header>
  )
}

export default Header