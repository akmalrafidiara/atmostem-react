import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import PartialSpinner from "./components/PartialSpinner";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function Home() {
  return (
    <>
      <Header />
      <Hero>
        <div className="btn btn-sm border rounded-pill text-white px-3 mb-3 animated slideInRight">
          ATMO.STEM
        </div>
        <h1 className="display-4 text-white mb-4 animated slideInRight">
          Menyelami Dunia Udara Mencari Cakrawala
        </h1>
        <p className="text-white mb-4 animated slideInRight">
          Where air meets curiosity, the symphony of the atmosphere unfolds
          <br />
          —a journey through the unseen, a tale written in every breath.
        </p>
        <a
          href=""
          className="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInRight"
        >
          Read More
        </a>
        <a
          href=""
          className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight"
        >
          Contact Us
        </a>
      </Hero>

      {/* About */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img">
                <img className="img-fluid" src="/img/cloud-sky.jpg" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                About Us
              </div>
              <h1 className="mb-4">Prologue</h1>
              <p className="mb-4">
                Di AtmoSTEM, kami membawa Anda dalam perjalanan edukatif yang
                menarik dan mendalam mengenai atmosfer Bumi dan konsep-konsep
                STEM yang terkait.
              </p>
              <p className="mb-4">
                Kami percaya bahwa pemahaman yang lebih baik tentang udara,
                lapisan ozon, dan efek rumah kaca adalah kunci untuk melibatkan
                diri dalam upaya melindungi lingkungan dan menciptakan masa
                depan yang berkelanjutan.
              </p>
              <div className="row g-3">
                <div className="col-sm-6">
                  <h6 className="mb-3">
                    <i className="fa fa-check text-primary me-2"></i>Science
                  </h6>
                  <h6 className="mb-0">
                    <i className="fa fa-check text-primary me-2"></i>Technology
                  </h6>
                </div>
                <div className="col-sm-6">
                  <h6 className="mb-3">
                    <i className="fa fa-check text-primary me-2"></i>Engeenering
                  </h6>
                  <h6 className="mb-0">
                    <i className="fa fa-check text-primary me-2"></i>Art
                  </h6>
                </div>
                <div className="col-sm-6">
                  <h6 className="mb-3">
                    <i className="fa fa-check text-primary me-2"></i>Mathematics
                  </h6>
                </div>
              </div>
              <div className="d-flex align-items-center mt-4">
                <a className="btn btn-primary rounded-pill px-4 me-3" href="">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
