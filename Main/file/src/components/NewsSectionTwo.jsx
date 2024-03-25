import React from "react";

const NewsSectionTwo = () => {
  return (
    <>
      {/* News Letter two start */}
      <section
        className="news-letter two"
        data-background="/assets/img/shape/06_shape.png"
      >
        <div className="auto-container">
          <div className="row">
            <div className="col-12">
              <div
                className="text-wrapper "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div>
                  <h5>Newsletter</h5>
                  <h2>
                    Subscribe to newsletter <br /> &amp; get company news.
                  </h2>
                </div>
              </div>
              <div
                className="input-wrapper "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <form action="POST">
                  <div className="input-box">
                    <input type="text" placeholder="Enter Your Email Address" />
                    <button type="submit" className="submit">
                      Sign Up Free
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-image">
          <img
            className="shape-1 poa"
            src="/assets/img/icon/98_icon.png"
            alt="FaconTech"
          />
          <img
            className="shape-2 poa"
            src="/assets/img/icon/75_icon.png"
            alt="FaconTech"
          />
        </div>
      </section>
      {/* News Letter two end */}
    </>
  );
};

export default NewsSectionTwo;
