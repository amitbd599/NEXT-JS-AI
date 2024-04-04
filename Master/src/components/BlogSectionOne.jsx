import Link from "next/link";

const BlogSectionOne = () => {
  return (
    <>
      {/* Blog Section one start */}
      <section className="blog-section one">
        <div className="auto-container">
          <div className="row">
            <div className="col-12">
              <div
                className="section-title-shape-one middle "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h3>Our Latest Blog</h3>
                <h2>
                  Find the latest Blogs news <br />
                  <span className="theme-color">from WIRED</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div
                className="blog-items "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="img-file">
                  <img
                    className="img-fluid"
                    src="/assets/img/blog/01_blog.png"
                    alt="FaconTech"
                  />
                </div>
                <div className="text-file">
                  <div className="intro">
                    <div className="d-flex gap-3 align-items-center">
                      <div className="dp-img">
                        <img
                          src="/assets/img/testimonial/01_testimonial-profile.png"
                          alt="FaconTech"
                        />
                      </div>
                      <div>
                        <p className="admin">T. Gibson</p>
                      </div>
                    </div>
                    <div>
                      <div className="date d-flex gap-2 align-items-center">
                        <span>
                          <i className="fa-solid fa-calendar-days" />
                        </span>
                        <span>3/4/2024</span>
                      </div>
                    </div>
                  </div>
                  <div className="title">
                    <h2>
                      <Link href="#">Professional Technology information.</Link>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, coned sectetur notte elit sed
                      do.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="blog-items "
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="img-file">
                  <img
                    className="img-fluid"
                    src="/assets/img/blog/02_blog.png"
                    alt="FaconTech"
                  />
                </div>
                <div className="text-file">
                  <div className="intro">
                    <div className="d-flex gap-3 align-items-center">
                      <div className="dp-img">
                        <img
                          src="/assets/img/testimonial/02_testimonial-profile.png"
                          alt="FaconTech"
                        />
                      </div>
                      <div>
                        <p className="admin">Thompson</p>
                      </div>
                    </div>
                    <div>
                      <div className="date d-flex gap-2 align-items-center">
                        <span>
                          <i className="fa-solid fa-calendar-days" />
                        </span>
                        <span>3/4/2024</span>
                      </div>
                    </div>
                  </div>
                  <div className="title">
                    <h2>
                      <Link href="#">We offer AI services and solutions.</Link>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, coned sectetur notte elit sed
                      do.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="blog-items "
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="img-file">
                  <img
                    className="img-fluid"
                    src="/assets/img/blog/03_blog.png"
                    alt="FaconTech"
                  />
                </div>
                <div className="text-file">
                  <div className="intro">
                    <div className="d-flex gap-3 align-items-center">
                      <div className="dp-img">
                        <img
                          src="/assets/img/testimonial/04_testimonial-profile.png"
                          alt="FaconTech"
                        />
                      </div>
                      <div>
                        <p className="admin">W. Harding</p>
                      </div>
                    </div>
                    <div>
                      <div className="date d-flex gap-2 align-items-center">
                        <span>
                          <i className="fa-solid fa-calendar-days" />
                        </span>
                        <span>3/4/2024</span>
                      </div>
                    </div>
                  </div>
                  <div className="title">
                    <h2>
                      <Link href="#">
                        AI Services is a collection prebuilt.
                      </Link>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, coned sectetur notte elit sed
                      do.
                    </p>
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
            src="/assets/img/icon/58_icon.png"
            alt="FaconTech"
          />
          <img
            className="shape-3 poa"
            src="/assets/img/icon/59_icon.png"
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
            src="/assets/img/icon/78_icon.png"
            alt="FaconTech"
          />
        </div>
      </section>
      {/* Blog Section one end */}
    </>
  );
};

export default BlogSectionOne;
