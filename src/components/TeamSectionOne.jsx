"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const TeamSectionOne = () => {
  return (
    <>
      {/* Team Section one start */}
      <section className="team-section one">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div
                className="section-title-shape-one left "
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <h3>Meet our experts Team </h3>
                <h2>
                  Meet The Our Perfect <br />
                  <span className="theme-color">Teams</span>
                </h2>
                <p>
                  As you may have read in our AI, ML, and deep learning post, ML
                  is a subset of AI. Not all AI systems learn from experience.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="swiper swiper-container team-one">
              <div className="swiper-wrapper">
                <Swiper
                  loop={true}
                  spaceBetween={20}
                  slidesPerView={4}
                  speed={1000}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 6000 }}
                  className="mySwiper"
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      pagination: false,
                      spaceBetween: 20,
                      slidesPerGroup: 1,
                    },
                    500: {
                      slidesPerView: 1,
                      pagination: false,
                      spaceBetween: 20,
                      slidesPerGroup: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                    1200: {
                      slidesPerView: 4,
                    },
                    1400: {
                      slidesPerView: 4,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div>
                      <div className="inner-wrapper ">
                        <div className="img-file">
                          <img
                            className="img-fluid"
                            src="/assets/img/team/01_team.png"
                            alt="FaconTech"
                          />
                          <div className="shape-overlay">
                            <div className="inner-data">
                              <div>
                                <h3>George Y. Huff</h3>
                                <p>
                                  4536 Beeghley StreetTemple, <br /> TX 76501
                                </p>
                                <p>GeorgeYHuff@rhyta.com</p>
                              </div>
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
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="inner-wrapper ">
                        <div className="img-file">
                          <img
                            className="img-fluid"
                            src="/assets/img/team/02_team.png"
                            alt="FaconTech"
                          />
                          <div className="shape-overlay">
                            <div className="inner-data">
                              <div>
                                <h3>Kandi P. Tighe</h3>
                                <p>
                                  3423 Melville Street Memphis, <br /> TN 38141
                                </p>
                                <p>hompson@armyspy.com</p>
                              </div>
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
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="inner-wrapper ">
                        <div className="img-file">
                          <img
                            className="img-fluid"
                            src="/assets/img/team/03_team.png"
                            alt="FaconTech"
                          />
                          <div className="shape-overlay">
                            <div className="inner-data">
                              <div>
                                <h3>Joey E. Deal</h3>
                                <p>
                                  2752 Lightning Point Drive Memphis, <br /> TN
                                  38110
                                </p>
                                <p>JoeyEDeal@dayrep.com</p>
                              </div>
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
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="inner-wrapper ">
                        <div className="img-file">
                          <img
                            className="img-fluid"
                            src="/assets/img/team/04_team.png"
                            alt="FaconTech"
                          />
                          <div className="shape-overlay">
                            <div className="inner-data">
                              <div>
                                <h3>Dorthy W. Buggs</h3>
                                <p>
                                  4141 Public Works Drive Kingsport <br /> TN
                                  37663
                                </p>
                                <p>orthyWBuggs@armyspy.com</p>
                              </div>
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
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="inner-wrapper ">
                        <div className="img-file">
                          <img
                            className="img-fluid"
                            src="/assets/img/team/05_team.png"
                            alt="FaconTech"
                          />
                          <div className="shape-overlay">
                            <div className="inner-data">
                              <div>
                                <h3>Jeffrey D. Naquin</h3>
                                <p>
                                  4244 Golf Course Drive Chantilly, <br /> VA
                                  22021
                                </p>
                                <p>JeffreyDNaquin@jourrapide.com</p>
                              </div>
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
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="inner-wrapper ">
                        <div className="img-file">
                          <img
                            className="img-fluid"
                            src="/assets/img/team/06_team.png"
                            alt="FaconTech"
                          />
                          <div className="shape-overlay">
                            <div className="inner-data">
                              <div>
                                <h3>Beverly J. Dillon</h3>
                                <p>
                                  1985 My Drive Garden City, <br /> NY 11530
                                </p>
                                <p>BeverlyJDillon@rhyta.com</p>
                              </div>
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
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            {/* If we need pagination */}
          </div>
        </div>
        <div className="shape-image">
          <div className="shape-img-1 poa">
            <img src="/assets/img/icon/48_icon.png" alt="FaconTech" />
          </div>
          <div className="shape-img-2 poa">
            <img src="/assets/img/icon/28_icon.png" alt="FaconTech" />
          </div>
          <div className="shape-img-3 poa">
            <img src="/assets/img/icon/43_icon.png" alt="FaconTech" />
          </div>
          <div className="shape-img-4 poa">
            <img src="/assets/img/icon/15_icon.png" alt="FaconTech" />
          </div>
          <div className="shape-img-5 poa">
            <img src="/assets/img/icon/17_icon.png" alt="FaconTech" />
          </div>
          <div className="shape-img-6 poa">
            <img src="/assets/img/icon/49_icon.png" alt="FaconTech" />
          </div>
          <div className="shape-img-7 poa">
            <img src="/assets/img/icon/62_icon.png" alt="FaconTech" />
          </div>
          <div className="shape-img-8 poa">
            <img src="/assets/img/icon/75_icon.png" alt="FaconTech" />
          </div>
          <div className="shape-img-9 poa">
            <img src="/assets/img/icon/78_icon.png" alt="FaconTech" />
          </div>
        </div>
      </section>
      {/* Team Section one end */}
    </>
  );
};

export default TeamSectionOne;
