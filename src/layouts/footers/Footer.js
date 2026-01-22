import Link from "next/link";
const Footer = () => {
  return (
    <footer
      className="footer-area footer-style-two bg_cover"
      style={{ backgroundImage: "url(assets/images/bg/footer-bg-2.jpg)" }}
    >
      <div className="container">
        <div className="footer-widget pt-165 pb-35">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="widget about-widget mb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="logo mb-35">
                  <Link href="/">
                    <a>
                      <img
                        src="assets/images/logo/logo-6.png"
                        alt="Theme Logo"
                      />
                    </a>
                  </Link>
                </div>
                <div className="about-content">
                  <h4 className=" text-underline">
                    Don’t Hesited to Conatct With Our Experites
                  </h4>
                  <ul>
                    <li>
                      <i className="far fa-envelope" />
                      <span>
                        <a href="mailto:hotline@gmail.com">hotline@gmail.com</a>
                      </span>
                    </li>
                    <li>
                      <i className="far fa-map-marker-alt" />
                      <span>55 Main Street, 2nd Block, USA</span>
                    </li>
                    <li>
                      <i className="far fa-phone" />
                      <span>
                        <a href="tel:+012(345)67899">+012 (345) 67 899</a>
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
                <h4 className="widget-title text-underline">Best Services</h4>
                <ul className="footer-nav list-style-dot">
                  <li>
                    <a href="#">Web &amp; IT Consulting</a>
                  </li>
                  <li>
                    <a href="#">Cyber Security Solutions</a>
                  </li>
                  <li>
                    <a href="#">Software Development</a>
                  </li>
                  <li>
                    <a href="#">Product Enginering</a>
                  </li>
                  <li>
                    <a href="#">Project Management</a>
                  </li>
                  <li>
                    <a href="#">Security Solutions</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="widget recent-post-widget mb-40 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <h4 className="widget-title text-underline">Recent News</h4>
                <ul className="post-widget-list">
                  <li className="post-item">
                    <img
                      src="assets/images/widget/footer-thumb-1.jpg"
                      alt="Post Image"
                    />
                    <div className="post-title-date">
                      <h3 className="title">
                        <Link href="/blog-details">
                          <a className="text-underline">
                            Ethical Scraping Of Dyna Website With Node
                          </a>
                        </Link>
                      </h3>
                      <span className="posted-on">
                        <a href="#">25 nov {new Date().getFullYear()}</a>
                      </span>
                    </div>
                  </li>
                  <li className="post-item">
                    <img
                      src="assets/images/widget/footer-thumb-2.jpg"
                      alt="Post Image"
                    />
                    <div className="post-title-date">
                      <h3 className="title">
                        <Link href="/blog-details">
                          <a className="text-underline">
                            Ethical Scraping Of Dyna Website With Node
                          </a>
                        </Link>
                      </h3>
                      <span className="posted-on">
                        <a href="#">25 nov {new Date().getFullYear()}</a>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="widget footer-nav-widget mb-40 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <h4 className="widget-title text-underline">Our Support</h4>
                <ul className="footer-nav list-style-dot">
                  <li>
                    <a href="#">Premium Support</a>
                  </li>
                  <li>
                    <a href="#">Need a Career ?</a>
                  </li>
                  <li>
                    <a href="#">Help &amp; FAQ</a>
                  </li>
                  <li>
                    <a href="#">Pricing and plans</a>
                  </li>
                  <li>
                    <a href="#">Cookies Policy</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="row">
            <div className="col-md-6">
              <div className="text">
                <p>
                  Copyright © {new Date().getFullYear()} MunTech. All Right
                  Reserved
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <ul className="social-link float-md-right float-sm-none">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube" />
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
export default Footer;
