import Link from "next/link";
import React, { Fragment, useState } from "react";
import SearchModal from "../../components/SearchModal";
import MobileHeader from "../MobileHeader";
import { Blog, Cases, Home, Pages, Services } from "./Menus";

const Header2 = () => {
  const [showSearchModal, setShowSearchModal] = useState(false);
  return (
    <Fragment>
      <SearchModal
        show={showSearchModal}
        setShow={() => setShowSearchModal(false)}
      />
      <header className="theme-header">
        {/* header Navigation */}
        <div className="header-navigation navigation-blue-dark">
          <div className="container">
            <div className="primary-menu">
              <div className="site-branding">
                <Link href="/">
                  <a className="brand-logo">
                    <img src="assets/images/logo/logo-3.png" alt="Site Logo" />
                  </a>
                </Link>
              </div>
              <div className="nav-menu nav-ml-auto">
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
                <nav className="main-menu">
                  <ul>
                    <li className="menu-item has-children">
                      <a href="#">Home</a>
                      <ul className="sub-menu">
                        <Home />
                      </ul>
                    </li>
                    <li className="menu-item has-children">
                      <a href="#">Services</a>
                      <ul className="sub-menu">
                        <Services />
                      </ul>
                    </li>
                    <li className="menu-item has-children">
                      <a href="#">Cases</a>
                      <ul className="sub-menu">
                        <Cases />
                      </ul>
                    </li>
                    <li className="menu-item has-children">
                      <a href="#">Blog</a>
                      <ul className="sub-menu">
                        <Blog />
                      </ul>
                    </li>
                    <li className="menu-item has-children">
                      <a href="#">Pages</a>
                      <ul className="sub-menu">
                        <Pages />
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-right-nav">
                <ul>
                  <li className="search-item">
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#search-modal"
                      onClick={() => setShowSearchModal(true)}
                    >
                      <i className="fas fa-search" />
                    </a>
                  </li>
                  <li className="cart-item">
                    <a href="#">
                      <i className="fas fa-shopping-basket" />
                    </a>
                  </li>
                  <li className="nav-button">
                    <a href="#" className="main-btn btn-gradient-blue">
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

      <MobileHeader logo={4} className="btn-gradient-blue" />
    </Fragment>
  );
};
export default Header2;
