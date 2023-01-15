import React from 'react';
import './slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper';
import {SliderProducts} from '../../data/products'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slider = () => {
  return (
    <div className='slider-container'>
        <Swiper 
            modules={[Pagination, Navigation]}
            className="mySwiper"
            loopFillGroupWithBlank= {true}
            spaceBetween={50} 
            slidesPerView={4}
            slidesPerGroup={1}
            loop= {true}
            navigation = {true}
            breakpoints = {{
                856: {
                    slidesPerView: 3
                },
                640: {
                    slidesPerView: 3
                },
                0: {
                    slidesPerView: 1
                }
            }}
        >
            {SliderProducts.map((slide, i) => (
                <SwiperSlide>
                    <div className="left-side">
                        <div className="name">
                            <span>{slide.name}</span>
                            <span>{slide.detail}</span>
                        </div>
                        <span>{slide.price}$</span>
                        <div>Shop Now</div>
                    </div>
                    <img src={slide.img} alt="product" className="img-product" />

                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default slider;