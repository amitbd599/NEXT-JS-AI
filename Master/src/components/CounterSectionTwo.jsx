"use client";
import React from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

const CounterSectionTwo = () => {
  return (
    <>
      {/* counter-section two start */}
      <section
        className="counter-section two"
        data-background="/assets/img/shape/03_shape.svg"
      >
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="wrapper " data-aos="fade-up" data-aos-delay="200">
                <div>
                  <div className="d-adjust gap-2 justify-content-start middle">
                    <h2 className="counter">
                      <ReactVisibilitySensor>
                        {({ isVisible }) => (
                          <span> {isVisible ? <CountUp end={420} /> : 0}</span>
                        )}
                      </ReactVisibilitySensor>
                    </h2>
                    <h3>+</h3>
                  </div>
                  <h4>Team member</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div
                className="wrapper mt-md-0 mt-4 "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div>
                  <div className="d-adjust gap-2 justify-content-start middle">
                    <h2 className="counter">
                      <ReactVisibilitySensor>
                        {({ isVisible }) => (
                          <span> {isVisible ? <CountUp end={720} /> : 0}</span>
                        )}
                      </ReactVisibilitySensor>
                    </h2>
                    <h3>+</h3>
                  </div>
                  <h4>Solutions Delivered</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div
                className="wrapper mt-lg-0 mt-4 "
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div>
                  <div className="d-adjust gap-2 justify-content-start middle">
                    <h2 className="counter">
                      <ReactVisibilitySensor>
                        {({ isVisible }) => (
                          <span> {isVisible ? <CountUp end={450} /> : 0}</span>
                        )}
                      </ReactVisibilitySensor>
                    </h2>
                    <h3>+</h3>
                  </div>
                  <h4>Business Covered</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div
                className="wrapper mt-lg-0 mt-4 "
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div>
                  <div className="d-adjust gap-2 justify-content-start middle">
                    <h2 className="counter">
                      <ReactVisibilitySensor>
                        {({ isVisible }) => (
                          <span> {isVisible ? <CountUp end={830} /> : 0}</span>
                        )}
                      </ReactVisibilitySensor>
                    </h2>
                    <h3>+</h3>
                  </div>
                  <h4>Happy Customers</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-img">
          <img
            className="shape-1 poa"
            src="/assets/img/icon/93_icon.png"
            alt="FaconTech"
          />
          <img
            className="shape-2 poa"
            src="/assets/img/icon/77_icon.png"
            alt="FaconTech"
          />
        </div>
      </section>
      {/* counter-section two end */}
    </>
  );
};

export default CounterSectionTwo;
