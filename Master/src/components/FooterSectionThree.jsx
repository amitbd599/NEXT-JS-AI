import Link from "next/link";
import React from "react";

const FooterSectionThree = () => {
  return (
    <>
      {/* footer section three start */}
      <footer className="footer-section three">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="footer-wrapper one">
                <h2 className="title" data-aos="fade-up" data-aos-delay="300">
                  Location Info
                </h2>
                <div className="inner" data-aos="fade-up" data-aos-delay="400">
                  <span>
                    <i className="fa-sharp fa-solid fa-location-dot" /> 3487
                    Harter StreetDayton, OH 45402
                  </span>
                  <span>
                    <i className="fa-solid fa-phone" /> +88 251-856-63
                  </span>
                  <span>
                    <i className="fa-solid fa-envelope" /> info@demo.com
                  </span>
                  <span>
                    <i className="fa-sharp fa-regular fa-clock" /> Opening
                    Hours: 8.30 AM – 7.00 PM
                  </span>
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
            <div className="col-lg-4 col-md-6 col-12">
              <div className="footer-wrapper two mt-4 mt-md-0">
                <h2 className="title" data-aos="fade-up" data-aos-delay="300">
                  RECENT POSTS
                </h2>
                <div className="inner" data-aos="fade-up" data-aos-delay="400">
                  <ul>
                    <li>
                      <div>
                        <div className="img-file">
                          <img
                            className="img-fluid"
                            src="/assets/img/blog/01_blog.png"
                            alt="FaconTech"
                          />
                        </div>
                      </div>
                      <div>
                        <Link href="/blog-details">
                          AI consulting services and solutions you achieve your
                          business faster.
                        </Link>
                        <div>
                          <i className="fa-sharp fa-regular fa-clock" />
                          Wednesday, 3/4/2024
                        </div>
                      </div>
                    </li>
                    <li>
                      <div>
                        <div className="img-file">
                          <img
                            className="img-fluid"
                            src="/assets/img/blog/02_blog.png"
                            alt="FaconTech"
                          />
                        </div>
                      </div>
                      <div>
                        <Link href="/blog-details">
                          AI consulting services and solutions you achieve
                          objectives faster.
                        </Link>
                        <div>
                          <i className="fa-sharp fa-regular fa-clock" />
                          Wednesday, 3/4/2024
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="footer-wrapper three mt-4 mt-lg-0">
                <h2 className="title" data-aos="fade-up" data-aos-delay="300">
                  NEWSLETTER
                </h2>
                <div className="inner" data-aos="fade-up" data-aos-delay="400">
                  <p>
                    Oracle Cloud Infrastructure (OCI) AI Services is a
                    collection of services with prebuilt machine learning models
                    that make it easier for developers to apply AI to
                    applications and business operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div
                className="footer-bottom"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <p>Copyright © 2023 FaconTech, All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-image">
          <img
            className="shape-2 poa"
            src="/assets/img/shape/04_shape.png"
            alt="FaconTech"
          />
        </div>
      </footer>
      {/* footer section one end */}
    </>
  );
};

export default FooterSectionThree;
