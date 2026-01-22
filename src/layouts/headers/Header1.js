import Link from "next/link";
import React, { Fragment, useState } from "react";
import SearchModal from "../../components/SearchModal";
import MobileHeader from "../MobileHeader";
import MainMenu from "./MainMenu";

const Header1 = () => {
  const [showSearchModal, setShowSearchModal] = useState(false);
  return (
    <Fragment>
      <SearchModal
        show={showSearchModal}
        setShow={() => setShowSearchModal(false)}
      />
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
                    <a href="tel:+012(345)6789">+44 7863 050300</a>
                  </span>
                  <ul className="social-link">
                    <li>
                      <span className="title">Follow Us</span>
                    </li>
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
        </div>
        {/* header Navigation */}
        <div className="header-navigation">
          <div className="container-fluid">
            <div className="primary-menu">
              <div className="site-branding">
                <Link href="/">
                  <a className="brand-logo">
                    <img src="assets/images/logo/logo-1.png" alt="Site Logo" />
                  </a>
                </Link>
              </div>
              <div className="nav-menu">
                {/* Navbar Close */}
                <div className="navbar-close">
                  <i className="far fa-times" />
                </div>
                {/* Nav Search */}
                <div className="nav-search">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Search Here"
                        name="email"
                        required=""
                      />
                      <button className="search-btn">
                        <i className="fas fa-search" />
                      </button>
                    </div>
                  </form>
                </div>
                {/* Main Menu */}
                <MainMenu
                  show={showSearchModal}
                  setShow={() => setShowSearchModal(true)}
                />
              </div>
              <div className="header-right-nav">
                <ul>
                  <li className="nav-button">
                    <a href="#" className="main-btn">
                      get free quote
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
