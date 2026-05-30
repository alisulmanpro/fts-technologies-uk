const Newsletter = ({ btnColor, bg, noBg, bgColor }) => {
  return (
    <section className="newsletter-area newsletter-style-one">
      <div className="container">
        <div
          className={`newsletter-wrapper bg_cover wow fadeInDown ${
            bgColor ? bgColor : ""
          }`}
          style={
            !noBg
              ? {
                  backgroundImage: `url(assets/images/bg/newsletter-bg-${
                    bg ? bg : 2
                  }.jpg)`,
                }
              : {}
          }
        >
          <div className="row">
            <div className="col-lg-5">
              <div className="newsletter-content-box">
                <div className="icon">
                  <i className="flaticon-email-1" />
                </div>
                <div className="content">
                  <h2>Get Special Rewards</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="newsletter-form">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form_group">
                    <input
                      type="email"
                      className="form_control"
                      placeholder="Enter Address"
                      name="email"
                      required=""
                    />
                    <i className="far fa-map-marker-alt" />
                    <button
                      className={`main-btn btn-${
                        btnColor ? btnColor : "purple"
                      }`}
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Newsletter;
