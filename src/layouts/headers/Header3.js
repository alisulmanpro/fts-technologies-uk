import Link from "next/link";
import { Fragment, useState } from "react";
import SearchModal from "../../components/SearchModal";
import MobileHeader from "../MobileHeader";
import MainMenu from "./MainMenu";

const Header3 = () => {
  const [showSearchModal, setShowSearchModal] = useState(false);
  return (
    <Fragment>
      <SearchModal
        show={showSearchModal}
        setShow={() => setShowSearchModal(false)}
      />
      <header className="theme-header transparent-header d-xl-block d-none">
        {/* Header Top */}
        <div className="header-top-bar header-top-bar-two">
          <div className="custom-container">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-8">
                <div className="top-left">
                  <ul>
                    <li>
                      <span>
                        <i className="far fa-map-marker-alt" />
                        55 Main Street, USA
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="far fa-envelope" />
                        <a href="mailto:hotline@gmail.com">hotline@gmail.com</a>
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="far fa-phone" />
                        <a href="tel:+012(345)6789">+012 (345) 67 89</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-5 col-lg-4">
                <div className="top-right d-flex align-items-center">
                  <div className="lang-dropdown">
                    <select className="wide">
                      <option value={1}>English</option>
                      <option value={2}>Russian</option>
                    </select>
                  </div>
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
              </div>
            </div>
          </div>
        </div>
        {/* header Navigation */}
        <div className="header-navigation navigation-white">
          <div className="custom-container">
            <div className="primary-menu">
              <div className="site-branding">
                <Link href="/">
                  <a className="brand-logo">
                    <img src="assets/images/logo/logo-6.png" alt="Site Logo" />
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
                  <li className="cart-item">
                    <a href="#">
                      <i className="fas fa-shopping-basket" />
                    </a>
                  </li>
                  <li className="nav-button">
                    <a href="#" className="main-btn btn-blue-light">
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

      <MobileHeader
        logo={6}
        headerClass="header-navigation navigation-white transparent-header"
        className={"blue-light-bg"}
      />
    </Fragment>
  );
};
export default Header3;
