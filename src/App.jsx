import React from 'react'
import './App.css';
import {
  BrowserView,
  MobileView,
} from "react-device-detect";
import Navbar from './components/Navbar'
import MainText from './components/MainText';
import HeroPic from './components/HeroPic'
import Personalities from './components/Personalities';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserView>
        <div className="text-pic-container">
          <MainText/>
          <HeroPic/>
        </div>
      </BrowserView>
      <MobileView>
      <div className="text-pic-container-mobile">
          <MainText/>
          <HeroPic/>
        </div>
      </MobileView>
      <Personalities/>
    </div>
  );
}

export default App;
