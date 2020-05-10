import React, { Component } from "react";

export default class Skills extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-skills" data-section="skills">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">My Specialty</span>
                <h2 className="colorlib-heading animate-box">My Skills</h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-12 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <p>
                  I design and code beautifully simple things, and I love what I
                  do. I'm quietly confident, naturally curious, and perpetually
                  working on improving my skills one at a time.
                </p>
              </div>
              <div
                className="col-md-6 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="progress-wrap">
                  <h3>C#</h3>
                  <div className="progress">
                    <div
                      className="progress-bar color-1"
                      role="progressbar"
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "85%" }}
                    >
                      <span>85%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="progress-wrap">
                  <h3>MVC</h3>
                  <div className="progress">
                    <div
                      className="progress-bar color-2"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "75%" }}
                    >
                      <span>75%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div className="progress-wrap">
                  <h3>Xamarin</h3>
                  <div className="progress">
                    <div
                      className="progress-bar color-3"
                      role="progressbar"
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "85%" }}
                    >
                      <span>85%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="progress-wrap">
                  <h3>Azure Portal</h3>
                  <div className="progress">
                    <div
                      className="progress-bar color-4"
                      role="progressbar"
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "60%" }}
                    >
                      <span>60%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="progress-wrap">
                  <h3>SQL</h3>
                  <div className="progress">
                    <div
                      className="progress-bar color-6"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "80%" }}
                    >
                      <span>80%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div className="progress-wrap">
                  <h3>Nuxt/vue .js</h3>
                  <div className="progress">
                    <div
                      className="progress-bar color-7"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "70%" }}
                    >
                      <span>70%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{ display: "flex" }}>
              {/* <div className="col-md-12"> */}
              <div
                className="col-md-6 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <h4 className="animate-box">SOFT SKILLS</h4>
                <ul style={{ listStyleType: "square" }}>
                  <li>Effcient and effective communication skills </li>
                  <li>Self-organized and able to work independently</li>
                  <li>Coach-ability and the desire to coach others</li>
                  <li>Motivated to take on new challenges</li>
                  <li>Collaborative mindset and open-minded</li>
                </ul>
              </div>
              <div
                className="col-md-6  animate-box"
                data-animate-effect="fadeInLeft"
              >
                <h4 className="animate-box">HARD SKILLS</h4>
                <ul style={{ listStyleType: "square" }}>
                  <li>Diligence and attention to detail</li>
                  <li>
                    High self-motivation in working individually or other teams
                  </li>
                  <li>Ability to work and juggle between multiple projects</li>
                  <li>User-centric mindset for problem solving</li>
                  <li>
                    {" "}
                    Building user stories, personas, task flows, storyboards,
                    sitemaps, use cases and scenarios
                  </li>
                </ul>
              </div>
              {/* </div> */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
