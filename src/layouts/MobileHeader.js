import Link from "next/link";
import { useState } from "react";
import { About, Blog, Cases, Home, Pages } from "./headers/Menus";

const MobileHeader = ({ logo, className, headerClass }) => {
  const [toggle, setToggle] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
    setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <div
      className={`${headerClass ? headerClass : "header-navigation navigation-blue-light"
        } breakpoint-on d-block d-xl-none`}
    >
      <div className="container-fluid">
        <div className="primary-menu">
          <div className="site-branding">
            <Link href="/">
              <a className="brand-logo">
                <img
                  src={`assets/images/logo/logo-${logo ? logo : 5}.png`}
                  alt="Site Logo"
                />
              </a>
            </Link>
          </div>
          <div className={`nav-menu ${toggle ? "menu-on" : ""}`}>
            {/* Navbar Close */}
            <div
              className={`navbar-close ${className ? className : ""}`}
              onClick={() => setToggle(false)}
            >
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
                <li className="menu-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="menu-item">
                  <Link href="/about">About</Link>
                </li>
                <li className="menu-item">
                  <Link href="/service">Services</Link>
                </li>
                <li className="menu-item">
                  <a href="/learning-hub">Learning Hub</a>
                </li>
                <li className="menu-item">
                  <Link href="/contact">
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-right-nav">
            <ul>
              <li className="nav-button">
                <Link href="/contact">
                  <a className="main-btn btn-blue-light">get free quote</a>
                </Link>
              </li>
              <li className="navbar-toggle-btn">
                <div
                  className={`navbar-toggler ${toggle ? "active" : ""}`}
                  onClick={() => setToggle(!toggle)}
                >
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
  );
};
export default MobileHeader;
