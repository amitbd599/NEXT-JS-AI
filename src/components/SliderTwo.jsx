import React from 'react'
import { Link } from 'react-router-dom'

const SliderTwo = () => {
    return (
        <>
            {/* Hero Section two Start */}
            <section
                className="hero-section"
                data-background="/assets/img/bg-image/05_bg-image.jpg"
            >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 d-lg-block d-none">
                            <div
                                className="img-file wow animated fadeInLeft"
                                data-wow-duration="1.5s"
                                data-wow-delay="0.3s"
                            >
                                <img
                                    className="w-100"
                                    src="/assets/img/hero/04_hero-image.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div
                                className="wrapper wow animated fadeInUp"
                                data-wow-duration="1.5s"
                                data-wow-delay="0.3s"
                            >
                                <h3>
                                    IT Services Can Help to Amplify <br />
                                    Your Organization’s
                                </h3>
                                <h2>We make AI simple &amp; faster expensive.</h2>
                                <p>
                                    A robot is a programmable machine that can complete a task, while
                                    the term robotics describes the field of study focused on
                                    developing robots and automation. Each robot has a different level
                                    of autonomy.{" "}
                                </p>
                                <div className="inner-btn">
                                    <div>
                                        <Link className="default-btn" to="/contact">
                                            Get Started Project
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 d-lg-block d-none">
                            <div
                                className="img-file wow animated fadeInRight"
                                data-wow-duration="1.5s"
                                data-wow-delay="0.3s"
                            >
                                <img
                                    className="w-100"
                                    src="/assets/img/hero/05_hero-image.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-img">
                    <img className="shape-1 poa" src="/assets/img/icon/43_icon.png" alt="" />
                    <img className="shape-2 poa" src="/assets/img/icon/41_icon.png" alt="" />
                    <img className="shape-3 poa" src="/assets/img/icon/68_icon.png" alt="" />
                    <img className="shape-4 poa" src="/assets/img/icon/67_icon.png" alt="" />
                    <img className="shape-5 poa" src="/assets/img/icon/66_icon.png" alt="" />
                    <img className="shape-6 poa" src="/assets/img/icon/51_icon.png" alt="" />
                    <img className="shape-7 poa" src="/assets/img/icon/71_icon.png" alt="" />
                    <img className="shape-8 poa" src="/assets/img/icon/84_icon.png" alt="" />
                    <img className="shape-9 poa" src="/assets/img/icon/73_icon.png" alt="" />
                    <img
                        className="shape-10 poa"
                        src="/assets/img/icon/28_icon.png"
                        alt=""
                    />
                    <img
                        className="shape-11 poa"
                        src="/assets/img/icon/89_icon.png"
                        alt=""
                    />
                </div>
            </section>
            {/* Hero Section two End */}
        </>

    )
}

export default SliderTwo