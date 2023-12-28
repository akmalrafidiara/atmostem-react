import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SteamComponent from "./components/SteamComponent";

function Steam() {
  const [isShowWelcome, setIsWelcome] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showSteamComponent, setShowSteamComponent] = useState(false);
  const [countdown, setCountdown] = useState(1);

  const handleClick = async () => {
    setIsLoading(true);
    // Simulate a network request
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsWelcome(false);
    setShowSteamComponent(true);
  };

  useEffect(() => {
    if (isLoading && countdown > 0) {
      const timerId = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  }, [isLoading, countdown]);
  return (
    <>
      <Header />
      <Hero>
        <div className="btn btn-sm border rounded-pill text-white px-3 mb-3 animated slideInRight">
          ATMO.STEM
        </div>
        <h1 className="display-4 text-white mb-4 animated slideInRight">
          Aspek STEAM dari Atmostem
        </h1>
        <p className="text-white mb-4 animated slideInRight">
          Science, Technology, Engineering, Art, and Mathematics
        </p>
      </Hero>
      {/* Welcome Screen */}
      {isShowWelcome && (
        <div
          className="container-fluid py-5 wow fadeIn"
          data-wow-delay="0.1s"
          style={{ backgroundColor: "#fdfdfd" }}
        >
          <div className="container text-center py-5">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h1 className="display-1">STEAM</h1>
                <h1 className="mb-4">
                  {isLoading
                    ? `Memulai Perjalanan dalam ${
                        countdown > 0 ? countdown : "Launch!"
                      }`
                    : "Memulai Perjalanan mu dari sini"}
                </h1>
                <p className="mb-4">Mari kita mulai sekarang!</p>
                {isLoading ? (
                  <div style={{ width: "100%" }}>
                    <img
                      src="/img/steam_launch.gif"
                      alt=""
                      style={{ width: "300px" }}
                      className="img-fluid"
                    />
                  </div>
                ) : null}
                <button
                  className="btn btn-primary rounded-pill py-3 px-5"
                  onClick={handleClick}
                  disabled={isLoading}
                >
                  {isLoading
                    ? `Loading... in ${countdown > 0 ? countdown : "Launch!"}`
                    : "Let's Go!"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showSteamComponent && <SteamComponent />}
      <Footer />
    </>
  );
}

export default Steam;
