import React, { Fragment } from 'react';
import {
    BrowserView,
    MobileView,
  } from "react-device-detect";
import './HeroPic.css'
import hero from '../../static/hero.png';

const HeroPic = () => {
    return(
        <Fragment>
            <BrowserView>
                <div className='hero-container'>
                    <div>
                        <img src={hero} alt='pugs-pic' className='hero'/>
                    </div>
                </div>
            </BrowserView>
            <MobileView>
            <div className='hero-container-mobile'>
                    <div>
                        <img src={hero} alt='pugs-pic' className='hero-mobile'/>
                    </div>
                </div>
            </MobileView>
        </Fragment>
    )
}

export default HeroPic;