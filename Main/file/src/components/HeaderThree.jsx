"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
const HeaderThree = () => {
  const router = usePathname();
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(false);

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
  return (
    <>
      {/* header-area-start */}
      <header
        className={scroll ? "header-area-3 header__sticky" : "header-area-3"}
      >
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-2 col-md-6 col-6">
              <div className="logo-area">
                <div className="logo">
                  <Link href="/home-3">
                    <img
                      className="img-fluid"
                      src="/assets/img/common/logo-white.png"
                      alt="FaconTech"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-10 col-md-6 col-6">
              <div className="menu-area menu-padding d-none d-lg-block">
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <ul>
                      <li className="has-dropdown">
                        <Link href="#">Home</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link
                              href="/home-1"
                              className={router === "/home-1" ? "active" : ""}
                            >
                              Home One
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/home-2"
                              className={router === "/home-2" ? "active" : ""}
                            >
                              Home Two
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/home-3"
                              className={router === "/home-3" ? "active" : ""}
                            >
                              Home Three
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link
                          href="/about"
                          className={router === "/about" ? "active" : ""}
                        >
                          About Us
                        </Link>
                      </li>
                      <li className="has-dropdown">
                        <Link href="#">Pages</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link
                              href="/team"
                              className={router === "/team" ? "active" : ""}
                            >
                              Team
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/project"
                              className={router === "/project" ? "active" : ""}
                            >
                              Project
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/project-details"
                              className={
                                router === "/project-details" ? "active" : ""
                              }
                            >
                              Project Details
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/service"
                              className={router === "/service" ? "active" : ""}
                            >
                              Service
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/service-details"
                              className={
                                router === "/service-details" ? "active" : ""
                              }
                            >
                              Service Details
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/pricing"
                              className={router === "/pricing" ? "active" : ""}
                            >
                              Pricing
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/review"
                              className={router === "/review" ? "active" : ""}
                            >
                              Review
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/faq"
                              className={router === "/faq" ? "active" : ""}
                            >
                              FAQ
                            </Link>
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
                            <Link
                              href="/blog-grid"
                              className={
                                router === "/blog-grid" ? "active" : ""
                              }
                            >
                              Blog-Grid
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/blog-grid-sidebar"
                              className={
                                router === "/blog-grid-sidebar" ? "active" : ""
                              }
                            >
                              Blog-Grid Sidebar
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/blog-list"
                              className={
                                router === "/blog-list" ? "active" : ""
                              }
                            >
                              Blog-List
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/blog-details"
                              className={
                                router === "/blog-details" ? "active" : ""
                              }
                            >
                              Blog Details
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link
                          href="/contact"
                          className={router === "/contact" ? "active" : ""}
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="side-menu-icon d-lg-none text-end">
                <Link
                  onClick={mobileMenu}
                  href="#"
                  className="info-toggle-btn f-right sidebar-toggle-btn"
                >
                  <i className="fal fa-bars" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* header-area-end */}

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
                  <Link href="#">Home</Link>
                  <ul className="sub-menu">
                    <li className="active">
                      <Link
                        href="/home-1"
                        className={router === "/home-1" ? "active" : ""}
                      >
                        Home One
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/home-2"
                        className={router === "/home-2" ? "active" : ""}
                      >
                        Home Two
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/home-3"
                        className={router === "/home-3" ? "active" : ""}
                      >
                        Home Three
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={router === "/about" ? "active" : ""}
                  >
                    About Us
                  </Link>
                </li>
                <li className="menu-item-has-children">
                  <Link href="#">Pages</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link
                        href="/team"
                        className={router === "/team" ? "active" : ""}
                      >
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/project"
                        className={router === "/project" ? "active" : ""}
                      >
                        Project
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/project-details"
                        className={
                          router === "/project-details" ? "active" : ""
                        }
                      >
                        Project Details
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/service"
                        className={router === "/service" ? "active" : ""}
                      >
                        Service
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/service-details"
                        className={
                          router === "/service-details" ? "active" : ""
                        }
                      >
                        Service Details
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/pricing"
                        className={router === "/pricing" ? "active" : ""}
                      >
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/review"
                        className={router === "/review" ? "active" : ""}
                      >
                        Review
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/faq"
                        className={router === "/faq" ? "active" : ""}
                      >
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link href="/error">404 Page</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-dropdown">
                  <Link href="#">Blog</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link
                        href="/blog-grid"
                        className={router === "/blog-grid" ? "active" : ""}
                      >
                        Blog-Grid
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog-grid-sidebar"
                        className={
                          router === "/blog-grid-sidebar" ? "active" : ""
                        }
                      >
                        Blog-Grid Sidebar
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog-list"
                        className={router === "/blog-list" ? "active" : ""}
                      >
                        Blog-List
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog-details"
                        className={router === "/blog-details" ? "active" : ""}
                      >
                        Blog Details
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={router === "/contact" ? "active" : ""}
                  >
                    Contact
                  </Link>
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

      {/* sidebar area end */}
      <div className={active ? "body-overlay active" : "body-overlay"} />
    </>
  );
};

export default HeaderThree;
