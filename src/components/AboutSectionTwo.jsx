import React from "react";
import { Link } from "react-router-dom";

const AboutSectionTwo = () => {
  return (
    <>
      {/* About section two start */}
      <section className="about-section two">
        <div className="auto-container">
          <div className="row">
            <div
              className="col-lg-6 "
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="section-title-shape-one">
                <h3 className="white">
                  {"{"} ABOUT COMPANY {"}"}
                </h3>
                <h2>
                  Delivering IT solutions that enable <br /> you to{" "}
                  <span className="theme-color">work smarter</span>
                </h2>
                <p>
                  Artificial Intelligence as a Service (AIaaS) is the
                  third-party offering of artificial intelligence (AI)
                  outsourcing. It enables individuals and companies to
                  experiment with AI for various purposes without a large
                  initial investment and with lower risk.
                </p>
              </div>
              <div className="inner-list">
                <ul>
                  <li>
                    We offer AI consulting services and solutions that will help
                    you achieve your business objectives faster
                  </li>
                  <li>
                    Oracle Cloud Infrastructure (OCI) AI Services is a
                    collection of services with prebuilt machine.
                  </li>
                  <li>
                    Avenga AI services help companies AI and ML solutions at all
                    stages.
                  </li>
                  <li>
                    Deploy mission-critical AI solutions. Use the same proven AI
                    services.
                  </li>
                </ul>
                <div className="inner-btn d-adjust">
                  <div>
                    <Link className="default-btn" to="/about">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 "
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="img-file">
                <img
                  className="img-fluid"
                  src="/assets/img/about/02_about.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="shape-img">
          <img
            className="shape-1 poa"
            src="/assets/img/icon/21_icon.png"
            alt=""
          />
          <img
            className="shape-2 poa"
            src="/assets/img/icon/90_icon.png"
            alt=""
          />
          <img
            className="shape-3 poa"
            src="/assets/img/icon/91_icon.png"
            alt=""
          />
          <img
            className="shape-4 poa"
            src="/assets/img/icon/15_icon.png"
            alt=""
          />
          <img
            className="shape-5 poa"
            src="/assets/img/icon/43_icon.png"
            alt=""
          />
          <img
            className="shape-6 poa"
            src="/assets/img/icon/27_icon.png"
            alt=""
          />
          <img
            className="shape-7 poa"
            src="/assets/img/icon/71_icon.png"
            alt=""
          />
          <img
            className="shape-8 poa"
            src="/assets/img/shape/09_shape.png"
            alt=""
          />
          <img
            className="shape-9 poa"
            src="/assets/img/icon/44_icon.png"
            alt=""
          />
          <img
            className="shape-10 poa"
            src="/assets/img/icon/66_icon.png"
            alt=""
          />
          <img
            className="shape-11 poa"
            src="/assets/img/icon/03_icon.png"
            alt=""
          />
        </div>
      </section>
      {/* About section two end */}
    </>
  );
};

export default AboutSectionTwo;
