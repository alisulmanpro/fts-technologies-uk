import Link from "next/link";
import { Fragment } from "react";

export const Home = () => (
  <Fragment>
    <li>
      <Link href="/">It Company</Link>
    </li>
    <li>
      <Link href="/it-agency">It Agency</Link>
    </li>
    <li>
      <Link href="/it-company">Software Company</Link>
    </li>
    <li>
      <Link href="/help-desk">Help Desk</Link>
    </li>
    <li>
      <Link href="/home-development">Home Development</Link>
    </li>
    <li>
      <Link href="/data-science">Data Science</Link>
    </li>
    <li>
      <Link href="/dark-e-wallet">Dark E-Wallet</Link>
    </li>
  </Fragment>
);
export const About = () => (
  <Fragment>
    <li>
      <Link href="/about">About Us</Link>
    </li>
    <li>
      <Link href="/career">Career</Link>
    </li>
  </Fragment>
);
export const Services = () => (
  <Fragment>
    <li>
      <Link href="/service-1">Service O1</Link>
    </li>
    <li>
      <Link href="/service-2">Service 02</Link>
    </li>
    <li>
      <Link href="/service-details">Service Details</Link>
    </li>
  </Fragment>
);
export const Cases = () => (
  <Fragment>
    <li>
      <Link href="/project-1">Project O1</Link>
    </li>
    <li>
      <Link href="/project-2">Project 02</Link>
    </li>
    <li>
      <Link href="/project-3">Project 03</Link>
    </li>
    <li>
      <Link href="/project-details">Project Details</Link>
    </li>
  </Fragment>
);
export const Blog = () => (
  <Fragment>
    <li>
      <Link href="/blog-standard">Blog Standard</Link>
    </li>
    <li>
      <Link href="/blog-details">Blog Details</Link>
    </li>
  </Fragment>
);
export const Pages = () => (
  <Fragment>
    <li>
      <Link href="/team">Our Team</Link>
    </li>
    <li>
      <Link href="/team-details">Team Details</Link>
    </li>
    <li>
      <Link href="/products">Products</Link>
    </li>
    <li>
      <Link href="/product-details">Product Details</Link>
    </li>
    <li>
      <Link href="/pricing">Pricing</Link>
    </li>
    <li>
      <Link href="/faq">FAQ</Link>
    </li>
    <li>
      <Link href="/404">404</Link>
    </li>
  </Fragment>
);
