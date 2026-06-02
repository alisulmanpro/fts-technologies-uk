import niceSelect from "niceselectwithsabuj";
import React, { Fragment, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import BackToTop from "../components/BackToTop";
import ImageView from "../components/ImageView";
import Newsletter from "../components/Newsletter";
import VideoPopup from "../components/VideoPopup";
import { animation, stickyNav } from "../utils";
import Footer from "./footers/Footer";
import Header from "./headers/Header";
import Header1 from "./headers/Header1";

const metaData = {
  "/": {
    title: "Enterprise AI & IT Solutions | FTS Technologies",
    description: "FTS Technologies architects, develops, and deploys intelligent AI systems and enterprise IT infrastructure in the UK and globally. NHS-ready healthcare AI."
  },
  "/about": {
    title: "About FTS Technologies | UK-Based AI & IT Partner",
    description: "Learn about FTS Technologies, our mission, values, and story since 2018. UK-based and globally capable enterprise AI development partner."
  },
  "/contact": {
    title: "Contact FTS Technologies | Get a Free AI & IT Consultation",
    description: "Ready to discuss your AI or IT project? Contact the FTS Technologies team. Free 30-minute discovery call for NHS, public sector, and business partners."
  },
  "/learning-hub": {
    title: "Practical AI Learning Hub | FTS Technologies",
    description: "Build practical AI and machine learning capability with FTS Technologies Learning Hub. Advanced Web Dev, ML Engineering, and DevOps pathways."
  },
  "/service": {
    title: "Intelligent AI & Enterprise IT Services | FTS Technologies",
    description: "Explore our core services: AI automation solutions, NHS-ready AI healthcare systems, custom AI platforms, and enterprise IT capabilities."
  }
};

const Layout = ({ children, noHeader, noFooter, title, description }) => {
  const router = useRouter();

  useEffect(() => {
    niceSelect();
    animation();

    window.addEventListener("scroll", stickyNav);
    if (window.location.href.includes("dark-e-wallet")) {
      document.querySelector("body").classList.add("dark-e-wallet");
    } else {
      document.querySelector("body").classList.remove("dark-e-wallet");
    }
  }, []);

  const path = router.pathname;
  const currentMeta = metaData[path] || {
    title: "Enterprise AI & IT Solutions | FTS Technologies",
    description: "Architecting, Developing & Deploying Intelligent AI Systems and Enterprise IT Infrastructure."
  };

  const pageTitle = title || currentMeta.title;
  const pageDescription = description || currentMeta.description;
  const canonicalUrl = `https://ftstechnologies.co.uk${path === "/" ? "" : path}`;

  return (
    <Fragment>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        
        {/* Canonical Link */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="https://ftstechnologies.co.uk/assets/images/logo/logo-1.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={canonicalUrl} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta property="twitter:image" content="https://ftstechnologies.co.uk/assets/images/logo/logo-1.png" />
      </Head>
      <ImageView />
      <VideoPopup />
      {!noHeader && <Header1 />}
      {children}
      {!noFooter && (
        <Fragment>
          <Newsletter />
          <Footer />
        </Fragment>
      )}
      <BackToTop />
    </Fragment>
  );
};
export default Layout;
