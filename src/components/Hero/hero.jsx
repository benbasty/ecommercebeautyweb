import React from 'react';
import './hero.css';
import {RiShoppingBagFill} from 'react-icons/ri';
import {BsArrowRight} from 'react-icons/bs';
import HeroImg from '../../assets/hero.png';
import { motion } from "framer-motion"


const hero = () => {
    const transition = {duration: 3, type: "spring"};
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
            <motion.div
                initial = {{ bottom: "3rem"}} 
                whileInView = {{ bottom: "0rem"}}
                transition = {transition} 
                className="blueCircle" 
            />
            <motion.img 
                initial = {{bottom:"-2rem"}}
                whileInView = {{bottom: "0rem"}}
                transition = {transition}
                src={HeroImg} 
                alt="" 
                width={600}
            />
            <motion.div transition = {transition}
                initial = {{right: "4%"}}
                whileInView = {{right: "2%"}}
                className="cart2">
                <RiShoppingBagFill className='shoppingbag'/>
                <div className="signup">
                    <span>Best Signup Offers</span>
                    <div><BsArrowRight/></div>
                </div>
            </motion.div>
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