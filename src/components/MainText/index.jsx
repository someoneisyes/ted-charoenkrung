import React, { Fragment } from 'react';
import {
    BrowserView,
    MobileView,
  } from "react-device-detect";
import './MainText.css';

const MainText = () => {
    return(
        <Fragment>
            <BrowserView>
                <div className="main-text-container">
                    <div className="main-text">
                        What's meant to be will always find a way.
                    </div>
                    <div className="main-subtext">
                        PawsUp help you to find the best partner for your dearest puppy friend        
                    </div>
                    <div>
                        <button className="match-button">
                                Find a Match
                        </button>
                    </div>
                </div>
            </BrowserView>
            <MobileView>
            <div className="main-text-container-mobile">
                    <div className="main-text-mobile">
                        What's meant to be will always find a way.
                    </div>
                    <div className="main-subtext">
                        PawsUp help you to find the best partner for your dearest puppy friend        
                    </div>
                    <div>
                        <button className="match-button-mobile">
                                Find a Match
                        </button>
                    </div>
                </div>
            </MobileView>
        </Fragment>
    )
}

export default MainText;