import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ data }) => {
  return (
    <>
      {/* Breadcrumb Section Start */}
      <section
        className="breadcrumb"
        style={{
          backgroundImage: "url('/assets/img/bg-image/05_bg-image.jpg')",
        }}
      >
        <div className="auto-container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-inner">
                <h2 data-aos="fade-up" data-aos-delay="300">
                  {data}
                </h2>
                <div
                  className="link-shape"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <Link to="/index">Home</Link> / <span>{data}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-img">
          <img
            className="shape-1 poa"
            src="/assets/img/icon/84_icon.png"
            alt=""
          />
          <img
            className="shape-2 poa"
            src="/assets/img/icon/66_icon.png"
            alt=""
          />
          <img
            className="shape-3 poa"
            src="/assets/img/icon/66_icon.png"
            alt=""
          />
          <img
            className="shape-4 poa"
            src="/assets/img/icon/04_icon.png"
            alt=""
          />
          <img
            className="shape-5 poa"
            src="/assets/img/icon/66_icon.png"
            alt=""
          />
        </div>
      </section>
      {/* Breadcrumb Section End */}
    </>
  );
};

export default Breadcrumb;
