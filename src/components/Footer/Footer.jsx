import React from 'react'
import './Footer.css'
import Logo from '../../assets/logo.png';
import {
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UsersIcon,
    LinkIcon
} from '@heroicons/react/outline'
const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <hr/>
        <div className="main-footer">
            <div className="logo-footer">
                <img src={Logo} alt="logo" />
                <span>Ordinary</span>
            </div>
            <div className="block">
                <div className="detail">
                    <span>Contact US</span>
                    <span className="pngLine">
                        <LocationMarkerIcon className='icon' />
                        <span>111 North Avenue Orlando, FL 32801</span>
                    </span>
                    <span className="pngLine">
                        <PhoneIcon className='icon' />
                        <span>123-456-7890</span>
                        
                    </span>
                    <span className="pngLine">
                        <InboxIcon className='icon' />
                        
                    </span>
                </div>
            </div>
            <div className="block">
                <div className="detail">
                    <span>Account</span>
                    <span className="pngLine">
                        <LoginIcon className='icon' />
                        <span>Sign in</span>
                    </span>
                    
                </div>
            </div>
            <div className="block">
                <div className="detail">
                    <span>Company</span>
                    <span className="pngLine">
                        <UsersIcon className='icon' />
                        <span>About us</span>
                    </span>
                </div>
            </div>
            <div className="block">
                <div className="detail">
                    <span>Ressources</span>
                    <span className="pngLine">
                        <LinkIcon className='icon' />
                        <span>Privacy and Terms</span>
                    </span>
                    
                </div>
            </div>
        </div>  
        <div className="copyRight">
            <span>Copyright @2022 by Ordinary</span>
            <span>All Right Reserved.</span>
        </div>  
    </div>
    
  )
}

export default Footer