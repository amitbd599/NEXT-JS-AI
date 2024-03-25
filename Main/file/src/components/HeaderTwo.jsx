"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const HeaderTwo = () => {
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [rightSidebar, setRightSidebar] = useState(false);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    var offCanvasNav = document.getElementById("offcanvas-navigation");
    var offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i></i></span>"
      );
    }

    var menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    var numMenuExpand = menuExpand.length;

    function sideMenuExpand() {
      if (this.parentElement.classList.contains("active") === true) {
        this.parentElement.classList.remove("active");
      } else {
        for (let i = 0; i < numMenuExpand; i++) {
          menuExpand[i].parentElement.classList.remove("active");
        }
        this.parentElement.classList.add("active");
      }
    }

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", sideMenuExpand);
    }
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const mobileMenu = () => {
    setActive(!active);
  };
  const rightSide = () => {
    setRightSidebar(!rightSidebar);
  };
  const searchFun = () => {
    setSearch(!search);
  };
  return (
    <>
      <>
        {/* header-area-start */}
        <header className="header-intro-version-one-area header-area-2">
          <div className="header-top d-none d-lg-block">
            <div className="auto-container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="left-wrapper">
                    <div className="item">
                      <span className="theme-color">
                        <i className="fa-solid fa-envelope" />
                      </span>
                      <span>info@yourdomain.com</span>
                    </div>
                    <div className="item">
                      <span className="theme-color">
                        <i className="fa-solid fa-phone-arrow-up-right" />
                      </span>
                      <span>(0215) 2658 12547</span>
                    </div>
                    <div className="item">
                      <span className="theme-color">
                        <i className="fa-sharp fa-solid fa-location-dot" />
                      </span>
                      <span>Lane Mission New York</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="right-wrapper">
                    <div className="item">
                      <span className="theme-color">
                        <i className="fa-solid fa-timer" />
                      </span>
                      <span>Office Hours: 09:00am-6:00pm</span>
                    </div>
                    <div className="item social">
                      <Link href="#">
                        <i className="fa-brands fa-facebook" />
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
          <div
            className={scroll ? "header-inner header__sticky" : "header-inner"}
            id="header-sticky-2"
          >
            <div className="auto-container">
              <div className="row align-items-center">
                <div className=" col-lg-3 col-md-6 col-6">
                  <div className="logo-area">
                    <div className="logo">
                      <Link href="home-2">
                        <img
                          className="img-fluid"
                          src="assets/img/common/logo-white.png"
                          alt="FaconTech"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-7 col-md-6 col-6">
                  <div className="  menu-area menu-padding d-none d-lg-block">
                    <div className="main-menu">
                      <nav>
                        <ul>
                          <li className="has-dropdown">
                            <Link href="#">Home</Link>
                            <ul className="sub-menu">
                              <li>
                                <Link href="home-1">Home One</Link>
                              </li>
                              <li className="active">
                                <Link href="home-2">Home Two</Link>
                              </li>
                              <li>
                                <Link href="home-3">Home Three</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link href="/about">About Us</Link>
                          </li>
                          <li className="has-dropdown">
                            <Link href="#">Pages</Link>
                            <ul className="sub-menu">
                              <li>
                                <Link href="/team">Team</Link>
                              </li>
                              <li>
                                <Link href="/project">Project</Link>
                              </li>
                              <li>
                                <Link href="/project-details">
                                  Project Details
                                </Link>
                              </li>
                              <li>
                                <Link href="/service">Service</Link>
                              </li>
                              <li>
                                <Link href="/service-details">
                                  Service Details
                                </Link>
                              </li>
                              <li>
                                <Link href="/pricing">Pricing</Link>
                              </li>
                              <li>
                                <Link href="/review">Review</Link>
                              </li>
                              <li>
                                <Link href="/faq">FAQ</Link>
                              </li>
                              <li>
                                <Link href="/404">404 Page</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="has-dropdown">
                            <Link href="#">Blog</Link>
                            <ul className="sub-menu">
                              <li>
                                <Link href="/blog-grid">Blog-Grid</Link>
                              </li>
                              <li>
                                <Link href="/blog-grid-sidebar">
                                  Blog-Grid Sidebar
                                </Link>
                              </li>
                              <li>
                                <Link href="/blog-list">Blog-List</Link>
                              </li>
                              <li>
                                <Link href="/blog-details">Blog Details</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link href="/contact">Contact</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="side-menu-icon d-lg-none text-end">
                    <Link
                      href="#"
                      className="info-toggle-btn f-right sidebar-toggle-btn"
                      onClick={mobileMenu}
                    >
                      <i className="fal fa-bars" />
                    </Link>
                  </div>
                </div>
                <div className=" col-lg-2 d-none d-lg-block">
                  <div className="trigger">
                    <span onClick={searchFun}>
                      <i className="fa-regular fa-magnifying-glass " />
                    </span>
                    <span className="sidebar-toggle" onClick={rightSide}>
                      <i className="fa-solid fa-bars-sort " />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* header-area-end */}
      </>

      <>
        {/* modal-search-start */}
        <div
          className={
            search === true ? " fade search-box show" : " fade search-box"
          }
        >
          <button className="close" onClick={searchFun}>
            <span aria-hidden="true">
              <i className="fa-sharp fa-regular fa-xmark" />
            </span>
          </button>
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <input type="text" placeholder="Search here..." />
                <button>
                  <i className="fa fa-search" />
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* modal-search-end */}
      </>

      {/* sidebar area start */}
      <div
        className={`sidebar__area ${active === true ? "sidebar-opened" : ""} `}
      >
        <div className="sidebar__wrapper">
          <div className="sidebar__close">
            <button
              className="sidebar__close-btn"
              id="sidebar__close-btn"
              onClick={mobileMenu}
            >
              <i className="fal fa-times" />
            </button>
          </div>
          <div className="sidebar__content">
            <div className="sidebar-logo mb-40 mt-40">
              <Link href="home-1">
                <img src="assets/img/common/logo-white.png" alt="logo" />
              </Link>
            </div>
            <div className="sidebar__search mb-25">
              <form action="#">
                <input type="text" placeholder="What are you searching for?" />
                <button type="submit">
                  <i className="far fa-search" />
                </button>
              </form>
            </div>
            <nav className="offcanvas-navigation" id="offcanvas-navigation">
              <ul>
                <li className="menu-item-has-children">
                  <Link href="home-1">Home</Link>
                  <ul className="sub-menu">
                    <li className="active">
                      <Link href="home-1">Home One</Link>
                    </li>
                    <li>
                      <Link href="home-2">Home Two</Link>
                    </li>
                    <li>
                      <Link href="home-3">Home Three</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li className="menu-item-has-children">
                  <Link href="#">Pages</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link href="/team">Team</Link>
                    </li>
                    <li>
                      <Link href="/project">Project</Link>
                    </li>
                    <li>
                      <Link href="/project-details">Project Details</Link>
                    </li>
                    <li>
                      <Link href="/service">Service</Link>
                    </li>
                    <li>
                      <Link href="/service-details">Service Details</Link>
                    </li>
                    <li>
                      <Link href="/pricing">Pricing</Link>
                    </li>
                    <li>
                      <Link href="/review">Review</Link>
                    </li>
                    <li>
                      <Link href="/faq">FAQ</Link>
                    </li>
                    <li>
                      <Link href="/error">404 Page</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-dropdown">
                  <Link href="/blog-grid">Blog</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link href="/blog-grid">Blog-Grid</Link>
                    </li>
                    <li>
                      <Link href="/blog-grid-sidebar">Blog-Grid Sidebar</Link>
                    </li>
                    <li>
                      <Link href="/blog-list">Blog-List</Link>
                    </li>
                    <li>
                      <Link href="/blog-details">Blog Details</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>

            <div className="mobile-footer">
              <div className="follow">
                <div className="title">
                  <h3>Follow Us:</h3>
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
              <div className="contact">
                <div className="title">
                  <h3>Contact Us:</h3>
                </div>
                <ul>
                  <li>
                    <i className="fa-sharp fa-solid fa-location-dot" />
                    1739 Kincheloe Road Portland, OR 97205
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope" />
                    info@demo.com
                  </li>
                  <li>
                    <i className="fa-solid fa-phone" />
                    +88 632-528-(859)
                  </li>
                  <li>
                    <i className="fa-regular fa-globe" />
                    themesoft69.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <>
        {/* Right Sidebar start */}
        <section
          className={
            rightSidebar === true
              ? "sidebar-right sidebar-opened"
              : "sidebar-right"
          }
        >
          <div className="wrapper">
            <div className="title">
              <div className="logo">
                <img
                  className="img-fluid"
                  src="/assets/img/common/logo-black.png"
                  alt="FaconTech"
                />
              </div>
              <p>
                Oracle Cloud Infrastructure (OCI) AI Services is a collection of
                services with prebuilt machine learning models that make it
                easier for developers to apply AI to applications and business
                operations.
              </p>
            </div>
            <div className="intro-text">
              <div className="title-text">
                <h3>Gallery</h3>
              </div>
              <div className="img-file">
                <img
                  className="img-fluid"
                  src="/assets/img/project/01_project.png"
                  alt="FaconTech"
                />
                <img
                  className="img-fluid"
                  src="/assets/img/project/02_project.png"
                  alt="FaconTech"
                />
                <img
                  className="img-fluid"
                  src="/assets/img/project/03_project.png"
                  alt="FaconTech"
                />
                <img
                  className="img-fluid"
                  src="/assets/img/project/04_project.png"
                  alt="FaconTech"
                />
                <img
                  className="img-fluid"
                  src="/assets/img/project/05_project.png"
                  alt="FaconTech"
                />
                <img
                  className="img-fluid"
                  src="/assets/img/project/06_project.png"
                  alt="FaconTech"
                />
              </div>
            </div>
            <div className="intro-text">
              <div className="title-text">
                <h3>About FaconTech</h3>
                <p>
                  Most people focus on the results of AI. For those of us who
                  like to look under the hood, there are four foundational
                  elements to understand: categorization, classification,
                  machine learning, and collaborative filtering.
                </p>
              </div>
            </div>
            <div className="intro-text">
              <div className="title-text">
                <h3>Need To Location</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29176.030811137334!2d90.3883827!3d23.924917699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1605272373598!5m2!1sen!2sbd" />
              </div>
            </div>
            <div className="intro-text">
              <div className="title-text">
                <h3>Contact Us</h3>
                <ul>
                  <li>
                    <i className="fa-sharp fa-solid fa-location-dot pe-1" />
                    2007 Cherry Ridge Drive Victor
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope pe-1" /> support@demo.com
                  </li>
                  <li>
                    <i className="fa-sharp fa-solid fa-phone-volume pe-1" /> +88
                    (102)-253620
                  </li>
                  <li />
                </ul>
              </div>
            </div>
            <div className="close-icon sidebar-close" onClick={rightSide}>
              <i className="fa-solid fa-xmark" />
            </div>
          </div>
        </section>
        {/* Right Sidebar end */}
      </>

      {/* sidebar area end */}
      <div className={active ? "body-overlay active" : "body-overlay"} />
    </>
  );
};

export default HeaderTwo;
