import Head from "next/head";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import { Fragment } from "react/jsx-runtime";

const Service1 = () => {
  return (
    <Fragment>
      <Head>
        <title>
          FTS | Services
        </title>
      </Head>
      <Layout>
        <PageBanner pageName={"Services"} />
        <section className="fancy-about fancy-about-five pt-130 pb-80">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="text-wrapper mb-50">
                  <div className="experience-box wow fadeInLeft">
                    <div className="big-text mb-45" style={{ color: "#fd4a18" }}>09</div>
                    <div className="content mb-45">
                      <span className="span">Years Of Experience</span>
                      <h2>Professional IT Solutions for Business Success</h2>
                      <blockquote style={{ borderLeftColor: "#fd4a18" }}>
                        <p>
                          Sed ut perspiciatis unde omnis natus error sit
                          voluptatem accustium dolorem que laudantium totam rem
                          eaque
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="about-img mb-50 wow fadeInRight">
                  <img src="assets/images/about/about-9.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Start Features Section ======*/}
        <section className="features-area position-relative mb-90-minus">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="block-style-eight d-flex animate-icon mb-md-40 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="icon">
                    <i className="flaticon-product-development" />
                  </div>
                  <div className="text">
                    <h3 className="text-underline">Machine Learning</h3>
                    <p>
                      Sed perspiciatis unde omnatus voluptate accusantie oloremque
                      laudantiu totamrem beatae
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="block-style-eight d-flex animate-icon mb-md-40 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="icon">
                    <i className="flaticon-interactive" />
                  </div>
                  <div className="text">
                    <h3 className="text-underline">Artificial Intelligence</h3>
                    <p>
                      Sed perspiciatis unde omnatus voluptate accusantie oloremque
                      laudantiu totamrem beatae
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="block-style-eight d-flex animate-icon mb-md-40 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="icon">
                    <i className="flaticon-creative" />
                  </div>
                  <div className="text">
                    <h3 className="text-underline">Augmented Reality</h3>
                    <p>
                      Sed perspiciatis unde omnatus voluptate accusantie oloremque
                      laudantiu totamrem beatae
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== End Features Section ======*/}
        <section className="service-area pt-130 pb-130">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="section-title text-center mb-50">
                  <span className="sub-title sub-title-bg red-dark-bg">
                    it services
                  </span>
                  <h2 className="text-underline">
                    Digital Innovative Solutions For IT Management
                  </h2>
                </div>
              </div>
            </div>
            <div className="row rows">
              <div className="col-lg-6">
                <div
                  className="block-style-eighteen animate-icon d-flex align-items-center mb-30 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="icon">
                    <img src="assets/images/icon/icon-5.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="title">
                      <a className="text-underline" >ServiceNow Core Services</a>
                    </h3>
                    <p>
                      Streamline your enterprise workflows with expert ServiceNow implementation, ITOM, and ITSM solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="block-style-eighteen  animate-icon d-flex align-items-center mb-30 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="icon">
                    <img src="assets/images/icon/icon-6.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="title">
                      <a className="text-underline">
                        Cloud Computing Services
                      </a>
                    </h3>
                    <p>
                      Scalable Azure, AWS, and Google Cloud infrastructure designed for security, flexibility, and performance.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="block-style-eighteen  animate-icon d-flex align-items-center mb-30 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="icon">
                    <img src="assets/images/icon/icon-7.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="title">
                      <a className="text-underline">CMS Development Services</a>
                    </h3>
                    <p>
                      Custom WordPress, Headless CMS, and Adobe Experience Manager solutions tailored to your brand.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="block-style-eighteen  animate-icon d-flex align-items-center mb-30 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="icon">
                    <img src="assets/images/icon/icon-8.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="title">
                      <a className="text-underline">AI Integration & Automation</a>
                    </h3>
                    <p>
                      Leverage LLMs and robotic process automation (RPA) to eliminate manual tasks and boost efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== End Service Section ======*/}
      </Layout>
    </Fragment>
  );
};
export default Service1;
