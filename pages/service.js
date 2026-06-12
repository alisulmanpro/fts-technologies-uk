import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Newsletter from "../src/components/Newsletter";
import Footer1 from "../src/layouts/footers/Footer1";

const Service1 = () => {
  return (
    <Layout noFooter>
      <PageBanner pageName={"Services"} />

      {/*====== Start Core Services Section ======*/}
      <section className="services-details-area pt-130 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-55 wow fadeInUp">
                <span className="sub-title red-dark text-underline">our core services</span>
                <h2 className="text-uppercase">Intelligent AI &amp; Enterprise IT Services</h2>
                <p className="mt-20">
                  FTS Technologies delivers across three specialised AI and IT service lines. Each practice combines deep technical capability with domain expertise, ensuring that what we build works in your specific context — not just in theory.
                </p>
              </div>
            </div>
          </div>

          <div className="fts-services-grid">
            {[
              {
                icon: "flaticon-project-management",
                title: "AI Automation Solutions",
                desc: "Streamline business operations with intelligent automation that eliminates manual effort and accelerates workflows."
              },
              {
                icon: "flaticon-social-care",
                title: "AI Healthcare Solutions",
                desc: "Purpose-built AI systems for clinical teams and NHS partners — from risk prediction to clinical documentation."
              },
              {
                icon: "flaticon-compliant",
                title: "Custom AI Platforms",
                desc: "Bespoke AI-powered platforms tailored to your business needs — from SaaS products to enterprise tools."
              },
              {
                icon: "flaticon-solution-1",
                title: "AI Customer Support Agents",
                desc: "Intelligent AI agents for customer service, ticket handling, lead qualification, and 24/7 support automation."
              },
              {
                icon: "flaticon-interactive",
                title: "Healthcare Chatbots",
                desc: "Conversational AI for patient engagement, clinical note analysis, and medical document summarisation."
              },
              {
                icon: "flaticon-project-management",
                title: "Web Applications",
                desc: "End-to-end development of AI-powered platforms, internal business tools, and SaaS products."
              },
              {
                icon: "flaticon-social-care",
                title: "Mental Health AI",
                desc: "Intelligent triage tools for mental health services, NHS IAPT pathways, and conversational patient support."
              },
              {
                icon: "flaticon-solution-1",
                title: "Cloud Infrastructure",
                desc: "Scalable Azure, AWS, and Google Cloud architecture, migrations, and cost-optimisation strategies."
              },
              {
                icon: "flaticon-compliant",
                title: "Cyber Security",
                desc: "Advanced security architecture, vulnerability assessments, penetration testing, and compliance alignments."
              }
            ].map((service, index) => (
              <div className="fts-service-card wow fadeInUp" data-wow-delay={`${0.1 * (index + 1)}s`} key={index}>
                <div className="fts-service-card__icon">
                  <i className={service.icon} />
                </div>
                <h3 className="fts-service-card__title">{service.title}</h3>
                <p className="fts-service-card__desc">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*====== End Core Services Section ======*/}

      {/*====== Start Specialized Solution Areas ======*/}
      <section className="features-area light-gray-bg pt-120 pb-90 border-top-1 border-bottom-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-55 wow fadeInUp">
                <span className="sub-title red-dark text-underline">solution areas</span>
                <h2 className="text-uppercase">Specialized Solution Areas</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="block-style-eight d-flex animate-icon mb-40 wow fadeInUp" data-wow-delay=".1s">
                <div className="icon">
                  <i className="flaticon-solution-1" style={{ color: "#fd4a18" }} />
                </div>
                <div className="text">
                  <h3 className="text-underline" style={{ fontSize: "18px", fontWeight: "700" }}>AI Mental Documentation Assistance</h3>
                  <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
                    Intelligent AI agents to automate mental health documentation, note-taking, and secure record keeping.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="block-style-eight d-flex animate-icon mb-40 wow fadeInUp" data-wow-delay=".2s">
                <div className="icon">
                  <i className="flaticon-social-care" style={{ color: "#fd4a18" }} />
                </div>
                <div className="text">
                  <h3 className="text-underline" style={{ fontSize: "18px", fontWeight: "700" }}>AI Appointment Management</h3>
                  <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
                    Smart scheduling and booking systems to handle patient appointments, reminders, and calendar optimisations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="block-style-eight d-flex animate-icon mb-40 wow fadeInUp" data-wow-delay=".3s">
                <div className="icon">
                  <i className="flaticon-interactive" style={{ color: "#fd4a18" }} />
                </div>
                <div className="text">
                  <h3 className="text-underline" style={{ fontSize: "18px", fontWeight: "700" }}>AI Patient Support Chatbot</h3>
                  <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
                    Conversational AI designed to answer patient queries, provide triage guidance, and offer 24/7 engagement.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="block-style-eight d-flex animate-icon mb-40 wow fadeInUp" data-wow-delay=".4s">
                <div className="icon">
                  <i className="flaticon-project-management" style={{ color: "#fd4a18" }} />
                </div>
                <div className="text">
                  <h3 className="text-underline" style={{ fontSize: "18px", fontWeight: "700" }}>AI Medical Receptionist</h3>
                  <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
                    Virtual receptionists to intelligently route calls, manage front-desk inquiries, and streamline clinic operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Specialized Solution Areas ======*/}

      {/*====== Start Additional Enterprise Services Section ======*/}
      <section className="service-area pt-120 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-55 wow fadeInUp">
                <span className="sub-title sub-title-bg red-dark-bg">Additional Enterprise Services</span>
                <h2 className="text-underline">Enterprise IT Core Capabilities</h2>
                <p className="mt-20">
                  FTS Technologies continues to offer the enterprise IT services that underpin effective AI deployment, cloud migration, and secure operations.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="block-style-eighteen animate-icon d-flex align-items-center mb-30 wow fadeInUp" data-wow-delay=".1s">
                <div className="icon"><img src="assets/images/icon/icon-5.png" alt="" /></div>
                <div className="text">
                  <h3 className="title"><a className="text-underline">ServiceNow Core Services</a></h3>
                  <p>Streamline your enterprise workflows with expert ServiceNow implementation, ITOM, and ITSM solutions.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="block-style-eighteen animate-icon d-flex align-items-center mb-30 wow fadeInUp" data-wow-delay=".2s">
                <div className="icon"><img src="assets/images/icon/icon-6.png" alt="" /></div>
                <div className="text">
                  <h3 className="title"><a className="text-underline">Cloud Infrastructure</a></h3>
                  <p>Scalable Azure, AWS, and Google Cloud architecture, migrations, and cost-optimisation strategies.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="block-style-eighteen animate-icon d-flex align-items-center mb-30 wow fadeInUp" data-wow-delay=".3s">
                <div className="icon"><img src="assets/images/icon/icon-7.png" alt="" /></div>
                <div className="text">
                  <h3 className="title"><a className="text-underline">CMS Development</a></h3>
                  <p>Custom WordPress, Headless CMS, and Adobe Experience Manager solutions tailored to your enterprise scale.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="block-style-eighteen animate-icon d-flex align-items-center mb-30 wow fadeInUp" data-wow-delay=".4s">
                <div className="icon"><img src="assets/images/icon/icon-8.png" alt="" /></div>
                <div className="text">
                  <h3 className="title"><a className="text-underline">Cyber Security</a></h3>
                  <p>Advanced security architecture, vulnerability assessments, penetration testing, and compliance alignments.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="block-style-eighteen animate-icon d-flex align-items-center mb-30 wow fadeInUp" data-wow-delay=".5s">
                <div className="icon"><img src="assets/images/icon/icon-1.png" alt="" /></div>
                <div className="text">
                  <h3 className="title"><a className="text-underline">IT Consulting</a></h3>
                  <p>Technology strategy, digital transformation roadmaps, procurement advisory, and system integrations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Additional Enterprise Services Section ======*/}

      {/*====== Start Newsletter Section ======*/}
      <Newsletter bg={1} btnColor={"black"} />
      {/*====== End Newsletter Section ======*/}
      <Footer1 />
    </Layout>
  );
};

export default Service1;
