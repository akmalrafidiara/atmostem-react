import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";

function ErrorPage() {
  return (
    <>
      <Header />
      <Hero
        image={
          <img
            className="img-fluid"
            src="/img/global-warm.png"
            alt=""
            style={{ maxHeight: "300px" }}
          />
        }
      >
        <div className="btn btn-sm border rounded-pill text-white px-3 mb-3 animated slideInRight">
          ATMO.STEM
        </div>
        <h1 className="display-4 text-white mb-4 animated slideInRight">
          Opps! Page Not Found
        </h1>
        <p className="text-white mb-4 animated slideInRight">
          Hmmm... sepertinya halaman ini tidak tersedia.
        </p>
        <a
          href="/"
          className="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInRight"
        >
          Back To Home
        </a>
      </Hero>
      <div className="container-fluid py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
              <h1 className="display-1">404</h1>
              <h1 className="mb-4">Page Not Found</h1>
              <p className="mb-4">
                We’re sorry, the page you have looked for does not exist in our
                website! Maybe go to our home page or try to use a search?
              </p>
              <a className="btn btn-primary rounded-pill py-3 px-5" href="/">
                Go Back To Home
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ErrorPage;
