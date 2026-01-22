import Link from "next/link";
import { Fragment, useState } from "react";
import SearchModal from "../../components/SearchModal";
import MobileHeader from "../MobileHeader";
import MainMenu from "./MainMenu";

const Header = () => {
  const [showSearchModal, setShowSearchModal] = useState(false);
  return (
    <Fragment>
      <SearchModal
        show={showSearchModal}
        setShow={() => setShowSearchModal(false)}
      />
      <header className="theme-header d-xl-block d-none">
        {/* header top */}
        <div className="header-top-bar header-top-bar-three">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8">
                <div className="top-left">
                  <ul>
                    <li>
                      <span>
                        <i className="far fa-envelope" />
                        <a href="tel:+0123456789">+012 (345) 67 89</a>
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
                        <i className="far fa-map-marker-alt" />
                        55 Main Street, 2nd Block, USA
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="top-right d-flex justify-content-lg-end justify-content-md-center">
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
        <div className="header-navigation navigation-blue-light">
          <div className="container-fluid">
            <div className="primary-menu">
              <div className="site-branding">
                <Link href="/">
                  <a className="brand-logo">
                    <img src="assets/images/logo/logo-5.png" alt="Site Logo" />
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
                  <li className="lang-dropdown">
                    <select className="wide">
                      <option value={1}>English</option>
                      <option value={2}>Russian</option>
                    </select>
                  </li>
                  <li className="nav-button">
                    <Link href="/contact">
                      <a className="main-btn btn-blue-light">get free quote</a>
                    </Link>
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
      <MobileHeader />
    </Fragment>
  );
};
export default Header;
