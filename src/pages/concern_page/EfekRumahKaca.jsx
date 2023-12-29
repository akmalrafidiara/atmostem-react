import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";

function EfekRumahKaca() {
  return (
    <>
      <Header />
      <Hero>
        <div className="btn btn-sm border rounded-pill text-white px-3 mb-3 animated slideInRight">
          ATMO.STEM
        </div>
        <h1 className="display-4 text-white mb-4 animated slideInRight">
          Efek rumah kaca
        </h1>
        <p className="text-white mb-4 animated slideInRight">
          Penggambaran singkat tentang pertukaran energi antara matahari,
          permukaan bumi, atmosfer bumi dan angkasa.
        </p>
      </Hero>
      {/* Pengertian Efek Rumah Kaca */}
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">Apa itu efek rumah kaca?</h1>
              <p className="mb-4">
                Efek rumah kaca adalah fenomena alam yang terjadi ketika gas-gas
                tertentu di atmosfer menahan panas dari matahari, menciptakan
                suhu yang lebih hangat di permukaan planet. Ini mirip dengan
                cara rumah kaca menjaga suhu di dalamnya tetap hangat.
              </p>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div>
                <img className="img-fluid" src="/img/steam_rumahkaca.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Asal Efek Rumah Kaca */}
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div>
                <img className="img-fluid" src="/img/concern_pabrik.png" />
              </div>
            </div>
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">Dari mana asal efek rumah kaca?</h1>
              <p className="mb-4">
                Efek rumah kaca berasal dari interaksi antara sinar matahari dan
                atmosfer bumi. Saat sinar matahari mencapai permukaan bumi,
                sebagian besar cahayanya diserap dan diubah menjadi panas.
                Kemudian, panas ini dilepaskan kembali ke atmosfer, tetapi
                sejumlah kecil gas rumah kaca, seperti karbon dioksida dan
                metana, menahan panas tersebut.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Terjadinya Efek Rumah Kaca */}
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">Bagaimana efek rumah kaca dapat terjadi?</h1>
              <p className="mb-4">
                Proses terjadinya efek rumah kaca dimulai ketika matahari
                memancarkan sinar ultraviolet ke Bumi. Sinar ini diserap oleh
                permukaan bumi dan dinyalakan kembali dalam bentuk panas. Namun,
                gas-gas rumah kaca di atmosfer menangkap panas ini, mencegahnya
                keluar dari atmosfer dan menciptakan kondisi pemanasan global.
              </p>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div>
                <img className="img-fluid" src="/img/udara_3.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Komponen Efek Rumah Kaca */}
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div>
                <img className="img-fluid" src="/img/concern_pabrik.png" />
              </div>
            </div>
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">Apa saja komponen efek rumah kaca?</h1>
              <p className="mb-4">
                Beberapa komponen utama efek rumah kaca melibatkan gas-gas
                seperti karbon dioksida (CO2), metana (CH4), dan uap air.
                Aktivitas manusia, seperti pembakaran bahan bakar fosil, secara
                signifikan meningkatkan konsentrasi gas-gas ini di atmosfer,
                memperkuat efek rumah kaca dan menyebabkan perubahan iklim.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Pencegahan Efek Rumah Kaca */}
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">Mencegah terjadinya efek rumah kaca</h1>
              <p className="mb-4">
                Untuk mencegah terjadinya efek rumah kaca yang berlebihan,
                sangat penting untuk mengurangi emisi gas-gas rumah kaca. Ini
                dapat dicapai dengan mengadopsi energi terbarukan, mengurangi
                penggunaan bahan bakar fosil, dan mendukung praktik-praktik
                ramah lingkungan. Kesadaran dan aksi kolektif dalam melibatkan
                diri dalam solusi berkelanjutan menjadi kunci untuk menjaga
                keseimbangan iklim dan melindungi planet kita.
              </p>
              <iframe
                src="https://cdn.climatechangetracker.org/embedding/yearly-human-induced-greenhouse-gas-emissions-in-co2-equivalent?theme=light&shadow=false"
                frameBorder="0"
                style={{ width: "100%", height: "500px" }}
                scrolling="no"
              ></iframe>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div>
                <img className="img-fluid" src="/img/earth.svg" />
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
                <div className="video-container">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/pVjXm340tbw?si=IY76xpld6sP-sdJ3"
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
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default EfekRumahKaca;
