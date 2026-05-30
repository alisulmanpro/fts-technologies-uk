import Link from "next/link";
import Layout from "../src/layouts/Layout";

const E404 = () => {
  return (
    <Layout noHeader noFooter>
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
                <Link href="/" className="main-btn btn-red-dark wow fadeInUp">
                  go to home
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
