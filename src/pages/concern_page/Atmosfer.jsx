import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Atmosfer() {
  return (
    <>
      <Header />
      <Hero>
        <div className="btn btn-sm border rounded-pill text-white px-3 mb-3 animated slideInRight">
          ATMO.STEM
        </div>
        <h1 className="display-4 text-white mb-4 animated slideInRight">
          Atmosfer
        </h1>
        <p className="text-white mb-4 animated slideInRight">
          Atmosfer adalah nama untuk lapisan gas yang menyelubungi benda yang
          memiliki massa sangat berat.
        </p>
      </Hero>
      {/* Service */}
      <div className="container-fluid bg-light">
        <div className="container">
          <div className="row g-5 align-items-center justify-content-center py-5">
            <h1 className="mb-4">Cari tahu lebih dalam mengenai topik kami</h1>
            <div className="col-lg-3 wow fadeIn" data-wow-delay="0.5s">
              <div className="service-item d-flex flex-column justify-content-center text-center rounded shadow">
                <div className="service-icon btn-square">
                  <i className="fa fa-wind fa-2x"></i>
                </div>
                <h5 className="mb-3">Udara</h5>
                <p>
                  Udara sangat penting loh.. setiap hari kita menghirup udara,
                  tapi kenapa kita tidak peduli dengannya?
                </p>
                <a className="btn px-3 mt-auto mx-auto" href="/udara">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-lg-3 wow fadeIn" data-wow-delay="0.5s">
              <div className="service-item d-flex flex-column justify-content-center text-center rounded shadow">
                <div className="service-icon btn-square">
                  <i className="fa fa-rocket fa-2x"></i>
                </div>
                <h5 className="mb-3">Lapisan Ozon</h5>
                <p>
                  Selama ini kita dilindungi oleh lapisan ozon, tapi kamu tau ga
                  kalo lapisan ozon itu bisa rusak?
                </p>
                <a className="btn px-3 mt-auto mx-auto" href="/ozon">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-lg-3 wow fadeIn" data-wow-delay="0.5s">
              <div className="service-item d-flex flex-column justify-content-center text-center rounded shadow">
                <div className="service-icon btn-square">
                  <i className="fa fa-thermometer-quarter fa-2x"></i>
                </div>
                <h5 className="mb-3">Efek Rumah Kaca</h5>
                <p>
                  Kita bisa tengelam! Jika efek rumah kaca terus terjadi, apakah
                  kalian bisa bayangkan bagaimana keadannya?
                </p>
                <a className="btn px-3 mt-auto mx-auto" href="/efek-rumah-kaca">
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

export default Atmosfer;
