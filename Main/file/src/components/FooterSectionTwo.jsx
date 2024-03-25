import Link from "next/link";
import React from "react";

const FooterSectionTwo = () => {
  return (
    <>
      {/* footer section two start */}
      <footer
        className="footer-section two"
        data-background="/assets/img/shape/12_shape.png"
      >
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-12">
              <div className="footer-wrapper one">
                <div className="logo" data-aos="fade-up" data-aos-delay="200">
                  <img
                    src="/assets/img/common/logo-white.png"
                    alt="FaconTech"
                  />
                </div>
                <div className="des" data-aos="fade-up" data-aos-delay="300">
                  <p>
                    Artificial intelligence is intelligence demonstrated by
                    machines, as opposed to intelligence of humans and other
                    animals. Example tasks in which this is done include speech
                    recognition, computer vision, translation between languages,
                    as well as other mappings of inputs.
                  </p>
                </div>
                <div
                  className="form-sub"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <form action="post">
                    <div className="input-box">
                      <input
                        type="text"
                        placeholder="Enter Your Email Address"
                      />
                      <Link className="submit" href="#">
                        Sign Up Free
                      </Link>
                    </div>
                  </form>
                </div>
                <div
                  className="social one"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
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
            <div className="col-lg-2 col-md-6 col-12">
              <div className="footer-wrapper two mt-4 mt-md-0">
                <h2 className="title" data-aos="fade-up" data-aos-delay="200">
                  Quick Link
                </h2>
                <ul data-aos="fade-up" data-aos-delay="300">
                  <li>
                    <Link href="#">About Us</Link>
                  </li>
                  <li>
                    <Link href="#">Services</Link>
                  </li>
                  <li>
                    <Link href="#">Blog</Link>
                  </li>
                  <li>
                    <Link href="#">Pricing Plan</Link>
                  </li>
                  <li>
                    <Link href="#">Our Team</Link>
                  </li>
                  <li>
                    <Link href="#">All Projects</Link>
                  </li>
                  <li>
                    <Link href="#">Contact</Link>
                  </li>
                  <li>
                    <Link href="#">Trams &amp; Condition</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <div className="footer-wrapper two mt-4 mt-lg-0">
                <h2 className="title" data-aos="fade-up" data-aos-delay="200">
                  IT Service
                </h2>
                <ul data-aos="fade-up" data-aos-delay="300">
                  <li>
                    <Link href="#">Credit industry</Link>
                  </li>
                  <li>
                    <Link href="#">Research sector</Link>
                  </li>
                  <li>
                    <Link href="#">Finance Sector</Link>
                  </li>
                  <li>
                    <Link href="#">Credit industry</Link>
                  </li>
                  <li>
                    <Link href="#">AI Research</Link>
                  </li>
                  <li>
                    <Link href="#">ICT industry</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="footer-wrapper three mt-4 mt-lg-0">
                <h2 className="title" data-aos="fade-up" data-aos-delay="200">
                  Latest Work
                </h2>
                <ul data-aos="fade-up" data-aos-delay="300">
                  <li>
                    <Link href="/project-details">
                      <img
                        className="img-fluid"
                        src="/assets/img/project/01_project.png"
                        alt="FaconTech"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="/project-details">
                      <img
                        className="img-fluid"
                        src="/assets/img/project/02_project.png"
                        alt="FaconTech"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="/project-details">
                      <img
                        className="img-fluid"
                        src="/assets/img/project/03_project.png"
                        alt="FaconTech"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="/project-details">
                      <img
                        className="img-fluid"
                        src="/assets/img/project/04_project.png"
                        alt="FaconTech"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="/project-details">
                      <img
                        className="img-fluid"
                        src="/assets/img/project/05_project.png"
                        alt="FaconTech"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="/project-details">
                      <img
                        className="img-fluid"
                        src="/assets/img/project/06_project.png"
                        alt="FaconTech"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div
                className="footer-bottom"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <p>Copyright © 2023 FaconTech, All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer section two end */}
    </>
  );
};

export default FooterSectionTwo;
