"use client";
import React, { Fragment, Suspense, useEffect, useState } from "react";
import HeaderOne from "../components/HeaderOne";
import Link from "next/link";
const Demo = () => {
  return (
    <Fragment>
      <HeaderOne />
      {/* Intro Section Start */}
      <section className="demo-intro" id="intro">
        <div className="auto-container">
          <div className="row">
            <div className="col-12">
              <div className="left-wrapper">
                <p
                  className="sub-title  "
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Full Responsive Layout
                </p>
                <h2 className="title " data-aos="fade-up" data-aos-delay="400">
                  FaconTech - AI Technology &amp; IT Solutions HTML Template
                </h2>
                <div
                  className="list-data "
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <ul>
                    <li>
                      {"{"} Well Documented {"}"}
                    </li>
                    <li>
                      {"{"} Fully Responsive Layout {"}"}
                    </li>
                    <li>
                      {"{"} Built on Bootstrap {"}"}
                    </li>
                    <li>
                      {"{"} Built with Sass {"}"}
                    </li>
                    <li>
                      {"{"} 18 Total Pages {"}"}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape">
          <img
            className="shape-1 "
            data-aos="fade-right"
            data-aos-delay="200"
            src="/assets/img/demo/intro-home-1.png"
            alt=""
          />
          <img
            className="shape-2 "
            data-aos="fade-left"
            data-aos-delay="200"
            src="/assets/img/demo/intro-home-2.png"
            alt=""
          />
          <img
            className="shape-3"
            src="/assets/img/demo/bootstrap.png"
            alt=""
          />
          <img className="shape-4" src="/assets/img/demo/sass.png" alt="" />
          <img className="shape-5" src="/assets/img/icon/84_icon.png" alt="" />
          <img className="shape-6" src="/assets/img/icon/48_icon.png" alt="" />
        </div>
      </section>
      {/* Intro Section end */}
      {/* Home Page Section Start */}
      <section id="allHome" className="demo-home">
        <div className="auto-container">
          <div className="row">
            <div className="col-12">
              <div className="title">
                <h2>3 Home Pages</h2>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <Link href="/index">
                <div className="wrapper">
                  <div
                    className="img-file "
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <img
                      className="img-fluid"
                      src="/assets/img/demo/home-1.png"
                      alt=""
                    />
                  </div>
                  <div className="link">
                    <h2>Home Demo - 1</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <Link href="/index-2">
                <div
                  className="wrapper "
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="img-file">
                    <img
                      className="img-fluid"
                      src="/assets/img/demo/home-2.png"
                      alt=""
                    />
                  </div>
                  <div className="link">
                    <h2>Home Demo - 2</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <Link href="/index-3">
                <div
                  className="wrapper "
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="img-file">
                    <img
                      className="img-fluid"
                      src="/assets/img/demo/home-3.png"
                      alt=""
                    />
                  </div>
                  <div className="link">
                    <h2>Home Demo - 3</h2>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Home Page Section End */}
      {/* Inner Page Section Start */}
      <section id="allInnerPage" className="demo-inner">
        <div className="auto-container">
          <div className="row">
            <div className="col-12">
              <div className="title">
                <h2>15 Inner Pages</h2>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <Link href="/about">
                <div
                  className="wrapper "
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="img-file">
                    <img
                      className="img-fluid"
                      src="/assets/img/demo/about.png"
                      alt=""
                    />
                  </div>
                  <div className="link">
                    <h2>About Us</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <Link href="/team">
                <div
                  className="wrapper "
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="img-file">
                    <img
                      className="img-fluid"
                      src="/assets/img/demo/team.png"
                      alt=""
                    />
                  </div>
                  <div className="link">
                    <h2>Team</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <Link href="/project">
                <div
                  className="wrapper "
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="img-file">
                    <img
                      className="img-fluid"
                      src="/assets/img/demo/project.png"
                      alt=""
                    />
                  </div>
                  <div className="link">
                    <h2>Projects</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <Link href="/project-details">
                <div
                  className="wrapper "
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="img-file">
                    <img
                      className="img-fluid"
                      src="/assets/img/demo/project-details.png"
                      alt=""
                    />
                  </div>
                  <div className="link">
                    <h2>Projects-Details</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <Link href="/service">
                <div
                  className="wrapper "
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="img-file">
                    <img
                      className="img-fluid"
                      src="/assets/img/demo/service.png"
                      alt=""
                    />
                  </div>
                  <div className="link">
                    <h2>Service</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <Link href="/service-details">
                <div
                  className="wrapper "
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="img-file">
                    <img
                      className="img-fluid"
                      src="/assets/img/demo/service-details.png"
                      alt=""
                    />
                  </div>
                  <div className="link">
                    <h2>Service-Details</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <Link href="/pricing">
                <div
                  className="wrapper "
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="img-file">
                    <img
                      className="img-fluid"
                      src="/assets/img/demo/price.png"
                      alt=""
                    />
                  </div>
                  <div className="link">
                    <h2>Price</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <Link href="/review">
                <div
                  className="wrapper "
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="img-file">
                    <img
                      className="img-fluid"
                      src="/assets/img/demo/review.png"
                      alt=""
                    />
                  </div>
                  <div className="link">
                    <h2>Review</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <Link href="/faq">
                <div
                  className="wrapper "
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="img-file">
                    <img
                      className="img-fluid"
                      src="/assets/img/demo/faq.png"
                      alt=""
                    />
                  </div>
                  <div className="link">
                    <h2>FAQ</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <Link href="/blog-grid  ">
                <div
                  className="wrapper "
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="img-file">
                    <img
                      className="img-fluid"
                      src="/assets/img/demo/blog.png"
                      alt=""
                    />
                  </div>
                  <div className="link">
                    <h2>Blog Grid</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <Link href="/blog-grid-sidebar">
                <div
                  className="wrapper "
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="img-file">
                    <img
                      className="img-fluid"
                      src="/assets/img/demo/blog-grid-sidebar.png"
                      alt=""
                    />
                  </div>
                  <div className="link">
                    <h2>Blog Grid Sidebar</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <Link href="/blog-details ">
                <div
                  className="wrapper "
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="img-file">
                    <img
                      className="img-fluid"
                      src="/assets/img/demo/blog-details.png"
                      alt=""
                    />
                  </div>
                  <div className="link">
                    <h2>Blog Details</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <Link href="/contact">
                <div
                  className="wrapper "
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="img-file">
                    <img
                      className="img-fluid"
                      src="/assets/img/demo/contact.png"
                      alt=""
                    />
                  </div>
                  <div className="link">
                    <h2>Contact</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <Link href="/error">
                <div
                  className="wrapper "
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="img-file">
                    <img
                      className="img-fluid"
                      src="/assets/img/demo/404.png"
                      alt=""
                    />
                  </div>
                  <div className="link">
                    <h2>404 Error</h2>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Inner Page Section End */}
      {/* footer section one start */}
      <footer
        className="demo-footer"
        data-background="./assets/img/shape/03_shape.svg"
      >
        <div className="auto-container">
          <div className="row">
            <div className="col-12">
              <div className="wrapper" data-aos="fade-up" data-aos-delay="200">
                <h2>
                  Purchase the FaconTech Template now <br /> and Build Your
                  Awesome Website
                </h2>
                <div className="d-adjust my-btn">
                  <Link
                    className="default-btn"
                    href="https://www.templatemonster.com/authors/themesoft69/"
                  >
                    Purchase Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom" data-aos="fade-up" data-aos-delay="300">
          <p>Copy Right by themesoft69</p>
        </div>
      </footer>
      {/* footer section one end */}
    </Fragment>
  );
};

export default Demo;
