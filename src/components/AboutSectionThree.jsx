import React from "react";

const AboutSectionThree = () => {
  return (
    <>
      {/* About Section three Start */}
      <section className="about-section three">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="left-wrapper "
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <div className="img-file">
                  <img
                    className="img-fluid "
                    src="/assets/img/about/03_about.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="right-wrapper pl-40 "
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="section-title-shape-one black">
                  <h3>ABOUT COMPANY</h3>
                  <h2>
                    AI services and solutions help your internal sales teams
                  </h2>
                  <p>
                    Artificial intelligence is the simulation of human
                    intelligence processes by machines, especially computer
                    systems. Specific applications of AI include expert systems,
                    natural language processing.
                  </p>
                </div>
                <div className="inner-list">
                  <ul>
                    <li>
                      <span className="img-file">
                        <img src="/assets/img/icon/33_icon.png" alt="" />
                      </span>
                      <div>
                        <h4>Machine Learning</h4>
                        <p>
                          Task Us AI services team is ready to support its
                          client-partners with innovative consulting &amp; tech
                          solutions. Read more about our machine learning
                          services.
                        </p>
                      </div>
                    </li>
                    <li>
                      <span className="img-file">
                        <img src="/assets/img/icon/34_icon.png" alt="" />
                      </span>
                      <div>
                        <h4>AI Smart Solutions</h4>
                        <p>
                          Customer satisfaction is a term frequently used in
                          marketing. It is a measure of how products and
                          services Decorate Your Lawn for the Holidays supplied
                          expectation.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-img">
          <img
            className="shape-1 poa"
            src="/assets/img/shape/14_shape.png"
            alt=""
          />
          <img
            className="shape-2 poa"
            src="/assets/img/icon/84_icon.png"
            alt=""
          />
        </div>
      </section>
      {/* About Section one End */}
    </>
  );
};

export default AboutSectionThree;
