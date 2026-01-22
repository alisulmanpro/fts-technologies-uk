import React, { Component } from "react";
import Slider from "react-slick";

export default class ProductSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      settings1: {
        dots: false,
        arrows: false,
        autoplaySpeed: 1500,
        autoplay: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      settings2: {
        dots: false,
        arrows: false,
        autoplaySpeed: 1500,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <div className="product-gallery-area mb-50">
        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          {...this.state.settings1}
          className="product-big-slider mb-15"
        >
          <div className="product-img">
            <a
              href="assets/images/products/product-big-1.jpg"
              className="img-popup"
            >
              <img
                src="assets/images/products/product-big-1.jpg"
                alt="Product"
              />
            </a>
          </div>
          <div className="product-img">
            <a
              href="assets/images/products/product-big-1.jpg"
              className="img-popup"
            >
              <img
                src="assets/images/products/product-big-1.jpg"
                alt="Product"
              />
            </a>
          </div>
          <div className="product-img">
            <a
              href="assets/images/products/product-big-1.jpg"
              className="img-popup"
            >
              <img
                src="assets/images/products/product-big-1.jpg"
                alt="Product"
              />
            </a>
          </div>
          <div className="product-img">
            <a
              href="assets/images/products/product-big-1.jpg"
              className="img-popup"
            >
              <img
                src="assets/images/products/product-big-1.jpg"
                alt="Product"
              />
            </a>
          </div>
        </Slider>
        <Slider
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
          {...this.state.settings2}
          className="product-thumb-slider slider_margin_right"
        >
          <div className="product-img">
            <img
              src="assets/images/products/product-thumb-1.jpg"
              alt="Product"
            />
          </div>
          <div className="product-img">
            <img
              src="assets/images/products/product-thumb-2.jpg"
              alt="Product"
            />
          </div>
          <div className="product-img">
            <img
              src="assets/images/products/product-thumb-3.jpg"
              alt="Product"
            />
          </div>
          <div className="product-img">
            <img
              src="assets/images/products/product-thumb-2.jpg"
              alt="Product"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
