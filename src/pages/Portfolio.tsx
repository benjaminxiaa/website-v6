import React from 'react';
import '../App.css';
import '../Icons.css'

function Portfolio() {
  return (
    <>
      <div className="sideBar">
        <h1>Benjamin <br /> Xia</h1>
        <br />
        <h2>Portfolio</h2>
        <div className="sec-center">
          <input className="dropdown" type="checkbox" id="dropdown" name="dropdown" />
          <label className="for-dropdown" htmlFor="dropdown">MENU <i className="uil uil-arrow-down"></i></label>
          <div className="section-dropdown">
            <a className="active">Work  <i className="uil uil-times"></i></a>
            <a href="/about">About  <i className="uil uil-arrow-right"></i></a>
            <a href="/contact">Contact  <i className="uil uil-arrow-right"></i></a>
          </div>
        </div>
      </div>

      <div className="title">
        <a href="/portfolio/big-sur"><h1>big sur</h1></a> <br />
        <a href='/portfolio/death-valley'><h1>death valley</h1></a> <br />
        <a href='/portfolio/hakone-gardens'><h1>hakone gardens</h1></a> <br />
        <a href='/portfolio/new-mexico'><h1>new mexico</h1></a> <br />
      </div>
    </>
  );
}

export default Portfolio;
