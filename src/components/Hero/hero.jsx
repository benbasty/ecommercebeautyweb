import React from 'react';
import './hero.css';
import {RiShoppingBagFill} from 'react-icons/ri';
import {BsArrowRight} from 'react-icons/bs';
import HeroImg from '../../assets/hero.png';

const hero = () => {
  return (
    <div className='container-hero'>
        <div className='h_sides'>
            <span className='text1'>Skin Protection Cream</span>
            <div className='text2'>
                <span>Trendy Collection</span>
                <span>Best collection of 
                    skin care products.
                    Shop our range of suncare, sunscreen and aftersun 
                    products to keep yourself protected.
                </span>
            </div>
        </div>
        <div className="wrapper">
            <div className="blueCircle"></div>
            <img src={HeroImg} alt="" width={600}/>
            <div className="cart2">
                <RiShoppingBagFill className='shoppingbag'/>
                <div className="signup">
                    <span>Best Signup Offers</span>
                    <div><BsArrowRight/></div>
                </div>
            </div>

        </div>
        <div className='h_sides'>
            <div className="traffic">
                <span>1.5m</span>
                <span>Monthly Traffic</span>
            </div>
            <div className="customers">
                <span>100k</span>
                <span>Happy Customers</span>
            </div>
        </div>
    </div>
  )
}

export default hero;