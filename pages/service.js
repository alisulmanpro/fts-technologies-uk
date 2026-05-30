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

          <div className="row">
            {/* Service 01 */}
            <div className="col-lg-12 mb-70">
              <div className="service-details-wrapper p-5 bg-white shadow-sm border-left-red wow fadeInUp" style={{ borderLeft: "5px solid #fd4a18", borderRadius: "0 8px 8px 0" }}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="content">
                      <span style={{ color: "#fd4a18", fontWeight: "700", textTransform: "uppercase", fontSize: "14px" }}>Service 01</span>
                      <h3 className="mb-25" style={{ fontSize: "28px", fontWeight: "700" }}>AI Automation Solutions</h3>
                      <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
                        Streamline business operations with intelligent automation, AI agents, workflow optimisation, document processing, and process automation solutions that improve efficiency and reduce manual effort across your organisation.
                      </p>
                      <div className="mt-30">
                        <h5 className="mb-15" style={{ fontWeight: "700" }}>Technologies We Use:</h5>
                        <p style={{ fontStyle: "italic", fontSize: "14px" }}>
                          Python, LangChain, OpenAI API, Anthropic Claude API, Azure OpenAI, UiPath, Power Automate, Apache Airflow, ServiceNow, REST APIs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="features-list pl-lg-4 mt-4 mt-lg-0">
                      <h4 className="mb-20" style={{ fontSize: "20px", fontWeight: "700" }}>What's Included:</h4>
                      <ul className="list-style-dot check-list">
                        <li className="mb-10"><strong>Intelligent AI agents:</strong> Autonomous systems that execute multi-step business tasks without human intervention.</li>
                        <li className="mb-10"><strong>Workflow automation:</strong> End-to-end orchestration of complex business processes.</li>
                        <li className="mb-10"><strong>Document processing:</strong> AI-powered extraction, classification, and routing of unstructured documents.</li>
                        <li className="mb-10"><strong>Robotic process automation (RPA):</strong> Software robots that handle repetitive, rule-based tasks.</li>
                        <li className="mb-10"><strong>Process optimisation:</strong> Redesign workflows to identify and eliminate inefficiencies.</li>
                        <li className="mb-10"><strong>LLM integration:</strong> Embedding large language model capability into existing enterprise systems.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 02 */}
            <div className="col-lg-12 mb-70">
              <div className="service-details-wrapper p-5 bg-white shadow-sm border-left-red wow fadeInUp" style={{ borderLeft: "5px solid #fd4a18", borderRadius: "0 8px 8px 0" }} data-wow-delay=".2s">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="content">
                      <span style={{ color: "#fd4a18", fontWeight: "700", textTransform: "uppercase", fontSize: "14px" }}>Service 02</span>
                      <h3 className="mb-25" style={{ fontSize: "28px", fontWeight: "700" }}>AI Healthcare Solutions</h3>
                      <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
                        Develop healthcare-focused AI systems including clinical decision support, healthcare analytics, medical NLP, mental health AI, and intelligent healthcare applications — built specifically for NHS environments and UK regulatory requirements.
                      </p>
                      <div className="mt-30 p-4 bg-light" style={{ borderRadius: "5px", borderLeft: "3px solid #1B1B20" }}>
                        <h5 className="mb-15" style={{ fontWeight: "700" }}>Our Healthcare AI Commitment:</h5>
                        <p style={{ fontSize: "13px", lineHeight: "1.6", margin: 0 }}>
                          All healthcare AI systems we build are designed to run on UK-sovereign infrastructure, with full NHS data governance compliance, MHRA-aligned regulatory pathways, and mandatory bias and equity testing. Patient data never leaves UK servers.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="features-list pl-lg-4 mt-4 mt-lg-0">
                      <h4 className="mb-20" style={{ fontSize: "20px", fontWeight: "700" }}>What's Included:</h4>
                      <ul className="list-style-dot check-list">
                        <li className="mb-10"><strong>Clinical decision support:</strong> AI tools that assist clinicians with diagnosis and risk stratification.</li>
                        <li className="mb-10"><strong>Patient health risk prediction:</strong> Early warning models to identify at-risk patients.</li>
                        <li className="mb-10"><strong>Healthcare analytics:</strong> Population health dashboards and outcome tracking.</li>
                        <li className="mb-10"><strong>Medical NLP:</strong> Natural language processing for clinical notes and summaries.</li>
                        <li className="mb-10"><strong>Mental health AI:</strong> Triage and risk scoring tools for mental health pathways.</li>
                        <li className="mb-10"><strong>AI clinical documentation:</strong> Automated consultation letters and records from audio.</li>
                        <li className="mb-10"><strong>Intelligent healthcare apps:</strong> Bespoke NHS-integrated applications.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 03 */}
            <div className="col-lg-12 mb-70">
              <div className="service-details-wrapper p-5 bg-white shadow-sm border-left-red wow fadeInUp" style={{ borderLeft: "5px solid #fd4a18", borderRadius: "0 8px 8px 0" }} data-wow-delay=".3s">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="content">
                      <span style={{ color: "#fd4a18", fontWeight: "700", textTransform: "uppercase", fontSize: "14px" }}>Service 03</span>
                      <h3 className="mb-25" style={{ fontSize: "28px", fontWeight: "700" }}>Custom AI Platforms</h3>
                      <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
                        Design and build custom AI-powered web applications, SaaS platforms, chatbots, AI assistants, data intelligence tools, and enterprise AI solutions tailored to business needs — from first architecture sketch to live production deployment.
                      </p>
                      <div className="mt-30 p-4 bg-light" style={{ borderRadius: "5px", borderLeft: "3px solid #1B1B20" }}>
                        <h5 className="mb-15" style={{ fontWeight: "700" }}>Our Delivery Approach:</h5>
                        <p style={{ fontSize: "13px", lineHeight: "1.6", margin: 0 }}>
                          Every custom platform project begins with a structured discovery phase — understanding your data, users, and desired outcomes. We then follow an agile delivery methodology with regular checkpoints, demos, and iteration cycles.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="features-list pl-lg-4 mt-4 mt-lg-0">
                      <h4 className="mb-20" style={{ fontSize: "20px", fontWeight: "700" }}>What's Included:</h4>
                      <ul className="list-style-dot check-list">
                        <li className="mb-10"><strong>Custom AI-powered web apps:</strong> Full-stack applications with AI capability built-in.</li>
                        <li className="mb-10"><strong>SaaS platform development:</strong> Multi-tenant AI platforms ready for commercial launch.</li>
                        <li className="mb-10"><strong>Chatbots and AI assistants:</strong> Conversational interfaces for customer service.</li>
                        <li className="mb-10"><strong>Data intelligence tools:</strong> AI dashboards, predictive analytics, and BI.</li>
                        <li className="mb-10"><strong>Enterprise AI solutions:</strong> Large-scale AI integrated with CRM, ERP, and cloud.</li>
                        <li className="mb-10"><strong>AI API and integration layer:</strong> Connecting AI capability via secure APIs.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                  <h3 className="text-underline" style={{ fontSize: "18px", fontWeight: "700" }}>AI Customer Support Agents</h3>
                  <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
                    Intelligent AI agents for customer service, ticket handling, lead qualification, and 24/7 support automation.
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
                  <h3 className="text-underline" style={{ fontSize: "18px", fontWeight: "700" }}>Healthcare Decision Support</h3>
                  <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
                    AI-powered clinical insights, patient risk assessment, healthcare analytics, and medical workflow optimisation.
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
                  <h3 className="text-underline" style={{ fontSize: "18px", fontWeight: "700" }}>Healthcare Chatbots</h3>
                  <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
                    Conversational AI for patient engagement, clinical note analysis, and medical document summarisation.
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
                  <h3 className="text-underline" style={{ fontSize: "18px", fontWeight: "700" }}>Web Applications</h3>
                  <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
                    End-to-end development of AI-powered platforms, internal business tools, enterprise applications, and SaaS products.
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
