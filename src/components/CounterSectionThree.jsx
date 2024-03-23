import React from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

const CounterSectionThree = () => {
  return (
    <>
      {/* counter-section three start */}
      <section
        className="counter-section two white"
        data-background="/assets/img/shape/03_shape.svg"
      >
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="wrapper " data-aos="fade-up" data-aos-delay="200">
                <div className="d-adjust gap-2 justify-content-center">
                  <h2 className="counter">
                    <ReactVisibilitySensor>
                      {({ isVisible }) => (
                        <div> {isVisible ? <CountUp end={200} /> : 0}</div>
                      )}
                    </ReactVisibilitySensor>
                  </h2>
                  <h3>+</h3>
                </div>
                <h4>Team member</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="wrapper mt-md-0 mt-4 "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="d-adjust gap-2 justify-content-center">
                  <h2 className="counter">
                    <ReactVisibilitySensor>
                      {({ isVisible }) => (
                        <div> {isVisible ? <CountUp end={720} /> : 0}</div>
                      )}
                    </ReactVisibilitySensor>
                  </h2>
                  <h3>+</h3>
                </div>
                <h4>Solutions Delivered</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="wrapper mt-lg-0 mt-4 "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="d-adjust gap-2 justify-content-center">
                  <h2 className="counter">
                    <ReactVisibilitySensor>
                      {({ isVisible }) => (
                        <div> {isVisible ? <CountUp end={450} /> : 0}</div>
                      )}
                    </ReactVisibilitySensor>
                  </h2>
                  <h3>+</h3>
                </div>
                <h4>Business Covered</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="wrapper mt-lg-0 mt-4 "
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="d-adjust gap-2 justify-content-center">
                  <h2 className="counter">
                    <ReactVisibilitySensor>
                      {({ isVisible }) => (
                        <div> {isVisible ? <CountUp end={830} /> : 0}</div>
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
      </section>
      {/* counter-section two end */}
    </>
  );
};

export default CounterSectionThree;
