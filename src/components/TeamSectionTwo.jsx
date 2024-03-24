import Link from "next/link";
import React from "react";

const TeamSectionTwo = () => {
  return (
    <>
      {/* Team Section two start */}
      <section className="team-section two">
        <div className="auto-container">
          <div className="row">
            <div className="col-12">
              <div
                className="section-title-shape-one middle black "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h3>Meet our experts Team </h3>
                <h2>
                  Meet The Our Perfect <br />
                  <span className="theme-color">Teams</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div
                className="inner-wrapper "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="img-file">
                  <img
                    className="img-fluid"
                    src="/assets/img/team/01_team.png"
                    alt="FaconTech"
                  />
                  <div className="shape-overlay">
                    <div className="inner-data">
                      <div className="social one">
                        <Link href="#">
                          <i className="fa-brands fa-facebook-f" />
                        </Link>
                        <Link href="#">
                          <i className="fa-brands fa-twitter" />
                        </Link>
                        <Link href="#">
                          <i className="fa-brands fa-linkedin-in" />
                        </Link>
                        <Link href="#">
                          <i className="fa-brands fa-instagram" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-file">
                  <p>Apartment Agent</p>
                  <h3>Charles L. Walton</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div
                className="inner-wrapper "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="img-file">
                  <img
                    className="img-fluid"
                    src="/assets/img/team/02_team.png"
                    alt="FaconTech"
                  />
                  <div className="shape-overlay">
                    <div className="inner-data">
                      <div className="social one">
                        <Link href="#">
                          <i className="fa-brands fa-facebook-f" />
                        </Link>
                        <Link href="#">
                          <i className="fa-brands fa-twitter" />
                        </Link>
                        <Link href="#">
                          <i className="fa-brands fa-linkedin-in" />
                        </Link>
                        <Link href="#">
                          <i className="fa-brands fa-instagram" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-file">
                  <p>Software Developer</p>
                  <h3>Janet P. Rhodes</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div
                className="inner-wrapper "
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="img-file">
                  <img
                    className="img-fluid"
                    src="/assets/img/team/03_team.png"
                    alt="FaconTech"
                  />
                  <div className="shape-overlay">
                    <div className="inner-data">
                      <div className="social one">
                        <Link href="#">
                          <i className="fa-brands fa-facebook-f" />
                        </Link>
                        <Link href="#">
                          <i className="fa-brands fa-twitter" />
                        </Link>
                        <Link href="#">
                          <i className="fa-brands fa-linkedin-in" />
                        </Link>
                        <Link href="#">
                          <i className="fa-brands fa-instagram" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-file">
                  <p>Pearl Design</p>
                  <h3>Art D. Bowens</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div
                className="inner-wrapper "
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="img-file">
                  <img
                    className="img-fluid"
                    src="/assets/img/team/04_team.png"
                    alt="FaconTech"
                  />
                  <div className="shape-overlay">
                    <div className="inner-data">
                      <div className="social one">
                        <Link href="#">
                          <i className="fa-brands fa-facebook-f" />
                        </Link>
                        <Link href="#">
                          <i className="fa-brands fa-twitter" />
                        </Link>
                        <Link href="#">
                          <i className="fa-brands fa-linkedin-in" />
                        </Link>
                        <Link href="#">
                          <i className="fa-brands fa-instagram" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-file">
                  <p>Gaming officer</p>
                  <h3>Elizabeth C. Joyce</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-image">
          <div className="shape-img-1 poa">
            <img src="/assets/img/icon/77_icon.png" alt="FaconTech" />
          </div>
          <div className="shape-img-2 poa">
            <img src="/assets/img/icon/07_icon.png" alt="FaconTech" />
          </div>
          <div className="shape-img-3 poa">
            <img src="/assets/img/icon/43_icon.png" alt="FaconTech" />
          </div>
          <div className="shape-img-4 poa">
            <img src="/assets/img/icon/95_icon.png" alt="FaconTech" />
          </div>
          <div className="shape-img-6 poa">
            <img src="/assets/img/shape/14_shape.png" alt="FaconTech" />
          </div>
          <div className="shape-img-8 poa">
            <img src="/assets/img/icon/75_icon.png" alt="FaconTech" />
          </div>
          <div className="shape-img-9 poa">
            <img src="/assets/img/icon/78_icon.png" alt="FaconTech" />
          </div>
        </div>
      </section>
      {/* Team Section two end */}
    </>
  );
};

export default TeamSectionTwo;
