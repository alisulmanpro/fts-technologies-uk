import dynamic from "next/dynamic";
import { Nav, Tab } from "react-bootstrap";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
const DonutChart = dynamic(() => import("../src/components/DonutChart"), {
  ssr: false,
});

const Pricing = () => {
  return (
    <Layout>
      <PageBanner pageName={"Pricing Plan"} />
      <section className="pricing-area pricing-style-two pt-130 pb-90">
        <div className="container">
          <Tab.Container defaultActiveKey={"monthly"}>
            <div className="row align-items-end">
              <div className="col-md-7">
                <div className="section-title mb-50 wow fadeInLeft">
                  <span className="sub-title sub-title-bg blue-light-bg">
                    our pricing package
                  </span>
                  <h2 className="text-underline">
                    We Provide an Smart Pricing Package For IT Solutions
                  </h2>
                </div>
              </div>
              <div className="col-md-5">
                <div className="pricing-nav float-lg-right mb-65 wow fadeInRight">
                  <Nav as={"ul"} className="nav nav-tabs">
                    <Nav.Item as={"li"}>
                      <Nav.Link
                        as={"a"}
                        eventKey={"monthly"}
                        className="nav-link"
                        data-toggle="tab"
                        href="#monthly"
                      >
                        Monthly
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as={"li"}>
                      <Nav.Link
                        as={"a"}
                        eventKey={"yearly"}
                        className="nav-link"
                        data-toggle="tab"
                        href="#yearly"
                      >
                        Yearly
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>
            </div>
            <Tab.Content className="tab-content wow fadeInUp">
              <Tab.Pane
                eventKey={"monthly"}
                className="tab-pane fade"
                id="monthly"
              >
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="pricing-item mb-40">
                      <div className="pricing-title-price mb-25">
                        <div className="pricing-price">
                          <h3 className="price">
                            <span className="currency">$</span>19.99
                            <span className="sm-text">Monthly</span>
                          </h3>
                        </div>
                        <div className="pricing-title">
                          <h3 className="title">Basic Plan</h3>
                          <span className="discount">25% Save Package</span>
                        </div>
                      </div>
                      <div className="pricing-body">
                        <a href="#" className="main-btn btn-purple">
                          Choose this pricing
                        </a>
                        <ul className="list">
                          <li className="check">30 Days Trial Features</li>
                          <li className="check">Cloud Database</li>
                          <li className="check">Easy Website Builder</li>
                          <li className="uncheck">10 Hours Of Support</li>
                          <li className="uncheck">Unlimited Features</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="pricing-item mb-40">
                      <div className="pricing-title-price mb-25">
                        <div className="pricing-price">
                          <h3 className="price">
                            <span className="currency">$</span>28.97
                            <span className="sm-text">Monthly</span>
                          </h3>
                        </div>
                        <div className="pricing-title">
                          <h3 className="title">Regular Plan</h3>
                          <span className="discount">25% Save Package</span>
                        </div>
                      </div>
                      <div className="pricing-body">
                        <a href="#" className="main-btn btn-purple">
                          Choose this pricing
                        </a>
                        <ul className="list">
                          <li className="check">30 Days Trial Features</li>
                          <li className="check">Cloud Database</li>
                          <li className="check">Easy Website Builder</li>
                          <li className="uncheck">10 Hours Of Support</li>
                          <li className="uncheck">Unlimited Features</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="pricing-item mb-40">
                      <div className="pricing-title-price mb-25">
                        <div className="pricing-price">
                          <h3 className="price">
                            <span className="currency">$</span>63.92
                            <span className="sm-text">Monthly</span>
                          </h3>
                        </div>
                        <div className="pricing-title">
                          <h3 className="title">Standard Plan</h3>
                          <span className="discount">25% Save Package</span>
                        </div>
                      </div>
                      <div className="pricing-body">
                        <a href="#" className="main-btn btn-purple">
                          Choose this pricing
                        </a>
                        <ul className="list">
                          <li className="check">30 Days Trial Features</li>
                          <li className="check">Cloud Database</li>
                          <li className="check">Easy Website Builder</li>
                          <li className="uncheck">10 Hours Of Support</li>
                          <li className="uncheck">Unlimited Features</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="pricing-item mb-40">
                      <div className="pricing-title-price mb-25">
                        <div className="pricing-price">
                          <h3 className="price">
                            <span className="currency">$</span>89.99
                            <span className="sm-text">Monthly</span>
                          </h3>
                        </div>
                        <div className="pricing-title">
                          <h3 className="title">Silver Plan</h3>
                          <span className="discount">25% Save Package</span>
                        </div>
                      </div>
                      <div className="pricing-body">
                        <a href="#" className="main-btn btn-purple">
                          Choose this pricing
                        </a>
                        <ul className="list">
                          <li className="check">30 Days Trial Features</li>
                          <li className="check">Cloud Database</li>
                          <li className="check">Easy Website Builder</li>
                          <li className="uncheck">10 Hours Of Support</li>
                          <li className="uncheck">Unlimited Features</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey={"yearly"} className="tab-pane" id="yearly">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="pricing-item mb-40">
                      <div className="pricing-title-price mb-25">
                        <div className="pricing-price">
                          <h3 className="price">
                            <span className="currency">$</span>19.99
                            <span className="sm-text">Monthly</span>
                          </h3>
                        </div>
                        <div className="pricing-title">
                          <h3 className="title">Basic Plan</h3>
                          <span className="discount">25% Save Package</span>
                        </div>
                      </div>
                      <div className="pricing-body">
                        <a href="#" className="main-btn btn-purple">
                          Choose this pricing
                        </a>
                        <ul className="list">
                          <li className="check">30 Days Trial Features</li>
                          <li className="check">Cloud Database</li>
                          <li className="check">Easy Website Builder</li>
                          <li className="uncheck">10 Hours Of Support</li>
                          <li className="uncheck">Unlimited Features</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="pricing-item mb-40">
                      <div className="pricing-title-price mb-25">
                        <div className="pricing-price">
                          <h3 className="price">
                            <span className="currency">$</span>28.97
                            <span className="sm-text">Monthly</span>
                          </h3>
                        </div>
                        <div className="pricing-title">
                          <h3 className="title">Regular Plan</h3>
                          <span className="discount">25% Save Package</span>
                        </div>
                      </div>
                      <div className="pricing-body">
                        <a href="#" className="main-btn btn-purple">
                          Choose this pricing
                        </a>
                        <ul className="list">
                          <li className="check">30 Days Trial Features</li>
                          <li className="check">Cloud Database</li>
                          <li className="check">Easy Website Builder</li>
                          <li className="uncheck">10 Hours Of Support</li>
                          <li className="uncheck">Unlimited Features</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="pricing-item mb-40">
                      <div className="pricing-title-price mb-25">
                        <div className="pricing-price">
                          <h3 className="price">
                            <span className="currency">$</span>63.92
                            <span className="sm-text">Monthly</span>
                          </h3>
                        </div>
                        <div className="pricing-title">
                          <h3 className="title">Standard Plan</h3>
                          <span className="discount">25% Save Package</span>
                        </div>
                      </div>
                      <div className="pricing-body">
                        <a href="#" className="main-btn btn-purple">
                          Choose this pricing
                        </a>
                        <ul className="list">
                          <li className="check">30 Days Trial Features</li>
                          <li className="check">Cloud Database</li>
                          <li className="check">Easy Website Builder</li>
                          <li className="uncheck">10 Hours Of Support</li>
                          <li className="uncheck">Unlimited Features</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="pricing-item mb-40">
                      <div className="pricing-title-price mb-25">
                        <div className="pricing-price">
                          <h3 className="price">
                            <span className="currency">$</span>89.99
                            <span className="sm-text">Monthly</span>
                          </h3>
                        </div>
                        <div className="pricing-title">
                          <h3 className="title">Silver Plan</h3>
                          <span className="discount">25% Save Package</span>
                        </div>
                      </div>
                      <div className="pricing-body">
                        <a href="#" className="main-btn btn-purple">
                          Choose this pricing
                        </a>
                        <ul className="list">
                          <li className="check">30 Days Trial Features</li>
                          <li className="check">Cloud Database</li>
                          <li className="check">Easy Website Builder</li>
                          <li className="uncheck">10 Hours Of Support</li>
                          <li className="uncheck">Unlimited Features</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </section>
      {/*====== End Pricing Section ======*/}
      {/*====== Start Pricing Section ======*/}
      <section
        className="pricing-area pricing-style-one bg_cover pt-110 pb-105"
        style={{ backgroundImage: "url(assets/images/bg/pricing-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title section-title-white text-center mb-65 wow fadeInUp">
                <span className="sub-title sub-title-bg blue-light-bg">
                  Awesome pricing plan
                </span>
                <h2 className="text-underline">
                  we provide an smart pricing package for it solutions
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="pricing-item mb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="pricing-title-price">
                  <div className="pricing-title">
                    <h3 className="title">Basic Plan</h3>
                    <span className="discount">25% Save Package</span>
                  </div>
                  <div className="pricing-price">
                    <h3 className="price">
                      <span className="currency">$</span>19.99
                      <span className="sm-text">for Monthly</span>
                    </h3>
                  </div>
                </div>
                <div className="pricing-body">
                  <p>
                    Take a trivial example which of us ever undertakes laborious
                    physical exercise On the other hand
                  </p>
                  <ul className="list">
                    <li className="check">30 Days Trial Features</li>
                    <li className="check">Synced To Cloud Database</li>
                    <li className="check">Easy Website Builder</li>
                    <li className="uncheck">10 Hours Of Support</li>
                    <li className="uncheck">Social Media Integration</li>
                    <li className="uncheck">Unlimited Features</li>
                  </ul>
                  <a href="#" className="main-btn">
                    Choose this pricing
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="pricing-item mb-40 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="pricing-title-price">
                  <div className="pricing-title">
                    <h3 className="title">Regular Plan</h3>
                    <span className="discount">25% Save Package</span>
                  </div>
                  <div className="pricing-price">
                    <h3 className="price">
                      <span className="currency">$</span>39.99
                      <span className="sm-text">for Monthly</span>
                    </h3>
                  </div>
                </div>
                <div className="pricing-body">
                  <p>
                    Take a trivial example which of us ever undertakes laborious
                    physical exercise On the other hand
                  </p>
                  <ul className="list">
                    <li className="check">30 Days Trial Features</li>
                    <li className="check">Synced To Cloud Database</li>
                    <li className="check">Easy Website Builder</li>
                    <li className="check">10 Hours Of Support</li>
                    <li className="check">Social Media Integration</li>
                    <li className="check">Unlimited Features</li>
                  </ul>
                  <a href="#" className="main-btn">
                    Choose this pricing
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="pricing-item mb-40 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="pricing-title-price">
                  <div className="pricing-title">
                    <h3 className="title">Silver Plan</h3>
                    <span className="discount">25% Save Package</span>
                  </div>
                  <div className="pricing-price">
                    <h3 className="price">
                      <span className="currency">$</span>99.99
                      <span className="sm-text">for Monthly</span>
                    </h3>
                  </div>
                </div>
                <div className="pricing-body">
                  <p>
                    Take a trivial example which of us ever undertakes laborious
                    physical exercise On the other hand
                  </p>
                  <ul className="list">
                    <li className="check">30 Days Trial Features</li>
                    <li className="check">Synced To Cloud Database</li>
                    <li className="check">Easy Website Builder</li>
                    <li className="check">10 Hours Of Support</li>
                    <li className="check">Social Media Integration</li>
                    <li className="check">Unlimited Features</li>
                  </ul>
                  <a href="#" className="main-btn">
                    Choose this pricing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Pricing Section ======*/}
      {/*====== Start Skill Section ======*/}
      <section className="skill-area skill-style-one pt-130 pb-70">
        <div className="objects">
          <img
            src="assets/images/objects/object-5.png"
            className="img-1"
            alt="object image"
          />
          <img
            src="assets/images/objects/object-6.png"
            className="img-2"
            alt="object image"
          />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="skill-img-box mb-60">
                <div className="shape">
                  <img
                    src="assets/images/objects/object-7.png"
                    className="img-1"
                    alt="object image"
                  />
                </div>
                <div className="row">
                  <div className="col-md-5">
                    <div className="skill-img wow fadeInUp">
                      <img src="assets/images/skill/img-1.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="skill-img mt-60 wow fadeInDown">
                      <img src="assets/images/skill/img-2.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="skill-content-box mb-60">
                <div className="section-title section-title-two mb-35 wow fadeInUp">
                  <span className="sub-title sub-title-bg blue-light-bg">
                    latest skills
                  </span>
                  <h2 className="text-underline">
                    We’re Very Professional &amp; Experience Agency{" "}
                  </h2>
                </div>
                <p>
                  Sed perspiciatis unde omnis natus voluptate accusantie
                  doloremque laudantium totam rem aperiam eaque quaea vtore
                  eritatis quasi architecto beatae vitae
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="skill-item wow fadeInUp">
                      <div className="skill-bar">
                        {/* <div
                          className="circle"
                          data-donutty=""
                          data-thickness={10}
                          data-padding={0}
                          data-value={89}
                          data-bg="rgba(67, 186, 255, 0.1)"
                          data-round="false"
                          data-color="#43baff"
                        /> */}
                        <DonutChart
                          value={89}
                          color={"#43baff"}
                          background={"rgba(67, 186, 255, 0.1)"}
                        />
                        <h2 className="number">
                          89<span className="sign">%</span>
                        </h2>
                      </div>
                      <div className="text">
                        <h3>IT Consulting</h3>
                        <p>Sed perspic unde omnise voluptate accusantie</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="skill-item wow fadeInUp">
                      <div className="skill-bar">
                        {/* <div
                          className="circle"
                          data-donutty=""
                          data-thickness={10}
                          data-padding={0}
                          data-value={89}
                          data-bg="rgba(67, 186, 255, 0.1)"
                          data-round="false"
                          data-color="#7141B1"
                        /> */}

                        <DonutChart
                          value={67}
                          color={"#7141B1"}
                          background={"rgba(113, 65, 177, 0.1)"}
                        />
                        <h2 className="number">
                          67<span className="sign">%</span>
                        </h2>
                      </div>
                      <div className="text">
                        <h3>Management</h3>
                        <p>Sed perspic unde omnise voluptate accusantie</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Pricing;
