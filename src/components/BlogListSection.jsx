import React from "react";
import { Link } from "react-router-dom";

const BlogListSection = () => {
  return (
    <>
      {/* Blog list Section one start */}
      <section className="blog-section blog-list one">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-items">
                <div
                  className="img-file"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <img
                    className="img-fluid"
                    src="/assets/img/blog/10_blog.png"
                    alt=""
                  />
                </div>
                <div
                  className="text-file"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="intro">
                    <div className="item">
                      <div className="date d-flex gap-2 align-items-center">
                        <span>
                          <i className="fa-solid fa-calendar-days" />
                        </span>
                        <span>May 26, 2023</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="date d-flex gap-2 align-items-center">
                        <i className="fa-solid fa-user" />
                        <span>Admin</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="date d-flex gap-2 align-items-center">
                        <i className="fa-solid fa-comment" />
                        <span>10 Comments</span>
                      </div>
                    </div>
                  </div>
                  <div className="title">
                    <h2>
                      <Link to="/blog-details">
                        AI consulting services and solutions you achieve your
                        business objectives faster.
                      </Link>
                    </h2>
                    <p>
                      Oracle Cloud Infrastructure (OCI) AI Services is a
                      collection of services with prebuilt machine learning
                      models that make it easier for developers to apply AI to
                      applications and business operations. The models can be
                      custom-trained for more accurate business results.
                    </p>
                    <div className="inner-btn">
                      <div>
                        <Link className="default-btn" to="/blog-details">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-items">
                <div
                  className="img-file"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <img
                    className="img-fluid"
                    src="/assets/img/blog/11_blog.png"
                    alt=""
                  />
                </div>
                <div
                  className="text-file"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="intro">
                    <div className="item">
                      <div className="date d-flex gap-2 align-items-center">
                        <span>
                          <i className="fa-solid fa-calendar-days" />
                        </span>
                        <span>May 26, 2023</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="date d-flex gap-2 align-items-center">
                        <i className="fa-solid fa-user" />
                        <span>Admin</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="date d-flex gap-2 align-items-center">
                        <i className="fa-solid fa-comment" />
                        <span>10 Comments</span>
                      </div>
                    </div>
                  </div>
                  <div className="title">
                    <h2>
                      <Link to="/blog-details">
                        AI consulting services and solutions you achieve your
                        business objectives faster.
                      </Link>
                    </h2>
                    <p>
                      Oracle Cloud Infrastructure (OCI) AI Services is a
                      collection of services with prebuilt machine learning
                      models that make it easier for developers to apply AI to
                      applications and business operations. The models can be
                      custom-trained for more accurate business results.
                    </p>
                    <div className="inner-btn">
                      <div>
                        <Link className="default-btn" to="/blog-details">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-items">
                <div
                  className="img-file"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <img
                    className="img-fluid"
                    src="/assets/img/blog/12_blog.png"
                    alt=""
                  />
                </div>
                <div
                  className="text-file"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="intro">
                    <div className="item">
                      <div className="date d-flex gap-2 align-items-center">
                        <span>
                          <i className="fa-solid fa-calendar-days" />
                        </span>
                        <span>May 26, 2023</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="date d-flex gap-2 align-items-center">
                        <i className="fa-solid fa-user" />
                        <span>Admin</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="date d-flex gap-2 align-items-center">
                        <i className="fa-solid fa-comment" />
                        <span>10 Comments</span>
                      </div>
                    </div>
                  </div>
                  <div className="title">
                    <h2>
                      <Link to="/blog-details">
                        AI consulting services and solutions you achieve your
                        business objectives faster.
                      </Link>
                    </h2>
                    <p>
                      Oracle Cloud Infrastructure (OCI) AI Services is a
                      collection of services with prebuilt machine learning
                      models that make it easier for developers to apply AI to
                      applications and business operations. The models can be
                      custom-trained for more accurate business results.
                    </p>
                    <div className="inner-btn">
                      <div>
                        <Link className="default-btn" to="/blog-details">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Pagination Start */}
              <div className="row">
                <div className="col-12">
                  <div
                    className="pagination"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <ul>
                      <li>
                        <Link to="#">
                          <i className="fa-regular fa-chevrons-left" />
                        </Link>
                      </li>
                      <li>
                        <Link className="active" to="#">
                          1
                        </Link>
                      </li>
                      <li>
                        <Link to="#">2</Link>
                      </li>
                      <li>
                        <Link to="#">3</Link>
                      </li>
                      <li>
                        <Link to="#">4</Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa-regular fa-chevrons-right" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="widget-area">
                <div className="widget widget-search">
                  <div
                    className="search"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="title">
                      <h2>Search Inside</h2>
                    </div>
                    <div className="search-wrap">
                      <form className="search-form">
                        <input
                          type="search"
                          className="search-field"
                          placeholder="Search..."
                        />
                        <button type="submit">
                          <i className="fa-solid fa-magnifying-glass" />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div
                  className="widget widget-post"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="post">
                    <div className="title">
                      <h2>Recent Posts</h2>
                    </div>
                    <article className="post-item">
                      <Link to="/blog-details">
                        <div className="img-file">
                          <img src="/assets/img/blog/01_blog.png" alt="" />
                        </div>
                      </Link>
                      <div className="info">
                        <time dateTime="2023-06-19">May 26, 2023</time>
                        <h4 className="title">
                          <Link to="/blog-details">
                            AI consulting services and solutions that will help.
                          </Link>
                        </h4>
                      </div>
                    </article>
                    <article className="post-item">
                      <Link to="/blog-details">
                        <div className="img-file">
                          <img src="/assets/img/blog/02_blog.png" alt="" />
                        </div>
                      </Link>
                      <div className="info">
                        <time dateTime="2023-06-19">May 26, 2023</time>
                        <h4 className="title">
                          <Link to="/blog-details">
                            We will respond within one working day and arrange.
                          </Link>
                        </h4>
                      </div>
                    </article>
                    <article className="post-item">
                      <Link to="/blog-details">
                        <div className="img-file">
                          <img src="/assets/img/blog/03_blog.png" alt="" />
                        </div>
                      </Link>
                      <div className="info">
                        <time dateTime="2023-06-19">May 26, 2023</time>
                        <h4 className="title">
                          <Link to="/blog-details">
                            An expert matching your market niche and industry.
                          </Link>
                        </h4>
                      </div>
                    </article>
                    <article className="post-item">
                      <Link to="/blog-details">
                        <div className="img-file">
                          <img src="/assets/img/blog/04_blog.png" alt="" />
                        </div>
                      </Link>
                      <div className="info">
                        <time dateTime="2023-06-19">May 26, 2023</time>
                        <h4 className="title">
                          <Link to="/blog-details">
                            You will get a service suite offering, including
                            time.
                          </Link>
                        </h4>
                      </div>
                    </article>
                  </div>
                </div>
                <div
                  className="widget widget-follow"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="follow">
                    <div className="title">
                      <h2>Follow Us</h2>
                    </div>
                    <div className="social">
                      <ul>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-linkedin-in" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-pinterest" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-instagram" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="widget widget-categories"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="categories">
                    <div className="title">
                      <h2>Categories</h2>
                    </div>
                    <div className="list-inner">
                      <ul>
                        <li>
                          <Link to="#">
                            <span>Business</span>
                            <span>(8)</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>Finance</span>
                            <span>(10)</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>Web Design</span>
                            <span>(3)</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>Counseling</span>
                            <span>(5)</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>IT Service</span>
                            <span>(11)</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>AI software</span>
                            <span>(12)</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="widget widget-tags"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="tags">
                    <div className="title">
                      <h2>Tags</h2>
                    </div>
                    <div className="list-grid">
                      <Link to="#">Machine Learning (4)</Link>
                      <Link to="#">ICT Book (6)</Link>
                      <Link to="#">Technology (2)</Link>
                      <Link to="#">Robot (3)</Link>
                      <Link to="#">AI Tech (11)</Link>
                      <Link to="#">Intelligence (6)</Link>
                      <Link to="#">Artificial (3)</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-image-file">
          <div className="shape-img-1 poa">
            <img src="/assets/img/icon/21_icon.png" alt="" />
          </div>
          <div className="shape-img-2 poa">
            <img src="/assets/img/icon/64_icon.png" alt="" />
          </div>
          <div className="shape-img-4 poa">
            <img src="/assets/img/icon/08_icon.png" alt="" />
          </div>
          <div className="shape-img-5 poa">
            <img src="/assets/img/icon/78_icon.png" alt="" />
          </div>
          <div className="shape-img-6 poa">
            <img src="/assets/img/icon/43_icon.png" alt="" />
          </div>
          <div className="shape-img-7 poa">
            <img src="/assets/img/icon/68_icon.png" alt="" />
          </div>
          <div className="shape-img-8 poa">
            <img src="/assets/img/icon/71_icon.png" alt="" />
          </div>
        </div>
      </section>
      {/* Blog list Section one end */}
    </>
  );
};

export default BlogListSection;
