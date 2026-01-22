import Link from "next/link";
const Footer1 = ({ bg, className, logo }) => {
  return (
    <footer
      className={`${
        className ? className : "footer-area footer-default black-bg footer-map"
      }`}
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
                        src={`assets/images/logo/logo-${logo ? logo : 2}.png`}
                        alt="Theme Logo"
                      />
                    </a>
                  </Link>
                </div>
                <div className="about-content">
                  <h4 className="text-underline">
                    Don&apos;t Hesited to Conatct With Our Experites
                  </h4>
                  <ul>
                    <li>
                      <i className="far fa-envelope" />
                      <span>
                        <a href="mailto:info@ftstechnologies.co.uk">info@ftstechnologies.co.uk</a>
                      </span>
                    </li>
                    <li>
                      <i className="far fa-phone" />
                      <span>
                        <a href="tel:+44 7863 050300">+44 7863 050300</a>
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
                className="widget footer-nav-widget mb-40 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <h4 className="widget-title text-underline">IT Company</h4>
                <ul className="footer-nav list-style-dot">
                  <li>
                    <a href="#">About Company</a>
                  </li>
                  <li>
                    <a href="http://twtnews.club/" target="_blank">Latest News &amp; Blog</a>
                  </li>
                  <li>
                    <a href="#">Our Achievment</a>
                  </li>
                  <li>
                    <a href="#">Company Journey</a>
                  </li>
                  <li>
                    <a href="#">Meet Out Teams</a>
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
            <div className="col-md-8">
              <div className="text">
                <p>
                  Copyright © {new Date().getFullYear()} FTS Technologies. All Right
                  Reserved
                </p>
              </div>
            </div>
            <div className="col-md-4">
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
export default Footer1;
