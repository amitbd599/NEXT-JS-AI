import React from "react";
import { Link } from "react-router-dom";

const FAQSectionThree = () => {
  return (
    <>
      {/* FAQ Section three start */}
      <section className="faq-section three">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-8">
              <div
                className="section-title-shape-one left "
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <h3>Frequently Ask Questions </h3>
                <h2>
                  Our Top Featured Solutions <br /> Transforming{" "}
                  <span className="theme-color">AI Enterprises</span>
                </h2>
                <p>
                  Artificial intelligence is the simulation of human
                  intelligence processes by machines, especially computer
                  systems. Specific applications of AI include expert systems,
                  natural language processing, speech recognition and machine
                  vision.
                </p>
              </div>
              <div
                className="faq-inner "
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <div className="intro">
                  <h3>Questions and answers for common ML queries</h3>
                </div>
                <div className="faq-list">
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          Can i have multiple activities in single feature?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          As you may have read in our AI, ML, and deep learning
                          post, ML is a subset of AI. Not all AI systems learn
                          from experience but ML-enabled devices do. Very simply
                          put, all ML systems are AI but not all AI machines are
                          ML-capable. As you may have read in our AI, ML, and
                          deep learning post, ML is a subset of AI. Not all AI
                          systems learn from experience but ML-enabled devices
                          do. Very simply put, all ML systems are AI but not all
                          AI machines are ML-capable.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo"
                        >
                          What is the difference between Data Analyst?{" "}
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          As you may have read in our AI, ML, and deep learning
                          post, ML is a subset of AI. Not all AI systems learn
                          from experience but ML-enabled devices do. Very simply
                          put, all ML systems are AI but not all AI machines are
                          ML-capable. As you may have read in our AI, ML, and
                          deep learning post, ML is a subset of AI. Not all AI
                          systems learn from experience but ML-enabled devices
                          do. Very simply put, all ML systems are AI but not all
                          AI machines are ML-capable.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          What are 3 good things about artificial intelligence?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          As you may have read in our AI, ML, and deep learning
                          post, ML is a subset of AI. Not all AI systems learn
                          from experience but ML-enabled devices do. Very simply
                          put, all ML systems are AI but not all AI machines are
                          ML-capable. As you may have read in our AI, ML, and
                          deep learning post, ML is a subset of AI. Not all AI
                          systems learn from experience but ML-enabled devices
                          do. Very simply put, all ML systems are AI but not all
                          AI machines are ML-capable.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className=" ps-lg-4 ps-0 por "
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="img-file">
                  <img
                    className="img-fluid"
                    src="/assets/img/icon/97_icon.png"
                    alt=""
                  />
                </div>
                <div className="support">
                  <h2>Need To More Support With us?</h2>
                  <p>Send us a query Lorem ipsum dolor sit amet, consectetur</p>
                  <div className="mt-10">
                    <span>
                      Email: <strong>support@demo.com</strong>
                    </span>
                    <span>
                      Phone: <strong>+99 251-253-99</strong>
                    </span>
                  </div>
                  <div className="inner-btn d-adjust">
                    <div>
                      <Link className="default-btn" to="/contact">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-image">
          <div className="shape-img-1 poa">
            <img src="/assets/img/icon/21_icon.png" alt="" />
          </div>
          <div className="shape-img-2 poa">
            <img src="/assets/img/shape/01_shape.svg" alt="" />
          </div>
          <div className="shape-img-5 poa">
            <img src="/assets/img/icon/26_icon.png" alt="" />
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
      {/* FAQ Section three end */}
    </>
  );
};

export default FAQSectionThree;
