import Link from "next/link";

const Footer1 = ({ className }) => {
  return (
    <footer
      className={`${
        className ? className : "footer-area footer-default black-bg footer-map"
      }`}
    >
      <div className="container">
        <div className="footer-widget pt-100 pb-35">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="widget about-widget mb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="logo mb-35">
                  <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                    <span style={{ fontSize: '24px', fontWeight: '700', color: '#ffffff', letterSpacing: '0.5px', fontFamily: '"Rajdhani", sans-serif' }}>
                      FTS <span style={{ color: '#fd4a18' }}>Technologies</span>
                    </span>
                  </Link>
                </div>
                <div className="about-content">
                  <ul>
                    <li>
                      <i className="far fa-envelope" />
                      <span>
                        <a href="mailto:info@ftstechnologies.co.uk">info@ftstechnologies.co.uk</a>
                      </span>
                    </li>
                    <li>
                      <i className="far fa-map-marker-alt" />
                      <span>UK-Based, serving clients globally</span>
                    </li>
                    <li>
                      <i className="far fa-phone" />
                      <span>
                        <a href="tel:+447863050300">+44 7863 050300</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="widget footer-nav-widget mb-40 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <h4 className="widget-title text-underline">Core Services</h4>
                <ul className="footer-nav list-style-dot">
                  <li>
                    <Link href="/service">AI Automation Solutions</Link>
                  </li>
                  <li>
                    <Link href="/service">AI Healthcare Solutions</Link>
                  </li>
                  <li>
                    <Link href="/service">Custom AI Platforms</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="widget footer-nav-widget mb-40 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <h4 className="widget-title text-underline">Additional Services</h4>
                <ul className="footer-nav list-style-dot">
                  <li>
                    <Link href="/service">ServiceNow Implementation</Link>
                  </li>
                  <li>
                    <Link href="/service">Cloud Infrastructure</Link>
                  </li>
                  <li>
                    <Link href="/service">CMS Development</Link>
                  </li>
                  <li>
                    <Link href="/service">Cyber Security</Link>
                  </li>
                  <li>
                    <Link href="/service">IT Consulting</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="widget footer-nav-widget mb-40 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <h4 className="widget-title text-underline">Quick Links</h4>
                <ul className="footer-nav list-style-dot">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/service">Services</Link>
                  </li>
                  <li>
                    <Link href="/learning-hub">Learning Hub</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="row">
            <div className="col-md-8">
              <div className="text">
                <p>
                  Copyright © {new Date().getFullYear()} FTS Technologies. All Rights
                  Reserved
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <ul className="social-link float-md-right float-sm-none">
                <li>
                  <a href="https://www.linkedin.com/company/ftstechnologies/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer1;
