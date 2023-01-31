import React from 'react'
import CV from '../../assets/cv.pdf'
import { motion } from "framer-motion";




const CTA = () => {
  return (
    <div className='cta'>
        <motion.a 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={CV} 
        download 
        className='btn'>
          Download Resume
          </motion.a>

        <motion.a 
        href="#contact" 
        className='btn btn-primary'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        >
          Let's Talk
          </motion.a>
    </div>
  )
}

export default CTA