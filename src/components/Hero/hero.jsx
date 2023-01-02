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
                <span>Trandy Collection</span>
                <span>Seedily say has suitable disposable 
                    and boy. Exercise man child rejoiced.
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