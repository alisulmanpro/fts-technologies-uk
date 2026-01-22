function PrevArrow({ className, onClick, icon, extraClass }) {
  return (
    <div
      className={`${extraClass ? extraClass : className} slick-arrow`}
      onClick={onClick}
    >
      <i className={icon ? icon : "fas fa-arrow-right"}></i>
    </div>
  );
}

function NextArrow({ className, onClick, icon, extraClass }) {
  return (
    <div
      className={`${extraClass ? extraClass : className} slick-arrow`}
      onClick={onClick}
    >
      <i className={icon ? icon : "fas fa-arrow-left"}></i>
    </div>
  );
}

export const heroOne = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 1000,
  autoplaySpeed: 1500,
  autoplay: true,
  vertical: true,
  verticalSwiping: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        dots: false,
      },
    },
  ],
};
export const portfoliosliderone = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplaySpeed: 1500,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
  nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>',
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
};
export const clientssliderone = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplaySpeed: 1500,
  autoplay: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
  nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
};

// it agency

export const heroTwo = {
  dots: false,
  arrows: true,
  infinite: true,
  fade: true,
  speed: 1000,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <PrevArrow extraClass={"prev"} icon={"fas fa-angle-left"} />,
  nextArrow: <NextArrow extraClass={"next"} icon={"fas fa-angle-right"} />,
};

export const portfolioSliderTwo = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplaySpeed: 1500,
  autoplay: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
};

export const testimonialSliderOne = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplaySpeed: 1500,
  autoplay: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
export const serviceSliderOne = {
  dots: false,
  arrows: true,
  infinite: true,
  autoplaySpeed: 1500,
  autoplay: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: <PrevArrow extraClass={"prev"} />,
  nextArrow: <NextArrow extraClass={"next"} />,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
export const portfolioSliderThree = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplaySpeed: 1500,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
};
export const clientsSliderTwo = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplaySpeed: 1500,
  autoplay: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
};
export const testimonialSliderTwo = {
  dots: false,
  arrows: true,
  infinite: true,
  autoplaySpeed: 1500,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: <PrevArrow extraClass={"prev"} icon={"far fa-angle-left"} />,
  nextArrow: <NextArrow extraClass={"next"} icon={"far fa-angle-right"} />,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        arrows: false,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
};
export const testimonialSliderThree = {
  dots: false,
  arrows: true,
  infinite: true,
  autoplaySpeed: 1500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <PrevArrow extraClass={"prev"} />,
  nextArrow: <NextArrow extraClass={"next"} />,
};
export const testimonialSliderFour = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplaySpeed: 1500,
  autoplay: true,
  vertical: true,
  verticalSwiping: true,
  slidesToShow: 3,
  slidesToScroll: 1,
};
export const clientsSliderThree = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplaySpeed: 1500,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
};
export const screenshotSlider = {
  dots: false,
  arrows: true,
  autoplaySpeed: 1500,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,

  prevArrow: <PrevArrow extraClass={"prev"} icon={"far fa-angle-left"} />,
  nextArrow: <NextArrow extraClass={"next"} icon={"far fa-angle-right"} />,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
      },
    },
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
};
export const projectSlider = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplaySpeed: 1500,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
};
export const recentProductSlider = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplaySpeed: 1500,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
};
