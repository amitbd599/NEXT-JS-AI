import Link from "next/link";
import React from "react";

const ProjectDetailsSection = () => {
  return (
    <>
      {/* Project Details Section Start */}
      <section className="project-details">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="main-img" data-aos="fade-up" data-aos-delay="300">
                <img
                  className="img-fluid rounded"
                  src="/assets/img/project/09_project.png"
                  alt="FaconTech"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="300">
              <div className="title">
                <h2>
                  Robotics is a branch of engineering that involves the
                  conception.
                </h2>
              </div>
              <div className="inner-des">
                <p>
                  Robotics is the intersection of science, engineering and
                  technology that produces machines, called robots, that
                  replicate or substitute for human actions. Pop culture has
                  always been fascinated with robots — examples include R2-D2,
                  the Terminator and WALL-E. These over-exaggerated, humanoid
                  concepts of robots usually seem like a caricature of the real
                  thing. But are they more forward thinking than we realize?
                  Robots are gaining intellectual and mechanical capabilities
                  that don’t put the possibility of a R2-D2-like machine out of
                  reach in the future.
                </p>
                <p>
                  As technology progresses, so too does the scope of what is
                  considered robotics. In 2005, 90 percent of all robots could
                  be found assembling cars in automotive factories. These robots
                  consist mainly of mechanical arms tasked with welding or
                  screwing on certain parts of a car.
                </p>
                <p>
                  Today, we’re seeing an evolved and expanded definition of
                  robotics that includes the development, creation and use of
                  bots that accomplish tasks like exploring the planet’s
                  harshest conditions, assisting law enforcement, streamlining
                  surgical procedures and undertaking rescue missions.
                </p>
                <div className="grid-action mt-2">
                  <img
                    className="img-fluid "
                    data-aos="fade-right"
                    data-aos-delay="300"
                    src="/assets/img/project/01_project.png"
                    alt="FaconTech"
                  />
                  <img
                    className="img-fluid "
                    data-aos="fade-left"
                    data-aos-delay="300"
                    src="/assets/img/project/02_project.png"
                    alt="FaconTech"
                  />
                </div>
                <div className="mt-3">
                  <p>
                    A robot is a programmable machine that can complete a task,
                    while the term robotics describes the field of study focused
                    on developing robots and automation. Each robot has a
                    different level of autonomy. These levels range from
                    human-controlled bots that carry out tasks to
                    fully-autonomous bots that perform tasks without any
                    external influences.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="widget-project"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="project">
                  <ul>
                    <li>
                      <span>Start Date:</span>
                      <span>Sunday, April 23, 2023</span>
                    </li>
                    <li>
                      <span>End Date:</span>
                      <span>Sunday, April 23, 2024</span>
                    </li>
                    <li>
                      <span>Total Worker:</span>
                      <span>67 Person</span>
                    </li>
                    <li>
                      <span>Client:</span>
                      <span>Elizabeth-Ann O'Neill</span>
                    </li>
                    <li>
                      <span>Website:</span>
                      <span>demo-info.com</span>
                    </li>
                    <li>
                      <span>Location:</span>
                      <span>160 Tuna Street Marine City,</span>
                    </li>
                    <li>
                      <span>Value:</span>
                      <span>$ 65,200</span>
                    </li>
                  </ul>
                </div>
                <div className="social">
                  <ul>
                    <li>
                      <Link href="#">
                        <i className="fa-brands fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fa-brands fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fa-brands fa-linkedin-in" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fa-brands fa-pinterest" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fa-brands fa-instagram" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-image-file">
          <div className="shape-img-1 poa">
            <img src="/assets/img/icon/21_icon.png" alt="FaconTech" />
          </div>
          <div className="shape-img-2 poa">
            <img src="/assets/img/icon/64_icon.png" alt="FaconTech" />
          </div>
          <div className="shape-img-4 poa">
            <img src="/assets/img/icon/08_icon.png" alt="FaconTech" />
          </div>
          <div className="shape-img-5 poa">
            <img src="/assets/img/icon/78_icon.png" alt="FaconTech" />
          </div>
          <div className="shape-img-6 poa">
            <img src="/assets/img/icon/43_icon.png" alt="FaconTech" />
          </div>
          <div className="shape-img-7 poa">
            <img src="/assets/img/icon/68_icon.png" alt="FaconTech" />
          </div>
          <div className="shape-img-8 poa">
            <img src="/assets/img/icon/71_icon.png" alt="FaconTech" />
          </div>
        </div>
      </section>
      {/* Project Details Section End */}
    </>
  );
};

export default ProjectDetailsSection;
