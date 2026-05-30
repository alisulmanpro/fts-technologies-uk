const Footer4 = () => {
  return (
    <footer className="footer-area footer-style-three">
      <div className="container">
        <div className="footer-widget pb-25">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="widget footer-nav-widget mb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <h4 className="widget-title">Product</h4>
                <ul className="footer-nav list-style-arrow">
                  <li>
                    <a href="#">Pricing &amp; Tour</a>
                  </li>
                  <li>
                    <a href="#">Benefits &amp; Features</a>
                  </li>
                  <li>
                    <a href="#">Partner Program</a>
                  </li>
                  <li>
                    <a href="#">Free Trial 14 Days</a>
                  </li>
                  <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="widget footer-nav-widget mb-40 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <h4 className="widget-title">Solutions</h4>
                <ul className="footer-nav list-style-arrow">
                  <li>
                    <a href="#">Web Help Desk</a>
                  </li>
                  <li>
                    <a href="#">Help Desk App</a>
                  </li>
                  <li>
                    <a href="#">Online Help Desk</a>
                  </li>
                  <li>
                    <a href="#">SaaS Help Desk</a>
                  </li>
                  <li>
                    <a href="#">Cloud Help Desk</a>
                  </li>
                  <li>
                    <a href="#">Help Desk Software</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="widget footer-nav-widget mb-40 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <h4 className="widget-title">Resources</h4>
                <ul className="footer-nav list-style-arrow">
                  <li>
                    <a href="#">Muntech Help Center</a>
                  </li>
                  <li>
                    <a href="#">HelpDesk Handbook</a>
                  </li>
                  <li>
                    <a href="#">API &amp; Developers</a>
                  </li>
                  <li>
                    <a href="#">Learning Space Blog</a>
                  </li>
                  <li>
                    <a href="#">Customer Support</a>
                  </li>
                  <li>
                    <a href="#">Business Free Course</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="widget about-widget mb-40 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <h4 className="widget-title">Contact Us</h4>
                <div className="about-content">
                  <h4 className="text-underline">
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
          </div>
        </div>
        <div className="footer-copyright">
          <div className="row">
            <div className="col-md-6">
              <ul className="social-link">
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
            <div className="col-md-6 float-md-right text-md-right">
              <div className="text">
                <p>
                  Copyright © {new Date().getFullYear()} <span>MunTech.</span>{" "}
                  All Right Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer4;
