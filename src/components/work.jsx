import React, {Component} from "react";

export default class Work extends Component {
    render() {
        return(
            <section className="colorlib-work" data-section="work">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <span className="heading-meta">My Work</span>
                        <h2 className="colorlib-heading animate-box">Recent Work</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                        <div className="project" style={{backgroundImage: "url(images/gyde.png)"}}>
                            <div className="desc">
                                <div className="con">
                                    <h3><a href="https://gyde.ai/" target="_blank" rel="noopener noreferrer">Gyde</a></h3>
                                    <span>Gyde is a powerful toolkit to educate users and drive actions for optimal on-boarding, adoption, engagement & customer success.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                        <div className="project" style={{backgroundImage: "url(images/aptera.png)"}}>
                            <div className="desc">
                                <div className="con">
                                    <h3><a href="https://www.aptera.io/" target="_blank" rel="noopener noreferrer">Aptera MVP 1</a></h3>
                                    <span>Aptera is a multi-sided, digital recruiting and talent development platform. It creates and stores people’s competence profiles in a personal credential wallet.</span>
                                    <span>Users can digitally and immutably store a portfolio of skills, knowledge, motivations, attitudes and traits which are documented in certificates, learning accomplishments.</span>
                                    <span>These data reliably reflect individuals’ competences because they directly come from the data originator (school, university, employer, learning institute or test provider) and can unambiguously attributed to the individual.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}