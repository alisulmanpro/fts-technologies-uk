import Link from "next/link";
import { Fragment, useState } from "react";
import SearchModal from "../../components/SearchModal";
import MobileHeader from "../MobileHeader";
import MainMenu from "./MainMenu";
const Header4 = () => {
  const [showSearchModal, setShowSearchModal] = useState(false);
  return (
    <Fragment>
      <SearchModal
        show={showSearchModal}
        setShow={() => setShowSearchModal(false)}
      />
      <header className="theme-header d-xl-block d-none">
        {/* header Navigation */}
        <div className="header-navigation navigation-blue-dark">
          <div className="container-fluid">
            <div className="primary-menu">
              <div className="site-branding">
                <Link href="/">
                  <a className="brand-logo">
                    <img src="assets/images/logo/logo-7.png" alt="Site Logo" />
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
              <div className="header-right-nav header-right-nav-one">
                <ul>
                  <li className="lang-dropdown">
                    <select className="wide">
                      <option value={1}>English</option>
                      <option value={2}>Russian</option>
                    </select>
                  </li>
                  <li className="login">
                    <a href="#">
                      <span>Log in</span>
                    </a>
                  </li>
                  <li className="nav-button">
                    <a href="#" className="main-btn btn-red-dark">
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

      <MobileHeader logo={7} className="btn-blue-dark" />
    </Fragment>
  );
};
export default Header4;
