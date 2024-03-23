import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";
const TestimonialSectionThree = () => {
  return (
    <>
      {/* Testimonial Section three start*/}
      <section className="testimonial-section three">
        <div className="auto-container">
          <div className="row">
            <div className="col-12">
              <div
                className="section-title-shape-one middle black "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h3>Our Customer Review</h3>
                <h2>
                  People reviews for us For <br /> Great{" "}
                  <span className="theme-color">AI Service</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row por">
            <div className="swiper swiper-container testimonial-two">
              <div className="swiper-wrapper">
                <Swiper
                  loop={true}
                  navigation={{
                    nextEl: ".testimonialOne-button-next",
                    prevEl: ".testimonialOne-button-prev",
                  }}
                  spaceBetween={20}
                  slidesPerView={2}
                  slidesPerGroup={1}
                  speed={1000}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 6000 }}
                  className="mySwiper"
                  modules={[FreeMode, Navigation, Thumbs, EffectFade]}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      slidesPerGroup: 1,
                    },
                    768: {
                      slidesPerView: 1,
                    },
                    992: {
                      slidesPerView: 2,
                    },
                    1200: {
                      slidesPerView: 2,
                    },
                    1400: {
                      slidesPerView: 2,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="inner-wrapper">
                        <div className="review">
                          <p>
                            Overall, I highly recommend x-team to anyone looking
                            for a high-quality theme with top-notch support.
                            It's a great value for the price and has exceeded.
                          </p>
                          <div className="shape">
                            <span>
                              <i className="fa-sharp fa-solid fa-quote-left" />
                            </span>
                          </div>
                        </div>
                        <div className="intro-body">
                          <div className="img-file">
                            <img
                              src="/assets/img/testimonial/01_testimonial-profile.png"
                              alt=""
                            />
                          </div>
                          <div className="text-file">
                            <h3>Stuart L. Roberts</h3>
                            <h5>Software Developer</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="inner-wrapper">
                        <div className="review">
                          <p>
                            Overall, I highly recommend x-team to anyone looking
                            for a high-quality theme with top-notch support.
                            It's a great value for the price and has exceeded.
                          </p>
                          <div className="shape">
                            <span>
                              <i className="fa-sharp fa-solid fa-quote-left" />
                            </span>
                          </div>
                        </div>
                        <div className="intro-body">
                          <div className="img-file">
                            <img
                              src="/assets/img/testimonial/02_testimonial-profile.png"
                              alt=""
                            />
                          </div>
                          <div className="text-file">
                            <h3>Nicole J. Robertson</h3>
                            <h5>Recreation parks director</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="inner-wrapper">
                        <div className="review">
                          <p>
                            Overall, I highly recommend x-team to anyone looking
                            for a high-quality theme with top-notch support.
                            It's a great value for the price and has exceeded.
                          </p>
                          <div className="shape">
                            <span>
                              <i className="fa-sharp fa-solid fa-quote-left" />
                            </span>
                          </div>
                        </div>
                        <div className="intro-body">
                          <div className="img-file">
                            <img
                              src="/assets/img/testimonial/03_testimonial-profile.png"
                              alt=""
                            />
                          </div>
                          <div className="text-file">
                            <h3>Jose N. Swarthout</h3>
                            <h5>Slicing machine setter</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="inner-wrapper">
                        <div className="review">
                          <p>
                            Overall, I highly recommend x-team to anyone looking
                            for a high-quality theme with top-notch support.
                            It's a great value for the price and has exceeded.
                          </p>
                          <div className="shape">
                            <span>
                              <i className="fa-sharp fa-solid fa-quote-left" />
                            </span>
                          </div>
                        </div>
                        <div className="intro-body">
                          <div className="img-file">
                            <img
                              src="/assets/img/testimonial/04_testimonial-profile.png"
                              alt=""
                            />
                          </div>
                          <div className="text-file">
                            <h3>Rosie T. Butler</h3>
                            <h5>Labor training manager</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="inner-wrapper">
                        <div className="review">
                          <p>
                            Overall, I highly recommend x-team to anyone looking
                            for a high-quality theme with top-notch support.
                            It's a great value for the price and has exceeded.
                          </p>
                          <div className="shape">
                            <span>
                              <i className="fa-sharp fa-solid fa-quote-left" />
                            </span>
                          </div>
                        </div>
                        <div className="intro-body">
                          <div className="img-file">
                            <img
                              src="/assets/img/testimonial/05_testimonial-profile.png"
                              alt=""
                            />
                          </div>
                          <div className="text-file">
                            <h3>Clarence M. Berube</h3>
                            <h5>Organic chemist</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="inner-wrapper">
                        <div className="review">
                          <p>
                            Overall, I highly recommend x-team to anyone looking
                            for a high-quality theme with top-notch support.
                            It's a great value for the price and has exceeded.
                          </p>
                          <div className="shape">
                            <span>
                              <i className="fa-sharp fa-solid fa-quote-left" />
                            </span>
                          </div>
                        </div>
                        <div className="intro-body">
                          <div className="img-file">
                            <img
                              src="/assets/img/testimonial/06_testimonial-profile.png"
                              alt=""
                            />
                          </div>
                          <div className="text-file">
                            <h3>Melissa K. Watson</h3>
                            <h5>Agricultural product</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            {/* If we need navigation buttons */}
            <div className="arrow white">
              <div className="testimonialOne-button-next testimonialOne-button">
                <i className="fa-solid fa-chevrons-left" />
              </div>
              <div className="testimonialOne-button-prev testimonialOne-button">
                <i className="fa-solid fa-chevrons-right" />
              </div>
            </div>
          </div>
        </div>
        <div className="shape-image">
          <img
            className="shape-1 poa"
            src="/assets/img/icon/92_icon.png"
            alt=""
          />
          <img
            className="shape-2 poa"
            src="/assets/img/icon/16_icon.png"
            alt=""
          />
          <img
            className="shape-3 poa"
            src="/assets/img/icon/95_icon.png"
            alt=""
          />
          <img
            className="shape-4 poa"
            src="/assets/img/icon/03_icon.png"
            alt=""
          />
          <img
            className="shape-6 poa"
            src="/assets/img/icon/43_icon.png"
            alt=""
          />
        </div>
      </section>
      {/* Testimonial Section three end*/}
    </>
  );
};

export default TestimonialSectionThree;
