import Link from "next/link";
import Layout from "../src/layouts/Layout";

const E404 = () => {
  return (
    <Layout>
      <section className="hero-area">
        <div
          className="breadcrumbs-wrapper bg_cover"
          style={{
            backgroundImage: "url(assets/images/bg/breadcrumbs-bg-1.jpg)",
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="page-title-text text-center">
                  <h1 className="title">404 Page</h1>
                  <ul className="breadcrumbs-link">
                    <li>
                      <Link href="/">
                        <a>Home</a>
                      </Link>
                    </li>
                    <li className="active">404</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Header Section ======*/}
      {/*====== Start Error Section ======*/}
      <section className="error-page-section pt-130 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="error-content text-center">
                <img
                  src="assets/images/404.png"
                  className="mb-50 wow fadeInUp"
                  alt=""
                />
                <h2 className=" wow fadeInUp">OPPS! This Page is Not Found</h2>
                <p>
                  Quis autem vel eum iure reprehenderit qui in ea voluptate
                  velit esse quame molestiae consequatur veillum dolorem eum
                  fugiate
                </p>
                <Link href="/">
                  <a className="main-btn btn-blue-light wow fadeInUp">
                    go to home
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default E404;
