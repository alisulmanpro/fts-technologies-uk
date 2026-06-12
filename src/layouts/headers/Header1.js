import Link from "next/link";
import React, { Fragment } from "react";
import MobileHeader from "../MobileHeader";
import MainMenu from "./MainMenu";

const Header1 = () => {
  return (
    <Fragment>
      <header className="theme-header d-xl-block d-none">
        {/* header top */}
        <div className="header-top-bar header-top-bar-one">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="top-left">
                  <ul>
                    <li>
                      <span>
                        <i className="far fa-envelope" />
                        <a href="mailto:info@ftstechnologies.co.uk">info@ftstechnologies.co.uk</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="top-right d-flex align-items-center">
                  <span className="phone">
                    <i className="far fa-phone" />
                    <a href="tel:+447863050300">+44 7863 050300</a>
                  </span>
                  <ul className="social-link">
                    <li>
                      <span className="title">Follow Us</span>
                    </li>
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
        </div>
        {/* header Navigation */}
        <div className="header-navigation">
          <div className="container-fluid">
            <div className="primary-menu">
              <div className="site-branding">
                <Link href="/" className="brand-logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <img src="assets/images/logo/logo-1.png" alt="FTS Technology Logo" style={{ height: '40px', width: 'auto' }} />
                  <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
                    <span style={{ fontSize: '24px', fontWeight: '700', color: '#1B1B20', letterSpacing: '0.5px', fontFamily: '"Rajdhani", sans-serif', width: "20rem" }}>
                      FTS <span style={{ color: '#fd4a18' }}>Technology</span>
                    </span>
                    <span style={{ fontSize: '11px', color: '#666', fontWeight: '400', letterSpacing: '0.5px', fontFamily: '"Rajdhani", sans-serif' }}>
                      Intelligent Systems. Real Results.
                    </span>
                  </div>
                </Link>
              </div>
              <div className="nav-menu">
                {/* Navbar Close */}
                <div className="navbar-close">
                  <i className="far fa-times" />
                </div>
                {/* Main Menu */}
                <MainMenu />
              </div>
              <div className="header-right-nav">
                <ul>
                  <li className="nav-button">
                    <a
                      href="https://wa.me/447863050300"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="main-btn"
                    >
                      Get in Touch
                    </a>
                  </li>
                  <li className="navbar-toggle-btn">
                    <div className="navbar-toggler">
                      <span />
                      <span />
                      <span />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileHeader logo={1} />
    </Fragment>
  );
};
export default Header1;
