import React from 'react';
import '../App.css';
import '../Icons.css'

function Home() {
  return (
    <>
      <div className="title noselect">
        <div className="title-logo">
            <h1>Benjamin Xia</h1>
        </div>
        <div className="title-links">
            <a href="/portfolio">PORTFOLIO</a>
            <a href="/about">ABOUT</a>
            <a href="/contact">CONTACT</a>
        </div>
    </div>
    </>
  );
}

export default Home;
