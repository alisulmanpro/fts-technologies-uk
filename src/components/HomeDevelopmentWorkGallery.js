import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef } from "react";
const HomeDevelopmentWorkGallery = () => {
  // Isotope
  const isotope = useRef();
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".masonry-row", {
        itemSelector: ".portfolio-column",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".portfolio-column",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    return () => isotope.current.destroy();
  }, []);

  return (
    <div className="row masonry-row">
      <div className="col-lg-6 portfolio-column">
        <div
          className="portfolio-block-four bg-one text-center wow fadeInUp"
          data-wow-delay=".2s"
        >
          <div className="portfolio-img">
            <img
              src="assets/images/projects/project-13.jpg"
              alt="portfolio image"
            />
            <div className="portfolio-hover">
              <div className="hover-content">
                <a
                  href="assets/images/projects/project-13.jpg"
                  className="img-popup"
                >
                  <i className="far fa-plus" />
                </a>
              </div>
            </div>
          </div>
          <div className="portfolio-content">
            <h3 className="title">
              <Link href="/project-details">
                <a>IT Company Web Template</a>
              </Link>
            </h3>
            <span className="category">Template Design</span>
          </div>
        </div>
      </div>
      <div className="col-lg-6 portfolio-column">
        <div
          className="portfolio-block-four bg-two text-center wow fadeInUp"
          data-wow-delay=".3s"
        >
          <div className="portfolio-img">
            <img
              src="assets/images/projects/project-14.jpg"
              alt="portfolio image"
            />
            <div className="portfolio-hover">
              <div className="hover-content">
                <a
                  href="assets/images/projects/project-13.jpg"
                  className="img-popup"
                >
                  <i className="far fa-plus" />
                </a>
              </div>
            </div>
          </div>
          <div className="portfolio-content">
            <h3 className="title">
              <Link href="/project-details">Software Company Template</Link>
            </h3>
            <span className="category">Template Design</span>
          </div>
        </div>
      </div>
      <div className="col-lg-6 portfolio-column">
        <div
          className="portfolio-block-four bg-three text-center wow fadeInUp"
          data-wow-delay=".4s"
        >
          <div className="portfolio-img">
            <img
              src="assets/images/projects/project-15.jpg"
              alt="portfolio image"
            />
            <div className="portfolio-hover">
              <div className="hover-content">
                <a
                  href="assets/images/projects/project-13.jpg"
                  className="img-popup"
                >
                  <i className="far fa-plus" />
                </a>
              </div>
            </div>
          </div>
          <div className="portfolio-content">
            <h3 className="title">
              <Link href="/project-details">App Landing Web Template</Link>
            </h3>
            <span className="category">Template Design</span>
          </div>
        </div>
      </div>
      <div className="col-lg-6 portfolio-column">
        <div
          className="portfolio-block-four bg-four text-center wow fadeInUp"
          data-wow-delay=".5s"
        >
          <div className="portfolio-img">
            <img
              src="assets/images/projects/project-16.jpg"
              alt="portfolio image"
            />
            <div className="portfolio-hover">
              <div className="hover-content">
                <a
                  href="assets/images/projects/project-13.jpg"
                  className="img-popup"
                >
                  <i className="far fa-plus" />
                </a>
              </div>
            </div>
          </div>
          <div className="portfolio-content">
            <h3 className="title">
              <Link href="/project-details">IT Agency Web Template</Link>
            </h3>
            <span className="category">Template Design</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeDevelopmentWorkGallery;
