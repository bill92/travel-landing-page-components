import React, { useState } from 'react';
import facebook from './assets/img/facebook.png';
import instagram from './assets/img/instagram.png';
import twitter from './assets/img/twitter.png';
import explore from './assets/explore.mp4';

import './assets/index.css';

const VideoSection = () => {

  const [isActive, setIsActive] = useState(false);

  const toggleIsActive = () => isActive ? setIsActive(false) : setIsActive(true);

  return (
    <section className={`showcase ${isActive ? 'active' : ''}`}>
      <header>
        <h2 className="logo">Travel</h2>
        <div className={`toggle ${isActive ? 'active' : ''}`} onClick={() => toggleIsActive()}></div>
      </header>

      <video src={explore} muted loop autoPlay></video>

      <div className="overlay"></div>

      <div className="text">
        <h2>Never Stop</h2>
        <h3>Exploring The World</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, expedita pariatur corporis. A dicta, laborum eveniet porro. Eos rem, perspiciatis.</p>
        <a href="#">Explore</a>
      </div>

      <ul className="social">
        <li><a href="#"><img src={facebook}/></a></li>
        <li><a href="#"><img src={twitter} /></a></li>
        <li><a href="#"><img src={instagram} /></a></li>
      </ul>
    </section>
  )
}

export default VideoSection;
