import React from "react";
import { Link } from "react-router-dom";

const BlogSectionTwo = () => {
  return (
    <>
      {/* Blog Section two start */}
      <section className="blog-section two">
        <div className="auto-container">
          <div className="row">
            <div className="col-12">
              <div
                className="section-title-shape-one middle "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3>
                  {"{"} RECENT BLOG {"}"}
                </h3>
                <h2>
                  Latest thinking in AI &amp; our <br />{" "}
                  <span className="theme-color">company news</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="blog-items "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="img-file">
                  <img
                    className="img-fluid"
                    src="/assets/img/blog/01_blog.png"
                    alt=""
                  />
                </div>
                <div className="text-file">
                  <div className="intro">
                    <div>
                      <div className="date">
                        <i className="fa-sharp fa-solid fa-calendar-days pe-1" />
                        April 24, 2023
                      </div>
                      <div className="admin">
                        <i className="fa-solid fa-user pe-1" />
                        admin
                      </div>
                      <div className="comment">
                        <i className="fa-sharp fa-solid fa-comment pe-1" />4
                        Comments
                      </div>
                    </div>
                  </div>
                  <div className="title">
                    <h2>
                      <Link to="#">
                        Professional Technology information &amp; Solutions...
                      </Link>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, coned sectetur notte elit sed
                      do.
                    </p>
                    <Link className="link" to="/blog-details">
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
                    src="/assets/img/blog/02_blog.png"
                    alt=""
                  />
                </div>
                <div className="text-file">
                  <div className="intro">
                    <div>
                      <div className="date">
                        <i className="fa-sharp fa-solid fa-calendar-days pe-1" />
                        April 24, 2023
                      </div>
                      <div className="admin">
                        <i className="fa-solid fa-user pe-1" />
                        admin
                      </div>
                      <div className="comment">
                        <i className="fa-sharp fa-solid fa-comment pe-1" />4
                        Comments
                      </div>
                    </div>
                  </div>
                  <div className="title">
                    <h2>
                      <Link to="#">
                        We offer AI consulting services and solutions...
                      </Link>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, coned sectetur notte elit sed
                      do.
                    </p>
                    <Link className="link" to="/blog-details">
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
                    src="/assets/img/blog/03_blog.png"
                    alt=""
                  />
                </div>
                <div className="text-file">
                  <div className="intro">
                    <div>
                      <div className="date">
                        <i className="fa-sharp fa-solid fa-calendar-days pe-1" />
                        April 24, 2023
                      </div>
                      <div className="admin">
                        <i className="fa-solid fa-user pe-1" />
                        admin
                      </div>
                      <div className="comment">
                        <i className="fa-sharp fa-solid fa-comment pe-1" />4
                        Comments
                      </div>
                    </div>
                  </div>
                  <div className="title">
                    <h2>
                      <Link to="#">
                        AI Services is a collection services with prebuilt...
                      </Link>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, coned sectetur notte elit sed
                      do.
                    </p>
                    <Link className="link" to="/blog-details">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inner-btn d-adjust">
            <div>
              <Link className="default-btn" to="/blog">
                View More Blogs
              </Link>
            </div>
          </div>
        </div>
        <div className="shape-image">
          <img
            className="shape-1 poa"
            src="/assets/img/shape/08_shape.png"
            alt=""
          />
          <img
            className="shape-2 poa"
            src="/assets/img/icon/58_icon.png"
            alt=""
          />
          <img
            className="shape-3 poa"
            src="/assets/img/icon/69_icon.png"
            alt=""
          />
          <img
            className="shape-4 poa"
            src="/assets/img/icon/76_icon.png"
            alt=""
          />
          <img
            className="shape-5 poa"
            src="/assets/img/icon/43_icon.png"
            alt=""
          />
          <img
            className="shape-6 poa"
            src="/assets/img/icon/89_icon.png"
            alt=""
          />
        </div>
      </section>
      {/* Blog Section two end */}
    </>
  );
};

export default BlogSectionTwo;
