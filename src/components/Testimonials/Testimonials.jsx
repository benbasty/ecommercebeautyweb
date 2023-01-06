import React from 'react';
import './Testimonials.css';
import Hero from '../../assets/testimonialHero.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TestimonialsData } from '../../data/testimonials';


const Testimonials = () => {
  return (
    <div className='testimonials'>
        <div className="wrapper-testimonials">
            <div className="container">
                <span>Top Rated</span>
                <span>NEVER BUY THE WRONG PRODUCT</span>
            </div>
            
            <img src={Hero} alt="" />
            
            <div className="container">
                <span>100k</span>
                <span>Happy Customers with us</span>
            </div>
        </div> 
        <div className='reviews'>Reviews</div>

        <div className="carousel">
            <Swiper
                slidesPerView={3}
                slidesPerGroup={1}
                spaceBetween={20}
                className="tCarousel"   
            >
                {
                    TestimonialsData.map((testimonial, i) => (
                        <SwiperSlide>
                            <div className="testimonial">
                                <img src={testimonial.image} alt="" />
                                <span>{testimonial.comment}</span>
                                <hr/>
                                <span>{testimonial.name}</span>
                            </div>
                        </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
  )
}

export default Testimonials