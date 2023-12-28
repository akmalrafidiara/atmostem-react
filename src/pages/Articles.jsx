import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OwlCarousel from "react-owl-carousel2";

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
          console.log(result);
          // setData(result.articles);
          setData(result.articles.slice(0, 9));
        } else {
          console.error("Received non-JSON response");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const options = {
    items: 1,
    autoplay: true,
    smartSpeed: 1000,
    dots: true,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  };
  return (
    <>
      <Header />
      <Hero>
        <div className="btn btn-sm border rounded-pill text-white px-3 mb-3 animated slideInRight">
          ATMO.STEM
        </div>
        <h1 className="display-4 text-white mb-4 animated slideInRight">
          Article
        </h1>
        <p className="text-white mb-4 animated slideInRight">
          Kumpulan artikel tentang perubahan iklim.
        </p>
      </Hero>
      {/* Science */}
      <div className="container-fluid mt-5">
        <div className="container">
          <h1 className="display-4 mb-5">Artikel Ter-update</h1>
          <div className="row g-5 align-items-start">
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                Our Articles
              </div>
              <h1 className="mb-4">
                Membaca Berita: Menyingkap Makna dan Menjembatani Kebijakan
                Personal
              </h1>
              <p className="mb-4">
                Membaca berita atau informasi memiliki peran krusial dalam
                kehidupan modern yang dipenuhi dengan dinamika dan perubahan.
                Aktivitas sederhana ini bukan hanya sekadar rutinitas harian,
                tetapi sebuah kunci untuk memahami dunia di sekitar kita.
              </p>
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
                          <h5 className="lh-base text-white mb-3">
                            {item.title}
                          </h5>
                          <span className="btn btn-square btn-primary">
                            <i className="fa fa-arrow-right"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  ))
                ) : (
                  <div style={{ width: "100%" }} className="text-center">
                    <img
                      src="/img/steam_launch.gif"
                      alt=""
                      style={{ width: "300px" }}
                      className="img-fluid"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <h1 className="mb-4">Sustainable Development Goals</h1>
              <p className="mb-4">
                The 2030 Agenda listed “Sustainable Development Goals”
                consisting of 17 goals and 169 targets in order to eradicate
                poverty and realize a sustainable world.
              </p>
              <img
                className="img-fluid"
                src="https://sisschools.org/wp-content/uploads/2020/07/SIS-Group-The-United-Nations-Sustainable-Development-Goals-Explained.png"
                alt="sdgs"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial */}
      <div className="container-xxl py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
              <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                Our Hopes
              </div>
              <h1 className="mb-4">
                Sesuatu yang berdampak besar dimulai dengan langkah kecil!
              </h1>
              <p className="mb-4">
                Kami berharap dapat memberikan pemahaman yang lebih baik tentang
                isu-isu lingkungan dan STEM kepada masyarakat umum, terutama
                siswa. Kami berharap dapat membangun kesadaran dan kepedulian
                tentang isu-isu ini, dan menginspirasi orang untuk
                berpartisipasi dalam upaya melindungi lingkungan dan menciptakan
                masa depan yang berkelanjutan.
              </p>
              <a className="btn btn-primary rounded-pill px-4" href="/about">
                Read More
              </a>
            </div>
            <div className="col-lg-7 wow fadeIn" data-wow-delay="0.5s">
              <div className="testimonial-carousel border-start border-primary">
                <OwlCarousel options={options}>
                  <div className="testimonial-item ps-5">
                    <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                    <p className="fs-4">
                      Kami menggabungkan kode dan kreativitas untuk menciptakan
                      pintu gerbang virtual bagi para penelajar. Melalui website
                      ini, kami berharap membuka pintu bagi pengetahuan dan
                      pemahaman tentang lingkungan kita
                    </p>
                    <div className="d-flex align-items-center">
                      <img
                        className="img-fluid flex-shrink-0 rounded-circle"
                        src="/img/alfin.jpg"
                        style={{
                          width: "60px",
                          height: "60px",
                          objectFit: "cover",
                        }}
                      />
                      <div className="ps-3">
                        <h5 className="mb-1">Alfin</h5>
                        <span>Designer</span>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item ps-5">
                    <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                    <p className="fs-4">
                      Setiap baris kode adalah langkah kecil untuk menjembatani
                      kesenjangan dalam pemahaman. Kami percaya bahwa melalui
                      teknologi, kami dapat memperluas wawasan tentang isu-isu
                      lingkungan dan memberdayakan generasi mendatang.
                    </p>
                    <div className="d-flex align-items-center">
                      <img
                        className="img-fluid flex-shrink-0 rounded-circle"
                        src="/img/akmal.jpg"
                        style={{
                          width: "60px",
                          height: "60px",
                          objectFit: "cover",
                        }}
                      />
                      <div className="ps-3">
                        <h5 className="mb-1">Akmal</h5>
                        <span>Developer</span>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item ps-5">
                    <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                    <p className="fs-4">
                      Website ini bukan hanya kumpulan kata-kata, tetapi adalah
                      jendela ke dunia sains dan lingkungan. Kami berkomitmen
                      untuk memberikan pengalaman belajar interaktif dan memikat
                      bagi pengguna dari segala usia.
                    </p>
                    <div className="d-flex align-items-center">
                      <img
                        className="img-fluid flex-shrink-0 rounded-circle"
                        src="/img/kenya.jpg"
                        style={{
                          width: "60px",
                          height: "60px",
                          objectFit: "cover",
                        }}
                      />
                      <div className="ps-3">
                        <h5 className="mb-1">Kenya</h5>
                        <span>Content Creator</span>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Articles;
