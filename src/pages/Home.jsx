import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import OwlCarousel from "react-owl-carousel2";

function Home() {
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
          Menyelami Dunia Udara Mencari Cakrawala
        </h1>
        <p className="text-white mb-4 animated slideInRight">
          Where air meets curiosity, the symphony of the atmosphere unfolds
          <br />
          —a journey through the unseen, a tale written in every breath.
        </p>
        <a
          href="/#about-atmostem"
          className="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInRight"
        >
          Read More
        </a>
        <a
          href="/concern"
          className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight"
        >
          #WeAreAtmostem
        </a>
      </Hero>
      {/* About */}
      <div className="container-fluid py-5" id="about-atmostem">
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
                <a
                  className="btn btn-primary rounded-pill px-4 me-3"
                  href="/about"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service */}
      <div className="container-fluid bg-light mt-5 py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
              <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                Our Concern
              </div>
              <h1 className="mb-4">
                Kepedulian kami terhadap isu lingkungan udara
              </h1>
              <p className="mb-4">
                Banyak orang, terutama siswa dan masyarakat umum, mungkin kurang
                memahami masalah yang terkait dengan udara, atmosfer, lapisan
                ozon, dan efek rumah kaca.
                <strong>
                  Proyek ini bertujuan untuk memberikan pemahaman yang lebih
                  baik tentang isu-isu ini.
                </strong>
              </p>
              <a className="btn btn-primary rounded-pill px-4" href="/concern">
                Read More
              </a>
            </div>
            <div className="col-lg-7">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="row g-4">
                    <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                      <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                        <div className="service-icon btn-square">
                          <i className="fa fa-wind fa-2x"></i>
                        </div>
                        <h5 className="mb-3">Udara</h5>
                        <p>
                          Udara sangat penting loh.. setiap hari kita menghirup
                          udara, tapi kenapa kita tidak peduli dengannya?
                        </p>
                        <a className="btn px-3 mt-auto mx-auto" href="/udara">
                          Read More
                        </a>
                      </div>
                    </div>
                    <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                      <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                        <div className="service-icon btn-square">
                          <i className="fa fa-rocket fa-2x"></i>
                        </div>
                        <h5 className="mb-3">Lapisan Ozon</h5>
                        <p>
                          Selama ini kita dilindungi oleh lapisan ozon, tapi
                          kamu tau ga kalo lapisan ozon itu bisa rusak?
                        </p>
                        <a className="btn px-3 mt-auto mx-auto" href="/ozon">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pt-md-4">
                  <div className="row g-4">
                    <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                      <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                        <div className="service-icon btn-square">
                          <i className="fa fa-globe-asia fa-2x"></i>
                        </div>
                        <h5 className="mb-3">Atmosfer</h5>
                        <p>
                          Bumi tanpa atmosfer mungkin kita sudah terbakar
                          radiasi matahari, tapi mengapa ya?
                        </p>
                        <a
                          className="btn px-3 mt-auto mx-auto"
                          href="/atmosfer"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                    <div className="col-12 wow fadeIn" data-wow-delay="0.7s">
                      <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                        <div className="service-icon btn-square">
                          <i className="fa fa-thermometer-quarter fa-2x"></i>
                        </div>
                        <h5 className="mb-3">Efek Rumah Kaca</h5>
                        <p>
                          Kita bisa tengelam! Jika efek rumah kaca terus
                          terjadi, apakah kalian bisa bayangkan bagaimana
                          keadannya?
                        </p>
                        <a
                          className="btn px-3 mt-auto mx-auto"
                          href="/efek-rumah-kaca"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature */}
      <div className="container-fluid bg-primary feature pt-5">
        <div className="container pt-5">
          <div className="row g-5">
            <div
              className="col-lg-6 align-self-center mb-md-5 pb-md-5 wow fadeIn"
              data-wow-delay="0.3s"
            >
              <div className="btn btn-sm border rounded-pill text-white px-3 mb-3">
                Important Information
              </div>
              <h1 className="text-white mb-4">
                Banyak sekali faktor yang bisa mempengaruhi suhu bumi
              </h1>
              <p className="text-light mb-4">
                Kegiatan hingga kebiasaan manusia sangat berdampak pada
                peningkatan suhu bumi saat ini. Jika kebiasaan ini terus
                berkelanjutan maka suhu bumi akan terus meningkat.
              </p>
              <div className="d-flex align-items-center text-white mb-3">
                <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                  <i className="fa fa-times"></i>
                </div>
                <span>Penggunaan bahan bakar bersumber dari fosil</span>
              </div>
              <div className="d-flex align-items-center text-white mb-3">
                <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                  <i className="fa fa-times"></i>
                </div>
                <span>Deforestasi yang berlebihan oleh manusia</span>
              </div>
              <div className="d-flex align-items-center text-white mb-3">
                <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                  <i className="fa fa-times"></i>
                </div>
                <span>Partikel dan polutan mempengaruhi radiasi & suhu</span>
              </div>
              <div className="row g-4 pt-3">
                <div className="col-sm-6">
                  <div
                    className="d-flex rounded p-3"
                    style={{ background: "rgba(256, 256, 256, 0.1)" }}
                  >
                    <i className="fa fa-thermometer-three-quarters fa-3x text-white"></i>
                    <div className="ms-3">
                      <h2 className="text-white mb-0">± 1.2 °C</h2>
                      <p className="text-white mb-0">Anomaly Temperature</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div
                    className="d-flex rounded p-3"
                    style={{ background: "rgba(256, 256, 256, 0.1)" }}
                  >
                    <i className="fa fa-thermometer-quarter fa-3x text-white"></i>
                    <div className="ms-3">
                      <h2 className="text-white mb-0">36,5 °C</h2>
                      <p className="text-white mb-0">Global Temperature</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 text-center text-md-end wow fadeIn"
              data-wow-delay="0.5s"
            >
              <img className="img-fluid" src="/img/global-warm.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* CaseState */}
      <div className="container-fluid bg-light py-5">
        <div className="container py-5">
          <div
            className="mx-auto text-center wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
              Sustainable Development Goals
            </div>
            <h1 className="mb-4">Artikel Tentang Urgensi Kami</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
              <div className="case-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src="/img/horizon.png" alt="" />
                <a
                  className="case-overlay text-decoration-none"
                  href="https://sdgs.un.org/goals/goal13"
                >
                  <small>Information</small>
                  <h5 className="lh-base text-white mb-3">
                    Take urgent action to combat climate change and its impacts
                  </h5>
                  <span className="btn btn-square btn-primary">
                    <i className="fa fa-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
              <div className="case-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src="/img/cloud-sky.jpg" alt="" />
                <a
                  className="case-overlay text-decoration-none"
                  href="https://sdgs.un.org/topics/climate-action-synergies"
                >
                  <small>Information</small>
                  <h5 className="lh-base text-white mb-3">
                    Climate Action and Synergies
                  </h5>
                  <span className="btn btn-square btn-primary">
                    <i className="fa fa-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.7s">
              <div className="case-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src="/img/bird-sky.jpg" alt="" />
                <a
                  className="case-overlay text-decoration-none"
                  href="https://sdgs.un.org/topics/atmosphere"
                >
                  <small>Information</small>
                  <h5 className="lh-base text-white mb-3">
                    Atmosphere and Climate Change SGDs United Nations
                  </h5>
                  <span className="btn btn-square btn-primary">
                    <i className="fa fa-arrow-right"></i>
                  </span>
                </a>
              </div>
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
                        <span>Developer</span>
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
                        <span>Developer</span>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* News */}
      <div className="container-fluid bg-primary newsletter py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div
              className="col-md-5 ps-lg-0 pt-5 pt-md-0 text-start wow fadeIn d-none d-md-block"
              data-wow-delay="0.3s"
            >
              <img className="img-fluid" src="/img/home_rocket.png" alt="" />
            </div>
            <div
              className="col-md-7 py-5 newsletter-text wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="btn btn-sm border rounded-pill text-white px-3 mb-3">
                Eduational Video
              </div>
              <h1 className="text-white mb-4">
                Ayo, intip sini buat nambah wawasanmu! 🌟
              </h1>
              <div className="position-relative w-100 mt-3 mb-2">
                <div className="video-container">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/QJK_DGlPD0Q?si=Zl-lexQBKjyi0sNA"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
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
