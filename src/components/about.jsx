import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About </span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am a Web Developer, mobile App Developer & Programmer living in pune, India. I make web applications, usually with Dotnet & Mobile Applications, with Xamarin.</p>
                    {/* <p> Hello. I'm Amit and I'm a multi-talented human. Most of my time I create and build digital products.</p> */}
                    <p>I don’t like to define myself by the work I’ve done. I define myself by the work I want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself, and do interesting things that matter.</p>
                    <p>I primarily use C#, but picking up a new freamework or language isn't a problem. I have extensive programming experience and I'm comfortable developing on the frontend or backend as well as setting up or managing infrastructure.</p>
                    <p>Fueled by high energy levels and boundless enthusiasm, I’m
easily inspired and more then willing to follow my fascinations
wherever they take me. I’m passionate, expressive, multi-talented
spirit with a natural ability to entertain and inspire. I’m never
satisfied to just come up with ideas. Instead I have an almost
impulsive need to act on them.</p>
<p>My abundant energy fuels me in the pursuit of many interests,
hobbies, areas of study and artistic endeavors. I’m a fast learner,
able to pick up new skills and juggle different projects and roles
with relative ease. I like to develop expertise in a number of areas
over the course of my life and career.</p>
<p>I’m a people-person with deep emotions and empathy, a natural
storyteller. I’m able to inspire and am at my best when I’m
sharing my creative expressions with others.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="row">
								<div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
									<div className="services color-1">
										<span className="icon2"><i className="icon-bulb"></i></span>
										<h3>Problem Solving</h3>
									</div>
								</div>
								<div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
									<div className="services color-2">
										<span className="icon2"><i className="icon-globe-outline"></i></span>
										<h3>Systems Thinking</h3>
									</div>
								</div>
								<div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
									<div className="services color-3">
										<span className="icon2"><i className="icon-data"></i></span>
										<h3>Communicating</h3>
									</div>
								</div>
								<div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
									<div className="services color-4">
										<span className="icon2"><i className="icon-phone3"></i></span>
										<h3>Organising</h3>
									</div>
								</div>
							</div>
        </div>
        </section>
      </div>
    )
  }
}
