import Link from "next/link";

const ServiceSectionOne = () => {
  return (
    <>
      {/* Service Section One Start */}
      <section
        className="service-section one"
        data-background="/assets/img/shape/03_shape.svg"
      >
        <div className="auto-container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-shape-one middle ">
                <h3 data-aos="fade-up" data-aos-delay="200">
                  Explore AWS AI Services
                </h3>
                <h2 data-aos="fade-up" data-aos-delay="300">
                  Explore Best &amp; Awesome AI <br />
                  <span className="theme-color">Services</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="section-wrapper">
                <div
                  className="wrapper-inner one "
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="img-file">
                    <img src="/assets/img/icon/31_icon.png" alt="FaconTech" />
                  </div>
                  <div className="text-file">
                    <h3>
                      <Link href="#">Robotics &amp; Drones</Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Obcaecati iste inventore molestiae? Assumenda facilis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="section-wrapper">
                <div
                  className="wrapper-inner one "
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="img-file">
                    <img src="/assets/img/icon/32_icon.png" alt="FaconTech" />
                  </div>
                  <div className="text-file">
                    <h3>
                      <Link href="#">Analyze videos</Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Obcaecati iste inventore molestiae? Assumenda facilis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="section-wrapper">
                <div
                  className="wrapper-inner one "
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="img-file">
                    <img src="/assets/img/icon/33_icon.png" alt="FaconTech" />
                  </div>
                  <div className="text-file">
                    <h3>
                      <Link href="#">Acquire insights</Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Obcaecati iste inventore molestiae? Assumenda facilis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="section-wrapper">
                <div
                  className="wrapper-inner one "
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="img-file">
                    <img src="/assets/img/icon/34_icon.png" alt="FaconTech" />
                  </div>
                  <div className="text-file">
                    <h3>
                      <Link href="#">Extract text &amp; data</Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Obcaecati iste inventore molestiae? Assumenda facilis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="section-wrapper">
                <div
                  className="wrapper-inner one "
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="img-file">
                    <img src="/assets/img/icon/35_icon.png" alt="FaconTech" />
                  </div>
                  <div className="text-file">
                    <h3>
                      <Link href="#">Online experiences</Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Obcaecati iste inventore molestiae? Assumenda facilis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="section-wrapper">
                <div
                  className="wrapper-inner one "
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="img-file">
                    <img src="/assets/img/icon/40_icon.png" alt="FaconTech" />
                  </div>
                  <div className="text-file">
                    <h3>
                      <Link href="#">Control quality</Link>
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
        </div>
        <div
          className="inner-btn d-adjust"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div>
            <Link className="default-btn" href="/contact">
              View All Services
            </Link>
          </div>
        </div>
        <div className="shape-image">
          <div className="shape-1 poa">
            <img src="/assets/img/icon/13_icon.png" alt="FaconTech" />
          </div>
          <div className="shape-2 poa">
            <img src="/assets/img/icon/28_icon.png" alt="FaconTech" />
          </div>
          <div className="shape-3 poa">
            <img src="/assets/img/icon/41_icon.png" alt="FaconTech" />
          </div>
          <div className="shape-4 poa">
            <img src="/assets/img/icon/02_icon.png" alt="FaconTech" />
          </div>
          <div className="shape-5 poa">
            <img src="/assets/img/icon/42_icon.png" alt="FaconTech" />
          </div>
          <div className="shape-6 poa">
            <img src="/assets/img/icon/43_icon.png" alt="FaconTech" />
          </div>
          <div className="shape-7 poa">
            <img src="/assets/img/icon/70_icon.svg" alt="FaconTech" />
          </div>
        </div>
      </section>
      {/* Service Section One End */}
    </>
  );
};

export default ServiceSectionOne;
