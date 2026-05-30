import React, { useEffect } from "react";
const BackToTop = () => {
  useEffect(() => {
    let scrollUp = document.getElementById("scroll-top");

    window.addEventListener("scroll", () => {
      let st = window.scrollY;
      if (st > 110) {
        scrollUp.style.display = "inline-block";
      } else {
        scrollUp.style.display = "none";
      }
    });
  }, []);
  const onClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <a href="#" className="back-to-top" id="scroll-top">
      <i className="far fa-angle-up" />
    </a>
  );
};
export default BackToTop;
