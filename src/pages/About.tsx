import React from 'react';
import '../App.css';
import '../Icons.css'

function About() {
  return (
    <>
      <div className="sideBar">
        <h1>Benjamin <br /> Xia</h1>
        <br />
        <h2>About Me</h2>
        <div className="sec-center">
          <input className="dropdown" type="checkbox" id="dropdown" name="dropdown" />
          <label className="for-dropdown" htmlFor="dropdown">MENU <i className="uil uil-arrow-down"></i></label>
          <div className="section-dropdown">
            <a href="/portfolio">Work  <i className="uil uil-arrow-right"></i></a>
            <a className="active">About  <i className="uil uil-times"></i></a>
            <a href="/contact">Contact  <i className="uil uil-arrow-right"></i></a>
          </div>
        </div>
      </div>

      <div className="center">
        <div className="highlight">
          <h1>o/</h1>
        </div>
        <div className="content">
          <h2>
          I'm an enthusiast photographer who started in 2019, before the pandemic. I took photography more seriously around 2022 and created this website for my photos in late 2022.
          </h2>
        </div>
      </div>
    </>
  );
}

export default About;
