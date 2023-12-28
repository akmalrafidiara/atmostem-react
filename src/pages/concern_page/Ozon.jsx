import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Ozon() {
  return (
    <>
      <Header />
      <Hero>
        <div className="btn btn-sm border rounded-pill text-white px-3 mb-3 animated slideInRight">
          ATMO.STEM
        </div>
        <h1 className="display-4 text-white mb-4 animated slideInRight">
          Lapisan Ozon
        </h1>
        <p className="text-white mb-4 animated slideInRight">
          Lapisan ozon adalah lapisan di atmosfer pada ketinggian 20−35 km di
          atas permukaan Bumi yang mengandung molekul-molekul ozon.
        </p>
      </Hero>
      {/* Pengertian Lapisan Ozon */}
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">Apa itu Lapisan Ozon?</h1>
              <p className="mb-4">
                Lapisan ozon adalah suatu lapisan di atmosfer Bumi yang terdiri dari molekul ozon (O3). Terletak di stratosfer, lapisan ini memainkan peran krusial dalam melindungi kehidupan di Bumi dengan menyerap sebagian besar radiasi ultraviolet (UV) berbahaya dari matahari.
              </p>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div>
                <img className="img-fluid" src="/img/udara_1.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* lapisan Ozon Bekerja */}
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div>
                <img className="img-fluid" src="/img/udara_2.png" />
              </div>
            </div>
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">Bagaimana Lapisan Ozon Bekerja?</h1>
              <p className="mb-4">
                Ozon di lapisan ozon berasal dari proses fotosintesis oleh tumbuhan dan alga laut. Oksigen (O2) yang dihasilkan dari proses ini kemudian berinteraksi dengan sinar ultraviolet (UV) dari matahari, membentuk ozon (O3) di stratosfer.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Komponen Lapisan Ozon */}
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">Apa Saja Komponen Lapisan Ozon?</h1>
              <p className="mb-4">
                Komponen utama lapisan ozon adalah molekul ozon (O3) yang membentuk lapisan di stratosfer. Selain itu, gas-gas lain seperti nitrogen oksida (NO), klorin (Cl), dan bromin (Br) juga dapat berkontribusi pada pembentukan dan penipisan lapisan ozon.
              </p>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div>
                <img className="img-fluid" src="/img/udara_1.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Penipisan Lapisan Ozon */}
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div>
                <img className="img-fluid" src="/img/udara_2.png" />
              </div>
            </div>
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">Penipisan Lapisan Ozon</h1>
              <p className="mb-4">
                Penipisan lapisan ozon terjadi ketika jumlah zat-zat kimia seperti CFCs (chlorofluorocarbons), halon, dan bromin berlebihan di atmosfer. Zat-zat ini merusak molekul ozon dan menyebabkan penurunan konsentrasi lapisan ozon.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Komponen Lapisan Ozon */}
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">Memperbaiki Keadaan Lapisan Ozon</h1>
              <p className="mb-4">
              Upaya global telah dilakukan untuk mengatasi penipisan lapisan ozon. Perjanjian internasional seperti Protokol Montreal melarang atau membatasi produksi dan penggunaan zat-zat yang merusak lapisan ozon. Langkah-langkah ini penting untuk memastikan pemulihan dan keberlanjutan lapisan ozon di masa mendatang.
              </p>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div>
                <img className="img-fluid" src="/img/udara_1.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
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
                  <i className="fa fa-globe-asia fa-2x"></i>
                </div>
                <h5 className="mb-3">Atmosfer</h5>
                <p>
                  Bumi tanpa atmosfer mungkin kita sudah terbakar radiasi
                  matahari, tapi mengapa ya?
                </p>
                <a className="btn px-3 mt-auto mx-auto" href="/atmosfer">
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
                Educational Video
              </div>
              <h1 className="text-white mb-4">
                Ayo, intip sini buat nambah wawasanmu! 🌟
              </h1>
              <div className="position-relative w-100 mt-3 mb-2">
                <div className="short-container">
                  {/* youtube short */}
                  <div className="youtube-short">
                    <iframe
                      width="315"
                      height="560"
                      src="https://youtube.com/shorts/9gCr1j-Yc3c?si=sR00cK1eOnt2HP8S"
                      title="YouTube short player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen=""
                    ></iframe>
                  </div>
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

export default Ozon;
