import Link from "next/link";
import { useState } from "react";

const MobileHeader = ({ headerClass }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className={`${
        headerClass ? headerClass : "header-navigation navigation-blue-light"
      } breakpoint-on d-block d-xl-none`}
    >
      <div className="container-fluid">
        <div className="primary-menu">
          <div className="site-branding">
            <Link href="/" className="brand-logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '20px', fontWeight: '700', color: '#1B1B20', letterSpacing: '0.5px', fontFamily: '"Rajdhani", sans-serif' }}>
                FTS <span style={{ color: '#fd4a18' }}>Technologies</span>
              </span>
            </Link>
          </div>
          <div className={`nav-menu ${toggle ? "menu-on" : ""}`}>
            {/* Navbar Close */}
            <div
              className="navbar-close"
              onClick={() => setToggle(false)}
            >
              <i className="far fa-times" />
            </div>
            {/* Main Menu */}
            <nav className="main-menu">
              <ul>
                <li className="menu-item">
                  <Link href="/" onClick={() => setToggle(false)}>Home</Link>
                </li>
                <li className="menu-item">
                  <Link href="/about" onClick={() => setToggle(false)}>About</Link>
                </li>
                <li className="menu-item">
                  <Link href="/service" onClick={() => setToggle(false)}>Services</Link>
                </li>
                <li className="menu-item">
                  <Link href="/learning-hub" onClick={() => setToggle(false)}>Learning Hub</Link>
                </li>
                <li className="menu-item">
                  <Link href="/contact" onClick={() => setToggle(false)}>Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-right-nav">
            <ul>
              <li className="nav-button">
                <Link href="/contact" className="main-btn btn-blue-light">
                  get free quote
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
