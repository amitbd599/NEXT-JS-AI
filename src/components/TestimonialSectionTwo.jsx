"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";
const TestimonialSectionTwo = () => {
  return (
    <>
      {/* Testimonial Section two start*/}
      <section
        className="testimonial-section two"
        data-background="/assets/img/bg-image/06_bg-image.jpg"
      >
        <div className="auto-container">
          <div className="row">
            <div className="col-12">
              <div
                className="section-title-shape-one middle "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3>
                  {"{"} TESTIMONIAL {"}"}
                </h3>
                <h2>
                  People reviews for us For <br /> Great
                  <span className="theme-color">AI Service</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row por">
            <div className="swiper swiper-container testimonial-one">
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
                        <div className="intro-body">
                          <div>
                            <div className="img-file">
                              <img
                                src="/assets/img/testimonial/01_testimonial-profile.png"
                                alt="FaconTech"
                              />
                            </div>
                          </div>
                          <div className="text-file">
                            <h3>Stuart L. Roberts</h3>
                            <h5>Software Developer</h5>
                          </div>
                        </div>
                        <div className="review">
                          <p>
                            Overall, I highly recommend x-team to anyone looking
                            for a high-quality theme with top-notch support.
                            It's a great value for the price and has exceeded
                            all my expectations. Thank you to the author for
                            creating such an amazing product!
                          </p>
                          <div className="star">
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                          </div>
                          <div className="shape">
                            <span>
                              <i className="fa-sharp fa-solid fa-quote-left" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="inner-wrapper">
                        <div className="intro-body">
                          <div>
                            <div className="img-file">
                              <img
                                src="/assets/img/testimonial/02_testimonial-profile.png"
                                alt="FaconTech"
                              />
                            </div>
                          </div>
                          <div className="text-file">
                            <h3>Christine J. Robinson</h3>
                            <h5>Direct care worker</h5>
                          </div>
                        </div>
                        <div className="review">
                          <p>
                            Overall, I highly recommend x-team to anyone looking
                            for a high-quality theme with top-notch support.
                            It's a great value for the price and has exceeded
                            all my expectations. Thank you to the author for
                            creating such an amazing product!
                          </p>
                          <div className="star">
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-regular fa-star" />
                            <i className="fa-regular fa-star" />
                          </div>
                          <div className="shape">
                            <span>
                              <i className="fa-sharp fa-solid fa-quote-left" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="inner-wrapper">
                        <div className="intro-body">
                          <div>
                            <div className="img-file">
                              <img
                                src="/assets/img/testimonial/03_testimonial-profile.png"
                                alt="FaconTech"
                              />
                            </div>
                          </div>
                          <div className="text-file">
                            <h3>Lucio M. Sampson</h3>
                            <h5>Food cooking machine tender</h5>
                          </div>
                        </div>
                        <div className="review">
                          <p>
                            Overall, I highly recommend x-team to anyone looking
                            for a high-quality theme with top-notch support.
                            It's a great value for the price and has exceeded
                            all my expectations. Thank you to the author for
                            creating such an amazing product!
                          </p>
                          <div className="star">
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-regular fa-star" />
                          </div>
                          <div className="shape">
                            <span>
                              <i className="fa-sharp fa-solid fa-quote-left" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="inner-wrapper">
                        <div className="intro-body">
                          <div>
                            <div className="img-file">
                              <img
                                src="/assets/img/testimonial/04_testimonial-profile.png"
                                alt="FaconTech"
                              />
                            </div>
                          </div>
                          <div className="text-file">
                            <h3>Donna G. Caldwell</h3>
                            <h5>Beautician</h5>
                          </div>
                        </div>
                        <div className="review">
                          <p>
                            Overall, I highly recommend x-team to anyone looking
                            for a high-quality theme with top-notch support.
                            It's a great value for the price and has exceeded
                            all my expectations. Thank you to the author for
                            creating such an amazing product!
                          </p>
                          <div className="star">
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                          </div>
                          <div className="shape">
                            <span>
                              <i className="fa-sharp fa-solid fa-quote-left" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            {/* If we need navigation buttons */}
            <div className="arrow-2">
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
            src="/assets/img/icon/17_icon.png"
            alt="FaconTech"
          />
          <img
            className="shape-2 poa"
            src="/assets/img/icon/16_icon.png"
            alt="FaconTech"
          />
          <img
            className="shape-3 poa"
            src="/assets/img/icon/15_icon.png"
            alt="FaconTech"
          />
          <img
            className="shape-4 poa"
            src="/assets/img/icon/77_icon.png"
            alt="FaconTech"
          />
          <img
            className="shape-5 poa"
            src="/assets/img/icon/89_icon.png"
            alt="FaconTech"
          />
          <img
            className="shape-6 poa"
            src="/assets/img/icon/41_icon.png"
            alt="FaconTech"
          />
          <img
            className="shape-7 poa"
            src="/assets/img/icon/62_icon.png"
            alt="FaconTech"
          />
        </div>
      </section>
      {/* Testimonial Section two end*/}
    </>
  );
};

export default TestimonialSectionTwo;
