"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";

const SliderOne = () => {
  return (
    <>
      {/* slider-area-one-start  */}
      <section className="hero-slider one">
        <div className="swiper hero-slider-init-one swiper-container swiper-container-fade">
          <Swiper
            loop={true}
            modules={[FreeMode, Navigation, Thumbs, EffectFade]}
            effect="fade"
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            <SwiperSlide>
              <div className="item-slider sliderm-height p-relative swiper-slide">
                <div
                  className="slide-bg"
                  style={{
                    backgroundImage:
                      "url('assets/img/bg-image/01_bg-image.png')",
                  }}
                />
                <div className="auto-container">
                  <div className="row ">
                    <div className="col-xl-7 col-12">
                      <div className="slider-content-inner ">
                        <div>
                          <h2 className="slider-title">
                            AI Machine consulting services and solutions With
                            <span className="theme-color">IT Support</span>
                          </h2>
                          <p className="description">
                            To take a trivial example, which of us ever
                            undertakes laborious physical exercise, except to
                            obtain some advantage from it but right to find
                            fault with a man who chooses enjoy. for your
                            business work.
                          </p>
                          <div className="inner-btn">
                            <div>
                              <Link className="default-btn" href="/contact">
                                Explore Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-5">
                      <div className="slider-content-inner-right">
                        <div className="img-wrapper">
                          <img
                            src="assets/img/hero/01_hero-image.png"
                            alt="FaconTech"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item-slider sliderm-height p-relative swiper-slide">
                <div
                  className="slide-bg"
                  style={{
                    backgroundImage:
                      "url('assets/img/bg-image/02_bg-image.png')",
                  }}
                />
                <div className="auto-container">
                  <div className="row ">
                    <div className="col-xl-7 col-12">
                      <div className="slider-content-inner ">
                        <div>
                          <h2 className="slider-title">
                            helping companies process information or data more
                            <span className="theme-color">Efficiently</span>
                          </h2>
                          <p className="description">
                            AI for customer engagement, improving customer
                            service for companies with tools like AI chatbots.
                            We offer AI consulting services and solutions that
                            will help you achieve your business objectives
                            faster.
                          </p>
                          <div className="inner-btn">
                            <div>
                              <Link className="default-btn" href="/contact">
                                Explore Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-5">
                      <div className="slider-content-inner-right">
                        <div className="img-wrapper">
                          <img
                            src="assets/img/hero/02_hero-image.png"
                            alt="FaconTech"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item-slider sliderm-height p-relative swiper-slide">
                <div
                  className="slide-bg"
                  style={{
                    backgroundImage:
                      "url('assets/img/bg-image/03_bg-image.png')",
                  }}
                />
                <div className="auto-container">
                  <div className="row ">
                    <div className="col-xl-7 col-12">
                      <div className="slider-content-inner ">
                        <div>
                          <h2 className="slider-title">
                            Avenga AI services help companies create AI and
                            <span className="theme-color"> ML solutions</span>
                          </h2>
                          <p className="description">
                            To take a trivial example, which of us ever
                            undertakes laborious physical exercise, except to
                            obtain some advantage from it but right to find
                            fault with a man who chooses enjoy. for your
                            business work.
                          </p>
                          <div className="inner-btn">
                            <div>
                              <Link className="default-btn" href="/contact">
                                Explore Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-5">
                      <div className="slider-content-inner-right">
                        <div className="img-wrapper">
                          <img
                            src="assets/img/hero/03_hero-image.png"
                            alt="FaconTech"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* If we need navigation buttons */}
          <div
            id="swiper-button-prev"
            className="swiper-button-prev hero-button"
          >
            <i className="fa-regular fa-angles-left" />
          </div>
          <div
            id="swiper-button-next"
            className="swiper-button-next hero-button"
          >
            <i className="fa-regular fa-angles-right" />
          </div>
          {/* Shape Image */}
          <div className="shape-image">
            <div className="inner-shape-1 poa">
              <img
                className="img-fluid"
                src="assets/img/icon/01_icon.png"
                alt="FaconTech"
              />
            </div>
            <div className="inner-shape-2 poa">
              <img
                className="img-fluid"
                src="assets/img/icon/02_icon.png"
                alt="FaconTech"
              />
            </div>
            <div className="inner-shape-3 poa">
              <img
                className="img-fluid"
                src="assets/img/icon/03_icon.png"
                alt="FaconTech"
              />
            </div>
            <div className="inner-shape-4 poa">
              <img
                className="img-fluid"
                src="assets/img/icon/04_icon.png"
                alt="FaconTech"
              />
            </div>
            <div className="inner-shape-5 poa">
              <img
                className="img-fluid"
                src="assets/img/icon/04_icon.png"
                alt="FaconTech"
              />
            </div>
            <div className="inner-shape-6 poa">
              <img
                className="img-fluid"
                src="assets/img/icon/06_icon.png"
                alt="FaconTech"
              />
            </div>
            <div className="inner-shape-7 poa">
              <img
                className="img-fluid"
                src="assets/img/icon/07_icon.png"
                alt="FaconTech"
              />
            </div>
            <div className="inner-shape-8 poa">
              <img
                className="img-fluid"
                src="assets/img/icon/08_icon.png"
                alt="FaconTech"
              />
            </div>
            <div className="inner-shape-9 poa">
              <img
                className="img-fluid"
                src="assets/img/icon/27_icon.png"
                alt="FaconTech"
              />
            </div>
          </div>
        </div>
      </section>
      {/* slider-area-one-end */}
    </>
  );
};

export default SliderOne;
