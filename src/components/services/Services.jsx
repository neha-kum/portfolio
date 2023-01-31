import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
import { motion } from "framer-motion";


const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        
      <motion.article 
        className="service"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        >          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li><BiCheck className='service__list-icon' />
              <p>Custom Web Design & Development.</p>          </li>

            <li><BiCheck className='service__list-icon' />
              <p>Corporate Branding & Graphics Design.</p>
            </li>

            <li><BiCheck className='service__list-icon' />
              <p>Wireframing.</p>
            </li>

            <li><BiCheck className='service__list-icon' />
              <p>Mobile App Design.</p>
            </li>

            <li><BiCheck className='service__list-icon' />
              <p>Wearables App Design.</p>
            </li>

            <li><BiCheck className='service__list-icon' />
              <p>Product Design.</p>
            </li>
          </ul>
        </motion.article>

        {/* end of ui/ux */}

        <motion.article 
        className="service"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        >
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li><BiCheck className='service__list-icon' />
              <p>Website design and development</p>
            </li>

            <li><BiCheck className='service__list-icon' />
              <p>E-commerce website development</p>
            </li>

            <li><BiCheck className='service__list-icon' />
              <p>Responsive web design</p>
            </li>

            <li><BiCheck className='service__list-icon' />
              <p>CMS integration and customization</p>
            </li>

            <li><BiCheck className='service__list-icon' />
              <p>UI/UX design</p>
            </li>

            <li><BiCheck className='service__list-icon' />
              <p>Web app development</p>
            </li>

            <li><BiCheck className='service__list-icon' />
              <p>Server-side and client-side scripting</p>
            </li>

            <li><BiCheck className='service__list-icon' />
              <p>Search engine optimization (SEO)</p>
            </li>

            <li><BiCheck className='service__list-icon' />
              <p>Maintenance and support services</p>
            </li>
          </ul>
        </motion.article>

        {/* end of web development */}

        <motion.article 
        className="service"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        >
                    <div className="service__head">
            <h3>2D Illustrations</h3>
          </div>

          <ul className="service__list">
            <li><BiCheck className='service__list-icon' />
              <p>Concept art creation</p>
            </li>

            <li><BiCheck className='service__list-icon' />
              <p>Character design</p>
            </li>

            <li><BiCheck className='service__list-icon' />
              <p>Icon and logo design</p>
            </li>

            <li><BiCheck className='service__list-icon' />
              <p>2D animation</p>
            </li>

            <li><BiCheck className='service__list-icon' />
              <p>Illustration for print and digital media</p>
            </li>

            <li><BiCheck className='service__list-icon' />
              <p>Comic book and manga art</p>
            </li>

            <li><BiCheck className='service__list-icon' />
              <p>Storyboarding</p>
            </li>

            <li><BiCheck className='service__list-icon' />
              <p>Traditional Art</p>
            </li>
          </ul>
        </motion.article>

        {/* end of 3rd */}



      </div>

    </section>)
}

export default Services