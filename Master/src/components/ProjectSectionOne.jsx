import Link from "next/link";

const ProjectSectionOne = () => {
  return (
    <>
      {/* Project Section one start */}
      <section className="project-section one">
        <div className="auto-container">
          <div className="row">
            <div className="col-12">
              <div
                className="section-title-shape-one middle "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h3>Our Completed Projects</h3>
                <h2>
                  Start off AI project to your <br />
                  <span className="theme-color">Strengths</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div
                className="project-wrapper "
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <div className="img-file por">
                  <img
                    className="img-fluid"
                    src="/assets/img/project/01_project.png"
                    alt="FaconTech"
                  />
                  <div className="shape-overlay poa">
                    <h2>Robotic Technology</h2>
                    <p>
                      In this space, we will explore the most innovative and
                      impactful Artificial Intelligence projects, from
                      cutting-edge research to real-world applications.
                    </p>
                    <div className="d-inline-block">
                      <Link href="#">
                        View More <i className="fa-light fa-chevrons-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="project-wrapper "
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="img-file por">
                  <img
                    className="img-fluid"
                    src="/assets/img/project/02_project.png"
                    alt="FaconTech"
                  />
                  <div className="shape-overlay poa">
                    <h2>Data Science</h2>
                    <p>
                      In this space, we will explore the most innovative and
                      impactful Artificial Intelligence projects, from
                      cutting-edge research to real-world applications.
                    </p>
                    <div className="d-inline-block">
                      <Link href="#">
                        View More <i className="fa-light fa-chevrons-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="project-wrapper "
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <div className="img-file por">
                  <img
                    className="img-fluid"
                    src="/assets/img/project/03_project.png"
                    alt="FaconTech"
                  />
                  <div className="shape-overlay poa">
                    <h2>Facing AI Challenges</h2>
                    <p>
                      In this space, we will explore the most innovative and
                      impactful Artificial Intelligence projects, from
                      cutting-edge research to real-world applications.
                    </p>
                    <div className="d-inline-block">
                      <Link href="#">
                        View More <i className="fa-light fa-chevrons-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="project-wrapper "
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="img-file por">
                  <img
                    className="img-fluid"
                    src="/assets/img/project/04_project.png"
                    alt="FaconTech"
                  />
                  <div className="shape-overlay poa">
                    <h2>Technical Support</h2>
                    <p>
                      In this space, we will explore the most innovative and
                      impactful Artificial Intelligence projects, from
                      cutting-edge research to real-world applications.
                    </p>
                    <div className="d-inline-block">
                      <Link href="#">
                        View More <i className="fa-light fa-chevrons-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inner-btn d-adjust">
            <div>
              <Link className="default-btn" href="/contact">
                View All Projects
              </Link>
            </div>
          </div>
        </div>
        <div className="shape-image">
          <div className="shape-img-1 poa">
            <img src="/assets/img/shape/04_shape.png" alt="FaconTech" />
          </div>
          <div className="shape-img-2 poa">
            <img src="/assets/img/icon/44_icon.png" alt="FaconTech" />
          </div>
          <div className="shape-img-3 poa">
            <img src="/assets/img/icon/15_icon.png" alt="FaconTech" />
          </div>
          <div className="shape-img-4 poa">
            <img src="/assets/img/icon/45_icon.png" alt="FaconTech" />
          </div>
          <div className="shape-img-5 poa">
            <img src="/assets/img/icon/13_icon.png" alt="FaconTech" />
          </div>
          <div className="shape-img-6 poa">
            <img src="/assets/img/icon/46_icon.png" alt="FaconTech" />
          </div>
          <div className="shape-img-7 poa">
            <img src="/assets/img/icon/47_icon.png" alt="FaconTech" />
          </div>
          <div className="shape-img-8 poa">
            <img src="/assets/img/icon/17_icon.png" alt="FaconTech" />
          </div>
          <div className="shape-img-9 poa">
            <img src="/assets/img/icon/73_icon.png" alt="FaconTech" />
          </div>
          <div className="shape-img-10 poa">
            <img src="/assets/img/icon/76_icon.png" alt="FaconTech" />
          </div>
        </div>
      </section>
      {/* Project Section one end */}
    </>
  );
};

export default ProjectSectionOne;
