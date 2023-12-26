import React from "react";

function Footer() {
  return (
    <>
      <div className="container-fluid bg-dark text-white-50 footer pt-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
              <a href="/" className="d-flex gap-2 mb-3">
                <img
                  src="/img/logo_atmostem_white.png"
                  alt="Atmostem"
                  className="img-fluid me-2"
                  style={{ width: "40px" }}
                />
                <h2 className="text-white mb-0">Atmostem.</h2>
              </a>
              <p className="mb-0">
                Kami percaya bahwa pemahaman yang lebih baik tentang udara,
                lapisan ozon, dan efek rumah kaca adalah kunci untuk melibatkan
                diri dalam upaya melindungi lingkungan dan menciptakan masa
                depan yang berkelanjutan.
              </p>
            </div>
          </div>
        </div>
        <div className="container wow fadeIn" data-wow-delay="0.1s">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <a className="border-bottom" href="#">
                  ATMOSTEM
                </a>
                , All Right Reserved. Designed By{" "}
                <a className="border-bottom" href="https://youtube.com">
                  Kelompok 8 - STEM 119
                </a>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href="/">Home</a>
                  <a href="/about">Cookies</a>
                  <a href="/steam">Help</a>
                  <a href="/concern">FAQs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
