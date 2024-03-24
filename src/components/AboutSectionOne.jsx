import Link from "next/link";

const AboutSectionOne = () => {
  return (
    <>
      {/* About Section one Start */}
      <div className="about-section one">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="left-wrapper ">
                <div className=" img-file ">
                  <img
                    className=" img-fluid "
                    data-aos="fade-up"
                    data-aos-delay="200"
                    src="/assets/img/about/01_about.png"
                    alt="FaconTech"
                  />
                  <div
                    className="shape-overlay "
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="overlay ">
                      <span>
                        <img
                          src="/assets/img/icon/44_icon.png"
                          alt="FaconTech"
                        />
                      </span>
                      <h3>
                        Impressive Works <br /> Since 2010
                      </h3>
                      <div className="video-intro ">
                        <Link
                          href="https://www.youtube.com/watch?v=Ke90Tje7VS0"
                          className="popup-video"
                        >
                          <span className="icon">
                            <i className="fa-solid fa-play" />
                          </span>
                          <span className="text">Watch Intro</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="shape-7 poa">
                    <img src="/assets/img/icon/69_icon.svg" alt="FaconTech" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="right-wrapper "
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="section-title-shape-one">
                  <h3>ABOUT COMPANY</h3>
                  <h2>Focusing on the quality of data fueling AI systems.</h2>
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
                        <img
                          src="/assets/img/icon/11_icon.png"
                          alt="FaconTech"
                        />
                      </span>
                      <div>
                        <h4>100% Customer Satisfaction</h4>
                        <p>
                          Oracle Cloud Infrastructure (OCI) AI Services is a
                          collection measure of how products and services
                          Decorate of services with prebuilt machine learning
                          models that make it.
                        </p>
                      </div>
                    </li>
                    <li>
                      <span className="img-file">
                        <img
                          src="/assets/img/icon/12_icon.png"
                          alt="FaconTech"
                        />
                      </span>
                      <div>
                        <h4>Empowering People By Keeping</h4>
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
                <div className="inner-btn">
                  <div>
                    <Link className="default-btn" href="/contact">
                      Learn About AI
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-img">
          <div className="shape-1 poa">
            <img src="/assets/img/icon/10_icon.png" alt="FaconTech" />
          </div>
          <div className="shape-2 poa">
            <img src="/assets/img/icon/09_icon.png" alt="FaconTech" />
          </div>
          <div className="shape-3 poa">
            <img src="/assets/img/shape/01_shape.svg" alt="FaconTech" />
          </div>
          <div className="shape-4 poa">
            <img src="/assets/img/icon/63_icon.png" alt="FaconTech" />
          </div>
          <div className="shape-5 poa">
            <img src="/assets/img/icon/66_icon.png" alt="FaconTech" />
          </div>
          <div className="shape-6 poa">
            <img src="/assets/img/icon/68_icon.png" alt="FaconTech" />
          </div>
        </div>
      </div>
      {/* About Section one End */}
    </>
  );
};

export default AboutSectionOne;
