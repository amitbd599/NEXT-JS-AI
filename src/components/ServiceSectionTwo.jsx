import React from "react";
import { Link } from "react-router-dom";

const ServiceSectionTwo = () => {
  return (
    <>
      {/* Service Section Two Start */}
      <section className="service-section two">
        <div className="auto-container">
          <div className="row">
            <div className="col-12">
              <div
                className="section-title-shape-one middle "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3>
                  {"{"} ADVANCED SERVICES {"}"}
                </h3>
                <h2>
                  Our Top Featured Solutions <br /> Transforming{" "}
                  <span className="theme-color">AI Enterprises</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="section-wrapper "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="wrapper-inner one">
                  <div className="img-file">
                    <img src="/assets/img/icon/31_icon.png" alt="" />
                  </div>
                  <div className="text-file">
                    <h3>
                      <Link to="#">Robotics &amp; Drones</Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Obcaecati iste inventore molestiae? Assumenda facilis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="section-wrapper "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="wrapper-inner one">
                  <div className="img-file">
                    <img src="/assets/img/icon/32_icon.png" alt="" />
                  </div>
                  <div className="text-file">
                    <h3>
                      <Link to="#">Analyze videos</Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Obcaecati iste inventore molestiae? Assumenda facilis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="section-wrapper "
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="wrapper-inner one">
                  <div className="img-file">
                    <img src="/assets/img/icon/33_icon.png" alt="" />
                  </div>
                  <div className="text-file">
                    <h3>
                      <Link to="#">Acquire insights</Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Obcaecati iste inventore molestiae? Assumenda facilis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="section-wrapper "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="wrapper-inner one">
                  <div className="img-file">
                    <img src="/assets/img/icon/34_icon.png" alt="" />
                  </div>
                  <div className="text-file">
                    <h3>
                      <Link to="#">Extract text &amp; data</Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Obcaecati iste inventore molestiae? Assumenda facilis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="section-wrapper "
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="wrapper-inner one">
                  <div className="img-file">
                    <img src="/assets/img/icon/35_icon.png" alt="" />
                  </div>
                  <div className="text-file">
                    <h3>
                      <Link to="#">Online experiences</Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Obcaecati iste inventore molestiae? Assumenda facilis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="section-wrapper "
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="wrapper-inner one">
                  <div className="img-file">
                    <img src="/assets/img/icon/40_icon.png" alt="" />
                  </div>
                  <div className="text-file">
                    <h3>
                      <Link to="#">Control quality</Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Obcaecati iste inventore molestiae? Assumenda facilis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inner-btn d-adjust">
            <div>
              <Link className="default-btn" to="/service">
                View All Services
              </Link>
            </div>
          </div>
        </div>
        <div className="shape-img">
          <img
            className="shape-1 poa"
            src="/assets/img/icon/65_icon.png"
            alt=""
          />
          <img
            className="shape-2 poa"
            src="/assets/img/icon/28_icon.png"
            alt=""
          />
          <img
            className="shape-3 poa"
            src="/assets/img/icon/66_icon.png"
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
            src="/assets/img/icon/74_icon.png"
            alt=""
          />
          <img
            className="shape-10 poa"
            src="/assets/img/icon/66_icon.png"
            alt=""
          />
        </div>
      </section>
      {/* Service Section Two  End */}
    </>
  );
};

export default ServiceSectionTwo;
