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
      className={`${
        headerClass ? headerClass : "header-navigation navigation-blue-light"
      } breakpoint-on d-block d-xl-none`}
    >
      <div className="container-fluid">
        <div className="primary-menu">
          <div className="site-branding">
            <Link href="/" className="brand-logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img
                src={`assets/images/logo/logo-${logo ? logo : 1}.png`}
                alt="FTS Technology Logo"
                style={{ height: '35px', width: 'auto' }}
              />
              <span style={{ fontSize: '20px', fontWeight: '700', color: '#1B1B20', letterSpacing: '0.5px', fontFamily: '"Rajdhani", sans-serif' }}>
                FTS <span style={{ color: '#fd4a18' }}>Technology</span>
              </span>
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

            {/* Main Menu */}
            <nav className="main-menu">
              <ul>
                <li className="menu-item has-children">
                  <a href="#">Home</a>
                  <ul className="sub-menu" style={activeLi("home")}>
                    <Home />
                  </ul>
                  <span
                    className="dd-trigger"
                    onClick={() => activeMenuSet("home")}
                  >
                    <i className="far fa-angle-down" />
                  </span>
                </li>
                <li className="menu-item has-children">
                  <a href="#">About</a>
                  <ul className="sub-menu" style={activeLi("About")}>
                    <About />
                  </ul>
                  <span
                    className="dd-trigger"
                    onClick={() => activeMenuSet("About")}
                  >
                    <i className="far fa-angle-down" />
                  </span>
                </li>
                <li className="menu-item has-children">
                  <a href="#">Cases</a>
                  <ul className="sub-menu" style={activeLi("Cases")}>
                    <Cases />
                  </ul>
                  <span
                    className="dd-trigger"
                    onClick={() => activeMenuSet("Cases")}
                  >
                    <i className="far fa-angle-down" />
                  </span>
                </li>
                <li className="menu-item has-children">
                  <a href="#">Blog</a>
                  <ul className="sub-menu" style={activeLi("Blog")}>
                    <Blog />
                  </ul>
                  <span
                    className="dd-trigger"
                    onClick={() => activeMenuSet("Blog")}
                  >
                    <i className="far fa-angle-down" />
                  </span>
                </li>
                <li className="menu-item has-children">
                  <a href="#">Pages</a>
                  <ul className="sub-menu" style={activeLi("Pages")}>
                    <Pages />
                  </ul>
                  <span
                    className="dd-trigger"
                    onClick={() => activeMenuSet("Pages")}
                  >
                    <i className="far fa-angle-down" />
                  </span>
                </li>
                <li className="menu-item">
                  <Link href="/contact">Contact</Link>
                </li>

              </ul>
            </nav>
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
