import Link from "next/link";
const PageBanner = ({ pageTitle, pageName }) => {
  return (
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
                <h1 className="title">{pageTitle ? pageTitle : pageName}</h1>
                <ul className="breadcrumbs-link">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="active">{pageName}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PageBanner;
