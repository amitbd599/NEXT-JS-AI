import React from "react";

const FAQSectionTwo = () => {
  return (
    <>
      {/* FAQ Section two start */}
      <section className="faq-section one two">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-4 pe-4 d-lg-block d-none">
              <div
                className="img-file "
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <img
                  className="img-fluid"
                  src="/assets/img/tech/02_tech.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div
                className="faq-inner "
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="faq-list">
                  <div className="section-title-shape-one left">
                    <h3>FAQ For Artificial Intelligence </h3>
                    <h2>
                      The goal of Artificial <br />{" "}
                      <span className="theme-color">intelligence</span>.
                    </h2>
                  </div>
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
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFour"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          We offer AI consulting services that will help?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseFour"
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
          </div>
        </div>
        <div className="shape-image">
          <img
            className="shape-1 poa"
            src="/assets/img/icon/57_icon.png"
            alt=""
          />
          <img
            className="shape-2 poa"
            src="/assets/img/icon/22_icon.png"
            alt=""
          />
          <img
            className="shape-3 poa"
            src="/assets/img/icon/75_icon.png"
            alt=""
          />
        </div>
      </section>
      {/* FAQ Section two end */}
    </>
  );
};

export default FAQSectionTwo;
