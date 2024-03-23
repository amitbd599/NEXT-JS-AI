import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
const ServiceSectionThree = () => {
  return (
    <>
      {/* Service Section three Start */}
      <section className="service-section three">
        <div className="auto-container">
          <div className="row">
            <div className="col-12">
              <div
                className="section-title-shape-one middle black "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h3>ADVANCED SERVICES</h3>
                <h2>
                  Our Top Featured Solutions <br /> Transforming{" "}
                  <span className="theme-color">AI Enterprises</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="swiper swiper-container service-one">
              <div className="swiper-wrapper">
                <Swiper
                  loop={true}
                  spaceBetween={20}
                  slidesPerView={3}
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
                      slidesPerView: 3,
                    },
                    1400: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="inner-wrapper ">
                        <div className="img-file">
                          <img
                            className="img-fluid"
                            src="/assets/img/service/04_service.png"
                            alt=""
                          />
                        </div>
                        <div className="text-file">
                          <h2 className="title">
                            <Link to="/service-details">
                              Transform Data Insights
                            </Link>
                          </h2>
                          <p>
                            Ensure your IT infrastructure remains resilient when
                            adopting trans formative technologies.
                          </p>
                          <div className="link">
                            <Link to="/service-details">Read More</Link>
                          </div>
                          <div className="shape-overlay">
                            <img src="/assets/img/shape/15_shape.svg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="inner-wrapper ">
                        <div className="img-file">
                          <img
                            className="img-fluid"
                            src="/assets/img/service/05_service.png"
                            alt=""
                          />
                        </div>
                        <div className="text-file">
                          <h2 className="title">
                            <Link to="/service-details">
                              Shine a light on dark Light
                            </Link>
                          </h2>
                          <p>
                            Ensure your IT infrastructure remains resilient when
                            adopting trans formative technologies.
                          </p>
                          <div className="link">
                            <Link to="/service-details">Read More</Link>
                          </div>
                          <div className="shape-overlay">
                            <img src="/assets/img/shape/15_shape.svg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="inner-wrapper ">
                        <div className="img-file">
                          <img
                            className="img-fluid"
                            src="/assets/img/service/06_service.png"
                            alt=""
                          />
                        </div>
                        <div className="text-file">
                          <h2 className="title">
                            <Link to="/service-details">
                              Achieve Faster Objectives
                            </Link>
                          </h2>
                          <p>
                            Ensure your IT infrastructure remains resilient when
                            adopting trans formative technologies.
                          </p>
                          <div className="link">
                            <Link to="/service-details">Read More</Link>
                          </div>
                          <div className="shape-overlay">
                            <img src="/assets/img/shape/15_shape.svg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="inner-wrapper ">
                        <div className="img-file">
                          <img
                            className="img-fluid"
                            src="/assets/img/service/07_service.png"
                            alt=""
                          />
                        </div>
                        <div className="text-file">
                          <h2 className="title">
                            <Link to="/service-details">
                              Benefits Of Implementing
                            </Link>
                          </h2>
                          <p>
                            Ensure your IT infrastructure remains resilient when
                            adopting trans formative technologies.
                          </p>
                          <div className="link">
                            <Link to="/service-details">Read More</Link>
                          </div>
                          <div className="shape-overlay">
                            <img src="/assets/img/shape/15_shape.svg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="swiper-slide">
                      <div className="inner-wrapper ">
                        <div className="img-file">
                          <img
                            className="img-fluid"
                            src="/assets/img/service/08_service.png"
                            alt=""
                          />
                        </div>
                        <div className="text-file">
                          <h2 className="title">
                            <Link to="/service-details">
                              Efficiency &amp; Productivity
                            </Link>
                          </h2>
                          <p>
                            Ensure your IT infrastructure remains resilient when
                            adopting trans formative technologies.
                          </p>
                          <div className="link">
                            <Link to="/service-details">Read More</Link>
                          </div>
                          <div className="shape-overlay">
                            <img
                              className="img-fluid"
                              src="/assets/img/shape/15_shape.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
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
        <div className="shape-img">
          <img
            className="shape-1 poa"
            src="/assets/img/icon/96_icon.png"
            alt=""
          />
          <img
            className="shape-2 poa"
            src="/assets/img/icon/92_icon.png"
            alt=""
          />
          <img
            className="shape-3 poa"
            src="/assets/img/icon/71_icon.png"
            alt=""
          />
          <img
            className="shape-4 poa"
            src="/assets/img/icon/77_icon.png"
            alt=""
          />
        </div>
      </section>
      {/* Service Section three End */}
    </>
  );
};

export default ServiceSectionThree;
