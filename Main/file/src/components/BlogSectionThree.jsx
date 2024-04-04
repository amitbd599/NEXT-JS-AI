import Link from "next/link";
import React from "react";

const BlogSectionThree = () => {
  return (
    <>
      {/* Blog Section three start */}
      <section className="blog-section three">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div
                className="section-title-shape-one left black "
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <h3>Our Latest Blog</h3>
                <h2>
                  Find the latest Blogs news <br />
                  <span className="theme-color">from WIRED</span>
                </h2>
                <p>
                  Repellendus autem ruibusdam et aut officiis debitis aut re
                  necessitatibus saepe eveniet ut et voluptates repudianda.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="blog-items "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="img-file">
                  <img
                    className="img-fluid"
                    src="/assets/img/blog/15_blog.png"
                    alt="FaconTech"
                  />
                </div>
                <div className="text-file">
                  <div className="title">
                    <div className="date">
                      <span>
                        <i className="fa-regular fa-clock" /> 3/4/2024
                      </span>
                    </div>
                    <h2>
                      <Link href="#">Professional Technology information.</Link>
                    </h2>
                    <p>
                      Ensure your IT infrastructure remains resilient when
                      adopting trans formative technologies.
                    </p>
                    <Link className="link" href="/blog-details">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="blog-items "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="img-file">
                  <img
                    className="img-fluid"
                    src="/assets/img/blog/16_blog.png"
                    alt="FaconTech"
                  />
                </div>
                <div className="text-file">
                  <div className="title">
                    <div className="date">
                      <span>
                        <i className="fa-regular fa-clock" /> 3/4/2024
                      </span>
                    </div>
                    <h2>
                      <Link href="#">AI consulting solutions you achieve.</Link>
                    </h2>
                    <p>
                      Ensure your IT infrastructure remains resilient when
                      adopting trans formative technologies.
                    </p>
                    <Link className="link" href="/blog-details">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="blog-items "
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="img-file">
                  <img
                    className="img-fluid"
                    src="/assets/img/blog/17_blog.png"
                    alt="FaconTech"
                  />
                </div>
                <div className="text-file">
                  <div className="title">
                    <div className="date">
                      <span>
                        <i className="fa-regular fa-clock" /> 3/4/2024
                      </span>
                    </div>
                    <h2>
                      <Link href="#">We offer AI consulting services.</Link>
                    </h2>
                    <p>
                      Ensure your IT infrastructure remains resilient when
                      adopting trans formative technologies.
                    </p>
                    <Link className="link" href="/blog-details">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inner-btn d-adjust">
            <div>
              <Link className="default-btn" href="/blog">
                View More Blogs
              </Link>
            </div>
          </div>
        </div>
        <div className="shape-image">
          <img
            className="shape-1 poa"
            src="/assets/img/shape/05_shape.png"
            alt="FaconTech"
          />
          <img
            className="shape-2 poa"
            src="/assets/img/shape/15_shape.svg"
            alt="FaconTech"
          />
          <img
            className="shape-3 poa"
            src="/assets/img/icon/69_icon.png"
            alt="FaconTech"
          />
          <img
            className="shape-4 poa"
            src="/assets/img/icon/09_icon.png"
            alt="FaconTech"
          />
          <img
            className="shape-5 poa"
            src="/assets/img/icon/43_icon.png"
            alt="FaconTech"
          />
          <img
            className="shape-6 poa"
            src="/assets/img/icon/71_icon.png"
            alt="FaconTech"
          />
        </div>
      </section>
    </>
  );
};

export default BlogSectionThree;
