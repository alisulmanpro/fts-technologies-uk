import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import Newsletter from "../src/components/Newsletter";
import Footer1 from "../src/layouts/footers/Footer1";

const LearningHub = () => {
  return (
    <Layout noFooter>
      <PageBanner pageName={"Learning Hub"} />

      {/*====== Start Intro Section ======*/}
      <section className="about-area pt-130 pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content-box mb-50 wow fadeInLeft">
                <div className="section-title mb-25">
                  <span className="sub-title red-dark text-underline">
                    educational programs
                  </span>
                  <h2>Build Practical AI Capability</h2>
                </div>
                <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
                  The FTS Technologies Learning Hub provides structured learning pathways for professionals and teams looking to build practical AI capability. All resources are developed by our own engineers and aligned with real-world deployment requirements — not theoretical exercises.
                </p>
                <div className="mt-30 p-4" style={{ backgroundColor: "rgba(253, 74, 24, 0.05)", borderRadius: "8px", borderLeft: "4px solid #fd4a18" }}>
                  <h5 style={{ fontWeight: "700", marginBottom: "5px" }}>Sovereign Partnership</h5>
                  <p style={{ fontSize: "14px", margin: 0 }}>
                    Our Learning Hub is delivered in partnership with <strong>Innovate AI UK</strong> (<a href="https://innovate-ai.co.uk" target="_blank" rel="noopener noreferrer" style={{ color: "#fd4a18", fontWeight: "600" }}>innovate-ai.co.uk</a>).
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-img-box mb-50 wow fadeInRight">
                <img src="assets/images/features/history-img-1.jpg" alt="Learning Hub" style={{ borderRadius: "8px" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Intro Section ======*/}

      {/*====== Start Learning Pathways Section ======*/}
      <section className="features-area light-gray-bg pt-120 pb-90 border-top-1 border-bottom-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-55 wow fadeInUp">
                <span className="sub-title red-dark text-underline">learning pathways</span>
                <h2 className="text-uppercase">Structured Curriculums</h2>
              </div>
            </div>
          </div>
          
          <div className="row">
            {/* Pathway 01 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-40">
              <div className="block-style-two p-5 bg-white h-100 shadow-sm wow fadeInUp" data-wow-delay=".2s" style={{ borderRadius: "8px" }}>
                <span style={{ color: "#fd4a18", fontWeight: "700", textTransform: "uppercase", fontSize: "12px", display: "block", marginBottom: "10px" }}>Pathway 01</span>
                <h4 style={{ fontWeight: "700", marginBottom: "15px" }} className="text-underline">Advanced Web Dev</h4>
                <p className="mb-20" style={{ fontSize: "14px" }}>
                  Build scalable, high-performance web applications using advanced Python-based development techniques — the foundation for deploying AI systems in production.
                </p>
                <h5 style={{ fontSize: "14px", fontWeight: "700", marginBottom: "10px" }}>Core Competencies:</h5>
                <ul className="check-list" style={{ fontSize: "13px", listStyleType: "none" }}>
                  <li className="mb-5">Python FastAPI &amp; Django</li>
                  <li className="mb-5">RESTful APIs &amp; Microservices</li>
                  <li className="mb-5">AWS and Azure Deployment</li>
                  <li className="mb-5">Scalable Architecture Design</li>
                  <li className="mb-5">Production Security Practices</li>
                </ul>
              </div>
            </div>

            {/* Pathway 02 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-40">
              <div className="block-style-two p-5 bg-white h-100 shadow-sm wow fadeInUp" data-wow-delay=".3s" style={{ borderRadius: "8px" }}>
                <span style={{ color: "#fd4a18", fontWeight: "700", textTransform: "uppercase", fontSize: "12px", display: "block", marginBottom: "10px" }}>Pathway 02</span>
                <h4 style={{ fontWeight: "700", marginBottom: "15px" }} className="text-underline">ML Engineering</h4>
                <p className="mb-20" style={{ fontSize: "14px" }}>
                  Learn to design, train, evaluate, and deploy intelligent ML models using data-driven techniques — from fundamentals to production-grade systems.
                </p>
                <h5 style={{ fontSize: "14px", fontWeight: "700", marginBottom: "10px" }}>Core Competencies:</h5>
                <ul className="check-list" style={{ fontSize: "13px", listStyleType: "none" }}>
                  <li className="mb-5">Supervised/Unsupervised Learning</li>
                  <li className="mb-5">TensorFlow &amp; PyTorch</li>
                  <li className="mb-5">Model Evaluation &amp; Bias Testing</li>
                  <li className="mb-5">Data Pipelines &amp; Engineering</li>
                  <li className="mb-5">Production ML APIs Deployment</li>
                </ul>
              </div>
            </div>

            {/* Pathway 03 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-40">
              <div className="block-style-two p-5 bg-white h-100 shadow-sm wow fadeInUp" data-wow-delay=".4s" style={{ borderRadius: "8px" }}>
                <span style={{ color: "#fd4a18", fontWeight: "700", textTransform: "uppercase", fontSize: "12px", display: "block", marginBottom: "10px" }}>Pathway 03</span>
                <h4 style={{ fontWeight: "700", marginBottom: "15px" }} className="text-underline">AI in DevOps</h4>
                <p className="mb-20" style={{ fontSize: "14px" }}>
                  Apply AI to the DevOps lifecycle — using intelligent systems to predict infrastructure failures, automate deployments, and accelerate software delivery.
                </p>
                <h5 style={{ fontSize: "14px", fontWeight: "700", marginBottom: "10px" }}>Core Competencies:</h5>
                <ul className="check-list" style={{ fontSize: "13px", listStyleType: "none" }}>
                  <li className="mb-5">AI Anomaly &amp; Failure Prediction</li>
                  <li className="mb-5">CI/CD with AI Quality Gates</li>
                  <li className="mb-5">Predictive Scaling &amp; Cloud Cost</li>
                  <li className="mb-5">AIOps Systems Implementation</li>
                  <li className="mb-5">AI-Assisted Testing Automation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Learning Pathways Section ======*/}

      {/*====== Start Who Is It For Section ======*/}
      <section className="service-area pt-120 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-55 wow fadeInUp">
                <span className="sub-title sub-title-bg red-dark-bg">targeted audience</span>
                <h2 className="text-underline">Who Is the Learning Hub For?</h2>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mb-40">
              <div className="block-style-eighteen animate-icon d-flex align-items-start wow fadeInUp" data-wow-delay=".1s">
                <div className="icon"><img src="assets/images/icon/icon-1.png" alt="" /></div>
                <div className="text pl-3">
                  <h3 className="title"><a className="text-underline">Technical Professionals</a></h3>
                  <p>Engineers, developers, and data scientists who want to deepen their AI and cloud skills with structured, practical learning — not generic online courses.</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 col-md-6 col-sm-12 mb-40">
              <div className="block-style-eighteen animate-icon d-flex align-items-start wow fadeInUp" data-wow-delay=".2s">
                <div className="icon"><img src="assets/images/icon/icon-40.png" alt="" /></div>
                <div className="text pl-3">
                  <h3 className="title"><a className="text-underline">NHS &amp; Healthcare IT Teams</a></h3>
                  <p>Clinical informaticians and NHS technology teams preparing to evaluate, procure, or govern AI systems within their organisations.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 mb-40">
              <div className="block-style-eighteen animate-icon d-flex align-items-start wow fadeInUp" data-wow-delay=".3s">
                <div className="icon"><img src="assets/images/icon/icon-8.png" alt="" /></div>
                <div className="text pl-3">
                  <h3 className="title"><a className="text-underline">Upskilling Teams</a></h3>
                  <p>Companies that want to build internal AI capability rather than remaining permanently dependent on external consultants — with training tailored to your tech stack.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 mb-40">
              <div className="block-style-eighteen animate-icon d-flex align-items-start wow fadeInUp" data-wow-delay=".4s">
                <div className="icon"><img src="assets/images/icon/icon-5.png" alt="" /></div>
                <div className="text pl-3">
                  <h3 className="title"><a className="text-underline">AI Startup Founders</a></h3>
                  <p>Early-stage founders building AI products who need to quickly close skills gaps in their technical team — with access to FTS engineers as mentors.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Who Is It For Section ======*/}

      {/*====== Start Newsletter Section ======*/}
      <Newsletter bg={1} btnColor={"black"} />
      {/*====== End Newsletter Section ======*/}
      <Footer1 />
    </Layout>
  );
};

export default LearningHub;
