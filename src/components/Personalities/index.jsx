import React, { Fragment } from 'react';
import {
    BrowserView,
    MobileView,
  } from "react-device-detect";
import './Personalities.css';
import confident from '../../static/icon-2.png';
import shy from '../../static/icon-3.png';
import independent from '../../static/icon-4.png';
import laidback from '../../static/icon-5.png';
import adaptable from '../../static/icon-1.png';

const Personalities = () => {
    return(
        <Fragment>
            <BrowserView>
                <div className="big-container">
                    <div className="description">
                        Dogs have these 5 major personality types
                    </div>
                    <div className="personalities">
                        <div className="personality">
                            <img src={confident} alt="confident" className="personality-img"/>
                            Confident
                        </div>
                        <div className="personality">
                            <img src={shy} alt="shy" className="personality-img"/>
                            Shy
                        </div>
                        <div className="personality">
                            <img src={independent} alt="independent" className="personality-img"/>
                            Independent
                        </div>
                        <div className="personality">
                            <img src={laidback} alt="laidback" className="personality-img"/>
                            Laidback
                        </div>
                        <div className="personality">
                            <img src={adaptable} alt="adaptable" className="personality-img"/>
                            Adaptable
                        </div>
                    </div>
                    <div>
                        <button className="learn-button">
                                Learn More
                        </button>
                    </div>
                </div>
            </BrowserView>
            <MobileView>
            <div className="big-container-mobile">
                    <div className="description-mobile">
                        Dogs have these 5 major personality types
                    </div>
                    <div className="personalities-mobile">
                        <div className="personality-mobile">
                            <img src={confident} alt="confident" className="personality-img-mobile"/>
                            Confident
                        </div>
                        <div className="personality-mobile">
                            <img src={shy} alt="shy" className="personality-img-mobile"/>
                            Shy
                        </div>
                        <div className="personality-mobile">
                            <img src={independent} alt="independent" className="personality-img-mobile"/>
                            Independent
                        </div>
                        <div className="personality-mobile">
                            <img src={laidback} alt="laidback" className="personality-img-mobile"/>
                            Laidback
                        </div>
                        <div className="personality-mobile">
                            <img src={adaptable} alt="adaptable" className="personality-img-mobile"/>
                            Adaptable
                        </div>
                    </div>
                    <div>
                        <button className="learn-button-mobile">
                                Learn More
                        </button>
                    </div>
                </div>
            </MobileView>
        </Fragment>
    )
}

export default Personalities;