import React from "react";
import { Link } from "react-router-dom";

const PriceSectionTwo = () => {
  return (
    <>
      {/* Pricing Section two start */}
      <section className="price-section two">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div
                className="section-title-shape-one left black"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <h3>Choose A Plan </h3>
                <h2>
                  Our Best Pricing Plan <br />{" "}
                  <span className="theme-color">For You</span>
                </h2>
                <p>
                  Repellendus autem ruibusdam et aut officiis debitis aut re
                  necessitatibus saepe eveniet ut et voluptates repudianda sint
                  et molestiae non recusandae. Itaque earum rerum.
                </p>
              </div>
            </div>
          </div>
          <div className="price-body">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <div
                  className="price-inner down "
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                  <div className="price">
                    <h4>$</h4>
                    <h2>49</h2>
                    <h5>/MONTHLY</h5>
                  </div>
                  <div className="plan">
                    <h2>Basic Plan</h2>
                    <div className="list">
                      <ul>
                        <li>256MB Memory</li>
                        <li>1 User </li>
                        <li>1 Website </li>
                        <li>1 Domain </li>
                        <li>Unlimited Bandwidth </li>
                        <li>Increase traffic 130% </li>
                        <li>Organic traffic 215% </li>
                        <li>24/7 Support </li>
                      </ul>
                    </div>
                  </div>
                  <div className="inner-btn d-adjust">
                    <div>
                      <Link className="default-btn" to="#">
                        Purchase Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div
                  className="price-inner "
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <div className="price">
                    <h4>$</h4>
                    <h2>59</h2>
                    <h5>/MONTHLY</h5>
                  </div>
                  <div className="plan">
                    <h2>Optimal Plan</h2>
                    <div className="list">
                      <ul>
                        <li>586MB Memory</li>
                        <li>5 User </li>
                        <li>3 Website </li>
                        <li>2 Domain </li>
                        <li>Unlimited Bandwidth </li>
                        <li>Increase traffic 230% </li>
                        <li>Organic traffic 315% </li>
                        <li>24/7 Support </li>
                      </ul>
                    </div>
                  </div>
                  <div className="inner-btn d-adjust">
                    <div>
                      <Link className="default-btn" to="#">
                        Purchase Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div
                  className="price-inner down "
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  <div className="price">
                    <h4>$</h4>
                    <h2>99</h2>
                    <h5>/MONTHLY</h5>
                  </div>
                  <div className="plan">
                    <h2>Silver Plan</h2>
                    <div className="list">
                      <ul>
                        <li>1GB Memory</li>
                        <li>10 User </li>
                        <li>5 Website </li>
                        <li>3 Domain </li>
                        <li>Unlimited Bandwidth </li>
                        <li>Increase traffic 530% </li>
                        <li>Organic traffic 615% </li>
                        <li>24/7 Support </li>
                      </ul>
                    </div>
                  </div>
                  <div className="inner-btn d-adjust">
                    <div>
                      <Link className="default-btn" to="#">
                        Purchase Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-image">
          <img
            className="shape-2 poa"
            src="/assets/img/icon/47_icon.png"
            alt=""
          />
          <img
            className="shape-3 poa"
            src="/assets/img/icon/43_icon.png"
            alt=""
          />
          <img
            className="shape-4 poa"
            src="/assets/img/icon/89_icon.png"
            alt=""
          />
          <img
            className="shape-5 poa"
            src="/assets/img/icon/07_icon.png"
            alt=""
          />
          <img
            className="shape-6 poa"
            src="/assets/img/icon/94_icon.png"
            alt=""
          />
          <img
            className="shape-7 poa"
            src="/assets/img/shape/09_shape.png"
            alt=""
          />
          <img
            className="shape-9 poa"
            src="/assets/img/icon/17_icon.png"
            alt=""
          />
          <img
            className="shape-10 poa"
            src="/assets/img/icon/78_icon.png"
            alt=""
          />
        </div>
      </section>
      {/* Pricing Section two end */}
    </>
  );
};

export default PriceSectionTwo;
