import Link from "next/link";

const NewsSectionOne = () => {
  return (
    <>
      {/* News Letter One start */}
      <section
        className="news-letter one"
        style={{
          backgroundImage: "url('/assets/img/shape/06_shape.png')",
        }}
      >
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div
                className="left-wrapper "
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <h5>Newsletter</h5>
                <h2>
                  Subscribe to newsletter <br /> &amp; get company news.
                </h2>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div
                className="right-wrapper "
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <form action="#">
                  <div className="input-box">
                    <input type="text" placeholder="Enter Your Email Address" />
                    <Link className="submit" href="#">
                      Sign Up Free
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-image">
          <img
            className="shape-1 poa"
            src="/assets/img/icon/60_icon.png"
            alt="FaconTech"
          />
          <img
            className="shape-2 poa"
            src="/assets/img/icon/61_icon.png"
            alt="FaconTech"
          />
        </div>
      </section>
      {/* News Letter One end */}
    </>
  );
};

export default NewsSectionOne;
