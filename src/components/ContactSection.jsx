import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
const ContactSection = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    // Please See Documentation for more information
    emailjs
      .sendForm(
        "service_ljx76ce", //YOUR_SERVICE_ID
        "template_71bgc2q", //YOUR_TEMPLATE_ID
        form.current,
        "cwf8kROl5o3__96Ti" //YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            toast.success("Massage Sent Successfully!");
            form.current[0].value = "";
            form.current[1].value = "";
            form.current[2].value = "";
            form.current[3].value = "";
            form.current[4].value = "";
            form.current[5].value = "";
          }
        },
        (error) => {
          if (error.text !== "OK") {
            toast.error("Massage Not Sent!");
          }
        }
      );
  };
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      {/* Contact Section start */}
      <section className="contact-section">
        <div className="auto-container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-shape-one">
                <h2>Contact With Us</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <form
                ref={form}
                onSubmit={sendEmail}
                id="contact-form"
                className="contact-form"
              >
                <div className="d-block d-md-flex gap-0">
                  <div
                    className="form-author"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <label>
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      required="required"
                    />
                  </div>
                  <div
                    className="form-email mt-2 mt-md-0"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <label>
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      required="required"
                    />
                  </div>
                </div>
                <div className="d-block d-md-flex gap-0 mt-2">
                  <div
                    className="form-author"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <label>
                      Subject <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required="required"
                    />
                  </div>
                  <div
                    className="form-web mt-2 mt-md-0"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <label>Website</label>
                    <input type="url" id="url" name="website" />
                  </div>
                </div>
                <div
                  className="form-comment mt-2"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <label>
                    Massage <span className="required">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={8}
                    spellCheck="false"
                    defaultValue={""}
                  />
                </div>
                <div
                  className="form-submit"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="inner-btn">
                    <div>
                      <button className="default-btn" type="submit">
                        Send Massage
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <p className="form-Messages mt-3" />
            </div>
            <div className="col-lg-4">
              <div className="appointment">
                <div className="title">
                  <h4>Need Appointment</h4>
                  <p>
                    Schedule a meeting with someone, as in Do I need to make
                    another appointment with the team?
                  </p>
                </div>
                <table className="table  table-dark">
                  <thead>
                    <tr>
                      <th scope="col">Day</th>
                      <th scope="col">Morning</th>
                      <th scope="col">Night</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Sunday</th>
                      <td>Closed</td>
                      <td>5pm - 9pm</td>
                    </tr>
                    <tr>
                      <th scope="row">Monday - Friday</th>
                      <td>Open</td>
                      <td>5pm - 9pm</td>
                    </tr>
                    <tr>
                      <th scope="row">Saturday</th>
                      <td>Closed</td>
                      <td>Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row location-tag">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="item " data-aos="fade-up" data-aos-delay="300">
                <div className="icon">
                  <i className="fa-sharp fa-solid fa-location-dot" />
                </div>
                <div className="view">
                  <h3>Head Office</h3>
                  <p>2590 Rockford Mountain Lane Four Oaks, NC.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="item " data-aos="fade-up" data-aos-delay="400">
                <div className="icon">
                  <i className="fa-solid fa-headset" />
                </div>
                <div className="view">
                  <h3>Need Support?</h3>
                  <p>Phone: +919-963-4308</p>
                  <p>Phone: +913-624-2047</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="item " data-aos="fade-up" data-aos-delay="400">
                <div className="icon">
                  <i className="fa-regular fa-messages" />
                </div>
                <div className="view">
                  <h3>Live Chat</h3>
                  <p>Need live chat all the time with our company 24/7</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="item " data-aos="fade-up" data-aos-delay="500">
                <div className="icon">
                  <i className="fa-solid fa-envelope" />
                </div>
                <div className="view">
                  <h3>Email Us</h3>
                  <p>help-dline@demo.com</p>
                  <p>support@demo.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6304.829986131271!2d-122.4746968033092!3d37.80374752160443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808586e6302615a1%3A0x86bd130251757c00!2sStorey+Ave%2C+San+Francisco%2C+CA+94129!5e0!3m2!1sen!2sus!4v1435826432051"
            height={570}
          />
        </div>
        <div className="shape-image-file">
          <div className="shape-img-1 poa">
            <img src="/assets/img/icon/21_icon.png" alt="" />
          </div>
          <div className="shape-img-2 poa">
            <img src="/assets/img/icon/64_icon.png" alt="" />
          </div>
          <div className="shape-img-4 poa">
            <img src="/assets/img/icon/08_icon.png" alt="" />
          </div>
          <div className="shape-img-5 poa">
            <img src="/assets/img/icon/78_icon.png" alt="" />
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
      {/* Contact Section end */}
    </>
  );
};

export default ContactSection;
