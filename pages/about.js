import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Newsletter from "../src/components/Newsletter";
import Footer1 from "../src/layouts/footers/Footer1";

const About = () => {
  return (
    <Layout noFooter>
      <PageBanner pageName={"About us"} pageTitle={"About Us"} />
      
      {/*====== Start About Section ======*/}
      <section className="fancy-about fancy-about-four pt-130 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content-box mb-50">
                <div className="section-title mb-25 wow fadeInUp">
                  <span className="sub-title sub-title-bg" style={{ color: "#fd4a18" }}>
                    who we are
                  </span>
                  <h2 className="text-underline">
                    About FTS Technologies
                  </h2>
                </div>
                <p className="wow fadeInUp" style={{ fontSize: "16px", lineHeight: "1.8" }}>
                  FTS Technologies is a UK-based AI and enterprise IT company founded in 2018. We architect, develop, and deploy intelligent systems that help businesses work smarter — combining deep technical expertise in artificial intelligence with practical experience delivering enterprise IT infrastructure.
                </p>
                <div className="section-title mb-20 mt-40 wow fadeInUp">
                  <h3 style={{ fontSize: "22px", fontWeight: "700" }}>Our Mission</h3>
                </div>
                <blockquote className="quote-content mb-35 wow fadeInUp" style={{ borderLeftColor: "#fd4a18" }}>
                  To build AI systems that create measurable, lasting value — for businesses, healthcare organisations, and the communities they serve. We believe the most transformative technology is that which solves real problems, runs reliably in production, and remains in the hands of those who need it most.
                </blockquote>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img-holder-box mb-50">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="experience-box wow fadeInDown" style={{ background: "#fd4a18" }}>
                      <div className="year">
                        <h2 style={{ fontSize: "40px", color: "#fff" }}>7+</h2>
                        <span style={{ color: "#fff", textTransform: "uppercase", fontSize: "12px", fontWeight: "bold" }}>Years Of Success</span>
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

      {/*====== Start Company Facts Section ======*/}
      <section className="features-area light-gray-bg pt-60 pb-30 border-top-1 border-bottom-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6 col-sm-12 mb-30 text-center">
              <h3 style={{ color: "#fd4a18", fontWeight: "bold", fontSize: "36px", margin: "0 0 5px" }}>2018</h3>
              <p style={{ fontWeight: "600", fontSize: "14px", textTransform: "uppercase", color: "#1b1b20", margin: 0 }}>Year founded</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-30 text-center">
              <h3 style={{ color: "#fd4a18", fontWeight: "bold", fontSize: "36px", margin: "0 0 5px" }}>UK</h3>
              <p style={{ fontWeight: "600", fontSize: "14px", textTransform: "uppercase", color: "#1b1b20", margin: 0 }}>Registered &amp; Headquartered</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-30 text-center">
              <h3 style={{ color: "#fd4a18", fontWeight: "bold", fontSize: "36px", margin: "0 0 5px" }}>AI + IT</h3>
              <p style={{ fontWeight: "600", fontSize: "14px", textTransform: "uppercase", color: "#1b1b20", margin: 0 }}>Dual Capability</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-30 text-center">
              <h3 style={{ color: "#fd4a18", fontWeight: "bold", fontSize: "36px", margin: "0 0 5px" }}>NHS-Ready</h3>
              <p style={{ fontWeight: "600", fontSize: "14px", textTransform: "uppercase", color: "#1b1b20", margin: 0 }}>Healthcare AI Pipeline</p>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Company Facts Section ======*/}

      {/*====== Start Story Section ======*/}
      <section className="fancy-about pt-130 pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="about-img mb-50 wow fadeInLeft">
                <img src="assets/images/about/about-9.jpg" alt="Our Story" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="text-wrapper mb-50 ml-lg-4 wow fadeInRight">
                <div className="section-title mb-25">
                  <span className="sub-title red-dark text-underline">our story</span>
                  <h2>How FTS Technologies Evolved</h2>
                </div>
                <p className="mb-20" style={{ fontSize: "15px", lineHeight: "1.8" }}>
                  FTS Technologies was established in 2018 with a clear focus: to bring enterprise-grade AI capability to organisations that need it most. Starting as an IT solutions and consulting firm, we quickly recognised that our clients' greatest untapped opportunity lay not in traditional software, but in intelligent systems — AI that could learn, adapt, and automate complex tasks at scale.
                </p>
                <p className="mb-20" style={{ fontSize: "15px", lineHeight: "1.8" }}>
                  Over the past seven years we have grown from a consulting team into a full-stack AI development company, delivering solutions across automation, healthcare, and custom platform development. Today, FTS Technologies works with clients across the UK and internationally, bringing together AI engineering, cloud infrastructure, and domain expertise to build systems that make a genuine difference.
                </p>
                <p className="mb-20" style={{ fontSize: "15px", lineHeight: "1.8" }}>
                  Our healthcare AI division — launched in response to the clear and growing need for sovereign, NHS-native AI tools — represents our most ambitious work. We are actively developing AI systems for patient risk prediction, clinical documentation, and mental health triage, specifically designed to run on UK infrastructure under UK governance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Story Section ======*/}

      {/*====== Start Values Section ======*/}
      <section className="fancy-features pt-120 pb-90 light-gray-bg border-top-1 border-bottom-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-55 wow fadeInUp">
                <span className="sub-title red-dark text-underline">our values</span>
                <h2 className="text-uppercase">The Principles That Guide Us</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-40">
              <div className="block-style-two text-center p-4 bg-white h-100 shadow-sm wow fadeInUp" data-wow-delay=".2s" style={{ borderRadius: "5px" }}>
                <h4 style={{ fontWeight: "700", marginBottom: "15px" }} className="text-underline">Sovereign by Design</h4>
                <p style={{ fontSize: "14px" }}>
                  We build AI that keeps data where it belongs — on UK infrastructure, under UK law, owned by UK organisations. We never compromise on data sovereignty, especially in healthcare.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-40">
              <div className="block-style-two text-center p-4 bg-white h-100 shadow-sm wow fadeInUp" data-wow-delay=".3s" style={{ borderRadius: "5px" }}>
                <h4 style={{ fontWeight: "700", marginBottom: "15px" }} className="text-underline">Practical Over Theoretical</h4>
                <p style={{ fontSize: "14px" }}>
                  We deliver working systems, not whitepapers. Every project we take on is measured by its real-world impact — efficiency gained, costs reduced, outcomes improved.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-40">
              <div className="block-style-two text-center p-4 bg-white h-100 shadow-sm wow fadeInUp" data-wow-delay=".4s" style={{ borderRadius: "5px" }}>
                <h4 style={{ fontWeight: "700", marginBottom: "15px" }} className="text-underline">Transparent &amp; Trustworthy</h4>
                <p style={{ fontSize: "14px" }}>
                  AI should be explainable. We build audit trails, bias checks, and governance frameworks into every system we deploy — because trust is not optional in healthcare or enterprise contexts.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-40">
              <div className="block-style-two text-center p-4 bg-white h-100 shadow-sm wow fadeInUp" data-wow-delay=".5s" style={{ borderRadius: "5px" }}>
                <h4 style={{ fontWeight: "700", marginBottom: "15px" }} className="text-underline">NHS &amp; Public Sector First</h4>
                <p style={{ fontSize: "14px" }}>
                  We believe the UK's public health infrastructure deserves world-class AI tools built specifically for it — not adapted from systems designed for US insurance markets.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-40">
              <div className="block-style-two text-center p-4 bg-white h-100 shadow-sm wow fadeInUp" data-wow-delay=".6s" style={{ borderRadius: "5px" }}>
                <h4 style={{ fontWeight: "700", marginBottom: "15px" }} className="text-underline">Long-Term Partnership</h4>
                <p style={{ fontSize: "14px" }}>
                  We do not hand over code and disappear. Our clients work with us as long-term technology partners — with ongoing support, iteration, and evolution as their needs grow.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-40">
              <div className="block-style-two text-center p-4 bg-white h-100 shadow-sm wow fadeInUp" data-wow-delay=".7s" style={{ borderRadius: "5px" }}>
                <h4 style={{ fontWeight: "700", marginBottom: "15px" }} className="text-underline">Diversity in AI</h4>
                <p style={{ fontSize: "14px" }}>
                  We actively work to ensure the AI systems we build perform equitably across all demographics — because biased AI in healthcare can cost lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Values Section ======*/}

      {/*====== Start Newsletter Section ======*/}
      <Newsletter bg={1} btnColor={"black"} />
      {/*====== End Newsletter Section ======*/}
      <Footer1 />
    </Layout>
  );
};

export default About;
