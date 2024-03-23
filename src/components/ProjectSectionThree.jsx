import React from "react";
import { Link } from "react-router-dom";

const ProjectSectionThree = () => {
  return (
    <>
      {/* Project Section three start */}
      <section className="project-section three">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div
                className="section-title-shape-one left black "
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <h3>Our Completed Projects</h3>
                <h2>
                  Start off AI project to your <br />{" "}
                  <span className="theme-color">Strengths</span>
                </h2>
                <p>
                  Repellendus autem ruibusdam et aut officiis debitis aut re
                  necessitatibus saepe eveniet ut et voluptates repudianda sint
                  et molestiae non recusandae. Itaque earum rerum hic tenetur a
                  sapiente delectus.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div
                className="project-wrapper "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="img-file por">
                  <img
                    className="img-fluid"
                    src="/assets/img/project/10_project.png"
                    alt=""
                  />
                  <div className="shape-overlay poa">
                    <div className="inner">
                      <h2>Robotic Technology</h2>
                      <p>
                        In this space, we will explore the most innovative and
                        impactful Artificial Intelligence projects, real-world
                        applications.
                      </p>
                      <div className="link d-inline-block">
                        <Link to="#">View More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="project-wrapper "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="img-file por">
                  <img
                    className="img-fluid"
                    src="/assets/img/project/11_project.png"
                    alt=""
                  />
                  <div className="shape-overlay poa">
                    <div className="inner">
                      <h2>Machine Learning</h2>
                      <p>
                        In this space, we will explore the most innovative and
                        impactful Artificial Intelligence projects, real-world
                        applications.
                      </p>
                      <div className="link d-inline-block">
                        <Link to="#">View More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="project-wrapper "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="img-file por">
                  <img
                    className="img-fluid"
                    src="/assets/img/project/12_project.png"
                    alt=""
                  />
                  <div className="shape-overlay poa">
                    <div className="inner">
                      <h2>Native Engagement</h2>
                      <p>
                        In this space, we will explore the most innovative and
                        impactful Artificial Intelligence projects, real-world
                        applications.
                      </p>
                      <div className="link d-inline-block">
                        <Link to="#">View More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="project-wrapper "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="img-file por">
                  <img
                    className="img-fluid"
                    src="/assets/img/project/13_project.png"
                    alt=""
                  />
                  <div className="shape-overlay poa">
                    <div className="inner">
                      <h2>Robotic Process</h2>
                      <p>
                        In this space, we will explore the most innovative and
                        impactful Artificial Intelligence projects, real-world
                        applications.
                      </p>
                      <div className="link d-inline-block">
                        <Link to="#">View More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inner-btn d-adjust">
            <div>
              <Link className="default-btn" to="/contact">
                View All Projects
              </Link>
            </div>
          </div>
        </div>
        <div className="shape-image">
          <img
            className="shape-1 poa"
            src="/assets/img/shape/14_shape.png"
            alt=""
          />
          <img
            className="shape-2 poa"
            src="/assets/img/icon/03_icon.png"
            alt=""
          />
          <img
            className="shape-3 poa"
            src="/assets/img/icon/89_icon.png"
            alt=""
          />
        </div>
      </section>
      {/* Project Section three end */}
    </>
  );
};

export default ProjectSectionThree;
