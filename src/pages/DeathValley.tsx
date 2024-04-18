import React from 'react';
import '../App.css';
import '../Icons.css'

import Gallery from '../components/DeathValley'

function DeathValley() {
  return (
    <>
      <div className="sideBar">
        <h1>Benjamin <br /> Xia</h1>
        <br />
        <h2>Death Valley</h2>
        <br />

        <div className='gallery-nav'>
          <a href="/portfolio/big-sur">Big Sur</a>
          <a className="activePage">Death Valley</a>
          <a href="/portfolio/hakone-gardens">Hakone Gardens</a>
          <a href="/portfolio/new-mexico">New Mexico</a>
        </div>

        <div className="sec-center">
          <input className="dropdown" type="checkbox" id="dropdown" name="dropdown" />
          <label className="for-dropdown" htmlFor="dropdown">MENU <i className="uil uil-arrow-down"></i></label>
          <div className="section-dropdown">
            <a href="/portfolio">Work  <i className="uil uil-arrow-right"></i></a>
            <a href="/about">About  <i className="uil uil-arrow-right"></i></a>
            <a href="/contact">Contact  <i className="uil uil-arrow-right"></i></a>
          </div>
        </div>
      </div>

      <div className="main">
        <Gallery />
      </div>
    </>
  );
}

export default DeathValley;