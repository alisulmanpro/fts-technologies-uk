import Link from "next/link";
import Slider from "react-slick";
import Newsletter from "../src/components/Newsletter";
import Footer1 from "../src/layouts/footers/Footer1";
import Header1 from "../src/layouts/headers/Header1";
import Layout from "../src/layouts/Layout";
import {
  heroOne,
} from "../src/sliderProps";

const Index = () => {
  return (
    <Layout noHeader noFooter>
      <Header1 />
      
      {/*====== Start Hero Section ======*/}
      <section className="hero-area">
        <Slider {...heroOne} className="hero-wrapper-one hero-slider-one">
          <div
            className="single-slider banner-slide-1 bg_cover"
            style={{
              backgroundImage: "url(assets/images/hero/hero-slider-1_1.jpg)",
            }}
          >
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-lg-8">
                  <div className="hero-content">
                    <span
                      className="sub-title text-underline"
                      data-animation="fadeInDown"
                      data-delay=".3s"
                    >
                      UK-Based. Globally Capable.
                    </span>
                    <h1 data-animation="fadeInDown" data-delay=".5s">
                      Enterprise AI &amp; IT Solutions
                    </h1>
                    <p className="text-white mb-35" data-animation="fadeInDown" data-delay=".6s" style={{ fontSize: "18px" }}>
                      Architecting, Developing &amp; Deploying Intelligent AI Systems and Enterprise IT Infrastructure. FTS Technologies partners with businesses and public sector organisations to build systems that work.
                    </p>
                    <ul
                      className="button"
                      data-animation="fadeInDown"
                      data-delay=".7s"
                    >
                      <li>
                        <Link href="/about" className="main-btn btn-red-dark">
                          about the company
                        </Link>
                      </li>
                      <li>
                        <Link href="/service" className="main-btn btn-white">
                          our services
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="single-slider banner-slide-2 bg_cover"
            style={{
              backgroundImage: "url(assets/images/hero/hero-slider-1_2.jpg)",
            }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="hero-content text-center">
                    <span
                      className="sub-title text-underline"
                      data-animation="fadeInDown"
                      data-delay=".3s"
                    >
                      NHS-Ready AI
                    </span>
                    <h2 data-animation="fadeInDown" data-delay=".5s">
                      Healthcare AI Solutions
                    </h2>
                    <p className="text-white mb-35" data-animation="fadeInDown" data-delay=".6s" style={{ fontSize: "18px" }}>
                      Purpose-built AI systems for clinical teams and NHS partners — from patient risk prediction and mental health triage to automated clinical documentation.
                    </p>
                    <ul
                      className="button"
                      data-animation="fadeInDown"
                      data-delay=".7s"
                    >
                      <li>
                        <Link href="/service" className="main-btn btn-red-dark">
                          explore healthcare ai
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="main-btn btn-white">
                          contact our experts
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="single-slider banner-slide-3 bg_cover"
            style={{
              backgroundImage: "url(assets/images/hero/hero-slider-1_3.jpg)",
            }}
          >
            <div className="container">
              <div className="row justify-content-end">
                <div className="col-lg-8">
                  <div className="hero-content text-right">
                    <span
                      className="sub-title text-underline"
                      data-animation="fadeInDown"
                      data-delay=".3s"
                    >
                      Tailored Business Platforms
                    </span>
                    <h2 data-animation="fadeInDown" data-delay=".5s">
                      Custom AI Platforms
                    </h2>
                    <p className="text-white mb-35" data-animation="fadeInDown" data-delay=".6s" style={{ fontSize: "18px" }}>
                      Design and build bespoke AI-powered platforms tailored precisely to your business needs — from SaaS products to internal enterprise systems.
                    </p>
                    <ul
                      className="button"
                      data-animation="fadeInDown"
                      data-delay=".7s"
                    >
                      <li>
                        <Link href="/service" className="main-btn btn-red-dark">
                          view platforms
                        </Link>
                      </li>
                      <li>
                        <Link href="/learning-hub" className="main-btn btn-white">
                          learning pathways
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>
      {/*====== End Hero Section ======*/}

      {/*====== Start Stats Section ======*/}
      <section className="features-area light-gray-bg pt-60 pb-30 border-bottom-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 mb-30">
              <div className="d-flex align-items-center">
                <div className="text ml-3">
                  <h3 style={{ color: "#fd4a18", fontWeight: "bold", fontSize: "36px", margin: 0 }}>2018</h3>
                  <p style={{ fontWeight: "600", fontSize: "14px", textTransform: "uppercase", color: "#1b1b20", margin: 0 }}>Founded in the UK</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 mb-30">
              <div className="d-flex align-items-center">
                <div className="text ml-3">
                  <h3 style={{ color: "#fd4a18", fontWeight: "bold", fontSize: "36px", margin: 0 }}>3</h3>
                  <p style={{ fontWeight: "600", fontSize: "14px", textTransform: "uppercase", color: "#1b1b20", margin: 0 }}>Core AI service lines</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 mb-30">
              <div className="d-flex align-items-center">
                <div className="text ml-3">
                  <h3 style={{ color: "#fd4a18", fontWeight: "bold", fontSize: "36px", margin: 0 }}>50+</h3>
                  <p style={{ fontWeight: "600", fontSize: "14px", textTransform: "uppercase", color: "#1b1b20", margin: 0 }}>Projects delivered</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 mb-30">
              <div className="d-flex align-items-center">
                <div className="text ml-3">
                  <h3 style={{ color: "#fd4a18", fontWeight: "bold", fontSize: "36px", margin: 0 }}>NHS-Ready</h3>
                  <p style={{ fontWeight: "600", fontSize: "14px", textTransform: "uppercase", color: "#1b1b20", margin: 0 }}>Healthcare AI focus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Stats Section ======*/}

      {/*====== Start What We Do Section ======*/}
      <section className="fancy-features pt-120 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-55 wow fadeInUp">
                <span className="sub-title red-dark text-underline">
                  what we do
                </span>
                <h2 className="text-uppercase">
                  Specialized AI &amp; Enterprise Technology
                </h2>
                <p className="mt-20">
                  FTS Technologies specialises in three core areas of AI and enterprise technology. We work with businesses across the UK and internationally to replace manual processes with intelligent systems, build healthcare AI that improves patient outcomes, and create custom AI platforms that give organisations a lasting competitive advantage.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="block-style-one animate-icon d-flex mb-40 wow fadeInUp" data-wow-delay=".2s">
                <div className="icon">
                  <i className="flaticon-project-management" style={{ color: "#fd4a18" }} />
                </div>
                <div className="text">
                  <h3 className="title text-underline">
                    <Link href="/service">AI Automation Solutions</Link>
                  </h3>
                  <p>
                    Streamline business operations with intelligent automation that eliminates manual effort and accelerates workflows at enterprise scale.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="block-style-one animate-icon d-flex mb-40 wow fadeInUp" data-wow-delay=".4s">
                <div className="icon">
                  <i className="flaticon-social-care" style={{ color: "#fd4a18" }} />
                </div>
                <div className="text">
                  <h3 className="title text-underline">
                    <Link href="/service">AI Healthcare Solutions</Link>
                  </h3>
                  <p>
                    Purpose-built AI systems for clinical teams and NHS partners — including patient risk prediction, clinical documentation, and mental health triage.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="block-style-one animate-icon d-flex mb-40 wow fadeInUp" data-wow-delay=".6s">
                <div className="icon">
                  <i className="flaticon-compliant" style={{ color: "#fd4a18" }} />
                </div>
                <div className="text">
                  <h3 className="title text-underline">
                    <Link href="/service">Custom AI Platforms</Link>
                  </h3>
                  <p>
                    Design and build bespoke AI-powered platforms tailored precisely to your business needs — from SaaS products to enterprise tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End What We Do Section ======*/}

      {/*====== Start Why Choose Us Section ======*/}
      <section className="fancy-about fancy-about-one pt-120 position-relative pb-80 light-gray-bg border-top-1 border-bottom-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="text-wrapper mb-50 wow fadeInLeft">
                <div className="section-title mb-20">
                  <span className="sub-title red-dark text-underline">
                    why choose us
                  </span>
                  <h2 className="text-transform">
                    UK-Based, Globally Capable Technology Partner
                  </h2>
                </div>
                <p className="mb-25">
                  We are a UK-registered technology company with deep expertise in AI, cloud infrastructure, and enterprise software. We understand UK regulatory requirements — including NHS data governance, GDPR, and the UK AI Act — and build systems that are compliant from day one.
                </p>
                <Link href="/about" className="main-btn">
                  about company facts
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="block-style-two animate-icon mb-40 wow fadeInUp" data-wow-delay=".2s">
                    <div className="icon">
                      <img src="assets/images/icon/icon-1.png" alt="" />
                    </div>
                    <div className="text">
                      <h3 className="text-underline">End-to-End Delivery</h3>
                      <p>
                        From initial discovery and architecture design through to development, deployment, and ongoing support.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="block-style-two animate-icon mb-40 wow fadeInUp" data-wow-delay=".4s">
                    <div className="icon">
                      <img src="assets/images/icon/icon-2.png" alt="" />
                    </div>
                    <div className="text">
                      <h3 className="text-underline">AI That Actually Works</h3>
                      <p>
                        We build practical AI systems, not proof-of-concepts. Tested, validated, and optimised for real production.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="block-style-two animate-icon mb-40 wow fadeInUp" data-wow-delay=".6s">
                    <div className="icon">
                      <img src="assets/images/icon/icon-3.png" alt="" />
                    </div>
                    <div className="text">
                      <h3 className="text-underline">Public Sector Expertise</h3>
                      <p>
                        Deep experience delivering AI for healthcare, where data sensitivity and governance require unique expertise.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="block-style-two animate-icon mb-40 wow fadeInUp" data-wow-delay=".8s">
                    <div className="icon">
                      <img src="assets/images/icon/icon-4.png" alt="" />
                    </div>
                    <div className="text">
                      <h3 className="text-underline">Sovereign by Design</h3>
                      <p>
                        Keeping data sovereign on UK infrastructure under UK law — essential for public healthcare compliance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Why Choose Us Section ======*/}

      {/*====== Start AI Mental Assistance Section ======*/}
      <section className="fancy-about pt-120 pb-80 position-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img mb-50 wow fadeInLeft">
                <img 
                  src="assets/images/about/digital_health_ai.png" 
                  alt="AI Mental Assistance" 
                  style={{ borderRadius: "10px", width: "100%", height: "auto" }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-wrapper mb-50 ml-lg-4 wow fadeInRight">
                <div className="section-title mb-25">
                  <span className="sub-title red-dark text-underline">
                    ai mental assistance
                  </span>
                  <h2>
                    Intelligent Mental Health Triage &amp; Clinical Decision Support
                  </h2>
                </div>
                <p className="mb-35">
                  FTS Technologies designs and deploys secure, sovereign AI systems purpose-built for mental health clinics and NHS psychological therapy pathways. Our tools assist clinicians in diagnosing, scoring, and triaging patient needs efficiently while ensuring complete data sovereignty.
                </p>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="block-style-two animate-icon mb-30">
                      <div className="icon" style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
                        <i className="flaticon-social-care" style={{ color: "#fd4a18", fontSize: "32px" }} />
                      </div>
                      <div className="text">
                        <h4 style={{ fontWeight: "700", fontSize: "18px", marginBottom: "8px" }} className="text-underline">
                          Pathway Triage &amp; Intake
                        </h4>
                        <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
                          Autonomous risk-scoring and pre-clinical questionnaires tailored for NHS IAPT pathways to streamline patient routing.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="block-style-two animate-icon mb-30">
                      <div className="icon" style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
                        <i className="flaticon-project-management" style={{ color: "#fd4a18", fontSize: "32px" }} />
                      </div>
                      <div className="text">
                        <h4 style={{ fontWeight: "700", fontSize: "18px", marginBottom: "8px" }} className="text-underline">
                          Clinical Documentation
                        </h4>
                        <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
                          Automated formatting of therapeutic notes and structured letters from audio consultations to reduce clinician fatigue.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="block-style-two animate-icon mb-30">
                      <div className="icon" style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
                        <i className="flaticon-compliant" style={{ color: "#fd4a18", fontSize: "32px" }} />
                      </div>
                      <div className="text">
                        <h4 style={{ fontWeight: "700", fontSize: "18px", marginBottom: "8px" }} className="text-underline">
                          Sovereign Governance
                        </h4>
                        <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
                          Data resides strictly on UK-sovereign infrastructure, compliant with NHS Data Security and Protection Toolkit requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="block-style-two animate-icon mb-30">
                      <div className="icon" style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
                        <i className="flaticon-solution-1" style={{ color: "#fd4a18", fontSize: "32px" }} />
                      </div>
                      <div className="text">
                        <h4 style={{ fontWeight: "700", fontSize: "18px", marginBottom: "8px" }} className="text-underline">
                          Outcome Tracking
                        </h4>
                        <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
                          Integrated metrics mapping recovery curves, treatment efficacy, and clinical resource performance in real time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End AI Mental Assistance Section ======*/}

      {/*====== Start Services Detailed Grid ======*/}
      <section className="service-area dark-black-bg pt-130 pb-130">
        <div className="container">
          <div className="row align-items-center service-style-one">
            <div className="col-lg-4">
              <div className="text-wrapper mb-40 wow fadeInLeft">
                <div className="section-title section-title-white mb-20">
                  <span className="sub-title red-dark text-underline">
                    Specialized Solutions
                  </span>
                  <h2 className="text-uppercase">
                    Targeted AI Capabilities
                  </h2>
                </div>
                <p>
                  Explore our targeted solution areas designed to address specific business needs, automate operations, and transform healthcare workflows.
                </p>
                <Link href="/service" className="main-btn">
                  view all services
                </Link>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="service-wrapper">
                <div className="row no-gutters">
                  <div className="col-md-6">
                    <div
                      className="block-style-three animate-icon border-right-1 wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <div className="icon">
                        <i className="flaticon-solution-1" style={{ color: "#fd4a18" }} />
                      </div>
                      <div className="text">
                        <h3 className="title">
                          <Link href="/service" className="text-underline">
                            AI Customer Support Agents
                          </Link>
                        </h3>
                        <p>
                          Intelligent AI agents for customer service, ticket handling, lead qualification, and 24/7 support automation.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="block-style-three animate-icon pr-lg-0 wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <div className="icon">
                        <i className="flaticon-social-care" style={{ color: "#fd4a18" }} />
                      </div>
                      <div className="text">
                        <h3 className="title">
                          <Link href="/service" className="text-underline">
                            Healthcare Decision Support
                          </Link>
                        </h3>
                        <p>
                          AI-powered clinical insights, patient risk assessment, healthcare analytics, and medical workflow optimisation.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="block-style-three animate-icon border-right-1 wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <div className="icon">
                        <i className="flaticon-interactive" style={{ color: "#fd4a18" }} />
                      </div>
                      <div className="text">
                        <h3 className="title">
                          <Link href="/service" className="text-underline">
                            Mental Health &amp; Conversational AI
                          </Link>
                        </h3>
                        <p>
                          Intelligent triage tools for mental health services, NHS IAPT pathways, conversational patient support, and clinical note analysis.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="block-style-three animate-icon pr-lg-0 wow fadeInUp"
                      data-wow-delay=".9s"
                    >
                      <div className="icon">
                        <i className="flaticon-project-management" style={{ color: "#fd4a18" }} />
                      </div>
                      <div className="text">
                        <h3 className="title">
                          <Link href="/service" className="text-underline">
                            Web Applications
                          </Link>
                        </h3>
                        <p>
                          End-to-end development of AI-powered platforms, internal business tools, enterprise applications, and SaaS products.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Services Detailed Grid ======*/}

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
                    Let's Connect
                  </span>
                  <h2 className="text-underline">
                    Ready to discuss your AI or IT project?
                  </h2>
                </div>
                <p>
                  Get in touch with the FTS Technologies team. We offer a free initial consultation for all new enquiries — whether you are exploring a specific use case or looking for a technical delivery partner.
                </p>
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
                          placeholder="Your Name"
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
                          placeholder="Write Message"
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

      {/*====== Start Newsletter Section ======*/}
      <Newsletter bg={1} btnColor={"black"} />
      {/*====== End Newsletter Section ======*/}
      
      <Footer1 />
    </Layout>
  );
};

export default Index;
