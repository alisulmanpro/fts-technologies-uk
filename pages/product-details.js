import Link from "next/link";
import { useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import PageBanner from "../src/components/PageBanner";
import ProductSlider from "../src/components/ProductSlider";
import Layout from "../src/layouts/Layout";
import { recentProductSlider } from "../src/sliderProps";

const ProductDetails = () => {
  const [value, setValue] = useState(1);
  return (
    <Layout>
      <PageBanner pageName={"Product Details"} />
      <section className="product-details-section pt-130">
        <div className="container">
          <div className="product-details-wrapper pb-50 wow fadeInUp">
            <div className="row">
              <div className="col-lg-6">
                <ProductSlider />
              </div>
              <div className="col-lg-6">
                <div className="product-info mb-50">
                  <div className="product-holder d-flex justify-content-lg-between">
                    <div className="title-tag">
                      <h3 className="title">Tumbler Alarm Clock</h3>
                      <span className="tag">
                        <span>Feature flexible,</span>{" "}
                        <span>Cotton-covered</span>
                      </span>
                    </div>
                    <div className="price-rating text-right">
                      <span className="price">$75</span>
                      <ul className="ratings ratings-4">
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <span className="ml-10">
                            <a href="#">(12)</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="color-filter-wrap">
                    <h5>Color</h5>
                    <div className="single-color black">
                      <input
                        type="radio"
                        id="cblack"
                        name="radio"
                        defaultChecked=""
                      />
                      <label htmlFor="cblack" />
                    </div>
                    <div className="single-color orange">
                      <input type="radio" id="corange" name="radio" />
                      <label htmlFor="corange" />
                    </div>
                    <div className="single-color pink">
                      <input type="radio" id="cpink" name="radio" />
                      <label htmlFor="cpink" />
                    </div>
                    <div className="single-color green">
                      <input type="radio" id="cgreen" name="radio" />
                      <label htmlFor="cgreen" />
                    </div>
                    <div className="single-color white">
                      <input type="radio" id="cyellow" name="radio" />
                      <label htmlFor="cyellow" />
                    </div>
                  </div>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo eni
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                    fugit, sed qcons equuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Odio temporibus sint deserunt culpa repellat, totam expedita
                    delectus id, ipsam eligendi dolore natus similique
                    cupiditate hic incidunt reiciendis quas iure nobis a odit
                    illo, quam officia tempore autem. In, facilis enim.
                  </p>
                  <ul className="product-meta">
                    <li>
                      <span>Categories:</span>
                      <a href="#"> Essentials, Lights</a>
                    </li>
                    <li>
                      <span>Tags:</span>
                      <a href="#">Decor, Interior</a>
                    </li>
                  </ul>
                  <div className="product-cart">
                    <ul>
                      <li>
                        <div className="nice-number">
                          <button
                            type="button"
                            onClick={() =>
                              value > 1 ? setValue(value - 1) : setValue(1)
                            }
                          >
                            -
                          </button>
                          <input type="number" value={value} />
                          <button
                            type="button"
                            onClick={() => setValue(value + 1)}
                          >
                            +
                          </button>
                        </div>
                      </li>
                      <li>
                        <a href="#" className="main-btn">
                          Add to cart
                        </a>
                      </li>
                      <li>
                        <a href="#" className="wishlist-btn">
                          <i className="far fa-heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="discription-area mt-30">
              <Tab.Container defaultActiveKey={"descrptions"}>
                <div className="discription-tabs mb-35">
                  <Nav as={"ul"} className="nav nav-tabs">
                    <Nav.Item as={"li"} className="nav-item">
                      <Nav.Link
                        as={"a"}
                        eventKey={"descrptions"}
                        className="nav-link"
                        data-toggle="tab"
                        href="#descrptions"
                      >
                        Descrptions
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as={"li"} className="nav-item">
                      <Nav.Link
                        as={"a"}
                        eventKey={"information"}
                        className="nav-link"
                        data-toggle="tab"
                        href="#information"
                      >
                        Information
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as={"li"} className="nav-item">
                      <Nav.Link
                        as={"a"}
                        eventKey={"reviews"}
                        className="nav-link"
                        data-toggle="tab"
                        href="#reviews"
                      >
                        Reviews(3)
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
                <Tab.Content className="tab-content">
                  <Tab.Pane
                    eventKey={"descrptions"}
                    className="tab-pane fade"
                    id="descrptions"
                  >
                    <div className="content-box">
                      <h3>About Products</h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore verit atis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit sed quia non numquam eius
                        modi tempora incidunt ut labore et dolore magnam aliquam
                        quaerat voluptatem. Ut enim ad minima veniam, quis
                        nostrum exercitationem ullam corporis suscipit
                        laboriosam, nisi ut aliquid ex ea commodi consequatur?
                        Quis autem vel eum iure reprehenderit qui in ea
                        voluptate velit esse quam nihil molestiae consequatur,
                        vel illum qui dolorem eum
                      </p>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey={"information"}
                    className="tab-pane fade"
                    id="information"
                  >
                    <div className="content-box">
                      <h3>Products Information</h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore verit atis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit sed quia non numquam eius
                        modi tempora incidunt ut labore et dolore magnam aliquam
                        quaerat voluptatem. Ut enim ad minima veniam, quis
                        nostrum exercitationem ullam corporis suscipit
                        laboriosam, nisi ut aliquid ex ea commodi consequatur?
                        Quis autem vel eum iure reprehenderit qui in ea
                        voluptate velit esse quam nihil molestiae consequatur,
                        vel illum qui dolorem eum
                      </p>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey={"reviews"}
                    className="tab-pane fade"
                    id="reviews"
                  >
                    <div className="products-review-area">
                      <div className="review-area pb-10">
                        <ul className="review-list">
                          <li className="review">
                            <img
                              src="assets/images/products/comment-1.jpg"
                              alt="Image"
                            />
                            <div className="review-info">
                              <div className="author-title-review">
                                <div className="title">
                                  <h5>
                                    Karlos D. Jugar{" "}
                                    <span className="date">
                                      14 Dec, {new Date().getFullYear()}
                                    </span>
                                  </h5>
                                </div>
                                <ul className="ratings ratings-5">
                                  <li className="star">
                                    <i className="fas fa-star" />
                                  </li>
                                  <li className="star">
                                    <i className="fas fa-star" />
                                  </li>
                                  <li className="star">
                                    <i className="fas fa-star" />
                                  </li>
                                  <li className="star">
                                    <i className="fas fa-star" />
                                  </li>
                                  <li className="star">
                                    <i className="fas fa-star" />
                                  </li>
                                </ul>
                              </div>
                              <p>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae
                                ab illo inventore verit atis et quasi architecto
                                beatae vitae dicta sunt explicabo.
                              </p>
                            </div>
                          </li>
                          <li className="review">
                            <img
                              src="assets/images/products/comment-2.jpg"
                              alt="Image"
                            />
                            <div className="review-info">
                              <div className="author-title-review">
                                <div className="title">
                                  <h5>
                                    Karlos D. Jugar{" "}
                                    <span className="date">
                                      14 Dec, {new Date().getFullYear()}
                                    </span>
                                  </h5>
                                </div>
                                <ul className="ratings ratings-4">
                                  <li className="star">
                                    <i className="fas fa-star" />
                                  </li>
                                  <li className="star">
                                    <i className="fas fa-star" />
                                  </li>
                                  <li className="star">
                                    <i className="fas fa-star" />
                                  </li>
                                  <li className="star">
                                    <i className="fas fa-star" />
                                  </li>
                                  <li className="star">
                                    <i className="fas fa-star" />
                                  </li>
                                </ul>
                              </div>
                              <p>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae
                                ab illo inventore verit atis et quasi architecto
                                beatae vitae dicta sunt explicabo.
                              </p>
                            </div>
                          </li>
                          <li className="review">
                            <img
                              src="assets/images/products/comment-3.jpg"
                              alt="Image"
                            />
                            <div className="review-info">
                              <div className="author-title-review">
                                <div className="title">
                                  <h5>
                                    Karlos D. Jugar{" "}
                                    <span className="date">
                                      14 Dec, {new Date().getFullYear()}
                                    </span>
                                  </h5>
                                </div>
                                <ul className="ratings ratings-3">
                                  <li className="star">
                                    <i className="fas fa-star" />
                                  </li>
                                  <li className="star">
                                    <i className="fas fa-star" />
                                  </li>
                                  <li className="star">
                                    <i className="fas fa-star" />
                                  </li>
                                  <li className="star">
                                    <i className="fas fa-star" />
                                  </li>
                                  <li className="star">
                                    <i className="fas fa-star" />
                                  </li>
                                </ul>
                              </div>
                              <p>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae
                                ab illo inventore verit atis et quasi architecto
                                beatae vitae dicta sunt explicabo.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="review-form">
                        <form onSubmit={(e) => e.preventDefault()}>
                          <div className="row">
                            <div className="col-lg-6">
                              <h5 className="title mb-15">Add a Review</h5>
                            </div>
                            <div className="col-lg-6">
                              <div className="form_group text-end">
                                <ul className="ratings mb-25">
                                  <li>
                                    <span className="mr-2">Your Rating:</span>
                                  </li>
                                  <li className="star">
                                    <a href="#">
                                      <i className="fas fa-star" />
                                    </a>
                                  </li>
                                  <li className="star">
                                    <a href="#">
                                      <i className="fas fa-star" />
                                    </a>
                                  </li>
                                  <li className="star">
                                    <a href="#">
                                      <i className="fas fa-star" />
                                    </a>
                                  </li>
                                  <li className="star">
                                    <a href="#">
                                      <i className="fas fa-star" />
                                    </a>
                                  </li>
                                  <li className="star">
                                    <a href="#">
                                      <i className="fas fa-star" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form_group">
                                <input
                                  type="text"
                                  className="form_control"
                                  placeholder="Enter Your Name"
                                  required=""
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form_group">
                                <input
                                  type="text"
                                  className="form_control"
                                  placeholder="Enter Your Phone Number"
                                  required=""
                                />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="form_group">
                                <textarea
                                  name="message"
                                  className="form_control"
                                  placeholder="Enter Your Message"
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                            <div className="col-lg-12 text-center">
                              <div className="form_group">
                                <button className="main-btn main-btn-blue">
                                  Add Your Review
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Product Details Section ======*/}
      {/*====== Start Product Section ======*/}
      <section className="products-area pt-65 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title mb-45 text-center wow fadeInUp">
                <h2>Related Products</h2>
              </div>
            </div>
          </div>
          <Slider
            {...recentProductSlider}
            className="releted-products-slider products-style-one wow fadeInUp slider_margin"
            data-wow-delay=".2s"
          >
            <div className="product-item">
              <div className="product-thumb">
                <img
                  src="assets/images/products/product-1.jpg"
                  alt="product image"
                />
                <div className="product-overlay d-flex align-items-end justify-content-center">
                  <div className="product-meta">
                    <a href="#" className="icon cart-btn">
                      <i className="far fa-shopping-cart" />
                    </a>
                    <a href="#" className="icon wishlist-btn">
                      <i className="far fa-heart" />
                    </a>
                    <a
                      href="assets/images/products/product-1.jpg"
                      className="icon img-popup"
                    >
                      <i className="far fa-expand" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="product-info text-center">
                <ul className="ratings ratings-5">
                  <li className="star">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star">
                    <i className="fas fa-star" />
                  </li>
                </ul>
                <h3 className="title">
                  <Link href="/product-details">
                    <a>Wood Home Decore</a>
                  </Link>
                </h3>
                <span className="price">$23.97</span>
              </div>
            </div>
            <div className="product-item">
              <div className="product-thumb">
                <img
                  src="assets/images/products/product-2.jpg"
                  alt="product image"
                />
                <div className="product-overlay d-flex align-items-end justify-content-center">
                  <div className="product-meta">
                    <a href="#" className="icon cart-btn">
                      <i className="far fa-shopping-cart" />
                    </a>
                    <a href="#" className="icon wishlist-btn">
                      <i className="far fa-heart" />
                    </a>
                    <a
                      href="assets/images/products/product-2.jpg"
                      className="icon img-popup"
                    >
                      <i className="far fa-expand" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="product-info text-center">
                <ul className="ratings ratings-3">
                  <li className="star">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star">
                    <i className="fas fa-star" />
                  </li>
                </ul>
                <h3 className="title">
                  <Link href="/product-details">
                    <a>Wood Home Decore</a>
                  </Link>
                </h3>
                <span className="price">$23.97</span>
              </div>
            </div>
            <div className="product-item">
              <div className="product-thumb">
                <img
                  src="assets/images/products/product-3.jpg"
                  alt="product image"
                />
                <div className="product-overlay d-flex align-items-end justify-content-center">
                  <div className="product-meta">
                    <a href="#" className="icon cart-btn">
                      <i className="far fa-shopping-cart" />
                    </a>
                    <a href="#" className="icon wishlist-btn">
                      <i className="far fa-heart" />
                    </a>
                    <a
                      href="assets/images/products/product-3.jpg"
                      className="icon img-popup"
                    >
                      <i className="far fa-expand" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="product-info text-center">
                <ul className="ratings ratings-4">
                  <li className="star">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star">
                    <i className="fas fa-star" />
                  </li>
                </ul>
                <h3 className="title">
                  <Link href="/product-details">
                    <a>Wood Home Decore</a>
                  </Link>
                </h3>
                <span className="price">
                  $23.97 <span className="pre-price">$10.35</span>
                </span>
              </div>
            </div>
            <div className="product-item">
              <div className="product-thumb">
                <img
                  src="assets/images/products/product-4.jpg"
                  alt="product image"
                />
                <div className="product-overlay d-flex align-items-end justify-content-center">
                  <div className="product-meta">
                    <a href="#" className="icon cart-btn">
                      <i className="far fa-shopping-cart" />
                    </a>
                    <a href="#" className="icon wishlist-btn">
                      <i className="far fa-heart" />
                    </a>
                    <a
                      href="assets/images/products/product-4.jpg"
                      className="icon img-popup"
                    >
                      <i className="far fa-expand" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="product-info text-center">
                <ul className="ratings ratings-5">
                  <li className="star">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star">
                    <i className="fas fa-star" />
                  </li>
                </ul>
                <h3 className="title">
                  <Link href="/product-details">
                    <a>Wood Home Decore</a>
                  </Link>
                </h3>
                <span className="price">
                  $23.97 <span className="pre-price">$10.35</span>
                </span>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </Layout>
  );
};
export default ProductDetails;
