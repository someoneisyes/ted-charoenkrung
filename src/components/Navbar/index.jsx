import React, { Fragment } from 'react';
import {
    BrowserView,
    MobileView,
  } from "react-device-detect";
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import './Navbar.css';
import { ReactComponent as Logo } from '../../static/logo.svg';

const Navbar = () => {
    return(
        <Fragment>
            <BrowserView>
                <div className="top-bar">
                    <div className="pawsup-logo">
                        <Logo />
                    </div>
                    <div className="nav-item-container">
                        <div className="nav-item">
                            Find A Match
                        </div>
                        <div>
                            Dog's Personalities
                        </div>
                        <div>
                            About Us
                        </div>
                        <div>
                            Contact Us
                        </div>
                        <div>
                            <SearchIcon/>
                        </div>
                    </div>
                </div>
            </BrowserView>
            <MobileView>
            <div className="top-bar">
                    <div className="pawsup-logo-mobile">
                        <Logo />
                    </div>        
                    <div>
                        <MenuIcon/>
                    </div>
                </div>
            </MobileView>
        </Fragment>
    )
}

export default Navbar;