import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Concern() {
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
        <h1 className="display-4 text-white mb-4 animated slideInRight">
          Startistics Data
        </h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0">
            <li className="breadcrumb-item">
              <a className="text-white" href="#">
                Home
              </a>
            </li>
            <li className="breadcrumb-item">
              <a className="text-white" href="#">
                Pages
              </a>
            </li>
            <li
              className="breadcrumb-item text-white active"
              aria-current="page"
            >
              Startistics Data
            </li>
          </ol>
        </nav>
      </Hero>
      <div className="container-iframe">
        <iframe
          src="https://global-warming.org/"
          width={"100%"}
          height={"1080px"}
        ></iframe>
      </div>
      <Footer />
    </>
  );
}

export default Concern;
