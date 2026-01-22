import Link from "next/link";
import Slider from "react-slick";
import Layout from "../src/layouts/Layout";
import Head from 'next/head';
import {
  heroOne,
} from "../src/sliderProps";
import { Fragment } from "react/jsx-runtime";

const Index = () => {
  return (
    <Fragment>
      <Head>
        <title>
          FTS | Home
        </title>
      </Head>
      <Layout>
        <section className="hero-area">
          <Slider {...heroOne} className="hero-wrapper-one hero-slider-one">
            <div
              className="single-slider banner-slide-1 bg_cover"
              style={{
                backgroundImage: "url(assets/images/hero/hero-slider-1_1.jpg)",
              }}
            >
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-lg-8">
                    <div className="hero-content">
                      <span
                        className="sub-title text-underline"
                        data-animation="fadeInDown"
                        data-delay=".3s"
                      >
                        professional it solutions
                      </span>
                      <h1 data-animation="fadeInDown" data-delay=".5s">
                        Architecting, developing and deploying enterprise IT
                        solutions
                      </h1>
                      <ul
                        className="button"
                        data-animation="fadeInDown"
                        data-delay=".7s"
                      >
                        <li>
                          <Link href="/about">
                            <a className="main-btn btn-red-dark">
                              get started now
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/service-details">
                            <a className="main-btn btn-white">explore more</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="single-slider banner-slide-2 bg_cover"
              style={{
                backgroundImage: "url(assets/images/hero/hero-slider-1_2.jpg)",
              }}
            >
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="hero-content text-center">
                      <span
                        className="sub-title text-underline"
                        data-animation="fadeInDown"
                        data-delay=".3s"
                      >
                        professional it solutions
                      </span>
                      <h1 data-animation="fadeInDown" data-delay=".5s">
                        Architecting, developing and deploying enterprise IT
                        solutions
                      </h1>
                      <ul
                        className="button"
                        data-animation="fadeInDown"
                        data-delay=".7s"
                      >
                        <li>
                          <Link href="/about">
                            <a className="main-btn btn-red-dark">
                              get started now
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/service-details">
                            <a className="main-btn btn-white">explore more</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="single-slider banner-slide-3 bg_cover"
              style={{
                backgroundImage: "url(assets/images/hero/hero-slider-1_3.jpg)",
              }}
            >
              <div className="container">
                <div className="row justify-content-end">
                  <div className="col-lg-8">
                    <div className="hero-content text-right">
                      <span
                        className="sub-title text-underline"
                        data-animation="fadeInDown"
                        data-delay=".3s"
                      >
                        professional it solutions
                      </span>
                      <h1 data-animation="fadeInDown" data-delay=".5s">
                        Architecting, developing and deploying enterprise IT
                        solutions
                      </h1>
                      <ul
                        className="button"
                        data-animation="fadeInDown"
                        data-delay=".7s"
                      >
                        <li>
                          <Link href="/about">
                            <a className="main-btn btn-red-dark">
                              get started now
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/service-details">
                            <a className="main-btn btn-white">explore more</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </section>
        {/*====== End Hero Section ======*/}
        {/*====== Start Features Section ======*/}
        <section className="fancy-features">
          <div className="continer-fluid p-0">
            <div className="features-style-one pt-70 pb-30">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <div className="section-title text-center mb-45 wow fadeInUp">
                      <span className="sub-title red-dark text-underline">
                        great journey for it solutions
                      </span>
                      <h2 className="text-uppercase">
                        specializes in building Services
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="block-style-one animate-icon d-flex mb-40 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-project-management" />
                      </div>
                      <div className="text">
                        <h3 className="title text-underline">
                          Professional Service
                        </h3>
                        <p>
                          Sedut perspicias unde omnis natus error sit voluptatem
                          accusanti remqu laudantium totam rem aperiam
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="block-style-one animate-icon d-flex mb-40 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-social-care" />
                      </div>
                      <div className="text">
                        <h3 className="title text-underline">Experience Team</h3>
                        <p>
                          Sedut perspicias unde omnis natus error sit voluptatem
                          accusanti remqu laudantium totam rem aperiam
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="block-style-one animate-icon d-flex mb-40 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-compliant" />
                      </div>
                      <div className="text">
                        <h3 className="title text-underline">
                          Best IT Solutions
                        </h3>
                        <p>
                          Sedut perspicias unde omnis natus error sit voluptatem
                          accusanti remqu laudantium totam rem aperiam
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== End Features Section ======*/}
        {/*====== Start About Section ======*/}
        <section className="fancy-about fancy-about-one pt-130 position-relative pb-45">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="about-img-box mb-50 wow fadeInLeft">
                  <img src="assets/images/about/about-1.jpg" alt="About image" />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="text-wrapper mb-50 wow fadeInRight">
                  <div className="section-title mb-20">
                    <span className="sub-title red-dark text-underline">
                      who we are
                    </span>
                    <h2 className="text-transform">
                      The Enterprise Productivity Platform for Complex Data
                    </h2>
                  </div>
                  <p>
                    Sed perspiciatis unde omnis iste natus voluptate accusantiuy
                    doloremque laudantium totam rem aperiam eaque quae ainvtore
                    veritatis quasi architecto beatae vitae dicta sunt explicabo.
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit sed quia consequuntur magni dolores eos ratione
                    volupta seque nesciunt porro quisquam doloremdolor site
                  </p>
                  <Link href="/about">
                    <a className="main-btn">learn more us</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== End About Section ======*/}
        {/*====== Start Features Section ======*/}
        <section className="fancy-features light-gray-bg pt-120 pb-90">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center mb-45 wow fadeInUp">
                  <span className="sub-title red-dark text-underline">
                    what we do
                  </span>
                  <h2 className="text-uppercase">
                    Solutions Customers Have Built with Instabase
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div
                  className="block-style-two animate-icon mb-40 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="icon">
                    <img src="assets/images/icon/icon-1.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="text-underline">Unlock trapped information</h3>
                    <p>
                      Sedut perspicias unomnis natus error sit voluptatemc
                      accusanti remqua
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div
                  className="block-style-two animate-icon mb-40 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="icon">
                    <img src="assets/images/icon/icon-2.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="text-underline">Build powerful solutions</h3>
                    <p>
                      Sedut perspicias unomnis natus error sit voluptatemc
                      accusanti remqua
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div
                  className="block-style-two animate-icon mb-40 wow fadeInUp"
                  data-wow-delay=".7s"
                >
                  <div className="icon">
                    <img src="assets/images/icon/icon-3.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="text-underline">
                      Accelerate at enterprise scale
                    </h3>
                    <p>
                      Sedut perspicias unomnis natus error sit voluptatemc
                      accusanti remqua
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div
                  className="block-style-two animate-icon mb-40 wow fadeInUp"
                  data-wow-delay=".9s"
                >
                  <div className="icon">
                    <img src="assets/images/icon/icon-4.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="text-underline">
                      Product &amp; design enginering
                    </h3>
                    <p>
                      Sedut perspicias unomnis natus error sit voluptatemc
                      accusanti remqua
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== End Features Section ======*/}
        {/*====== Start Service Section ======*/}
        <section className="service-area dark-black-bg pt-130 pb-130">
          <div className="container">
            <div className="row align-items-center service-style-one">
              <div className="col-lg-4">
                <div className="text-wrapper mb-40 wow fadeInLeft">
                  <div className="section-title section-title-white mb-20">
                    <span className="sub-title red-dark text-underline">
                      Our popular services
                    </span>
                    <h2 className="text-uppercase">
                      Best Professional IT Solutiuons
                    </h2>
                  </div>
                  <p>
                    Sed perspiciatis unde omniste natus voluptate accusantiuy
                    doloremque laudantium totam aperm eaque quae ainvtore
                    veritatis architecto
                  </p>
                  <Link href="/service-1">
                    <a className="main-btn">explore more services</a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="service-wrapper">
                  <div className="row no-gutters">
                    <div className="col-md-6">
                      <div
                        className="block-style-three animate-icon border-right-1 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <div className="icon">
                          <i className="flaticon-puzzle-1" />
                        </div>
                        <div className="text">
                          <h3 className="title">
                            <Link href="/service-details">
                              <a className="text-underline">Infrastructure</a>
                            </Link>
                          </h3>
                          <p>
                            But I must explain to you how all this mistaken ideofe
                            denouncing pleasure
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="block-style-three animate-icon pr-lg-0 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <div className="icon">
                          <i className="flaticon-solution-1" />
                        </div>
                        <div className="text">
                          <h3 className="title">
                            <Link href="/service-details">
                              <a className="text-underline">IT Engineering</a>
                            </Link>
                          </h3>
                          <p>
                            But I must explain to you how all this mistaken ideofe
                            denouncing pleasure
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="block-style-three animate-icon border-right-1 wow fadeInUp"
                        data-wow-delay=".7s"
                      >
                        <div className="icon">
                          <i className="flaticon-cyber-security" />
                        </div>
                        <div className="text">
                          <h3 className="title">
                            <Link href="/service-details">
                              <a className="text-underline">cyber security</a>
                            </Link>
                          </h3>
                          <p>
                            But I must explain to you how all this mistaken ideofe
                            denouncing pleasure
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="block-style-three animate-icon pr-lg-0 wow fadeInUp"
                        data-wow-delay=".9s"
                      >
                        <div className="icon">
                          <i className="flaticon-internet-of-things" />
                        </div>
                        <div className="text">
                          <h3 className="title">
                            <Link href="/service-details">
                              <a className="text-underline">Apps Development</a>
                            </Link>
                          </h3>
                          <p>
                            But I must explain to you how all this mistaken ideofe
                            denouncing pleasure
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== End Service Section ======*/}
        {/*====== Start Features Section ======*/}
        <section className="features-area light-gray-bg pt-120 pb-90">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="section-title text-center mb-50 wow fadeInUp">
                  <span className="sub-title red-dark">why choose us</span>
                  <h2>
                    Omnichannel support experience enhanced, with Freshdesk!
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div
                  className="block-style-ten animate-icon text-center mb-40 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="icon">
                    <i className="flaticon-customer-service-1" />
                  </div>
                  <div className="text">
                    <h4>Support All Channels</h4>
                    <p>
                      Sed ut perspiciatis unde oniste atus error volutatem accusu
                      dolore lauda
                    </p>
                    <Link href="/service-1">
                      <a className="btn-link">read more</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div
                  className="block-style-ten animate-icon text-center mb-40 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="icon">
                    <i className="flaticon-interactive" />
                  </div>
                  <div className="text">
                    <h4>Faster Resolution</h4>
                    <p>
                      Sed ut perspiciatis unde oniste atus error volutatem accusu
                      dolore lauda
                    </p>
                    <Link href="/service-1">
                      <a className="btn-link">read more</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div
                  className="block-style-ten animate-icon text-center mb-40 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="icon">
                    <i className="flaticon-search" />
                  </div>
                  <div className="text">
                    <h4>Context Touchpoint</h4>
                    <p>
                      Sed ut perspiciatis unde oniste atus error volutatem accusu
                      dolore lauda
                    </p>
                    <Link href="/service-1">
                      <a className="btn-link">read more</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div
                  className="block-style-ten animate-icon text-center mb-40 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="icon">
                    <i className="flaticon-24-hours" />
                  </div>
                  <div className="text">
                    <h4>Omniroute Lifting</h4>
                    <p>
                      Sed ut perspiciatis unde oniste atus error volutatem accusu
                      dolore lauda
                    </p>
                    <Link href="/service-1">
                      <a className="btn-link">read more</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== End Features Section ======*/}
        {/*====== Start Contact Section ======*/}
        <section
          className="contact-area contact-style-three bg_cover pt-130 pb-80"
          style={{
            backgroundImage: "url(assets/images/bg/testimonial-bg-1.jpg)",
          }}
        >
          <div className="container">
            <div className="row align-items-start">
              <div className="col-lg-5">
                <div className="contact-section-box mb-50 wow fadeInLeft">
                  <div className="section-title mb-25">
                    <span className="sub-title sub-title-bg red-dark-bg">
                      Need help ?
                    </span>
                    <h2 className="text-underline">
                      Let&apos;s Talk About IT Solutions
                    </h2>
                  </div>
                  <p>
                    On the other hand denounce righteous indige ation and dislike
                    men who are so beguiled and demoralized by the charms of
                    pleasure of the moment blinded by desire
                  </p>
                  <ul className="social-link">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="contact-wrapper mb-50 wow fadeInRight">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="contact-form"
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Full Name Here"
                            name="name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="email"
                            className="form_control"
                            placeholder="Email Address"
                            name="email"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <textarea
                            className="form_control"
                            placeholder="Write Message"
                            name="message"
                            required=""
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <div className="col-lg-12">
                            <button className="main-btn btn-red-dark">
                              Get free consultations
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== End Contact Section ======*/}

      </Layout>
    </Fragment>
  );
};
export default Index;
