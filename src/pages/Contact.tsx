import '../App.css';
import '../Icons.css'

function Contact() {
  return (
    <>
      <div className="sideBar">
        <h1>Benjamin <br /> Xia</h1>
        <br />
        <h2>Contact Me</h2>
        <div className="sec-center">
          <input className="dropdown" type="checkbox" id="dropdown" name="dropdown" />
          <label className="for-dropdown" htmlFor="dropdown">MENU <i className="uil uil-arrow-down"></i></label>
          <div className="section-dropdown">
            <a href="/portfolio">Work  <i className="uil uil-arrow-right"></i></a>
            <a href="/about">About  <i className="uil uil-arrow-right"></i></a>
            <a className="active">Contact  <i className="uil uil-times"></i></a>
          </div>
        </div>
      </div>

      <div className="main">
      </div>
    </>
  );
}

export default Contact;
