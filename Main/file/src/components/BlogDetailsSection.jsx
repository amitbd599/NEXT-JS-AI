import Link from "next/link";
import React from "react";

const BlogDetailsSection = () => {
  return (
    <>
      {/* Blog Details Section one start */}
      <section className="blog-section details">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-8">
              <div className="wrapper" data-aos="fade-up" data-aos-delay="300">
                <div className="blog-image">
                  <img
                    className="img-fluid"
                    src="/assets/img/blog/10_blog.png"
                    alt="FaconTech"
                  />
                </div>
                <div className="article-content">
                  <div className="title">
                    <h2>
                      Avenga AI services help companies create AI and ML
                      solutions at all stages, from pilot to production.
                    </h2>
                  </div>
                  <div className="meta">
                    <ul>
                      <li>
                        <span>
                          <i className="fa-solid fa-user" />
                        </span>
                        <Link href="#">By admin</Link>
                      </li>
                      <li>
                        <span>
                          <i className="fa-solid fa-folder" />
                        </span>
                        <Link href="#">Artificial</Link>
                      </li>
                      <li>
                        <span>
                          <i className="fa-solid fa-comment" />
                        </span>
                        <Link href="#">3 Comments</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="inner-text">
                    <p>
                      At Defined.ai, the largest marketplace for ethically
                      sourced AI training data, we are thrilled to have added a
                      new Retail Image Dataset to our platform. This dataset
                      focuses on the brick-and-mortar retail domain, primarily
                      from Brazil. It contains almost 8 million images of
                      assorted items on shelves, storefronts, close-ups of price
                      tags, and more.
                    </p>
                    <p>
                      With this Retail Image Dataset, the builders of AI will be
                      able to train new models to cover copious use cases. The
                      dataset was sourced by Defined.ai’s strict ethical
                      standards, ensuring that all data was obtained with the
                      informed consent of those involved and that privacy rights
                      were respected. We believe ethical sourcing of AI training
                      data is of utmost importance, and we take that
                      responsibility seriously. We are confident that our
                      clients will appreciate the care and attention we put into
                      curating this data.
                    </p>
                    <br />
                    <div>
                      <img src="/assets/img/blog/13_blog.png" alt="FaconTech" />
                    </div>
                    <br />
                    <div>
                      <h2>
                        Why are we so excited about this Retail Image Dataset?
                      </h2>
                    </div>
                    <div>
                      <p>
                        A dataset like this one becoming available is a rare
                        occurrence. For starters, aggregating images from
                        different retail locations across Brazil and organizing
                        them into a cohesive dataset is a complex and
                        time-consuming task. Also, datasets of this nature are
                        valuable and can provide a competitive edge to companies
                        with access to them. As a result, organizations may be
                        reluctant to share such data or make it publicly
                        available.
                      </p>
                      <p>
                        Defined.ai stands on its principles of ethical AI.
                        Rather than scraping data from the internet, we work
                        hand in hand with our partners to showcase and
                        evangelize their datasets to the world. Because of this,
                        we can proudly offer you the dataset today.
                      </p>
                      <p>
                        Another approach is to use machine learning algorithms,
                        which can learn to identify and categorize named
                        entities from a large corpus of labelled training data.
                        These algorithms can be trained to recognize a wide
                        range of named entities and can handle complex language,
                        making them a more robust and flexible solution for NER.
                      </p>
                    </div>
                    <br />
                    <div>
                      <img src="/assets/img/blog/14_blog.png" alt="FaconTech" />
                    </div>
                    <br />
                    <br />
                    <div>
                      <h4>
                        What should i consider if I want to crowd source these
                        annotations in an ethical way?
                      </h4>
                    </div>
                    <div>
                      <ul className="mt-3">
                        <li>
                          The annotators should be fully informed about the task
                          and their role in the project, including the type of
                          data being annotated and how it will be used.
                        </li>
                        <li>
                          The annotators should be paid fairly for their work
                          and provided with transparent and timely payment.
                        </li>
                        <li>
                          The annotators’ privacy and data security should be
                          protected, and they should not be asked to annotate
                          any sensitive or personal information.
                        </li>
                      </ul>
                    </div>
                    <br />
                    <div>
                      <p>
                        Another advantage of open-source ABSA datasets is that
                        they’re widely used and well-known in the natural
                        language processing (NLP) community, meaning that
                        there’s a wealth of information and support available
                        for anyone using these datasets in their own projects.
                        For example, many open-source ABSA datasets come with
                        documentation on how to use the data effectively.
                      </p>
                    </div>
                  </div>
                  <div className="blog-footer">
                    <div className="blog-tags">
                      <span>
                        <i className="fas fa-bookmark" />
                      </span>
                      <Link href="#" className="">
                        Fashion
                      </Link>
                      ,
                      <Link href="#" className="">
                        Games
                      </Link>
                      ,
                      <Link href="#" className="">
                        Travel
                      </Link>
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
                <div className="comment">
                  <div className="title">
                    <h2>3 Comments:</h2>
                  </div>
                  <div className="root-comment">
                    <div>
                      <div className="profile">
                        <img
                          src="/assets/img/testimonial/01_testimonial-profile.png"
                          alt="FaconTech"
                        />
                      </div>
                    </div>
                    <div className="intro w-100">
                      <h3 className="name">Charles C. Ragsdale</h3>
                      <p className="date">Wednesday, April 3, 2024 AT 12:53 AM</p>
                      <p className="text">
                        Open-source datasets are important for sentiment
                        analysis projects for several reasons. First and
                        foremost, they provide researchers and developers with a
                        common set of data for the development and evaluation of
                        sentiment analysis models. This allows for accurate
                        comparisons between different approaches and helps
                        ensure that progress in the field is being made.
                      </p>
                      <div className="reply">
                        <Link href="#">Reply</Link>
                      </div>
                    </div>
                  </div>
                  <div className="root-comment has-child">
                    <div>
                      <div className="profile">
                        <img
                          src="/assets/img/testimonial/02_testimonial-profile.png"
                          alt="FaconTech"
                        />
                      </div>
                    </div>
                    <div className="intro w-100">
                      <h3 className="name">Helen M. Sanchez</h3>
                      <p className="date">Wednesday, April 3, 2024 AT 12:53 AM</p>
                      <p className="text">
                        Open-source datasets are important for sentiment
                        analysis projects for several reasons. First and
                        foremost, they provide researchers and developers with a
                        common set of data for the development and evaluation of
                        sentiment analysis models. This allows for accurate
                        comparisons between different approaches and helps
                        ensure that progress in the field is being made.
                      </p>
                      <div className="reply">
                        <Link href="#">Reply</Link>
                      </div>
                    </div>
                  </div>
                  <div className="root-comment">
                    <div>
                      <div className="profile">
                        <img
                          src="/assets/img/testimonial/03_testimonial-profile.png"
                          alt="FaconTech"
                        />
                      </div>
                    </div>
                    <div className="intro w-100">
                      <h3 className="name">Nick Leaver</h3>
                      <p className="date">Wednesday, April 3, 2024 AT 12:53 AM</p>
                      <p className="text">
                        Open-source datasets are important for sentiment
                        analysis projects for several reasons. First and
                        foremost, they provide researchers and developers with a
                        common set of data for the development and evaluation of
                        sentiment analysis models. This allows for accurate
                        comparisons between different approaches and helps
                        ensure that progress in the field is being made.
                      </p>
                      <div className="reply">
                        <Link href="#">Reply</Link>
                      </div>
                    </div>
                  </div>
                  <div className="root-comment">
                    <div>
                      <div className="profile">
                        <img
                          src="/assets/img/testimonial/04_testimonial-profile.png"
                          alt="FaconTech"
                        />
                      </div>
                    </div>
                    <div className="intro w-100">
                      <h3 className="name">Mary J. Benedict</h3>
                      <p className="date">Wednesday, April 3, 2024 AT 12:53 AM</p>
                      <p className="text">
                        Open-source datasets are important for sentiment
                        analysis projects for several reasons. First and
                        foremost, they provide researchers and developers with a
                        common set of data for the development and evaluation of
                        sentiment analysis models. This allows for accurate
                        comparisons between different approaches and helps
                        ensure that progress in the field is being made.
                      </p>
                      <div className="reply">
                        <Link href="#">Reply</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="leave-reply">
                  <div className="title">
                    <h4>Leave a Reply</h4>
                    <p>
                      Your email address will not be published. Required fields
                      are marked
                    </p>
                  </div>
                  <div>
                    <form className="comment-form" method="POST">
                      <div className="d-block d-md-flex gap-3">
                        <div className="form-author">
                          <label>
                            Name <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            id="author"
                            name="author"
                            required="required"
                          />
                        </div>
                        <div className="form-email">
                          <label>
                            Email <span className="required">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="form-web">
                        <label>Website</label>
                        <input type="url" id="url" name="url" />
                      </div>
                      <div className="form-comment">
                        <label>
                          Comment <span className="required">*</span>
                        </label>
                        <textarea
                          rows={8}
                          spellCheck="false"
                          defaultValue={""}
                        />
                      </div>
                      <div className="cookies-consent">
                        <input
                          type="checkbox"
                          defaultValue="yes"
                          name="wp-comment-cookies-consent"
                          id="wp-comment-cookies-consent"
                        />
                        <label htmlFor="wp-comment-cookies-consent">
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </div>
                      <div className="form-submit">
                        <div className="inner-btn">
                          <div>
                            <button className="default-btn" type="submit">
                              Post A Comment
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="widget-area">
                <div
                  className="widget widget-search"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="search">
                    <div className="title">
                      <h2>Search Inside</h2>
                    </div>
                    <div className="search-wrap">
                      <form className="search-form">
                        <input
                          type="search"
                          className="search-field"
                          placeholder="Search..."
                        />
                        <button type="submit">
                          <i className="fa-solid fa-magnifying-glass" />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div
                  className="widget widget-post"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="post">
                    <div className="title">
                      <h2>Recent Posts</h2>
                    </div>
                    <article className="post-item">
                      <Link href="/blog-details">
                        <div className="img-file">
                          <img
                            src="/assets/img/blog/01_blog.png"
                            alt="FaconTech"
                          />
                        </div>
                      </Link>
                      <div className="info">
                        <time dateTime="2023-06-19">3/4/2024</time>
                        <h4 className="title">
                          <Link href="/blog-details">
                            AI consulting services and solutions that will help.
                          </Link>
                        </h4>
                      </div>
                    </article>
                    <article className="post-item">
                      <Link href="/blog-details">
                        <div className="img-file">
                          <img
                            src="/assets/img/blog/02_blog.png"
                            alt="FaconTech"
                          />
                        </div>
                      </Link>
                      <div className="info">
                        <time dateTime="2023-06-19">3/4/2024</time>
                        <h4 className="title">
                          <Link href="/blog-details">
                            We will respond within one working day and arrange.
                          </Link>
                        </h4>
                      </div>
                    </article>
                    <article className="post-item">
                      <Link href="/blog-details">
                        <div className="img-file">
                          <img
                            src="/assets/img/blog/03_blog.png"
                            alt="FaconTech"
                          />
                        </div>
                      </Link>
                      <div className="info">
                        <time dateTime="2023-06-19">3/4/2024</time>
                        <h4 className="title">
                          <Link href="/blog-details">
                            An expert matching your market niche and industry.
                          </Link>
                        </h4>
                      </div>
                    </article>
                    <article className="post-item">
                      <Link href="/blog-details">
                        <div className="img-file">
                          <img
                            src="/assets/img/blog/04_blog.png"
                            alt="FaconTech"
                          />
                        </div>
                      </Link>
                      <div className="info">
                        <time dateTime="2023-06-19">3/4/2024</time>
                        <h4 className="title">
                          <Link href="/blog-details">
                            You will get a service suite offering, including
                            time.
                          </Link>
                        </h4>
                      </div>
                    </article>
                  </div>
                </div>
                <div
                  className="widget widget-follow"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="follow">
                    <div className="title">
                      <h2>Follow Us</h2>
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
                <div
                  className="widget widget-categories"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="categories">
                    <div className="title">
                      <h2>Categories</h2>
                    </div>
                    <div className="list-inner">
                      <ul>
                        <li>
                          <Link href="#">
                            <span>Business</span>
                            <span>(8)</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span>Finance</span>
                            <span>(10)</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span>Web Design</span>
                            <span>(3)</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span>Counseling</span>
                            <span>(5)</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span>IT Service</span>
                            <span>(11)</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span>AI software</span>
                            <span>(12)</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="widget widget-tags"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="tags">
                    <div className="title">
                      <h2>Tags</h2>
                    </div>
                    <div className="list-grid">
                      <Link href="#">Machine Learning (4)</Link>
                      <Link href="#">ICT Book (6)</Link>
                      <Link href="#">Technology (2)</Link>
                      <Link href="#">Robot (3)</Link>
                      <Link href="#">AI Tech (11)</Link>
                      <Link href="#">Intelligence (6)</Link>
                      <Link href="#">Artificial (3)</Link>
                    </div>
                  </div>
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
      {/* Blog Details Section one end */}
    </>
  );
};

export default BlogDetailsSection;
