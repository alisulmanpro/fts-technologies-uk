import { useEffect, useState } from "react";

const PreLoader = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    window.addEventListener("load", () => {
      setLoader(false);
    });
  }, []);
  return (
    <div className="preloader" style={{ display: loader ? "flex" : "none" }}>
      <div className="loader">
        <div className="pre-shadow"></div>
        <div className="pre-box"></div>
      </div>
    </div>
  );
};
export default PreLoader;
