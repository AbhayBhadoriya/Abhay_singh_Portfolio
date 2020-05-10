import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
        return(
            <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url('+"http://localhost:3000/react-prtfolio/images/abhay.jpg"+')'}} />
              <h1 id="colorlib-logo"><a href="index.html">Abhay Singh Bhadoriya</a></h1>
              <span className="email"><a href="mailto:abhaybhadoriya6@gmail.com" target="_blank" rel="noopener noreferrer">abhaybhadoriya6@gmail.com</a></span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar" style={{ marginBottom: '5em', marginTop:'1em'}}>
              <div id="navbar" className="collapse">
                <ul>
                  	<li className="active"><a href="#home" data-nav-section="home">Home</a></li>
					<li><a href="#about" data-nav-section="about">About</a></li>
					<li><a href="#services" data-nav-section="services">Services</a></li>
					<li><a href="#skills" data-nav-section="skills">Skills</a></li>
					<li><a href="#experience" data-nav-section="experience">Experience</a></li>
					<li><a href="#work" data-nav-section="work">Work</a></li>
					{/* <li><a href="#contact" data-nav-section="contact">Contact</a></li> */}
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul style={{    display: 'flex',justifyContent: 'space-evenly'}}>
                <li><a href="https://www.linkedin.com/in/abhay-bhadoriya-b6801991/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/AmitSinghBhadoria" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://amitsinghbhadoria.github.io/react-prtfolio/cv/amit_bhadoria_JSDeveloper_1Y.pdf" target="_blank" rel="noopener noreferrer"><i className="icon-clip"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
              B-303 Sai shanti society, loni kalbhor <br></br> pune -412201, Maharashtra, India
              </small></p>
              <p><small>
                  +91 8605671017
              </small></p>
            </div>
          </aside>
          </div>
        )
    }
}