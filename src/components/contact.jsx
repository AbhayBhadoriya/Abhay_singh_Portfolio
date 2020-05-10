import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
            <div> 
                <div id="colorlib-counter" className="colorlib-counters" style={{backgroundImage: "url(images/IMG_93.jpg)", marginBottom:"unset"}} data-stellar-background-ratio="0.5">
				<div className="overlay"></div>
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-3 text-center animate-box">
							<span className="colorlib-counter js-counter" data-from="0" data-to="2" data-speed="1000" data-refresh-interval="50"></span>
							<span className="colorlib-counter-label">Years</span>
						</div>
						<div className="col-md-3 text-center animate-box">
							<span className="colorlib-counter js-counter" data-from="0" data-to="6" data-speed="1000" data-refresh-interval="50"></span>
							<span className="colorlib-counter-label">Projects</span>
						</div>
						{/* <div className="col-md-3 text-center animate-box">
							<span className="colorlib-counter js-counter" data-from="0" data-to="30" data-speed="5000" data-refresh-interval="50"></span>
							<span className="colorlib-counter-label">Clients</span>
						</div> */}
						{/* <div className="col-md-3 text-center animate-box">
							<span className="colorlib-counter js-counter" data-from="0" data-to="10" data-speed="5000" data-refresh-interval="50"></span>
							<span className="colorlib-counter-label">Partners</span>
						</div> */}
					</div>
				</div>
			</div>
{/* <section className="colorlib-contact" data-section="contact">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span className="heading-meta">Get in Touch</span>
							<h2 className="colorlib-heading">Contact</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-5">
							<div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
								<div className="colorlib-icon">
									<i className="icon-globe-outline"></i>
								</div>
								<div className="colorlib-text">
									<p><a href="mailto:amitsinghbhadoria788@gmail.com" target="_blank" rel="noopener noreferrer">amitsinghbhadoria788@gmail.com</a></p>
								</div>
							</div>

							<div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
								<div className="colorlib-icon">
									<i className="icon-map"></i>
								</div>
								<div className="colorlib-text">
									<p>B-303 Sai shanti society, loni kalbhor <br></br>pune -412201, Maharashtra, India</p>
								</div>
							</div>

							<div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
								<div className="colorlib-icon">
									<i className="icon-phone"></i>
								</div>
								<div className="colorlib-text">
									<p><a href="tel://">+91 6260131975</a>, <a href="tel://">+91 7769985525</a></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section> */}
            </div>
        )
    }
}