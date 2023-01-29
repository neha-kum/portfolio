import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { motion } from "framer-motion";

// const container = {
//   hidden: { opacity: 1, scale: 0 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       delayChildren: 0.3,
//       staggerChildren: 0.2
//     }
//   }
// };

// const item = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1
//   }
// };

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="a picture of me"
              className='img' />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <motion.article
              className='about__card'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>6+ Months Web Development</small>
            </motion.article>

            <motion.article 
            className='about__card'
            whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>50+ Clients</small>
            </motion.article>

            <motion.article 
            className='about__card'
            whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </motion.article>

          </div>

          <p>
            {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem in aut nemo rerum, corporis aliquid ut, quo nisi quos, doloremque unde optio architecto voluptate illo nesciunt vel minima quod quaerat! */}
          </p>

          <motion.a 
          href="#contact" 
          className='btn btn-primary'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          >
            Let's Talk
          </motion.a>

        </div>

      </div>
    </section>
  )
}

export default About