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

const data = [
  {
    avatar: AVTR1,
    name: 'Tine Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolorum iste possimus repudiandae praesentium placeat culpa dicta. Blanditiis alias veniam quo. Libero obcaecati voluptatem molestias?'
  },

  {
    avatar: AVTR2,
    name: 'Shatta Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolorum iste possimus repudiandae praesentium placeat culpa dicta. Blanditiis alias veniam quo. Libero obcaecati voluptatem molestias?'
  },

  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolorum iste possimus repudiandae praesentium placeat culpa dicta. Blanditiis alias veniam quo. Libero obcaecati voluptatem molestias?'
  },

  {
    avatar: AVTR4,
    name: 'Amy McBrown',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolorum iste possimus repudiandae praesentium placeat culpa dicta. Blanditiis alias veniam quo. Libero obcaecati voluptatem molestias?'
  },

]

const Testimonials = () => {
  return (
<section id='testimonials'>
  <h5>Review from clients</h5>
  <h2>Testimonials</h2>

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
  </section>  
  )
}

export default Testimonials