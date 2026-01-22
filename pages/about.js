import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import { Fragment } from "react/jsx-runtime";
import Head from "next/head";

const About = () => {
  return (
    <Fragment>
      <Head>
        <title>
          FTS | About
        </title>
      </Head>
      <Layout>
        <PageBanner pageName={"About Us"} pageTitle={"About Us"} />
        {/*====== End Hero Section ======*/}
        {/*====== Start About Section ======*/}
        {/*====== Start About Section ======*/}
        <section className="fancy-about fancy-about-four pt-130 pb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="about-content-box mb-50">
                  <div className="section-title mb-25 wow fadeInUp">
                    <span className="sub-title sub-title-bg" style={{ color: "#fd4a18" }}>
                      what we offer
                    </span>
                    <h2 className="text-underline">
                      We Care IT Business to Made Great Success{" "}
                    </h2>
                  </div>
                  <p>
                    Sed perspiciatis unde omnis natus voluptate accusantie
                    doloremque laudantium totam rem aperiam eaque quaea vtore
                    eritatis quasi architecto beatae vitae
                  </p>
                  <blockquote className="quote-content mb-35 wow fadeInUp" style={{ borderLeftColor: "#fd4a18" }}>
                    Unde omnis natus voluptate accusantie doloremqu dan totam rem
                    aperiam eaque quaea vtore eritatis
                  </blockquote>
                  <ul className="check-list list-circle-bg mb-20 wow fadeInUp">
                    <li>Professional Services</li>
                    <li>Experience Advisors</li>
                    <li>Software Development</li>
                    <li>Product Engineering</li>
                  </ul>
                  <Link href="/about">
                    <a className="main-btn btn btn-red-dark wow fadeInUp">
                      learn about more
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img-holder-box mb-50">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="experience-box wow fadeInDown">
                        <div className="year">
                          <h2>25</h2>
                        </div>
                      </div>
                      <div className="img-holder wow fadeInUp">
                        <img
                          src="assets/images/about/about-10.jpg"
                          alt="About Image"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="img-holder wow fadeInDown">
                        <img
                          src="assets/images/about/about-11.jpg"
                          alt="About Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== End About Section ======*/}
        {/*====== Start History Section ======*/}
        <section className="history-style-one mb-minus-130">
          <div className="container">
            <div className="history-wrapper wow fadeInUp">
              <div className="row no-gutters">
                <div className="col-lg-6">
                  <div
                    className="history-img bg_cover"
                    style={{
                      backgroundImage:
                        "url(assets/images/features/history-img-1.jpg)",
                    }}
                  />
                </div>
                <div className="col-lg-6">
                  <div className="history-content-box">
                    <div className="year-box bg_cover" style={{ backgroundColor: "#fd4a18" }}>
                      <h3>20 January 1995</h3>
                      <span className="text">When We Start Our Journery</span>
                    </div>
                    <div className="content-box">
                      <blockquote className="quote-content" style={{ borderLeftColor: "#fd4a18" }}>
                        Complete Guide Accessible Front Floating Labels Lighthouse
                      </blockquote>
                      <div className="history-content-slider">
                        <div className="single-history mb-45">
                          <div className="text">
                            <p>
                              Sed perspiciatis unde omnis iste natus error sit
                              voluptatem accusantium doloremque laudantium totam
                              aperiam eaquep saquae abillo inventore veritatis et
                              quasi architecto beataey vitae dicta sunt explicabe
                              enim ipsam voluptatem quiase voluptas sit aspernatur
                              autodit aut fugit
                            </p>
                          </div>
                        </div>
                        <div className="single-history mb-45">
                          <div className="text">
                            <p>
                              Sed perspiciatis unde omnis iste natus error sit
                              voluptatem accusantium doloremque laudantium totam
                              aperiam eaquep saquae abillo inventore veritatis et
                              quasi architecto beataey vitae dicta sunt explicabe
                              enim ipsam voluptatem quiase voluptas sit aspernatur
                              autodit aut fugit
                            </p>
                          </div>
                        </div>
                        <div className="single-history mb-45">
                          <div className="text">
                            <p>
                              Sed perspiciatis unde omnis iste natus error sit
                              voluptatem accusantium doloremque laudantium totam
                              aperiam eaquep saquae abillo inventore veritatis et
                              quasi architecto beataey vitae dicta sunt explicabe
                              enim ipsam voluptatem quiase voluptas sit aspernatur
                              autodit aut fugit
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== End History Section ======*/}
      </Layout>
    </Fragment>
  );
};
export default About;
