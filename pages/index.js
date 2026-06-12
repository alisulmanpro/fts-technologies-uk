import Link from "next/link";
import Newsletter from "../src/components/Newsletter";
import Footer1 from "../src/layouts/footers/Footer1";
import Header1 from "../src/layouts/headers/Header1";
import Layout from "../src/layouts/Layout";


const Index = () => {
  return (
    <Layout noHeader noFooter>
      <Header1 />
      
      {/*====== Start Hero Section ======*/}
      <section className="hero-area">
        <div
          className="single-slider banner-slide-1 bg_cover"
          style={{
            backgroundImage: "url(assets/images/hero/hero-slider-1_1.jpg)",
            display: "flex",
            alignItems: "center",
            minHeight: "600px"
          }}
        >
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-lg-7">
                <div className="hero-content text-start" >
                  <h1 data-animation="fadeInDown" data-delay=".5s">
                    Transforming Businesses with Intelligent <span style={{color: "#fd4a18"}}>AI Solutions</span>
                  </h1>
                  <p className="text-black mb-35" data-animation="fadeInDown" data-delay=".6s" style={{ fontSize: "18px", maxWidth: "720px", margin: "0 auto 35px", color: "#000" }}>
                    At FTS Technology, we transform businesses with intelligent AI solutions that drive innovation and efficiency. From automation to custom AI applications, we help organisations boost productivity, reduce costs, and stay competitive in the digital age.
                  </p>
                  <ul
                    className="button"
                    data-animation="fadeInDown"
                    data-delay=".7s"
                    style={{ display: "flex",justifyContent: "start", alignItems: "center", gap: "1rem" }}
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

      {/*====== Start How We Work Section ======*/}
      <section className="how-we-work-section pt-120 pb-80 light-gray-bg border-top-1 border-bottom-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <span className="sub-title red-dark text-underline">
                  our process
                </span>
                <h2 className="text-uppercase">
                  How We Work
                </h2>
                <p className="mt-20">
                  A proven, structured approach to delivering AI and enterprise technology — from initial idea through to production deployment and ongoing support.
                </p>
              </div>
            </div>
          </div>
          <div className="fts-process-grid">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "We learn your business, data, users, and goals through structured workshops and stakeholder interviews.",
                icon: "flaticon-solution-1"
              },
              {
                step: "02",
                title: "Design & Architecture",
                desc: "We map out the technical architecture, data flows, and user experience before writing a single line of code.",
                icon: "flaticon-project-management"
              },
              {
                step: "03",
                title: "Build & Test",
                desc: "Agile sprints with regular demos, rigorous testing, and continuous integration to deliver production-grade systems.",
                icon: "flaticon-interactive"
              },
              {
                step: "04",
                title: "Deploy & Support",
                desc: "Seamless go-live with monitoring, documentation, training, and ongoing technical support built in from day one.",
                icon: "flaticon-compliant"
              }
            ].map((item, index) => (
              <div className="fts-process-card wow fadeInUp" data-wow-delay={`${0.2 * (index + 1)}s`} key={index}>
                <div className="fts-process-card__step">{item.step}</div>
                <div className="fts-process-card__icon">
                  <i className={item.icon} />
                </div>
                <h3 className="fts-process-card__title">{item.title}</h3>
                <p className="fts-process-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*====== End How We Work Section ======*/}

      {/*====== Start AI Mental Assistance Section ======*/}
      <section className="fancy-about pt-120 pb-80 position-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img mb-50 wow fadeInLeft">
                <img 
                  src="assets/images/about/digital_health_ai.png" 
                  alt="AI Clinical & Practice Assistants" 
                  style={{ borderRadius: "10px", width: "100%", height: "auto" }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-wrapper mb-50 ml-lg-4 wow fadeInRight">
                <div className="section-title mb-25">
                  <span className="sub-title red-dark text-underline">
                    clinical &amp; practice operations
                  </span>
                  <h2>
                    AI Clinical &amp; Practice Assistants
                  </h2>
                </div>
                <p className="mb-35">
                  FTS Technologies designs and deploys secure, sovereign healthcare AI systems designed to streamline clinic workflows, automate paperwork, and enhance patient engagement. Our NHS-ready assistants support both clinical and operational teams.
                </p>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="block-style-two animate-icon mb-30">
                      <div className="icon" style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
                        <i className="flaticon-project-management" style={{ color: "#fd4a18", fontSize: "32px" }} />
                      </div>
                      <div className="text">
                        <h4 style={{ fontWeight: "700", fontSize: "18px", marginBottom: "8px" }} className="text-underline">
                          AI Mental Documentation
                        </h4>
                        <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
                          Auto-generates structured clinical notes, GP letters, and therapy transcripts directly from audio consultations, reducing session administration.
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
                          AI Appointment Management
                        </h4>
                        <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
                          Intelligent scheduling agents that automate bookings, calendar adjustments, and patient follow-up reminders to minimize empty slots.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="block-style-two animate-icon mb-30">
                      <div className="icon" style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
                        <i className="flaticon-interactive" style={{ color: "#fd4a18", fontSize: "32px" }} />
                      </div>
                      <div className="text">
                        <h4 style={{ fontWeight: "700", fontSize: "18px", marginBottom: "8px" }} className="text-underline">
                          AI Patient Support Chatbot
                        </h4>
                        <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
                          A secure 24/7 chatbot that answers practice questions, completes pre-visit questionnaires, and guides patients to self-care resources.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="block-style-two animate-icon mb-30">
                      <div className="icon" style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
                        <i className="flaticon-social-care" style={{ color: "#fd4a18", fontSize: "32px" }} />
                      </div>
                      <div className="text">
                        <h4 style={{ fontWeight: "700", fontSize: "18px", marginBottom: "8px" }} className="text-underline">
                          AI Medical Receptionist
                        </h4>
                        <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
                          Voice and text AI receptionist that handles incoming inquiries, books appointments, and routes clinical requests safely.
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
