import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";
import { Link } from "react-router-dom";
const SliderThree = () => {
    return (
        <>
            {/* slider-area-three-start  */}
            <section className="hero-slider two">
                <div className="swiper hero-slider-init-one swiper-container swiper-container-fade">
                    <div className="swiper-wrapper p-relative">
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
                                {" "}
                                <div className="item-slider sliderm-height p-relative swiper-slide">
                                    <div
                                        className="slide-bg"
                                        style={{
                                            backgroundImage:
                                                "url('assets/img/bg-image/07_bg-image.jpg')",
                                        }}
                                    />
                                    <div className="auto-container">
                                        <div className="row ">
                                            <div className="col-lg-6">
                                                <div className="slider-content-inner ">
                                                    <h4 className="sub-title">The Most Personalized</h4>
                                                    <h2 className="slider-title">
                                                        AI Development Company &amp; Services in The World
                                                    </h2>
                                                    <p className="description">
                                                        To take a trivial example, which of us ever
                                                        undertakes laborious physical exercise, except to
                                                        obtain some advantage from it.
                                                    </p>
                                                    <div className="inner-btn">
                                                        <div>
                                                            <Link className="default-btn" to="/contact">
                                                                Learn More About AI
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="slider-content-inner-right">
                                                    <div className="img-wrapper">
                                                        <img
                                                            src="assets/img/hero/06_hero-image.png"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                {" "}
                                <div className="item-slider sliderm-height p-relative swiper-slide">
                                    <div
                                        className="slide-bg"
                                        style={{
                                            backgroundImage:
                                                "url('assets/img/bg-image/08_bg-image.jpg')",
                                        }}
                                    />
                                    <div className="auto-container">
                                        <div className="row ">
                                            <div className="col-12">
                                                <div className="slider-content-inner middle">
                                                    <div>
                                                        <h4 className="sub-title">The Most Personalized</h4>
                                                        <h2 className="slider-title">
                                                            helping companies process information or data more
                                                            Efficiently
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
                                                                <Link className="default-btn" to="/contact">
                                                                    Contact Us Now
                                                                </Link>
                                                            </div>
                                                        </div>
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
                                                "url('assets/img/bg-image/09_bg-image.jpg')",
                                        }}
                                    />
                                    <div className="auto-container">
                                        <div className="row ">
                                            <div className="col-lg-7">
                                                <div className="slider-content-inner ">
                                                    <div>
                                                        <h4 className="sub-title">The Most Personalized</h4>
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
                                                                <Link className="default-btn" to="/contact">
                                                                    Explore Now
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <div className="slider-content-inner-right">
                                                    <div className="img-wrapper">
                                                        <img
                                                            src="assets/img/hero/07_hero-image.png"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    {/* If we need navigation buttons */}
                    <div className="swiper-button-prev hero-button">
                        <i className="fa-regular fa-angles-left" />
                    </div>
                    <div className="swiper-button-next hero-button">
                        <i className="fa-regular fa-angles-right" />
                    </div>
                    {/* Shape Image */}
                    <div className="shape-image">
                        <div className="inner-shape-1 poa">
                            <img
                                className="img-fluid"
                                src="/assets/img/icon/48_icon.png"
                                alt=""
                            />
                        </div>
                        <div className="inner-shape-2 poa">
                            <img
                                className="img-fluid"
                                src="/assets/img/icon/02_icon.png"
                                alt=""
                            />
                        </div>
                        <div className="inner-shape-3 poa">
                            <img
                                className="img-fluid"
                                src="/assets/img/icon/03_icon.png"
                                alt=""
                            />
                        </div>
                        <div className="inner-shape-4 poa">
                            <img
                                className="img-fluid"
                                src="/assets/img/icon/71_icon.png"
                                alt=""
                            />
                        </div>
                        <div className="inner-shape-5 poa">
                            <img
                                className="img-fluid"
                                src="/assets/img/icon/04_icon.png"
                                alt=""
                            />
                        </div>
                        <div className="inner-shape-6 poa">
                            <img
                                className="img-fluid"
                                src="/assets/img/icon/11_icon.png"
                                alt=""
                            />
                        </div>
                        <div className="inner-shape-7 poa">
                            <img
                                className="img-fluid"
                                src="/assets/img/icon/28_icon.png"
                                alt=""
                            />
                        </div>
                        <div className="inner-shape-8 poa">
                            <img
                                className="img-fluid"
                                src="/assets/img/icon/08_icon.png"
                                alt=""
                            />
                        </div>
                        <div className="inner-shape-9 poa">
                            <img
                                className="img-fluid"
                                src="/assets/img/icon/27_icon.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* slider-area-three-end */}
        </>
    );
};

export default SliderThree;
