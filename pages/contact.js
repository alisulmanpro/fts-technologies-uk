import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Newsletter from "../src/components/Newsletter";
import Footer1 from "../src/layouts/footers/Footer1";

const Contact = () => {
  return (
    <Layout noFooter>
      <PageBanner pageName={"Contact Us"} />
      
      {/*====== Start Contact Section ======*/}
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
                    Get In Touch
                  </span>
                  <h2 className="text-underline">
                    Let's Talk About Your Project
                  </h2>
                </div>
                <p style={{ fontSize: "15px", lineHeight: "1.8" }}>
                  Ready to discuss your AI or IT project? Get in touch with the FTS Technologies team. We offer a free initial consultation for all new enquiries — whether you are exploring a specific use case, evaluating a technology partnership, or applying for innovation funding and need a technical delivery partner.
                </p>
                <div className="contact-info mt-35">
                  <ul className="info-list" style={{ listStyle: "none", padding: 0 }}>
                    <li className="mb-20 d-flex align-items-center" style={{ fontSize: "16px" }}>
                      <i className="far fa-envelope mr-15" style={{ color: "#fd4a18", fontSize: "18px" }} />
                      <span>
                        <a href="mailto:info@ftstechnologies.co.uk" style={{ fontWeight: "600" }}>info@ftstechnologies.co.uk</a>
                      </span>
                    </li>
                    <li className="mb-20 d-flex align-items-center" style={{ fontSize: "16px" }}>
                      <i className="fab fa-whatsapp mr-15" style={{ color: "#fd4a18", fontSize: "20px" }} />
                      <span>
                        <a href="https://wa.me/447863050300" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "600" }}>+44 7863 050300 (Call / WhatsApp)</a>
                      </span>
                    </li>
                    <li className="mb-20 d-flex align-items-center" style={{ fontSize: "16px" }}>
                      <i className="far fa-globe mr-15" style={{ color: "#fd4a18", fontSize: "18px" }} />
                      <span>UK-Based. Serving clients globally</span>
                    </li>
                  </ul>
                </div>
                <ul className="social-link mt-35">
                  <li>
                    <a href="https://www.linkedin.com/company/ftstechnologies/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin" />
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
                          placeholder="Your Full Name"
                          name="name"
                          required
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
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <textarea
                          className="form_control"
                          placeholder="Write your project details or enquiry here"
                          name="message"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <button className="main-btn btn-red-dark">
                          Get free consultation
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Contact Section ======*/}

      {/*====== Start Process & Enquiries Section ======*/}
      <section className="features-area light-gray-bg pt-120 pb-90 border-top-1 border-bottom-1">
        <div className="container">
          <div className="row">
            {/* Left: What Happens Next */}
            <div className="col-lg-6 mb-40 wow fadeInUp" data-wow-delay=".2s">
              <div className="p-5 bg-white h-100 shadow-sm" style={{ borderRadius: "8px" }}>
                <h3 className="mb-30 text-underline" style={{ fontWeight: "700" }}>What Happens Next?</h3>
                <ul className="process-list" style={{ listStyle: "none", padding: 0 }}>
                  <li className="mb-20 d-flex">
                    <div className="num mr-15" style={{ background: "#fd4a18", color: "#fff", width: "30px", height: "30px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", flexShrink: 0 }}>1</div>
                    <div>
                      <h5 style={{ fontWeight: "700" }}>Within 24 Hours</h5>
                      <p style={{ fontSize: "14px" }}>We acknowledge your enquiry and assign a senior technical contact to your case.</p>
                    </div>
                  </li>
                  <li className="mb-20 d-flex">
                    <div className="num mr-15" style={{ background: "#fd4a18", color: "#fff", width: "30px", height: "30px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", flexShrink: 0 }}>2</div>
                    <div>
                      <h5 style={{ fontWeight: "700" }}>Free Discovery Call</h5>
                      <p style={{ fontSize: "14px" }}>A 30-minute conversation to understand your challenge, goals, and constraints.</p>
                    </div>
                  </li>
                  <li className="mb-20 d-flex">
                    <div className="num mr-15" style={{ background: "#fd4a18", color: "#fff", width: "30px", height: "30px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", flexShrink: 0 }}>3</div>
                    <div>
                      <h5 style={{ fontWeight: "700" }}>Proposal or Recommendation</h5>
                      <p style={{ fontSize: "14px" }}>Within 5 working days we provide a written outline of our recommended approach, timeline, and investment.</p>
                    </div>
                  </li>
                  <li className="mb-20 d-flex">
                    <div className="num mr-15" style={{ background: "#fd4a18", color: "#fff", width: "30px", height: "30px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", flexShrink: 0 }}>4</div>
                    <div>
                      <h5 style={{ fontWeight: "700" }}>No Obligation</h5>
                      <p style={{ fontSize: "14px" }}>There is no pressure and no cost to the initial consultation. We want to make sure we are the right fit before committing.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Enquiry Types We Handle */}
            <div className="col-lg-6 mb-40 wow fadeInUp" data-wow-delay=".4s">
              <div className="p-5 bg-white h-100 shadow-sm" style={{ borderRadius: "8px" }}>
                <h3 className="mb-30 text-underline" style={{ fontWeight: "700" }}>Enquiry Types We Handle</h3>
                <div className="row">
                  <div className="col-md-6 mb-20">
                    <h5 style={{ fontWeight: "700", color: "#fd4a18" }} className="mb-10">AI Projects</h5>
                    <ul style={{ fontSize: "13px", paddingLeft: "15px" }}>
                      <li>AI automation &amp; workflow</li>
                      <li>NHS system development</li>
                      <li>Custom SaaS &amp; web apps</li>
                      <li>Strategy &amp; architecture</li>
                    </ul>
                  </div>
                  <div className="col-md-6 mb-20">
                    <h5 style={{ fontWeight: "700", color: "#fd4a18" }} className="mb-10">Learning Hub</h5>
                    <ul style={{ fontSize: "13px", paddingLeft: "15px" }}>
                      <li>Upskilling programmes</li>
                      <li>Course enrolment</li>
                      <li>Learning partnerships</li>
                    </ul>
                  </div>
                  <div className="col-md-6 mb-20">
                    <h5 style={{ fontWeight: "700", color: "#fd4a18" }} className="mb-10">Funding &amp; Innovation</h5>
                    <ul style={{ fontSize: "13px", paddingLeft: "15px" }}>
                      <li>AIRR GPU applications</li>
                      <li>Innovate UK grants</li>
                      <li>Horizon Europe projects</li>
                      <li>NHS pilot procurement</li>
                    </ul>
                  </div>
                  <div className="col-md-6 mb-20">
                    <h5 style={{ fontWeight: "700", color: "#fd4a18" }} className="mb-10">Partnerships</h5>
                    <ul style={{ fontSize: "13px", paddingLeft: "15px" }}>
                      <li>Integration partnerships</li>
                      <li>Reseller channels</li>
                      <li>Academic collaborations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Process & Enquiries Section ======*/}

      {/*====== Start Callout Section ======*/}
      <section className="service-area pt-120 pb-120 border-bottom-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="p-5 bg-white text-center shadow-sm wow fadeInUp" style={{ borderRadius: "8px", borderTop: "5px solid #fd4a18" }}>
                <h3 className="mb-20 text-underline" style={{ fontWeight: "700" }}>Working with the NHS or applying for UK government AI funding?</h3>
                <p style={{ fontSize: "16px", lineHeight: "1.8", maxWidth: "800px", margin: "0 auto 30px" }}>
                  FTS Technologies has specific experience supporting AIRR applications, NHS procurement processes, and UK Sovereign AI programme applications. If you are preparing an application and need a credible technical delivery partner, contact us early — we can contribute to your technical narrative, workload specification, and delivery plan.
                </p>
                <a href="mailto:info@ftstechnologies.co.uk" className="main-btn">Email NHS Advisory Team</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Callout Section ======*/}

      {/*====== Start Newsletter Section ======*/}
      <Newsletter bg={1} btnColor={"black"} />
      {/*====== End Newsletter Section ======*/}
      <Footer1 />
    </Layout>
  );
};

export default Contact;
