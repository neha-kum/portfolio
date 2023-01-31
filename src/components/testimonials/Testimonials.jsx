import React from 'react'
import './testimonials.css'
import AVTR1 from'../../assets/avatar1.jpg'
import AVTR2 from'../../assets/avatar2.jpg'
import AVTR3 from'../../assets/avatar3.jpg'
import AVTR4 from'../../assets/avatar4.jpg'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import {motion} from "framer-motion";

const data = [
  {
    avatar: AVTR1,
    name: 'Tine Snow',
    review: 'I love the website she designed for me. The UI is so responsive!'
  },

  {
    avatar: AVTR2,
    name: 'Shatta Snow',
    review: 'She pays so much attention to details! It is almost unbelievable! '
  },

  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'Wow! I loved the character she designed for me.'
  },

  {
    avatar: AVTR4,
    name: 'Amy McBrown',
    review: 'I must say that her UI/UX designing is very professional.'
  },

]

const Testimonials = () => {
  return (
<section id='testimonials'>
  <h5>Review from clients</h5>
  <h2>Testimonials</h2>

<motion.div 
whileHover={{ scale: 1.1 }}
whileTap={{ scale: 0.9 }}>
  <Swiper className="container testimonials__container"
   modules={[Pagination]}
   spaceBetween={40}
   slidesPerView={1}
   pagination={{clickable: true}}
   >
   {
    data.map(({avatar, name, review}, index)=>{
      return(
        <SwiperSlide key={index} className="testimonial">
    <div className="client__avatar">
      <img src={avatar} alt="Avatar one" />
      </div>
      <h5 className='client__name'>{name}</h5>
      <small className="client__review">{review}</small>
   </SwiperSlide>
      )
    })
   }
  </Swiper>
  </motion.div>
  </section>  
  )
}

export default Testimonials