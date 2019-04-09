import React from "react";

class About extends React.Component {
  render() {
    return (
      <div>
        <div className="aboutus-section">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="aboutus">
                  <h2 className="aboutus-title">About Us</h2>
                  <p className="aboutus-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                  <p className="aboutus-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="aboutus-banner">
                  <img
                    src="http://themeinnovation.com/demo2/html/build-up/img/home1/about1.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-5 col-sm-6 col-xs-12">
                <div className="feature">
                  <div className="feature-box">
                    <div className="clearfix">
                      {/* <div className="iconset">
                                    <span className="glyphicon glyphicon-cog icon"></span>
                                </div> */}
                      <div className="feature-content">
                        <h4>Work with heart</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="feature-box">
                    <div className="clearfix">
                      {/* <div className="iconset">
                                    <span className="glyphicon glyphicon-cog icon"></span>
                                </div> */}
                      <div className="feature-content">
                        <h4>Reliable services</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="feature-box">
                    <div className="clearfix">
                      {/* <div className="iconset">
                                    <span className="glyphicon glyphicon-cog icon"></span>
                                </div> */}
                      <div className="feature-content">
                        <h4>Great support</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
