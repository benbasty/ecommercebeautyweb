import './virtual.css';
import React from 'react';
import Shade from '../../assets/shade.png';
import ReactCompareImage from 'react-compare-image';
import Before from '../../assets/before.png';
import After from '../../assets/after.png';

const virtual = () => {
  return (
    <div className='virtual'>
        <div className="left">
            <span>Virtual Try-On</span>
            <span>Never Buy The Wrong Product</span>
            <span>Try Now!</span>
            <img src={Shade} alt="shade" />
        </div>
        <div className='right'>
            <div className="wrapper">
                <ReactCompareImage leftImage={Before} rightImage={After} />
            </div>
            
        </div>
    </div>
  )
}

export default virtual;