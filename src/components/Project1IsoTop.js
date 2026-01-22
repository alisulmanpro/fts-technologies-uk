import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
const Project1IsoTop = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".project-row", {
        itemSelector: ".project-column",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".project-column",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 300);
    return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");

  return (
    <section className="portfolio-area pt-120 pb-70" id="filter-project">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="portfolio-filter-button text-center mb-40 wow fadeInUp">
              <ul className="filter-btn mb-30">
                <li
                  data-filter="*"
                  className={`c-pointer ${activeBtn("*")}`}
                  onClick={handleFilterKeyChange("*")}
                >
                  View All
                </li>
                <li
                  data-filter=".cat-1"
                  className={`c-pointer ${activeBtn("cat-1")}`}
                  onClick={handleFilterKeyChange("cat-1")}
                >
                  Software
                </li>
                <li
                  className={`c-pointer ${activeBtn("cat-2")}`}
                  onClick={handleFilterKeyChange("cat-2")}
                >
                  Design
                </li>
                <li
                  className={`c-pointer ${activeBtn("cat-3")}`}
                  onClick={handleFilterKeyChange("cat-3")}
                >
                  Cyber Security
                </li>
                <li
                  className={`c-pointer ${activeBtn("cat-4")}`}
                  onClick={handleFilterKeyChange("cat-4")}
                >
                  Engineering
                </li>
                <li
                  className={`c-pointer ${activeBtn("cat-5")}`}
                  onClick={handleFilterKeyChange("cat-5")}
                >
                  Consulting
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row project-row">
          <div className="col-lg-4 col-md-6 col-sm-12 project-column cat-1 cat-5">
            <div
              className="portfolio-block-five mb-50 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="portfolio-img">
                <img
                  src="assets/images/projects/project-17.jpg"
                  alt="project Image"
                />
              </div>
              <div className="portfolio-content">
                <h3 className="title">
                  <Link href="/project-details">
                    <a className="text-underline">Web Development</a>
                  </Link>
                </h3>
                <Link href="/project-details">
                  <a className="cat-btn">IT Services</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 project-column cat-2 cat-4">
            <div
              className="portfolio-block-five mb-50 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="portfolio-img">
                <img
                  src="assets/images/projects/project-18.jpg"
                  alt="project Image"
                />
              </div>
              <div className="portfolio-content">
                <h3 className="title">
                  <Link href="/project-details">
                    <a className="text-underline">IT Solutions Consultations</a>
                  </Link>
                </h3>
                <Link href="/project-details">
                  <a className="cat-btn">IT Consulting Services</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 project-column cat-3 cat-1">
            <div
              className="portfolio-block-five mb-50 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="portfolio-img">
                <img
                  src="assets/images/projects/project-19.jpg"
                  alt="project Image"
                />
              </div>
              <div className="portfolio-content">
                <h3 className="title">
                  <Link href="/project-details">
                    <a className="text-underline">Product Engineering</a>
                  </Link>
                </h3>
                <Link href="/project-details">
                  <a className="cat-btn">IT Services</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 project-column cat-4 cat-3">
            <div
              className="portfolio-block-five mb-50 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="portfolio-img">
                <img
                  src="assets/images/projects/project-20.jpg"
                  alt="project Image"
                />
              </div>
              <div className="portfolio-content">
                <h3 className="title">
                  <Link href="/project-details">
                    <a className="text-underline">IT Business Consulting</a>
                  </Link>
                </h3>
                <Link href="/project-details">
                  <a className="cat-btn">Consulting Services</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 project-column cat-5 cat-2">
            <div
              className="portfolio-block-five mb-50 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="portfolio-img">
                <img
                  src="assets/images/projects/project-21.jpg"
                  alt="project Image"
                />
              </div>
              <div className="portfolio-content">
                <h3 className="title">
                  <Link href="/project-details">
                    <a className="text-underline">Cyber Security Development</a>
                  </Link>
                </h3>
                <Link href="/project-details">
                  <a className="cat-btn">IT Consulting Services</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 project-column cat-3 cat-1">
            <div
              className="portfolio-block-five mb-50 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="portfolio-img">
                <img
                  src="assets/images/projects/project-22.jpg"
                  alt="project Image"
                />
              </div>
              <div className="portfolio-content">
                <h3 className="title">
                  <Link href="/project-details">
                    <a className="text-underline">Product Engineering</a>
                  </Link>
                </h3>
                <Link href="/project-details">
                  <a className="cat-btn">IT Services</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 project-column cat-4 cat-2">
            <div
              className="portfolio-block-five mb-50 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="portfolio-img">
                <img
                  src="assets/images/projects/project-23.jpg"
                  alt="project Image"
                />
              </div>
              <div className="portfolio-content">
                <h3 className="title">
                  <Link href="/project-details">
                    <a className="text-underline">Cyber Security Development</a>
                  </Link>
                </h3>
                <Link href="/project-details">
                  <a className="cat-btn">IT Consulting Services</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 project-column cat-5 cat-3">
            <div
              className="portfolio-block-five mb-50 wow fadeInUp"
              data-wow-delay=".9s"
            >
              <div className="portfolio-img">
                <img
                  src="assets/images/projects/project-24.jpg"
                  alt="project Image"
                />
              </div>
              <div className="portfolio-content">
                <h3 className="title">
                  <Link href="/project-details">
                    <a className="text-underline">Software Development</a>
                  </Link>
                </h3>
                <Link href="/project-details">
                  <a className="cat-btn">IT Consulting Services</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 project-column cat-2 cat-1">
            <div
              className="portfolio-block-five mb-50 wow fadeInUp"
              data-wow-delay="1s"
            >
              <div className="portfolio-img">
                <img
                  src="assets/images/projects/project-25.jpg"
                  alt="project Image"
                />
              </div>
              <div className="portfolio-content">
                <h3 className="title">
                  <Link href="/project-details">
                    <a className="text-underline">Cyber Security Development</a>
                  </Link>
                </h3>
                <Link href="/project-details">
                  <a className="cat-btn">IT Consulting Services</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Project1IsoTop;
