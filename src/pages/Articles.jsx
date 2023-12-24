import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Articles() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const url = "https://climate-news-feed.p.rapidapi.com/page/1";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "5be8a5aa7cmshe59874ca6fb284cp1759b1jsndc2e0a2cbc93",
        "X-RapidAPI-Host": "climate-news-feed.p.rapidapi.com",
      },
    };

    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        if (response.headers.get("Content-Type").includes("application/json")) {
          const result = await response.json();
          setData(result.articles);
        } else {
          console.error("Received non-JSON response");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
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
          404 Error
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
              404 Error
            </li>
          </ol>
        </nav>
      </Hero>
      <div className="container-fluid py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-4">
            {data ? (
              data.map((item, index) => (
                <div
                  className="col-lg-4 wow fadeIn"
                  data-wow-delay="0.3s"
                  key={index}
                >
                  <div className="case-item position-relative overflow-hidden rounded mb-2">
                    <img
                      className="img-fluid"
                      src={item.thumbnail}
                      alt={item.title}
                    />
                    <a
                      className="case-overlay text-decoration-none"
                      href={item.url}
                    >
                      <small>Information</small>
                      <h5 className="lh-base text-white mb-3">{item.title}</h5>
                      <span className="btn btn-square btn-primary">
                        <i className="fa fa-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Articles;
