"use client";
import Link from "next/link";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

const CounterSectionOne = () => {
  return (
    <>
      {/* Counter-section one start */}
      <section
        className="counter-section one"
        style={{
          backgroundImage: "url('/assets/img/bg-image/04_bg-image.jpg')",
        }}
      >
        <div className="auto-container">
          <div className="award-part " data-aos="fade-up" data-aos-delay="300">
            <div className="row">
              <div className="col-lg-6">
                <div className="title">
                  <h2>
                    To be coworkers with <br /> someone?
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inner-btn d-adjust">
                  <div>
                    <Link className="default-btn" href="/contact">
                      Let’s Work To Do
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlay-text">
              <h1>AI</h1>
            </div>
            <div className="shape-img">
              <img
                className="shape-1 poa"
                src="./assets/img/icon/50_icon.png"
                alt="FaconTech"
              />
              <img
                className="shape-2 poa"
                src="./assets/img/icon/51_icon.png"
                alt="FaconTech"
              />
              <img
                className="shape-3 poa"
                src="./assets/img/icon/16_icon.png"
                alt="FaconTech"
              />
              <img
                className="shape-4 poa"
                src="./assets/img/icon/52_icon.png"
                alt="FaconTech"
              />
            </div>
          </div>
          <div className="inner-wrapper">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="left-wrapper "
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="title-des">
                    <h2>Let’s See Our Company Achievement</h2>
                    <p>
                      This refers to the general concept of machines acting in a
                      way that simulates or mimics human intelligence. AI can
                      have a variety of features, such as human-like
                      communication or decision making.
                    </p>
                  </div>
                  <div className="list">
                    <ul>
                      <li>
                        <i className="fa-regular fa-chevrons-right" />
                        The ability of a digital computer or computer-controlled
                        robot.
                      </li>
                      <li>
                        <i className="fa-regular fa-chevrons-right" />
                        Artificial intelligence or AI refers to the simulation
                        of human intelligence in machines.
                      </li>
                      <li>
                        <i className="fa-regular fa-chevrons-right" />
                        Artificial intelligence (AI) is intelligence
                        demonstrated by machines.
                      </li>
                      <li>
                        <i className="fa-regular fa-chevrons-right" />
                        Artificial Intelligence can be defined as a set of
                        algorithms and techniques aimed at imitating human.
                      </li>
                    </ul>
                    <div className="inner-btn d-adjust">
                      <div>
                        <Link className="default-btn" href="/contact">
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="right-wrapper ">
                  <div className="d-sm-flex d-block gap-4">
                    <div>
                      <div
                        className="item"
                        data-aos="fade-up"
                        data-aos-delay="300"
                      >
                        <div className="count-body">
                          <h2 className="counter">
                            <ReactVisibilitySensor>
                              {({ isVisible }) => (
                                <span>
                                  {isVisible ? <CountUp end={10} /> : 0}
                                </span>
                              )}
                            </ReactVisibilitySensor>
                          </h2>
                          <h4>+</h4>
                        </div>
                        <div className="text">
                          <h3>Years Of Experience</h3>
                        </div>
                      </div>
                      <div
                        className="item mt-30"
                        data-aos="fade-up"
                        data-aos-delay="300"
                      >
                        <div className="count-body">
                          <h2 className="counter">
                            <ReactVisibilitySensor>
                              {({ isVisible }) => (
                                <span>
                                  {isVisible ? <CountUp end={682} /> : 0}
                                </span>
                              )}
                            </ReactVisibilitySensor>
                          </h2>
                          <h4>+</h4>
                        </div>
                        <div className="text">
                          <h3>Total Projects Complete</h3>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div
                        className="item"
                        data-aos="fade-up"
                        data-aos-delay="400"
                      >
                        <div className="count-body">
                          <h2 className="counter">
                            <ReactVisibilitySensor>
                              {({ isVisible }) => (
                                <span>
                                  {isVisible ? <CountUp end={52} /> : 0}
                                </span>
                              )}
                            </ReactVisibilitySensor>
                          </h2>
                          <h4>+</h4>
                        </div>
                        <div className="text">
                          <h3>Expert Team Member</h3>
                        </div>
                      </div>
                      <div
                        className="item mt-30"
                        data-aos="fade-up"
                        data-aos-delay="400"
                      >
                        <div className="count-body">
                          <h2 className="counter">
                            <ReactVisibilitySensor>
                              {({ isVisible }) => (
                                <span>
                                  {isVisible ? <CountUp end={43} /> : 0}
                                </span>
                              )}
                            </ReactVisibilitySensor>
                          </h2>
                          <h4>+</h4>
                        </div>
                        <div className="text">
                          <h3>Best Awards Winning</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shape-img">
            <img
              className="shape-5 poa"
              src="./assets/img/icon/53_icon.png"
              alt="FaconTech"
            />
            <img
              className="shape-6 poa"
              src="./assets/img/icon/15_icon.png"
              alt="FaconTech"
            />
            <img
              className="shape-7 poa"
              src="./assets/img/icon/17_icon.png"
              alt="FaconTech"
            />
            <img
              className="shape-8 poa"
              src="./assets/img/icon/54_icon.png"
              alt="FaconTech"
            />
          </div>
        </div>
      </section>
      {/* Counter-section one end */}
    </>
  );
};

export default CounterSectionOne;
