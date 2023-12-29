import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Udara() {
  return (
    <>
      <Header />
      <Hero>
        <div className="btn btn-sm border rounded-pill text-white px-3 mb-3 animated slideInRight">
          ATMO.STEM
        </div>
        <h1 className="display-4 text-white mb-4 animated slideInRight">
          Udara
        </h1>
        <p className="text-white mb-4 animated slideInRight">
          Udara sebagai salah satu komponen penting dalam kehidupan manusia.
        </p>
      </Hero>
      {/* Opening */}
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">Apa itu Udara?</h1>
              <p className="mb-4">
                Udara adalah seperti sahabat tak terlihat yang selalu menyertai
                kita. Jika dilihat secara sederhana, itu hanyalah campuran gas
                yang menyelimuti Bumi dan menciptakan atmosfer. Jadi, setiap
                napas yang kita ambil adalah ciuman dari campuran magis ini.
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
      {/* Pengurangan Emisi */}
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div>
                <img className="img-fluid" src="/img/udara_2.png" />
              </div>
            </div>
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">Dari Mana Asal Udara?</h1>
              <p className="mb-4">
                Udara tidak muncul begitu saja; itu hasil dari pertunjukan luar
                biasa yang melibatkan tumbuhan yang melakukan fotosintesis untuk
                menghasilkan oksigen, aktivitas geologis di dalam Bumi yang
                memuntahkan sejumlah gas, dan ombak lautan yang menyumbang
                oksigen yang melimpah.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Opening */}
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">Bagaimana Udara Bekerja?</h1>
              <p className="mb-4">
                Bayangkan ini seperti pertukaran tugas yang rumit. Sinar
                matahari menjadi chef yang memasak, memanaskan udara di
                sekitarnya dan membuatnya naik. Udara dingin kemudian dengan
                antusias menggantikan tempat udara panas yang sudah naik,
                menciptakan tarian harmonis yang kita kenal sebagai angin.
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
      {/* Pengurangan Emisi */}
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div>
                <img className="img-fluid" src="/img/udara_4.png" />
              </div>
            </div>
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">Apa Saja Komponen Udara?</h1>
              <p className="mb-4">
                Ini bukan hanya kantong gas sembarangan. Nitrogen adalah bintang
                utama, membentuk 78% dari komposisi, diikuti oleh oksigen yang
                memberi semangat sekitar 21%. Ada juga argon, dan beberapa
                "penyelundup" gas lainnya. Jangan lupakan partikel debu dan uap
                air yang menambahkan dimensi ke eksistensi udara.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Opening */}
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">Pencemaran Udara</h1>
              <p className="mb-4">
                Dalam setiap kisah baik, pasti ada antagonis. Pencemaran udara
                terjadi ketika polutan seperti gas buang kendara dan limbah
                industri memutuskan untuk membuat kekacauan di dalam atmosfer.
                Ini bukan hanya masalah bagi lingkungan, tapi juga bagi
                kesehatan kita.
              </p>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div>
                <img className="img-fluid" src="/img/udara_5.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pengurangan Emisi */}
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div>
                <img className="img-fluid" src="/img/udara_6.png" />
              </div>
            </div>
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">Monitoring Udara</h1>
              <p className="mb-4">
                Ini seperti dokter pribadi untuk atmosfer. Alat canggih membantu
                kita mengukur kadar polutan seperti partikel halus, oksigen, dan
                karbon dioksida. Dengan pemantauan ini, kita bisa membuat
                keputusan bijak tentang cara kita berinteraksi dengan udara yang
                kita hirup setiap saat. Jadi, setiap napas yang kita ambil, kita
                tahu apa yang kita hirup.
              </p>
              <iframe
                src="https://earth.nullschool.net/#current/particulates/surface/currents/overlay=pm10/orthographic=-254.44,-3.59,1784/loc=107.185,-6.739"
                frameBorder="0"
                style={{ width: "100%", height: "500px" }}
                scrolling="no"
              ></iframe>
              <iframe
                src="https://waqi.info/#/c/0.088/108.586/5.6z"
                frameBorder="0"
                style={{ width: "100%", height: "500px" }}
                scrolling="no"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* Opening */}
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">Kenapa Terjadi Pencemaran Udara?</h1>
              <p className="mb-4">
                Pencemaran udara seperti drama berkepanjangan dengan alur cerita
                yang rumit. Aktivitas manusia seperti pembakaran bahan bakar
                fosil, limbah industri, dan deforestasi adalah pemeran utamanya.
                Mereka melepaskan senyawa beracun dan partikel yang mencemari
                atmosfer. Jadi, pencemaran udara seringkali disebabkan oleh
                kebiasaan manusia yang kurang ramah lingkungan.
              </p>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div>
                <img className="img-fluid" src="/img/udara_7.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pengurangan Emisi */}
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div>
                <img className="img-fluid" src="/img/udara_8.png" />
              </div>
            </div>
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">Apakah Pencemaran Udara Berbahaya?</h1>
              <p className="mb-4">
                Ini bukan sekadar peringatan merah di peta; ini tentang
                kehidupan dan kesehatan kita. Pencemaran udara dapat menyebabkan
                masalah pernapasan, alergi, dan bahkan penyakit serius seperti
                kanker paru-paru. Efeknya juga merambah ke ekosistem, mengancam
                flora dan fauna. Jadi, ya, pencemaran udara itu berbahaya dan
                membutuhkan tindakan segera.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Opening */}
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">Kaitan Udara dengan Angin</h1>
              <p className="mb-4">
                Angin adalah sahabat setia udara. Proses pemanasan dan
                pendinginan udara menciptakan perbedaan tekanan, yang memicu
                pergerakan udara atau, lebih dikenal sebagai angin. Ini adalah
                koreografi alam yang membantu menyebarkan panas, membawa hujan,
                dan menjaga sirkulasi energi di planet ini. Jadi, udara dan
                angin adalah duo dinamis yang saling terkait, menciptakan
                harmoni dalam sistem atmosfer.
              </p>
              <iframe
                src="https://earth.nullschool.net/#current/wind/isobaric/10hPa/orthographic=-249.56,-2.01,892/loc=107.185,-6.739"
                frameBorder="0"
                style={{ width: "100%", height: "500px" }}
                scrolling="no"
              ></iframe>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div>
                <img className="img-fluid" src="/img/udara_9.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* News */}
      <div className="container-fluid bg-primary newsletter py-5 mt-5">
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
                Jika oksigen hilang, apa yang akan terjadi? 😖
              </h1>
              <div className="position-relative w-100 mt-3 mb-2">
                <div className="video-container">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/HzLjuC_pNnc?si=cpMK0XkZu256cxTs"
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

export default Udara;
