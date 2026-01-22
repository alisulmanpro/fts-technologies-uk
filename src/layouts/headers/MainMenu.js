import Link from "next/link";
import React from "react";
import { About, Blog, Cases, Home, Pages, Services } from "./Menus";

const MainMenu = ({ search, setShow }) => {
  return (
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
        {!search && (
          <li className="search-item">
            <a
              href="#"
              data-toggle="modal"
              data-target="#search-modal"
              onClick={() => setShow()}
            >
              <i className="fas fa-search" />
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default MainMenu;
