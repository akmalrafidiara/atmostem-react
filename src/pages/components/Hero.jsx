import React from "react";

function Hero(props) {
  return (
    <>
      <div className="container-fluid pt-5 bg-primary hero-header mb-5">
        <div className="hero-overlay"></div>
        <div className="container pt-5">
          <div className="row g-5 pt-5">
            <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
              {props.children}
            </div>
            {props.image && (
              <div className="col-lg-6 align-self-end text-center text-lg-end">
                {props.image}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
