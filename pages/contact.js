import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import { Fragment } from "react/jsx-runtime";
import Head from "next/head";

const Contact = () => {
  return (
    <Fragment>
      <Head>
        <title>
          FTS | Contact us
        </title>
      </Head>
      <Layout>
        <PageBanner pageName={"Contact Us "} />
        <section
          className="contact-area contact-style-three bg_cover pt-130 pb-80"
          style={{
            backgroundImage: "url(assets/images/bg/testimonial-bg-1.jpg)",
          }}
        >
          <div className="container">
            <div className="row align-items-start">
              <div className="col-lg-5">
                <div className="contact-section-box mb-50 wow fadeInLeft">
                  <div className="section-title mb-25">
                    <span className="sub-title sub-title-bg red-dark-bg">
                      Need help ?
                    </span>
                    <h2 className="text-underline">
                      Let&apos;s Talk About IT Solutions
                    </h2>
                  </div>
                  <p>
                    On the other hand denounce righteous indige ation and dislike
                    men who are so beguiled and demoralized by the charms of
                    pleasure of the moment blinded by desire
                  </p>
                  <ul className="social-link">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="contact-wrapper mb-50 wow fadeInRight">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="contact-form"
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Full Name Here"
                            name="name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="email"
                            className="form_control"
                            placeholder="Email Address"
                            name="email"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <textarea
                            className="form_control"
                            placeholder="Write Message"
                            name="message"
                            required=""
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <div className="col-lg-12">
                            <button className="main-btn btn-red-dark">
                              Get free consultations
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </Fragment>
  );
};
export default Contact;
