import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";

function StopClimateChange() {
  return (
    <>
      <Header />
      <Hero>
        <div className="btn btn-sm border rounded-pill text-white px-3 mb-3 animated slideInRight">
          ATMO.STEM
        </div>
        <h1 className="display-4 text-white mb-4 animated slideInRight">
          Mengatasi Perubahan Iklim
        </h1>
        <p className="text-white mb-4 animated slideInRight">
          Mari kita bahas tuntas bagaimana cara kita mengatasi permasalahan ini
          terutama dalam lingkup udara dan atmosfer.
        </p>
      </Hero>
      {/* Opening */}
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">
                Bagaimana Cara Mengatasi Perubahan Iklim?
              </h1>
              <p className="mb-4">
                Mengatasi perubahan iklim, khususnya dalam aspek udara dan
                atmosfer, memerlukan tindakan holistik yang melibatkan individu,
                pemerintah, dan sektor swasta.
              </p>
              <p className="mb-4">
                Namun dari itu semua, yang terpenting ialah kesadaran dari akan
                pentingnya menjaga lingkungan dan udara kita. Dengan kesadaran
                tersebut, kita dapat mengurangi emisi gas rumah kaca dan
                mengurangi pemanasan global.
              </p>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div>
                <img className="img-fluid" src="/img/scc_nyiram.png" />
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
                <img className="img-fluid" src="/img/scc_panel.png" />
              </div>
            </div>
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">Pengurangan Emisi Gas Rumah Kaca</h1>
              <p className="mb-4">
                <strong style={{ color: "#14183e" }}>
                  Transisi ke Energi Terbarukan:
                </strong>
                Mendorong penggunaan sumber energi terbarukan, seperti energi
                matahari, angin, dan hidro, untuk menggantikan bahan bakar fosil
                yang menghasilkan emisi gas rumah kaca.
              </p>
              <p className="mb-4">
                <strong style={{ color: "#14183e" }}>Efisiensi Energi: </strong>
                Memajukan teknologi dan praktik efisiensi energi di
                sektor-sektor kunci, seperti industri, transportasi, dan
                bangunan, untuk mengurangi konsumsi energi dan emisi.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Pengelolaan Hutan */}
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">Pengelolaan Hutan dan Lahan</h1>
              <p className="mb-4">
                <strong style={{ color: "#14183e" }}>
                  Pencegahan Deforestasi:{" "}
                </strong>
                Melindungi hutan-hutan yang ada dan mencegah deforestasi melalui
                regulasi dan praktik keberlanjutan.
              </p>
              <p className="mb-4">
                <strong style={{ color: "#14183e" }}>Reforestasi: </strong>
                Melakukan penanaman kembali pohon dan hutan untuk meningkatkan
                penyerapan karbon dan memperbaiki ekosistem.
              </p>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div>
                <img className="img-fluid" src="/img/scc_map.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pengelolaan Limbah */}
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div>
                <img className="img-fluid" src="/img/scc_trash.png" />
              </div>
            </div>
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">Pengelolaan Limbah</h1>
              <p className="mb-4">
                <strong style={{ color: "#14183e" }}>
                  Daur Ulang dan Pengelolaan Limbah:{" "}
                </strong>
                Mendorong praktik daur ulang yang lebih luas, pengurangan
                limbah, dan peningkatan pengelolaan limbah untuk mengurangi
                emisi metana dari pembuangan sampah.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Transportasi */}
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">Pengembangan Transportasi Berkelanjutan</h1>
              <p className="mb-4">
                <strong style={{ color: "#14183e" }}>
                  Promosi Transportasi Publik:{" "}
                </strong>
                Mendorong penggunaan transportasi publik, bersepeda, dan
                berjalan kaki untuk mengurangi emisi dari kendaraan bermotor.
              </p>
              <p className="mb-4">
                <strong style={{ color: "#14183e" }}>
                  Penggunaan Kendaraan Ramah{" "}
                </strong>
                Lingkungan: Mendorong adopsi kendaraan listrik atau berbahan
                bakar alternatif yang lebih ramah lingkungan.
              </p>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div>
                <img className="img-fluid" src="/img/scc_ev.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Teknologi Penangkapan */}
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div>
                <img className="img-fluid" src="/img/scc_ccs.png" />
              </div>
            </div>
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">
                Teknologi Penangkapan dan Penyimpanan Karbon (CCS)
              </h1>
              <p className="mb-4">
                <strong style={{ color: "#14183e" }}>
                  Penelitian dan Pengembangan CCS:{" "}
                </strong>
                Investasi dalam teknologi CCS untuk menangkap emisi karbon dari
                sumber-sumber besar seperti pabrik dan pembangkit listrik.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Pendidikan */}
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">Pendidikan dan Kesadaran Masyarakat</h1>
              <p className="mb-4">
                <strong style={{ color: "#14183e" }}>
                  Kampanye Pendidikan Iklim:{" "}
                </strong>
                Meningkatkan kesadaran masyarakat tentang perubahan iklim,
                dampaknya, dan tindakan individu yang dapat diambil untuk
                mengurangi jejak karbon mereka.
              </p>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div>
                <img className="img-fluid" src="/img/scc_pendidikan.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pendidikan */}
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div>
                <img className="img-fluid" src="/img/scc_dokumen.png" />
              </div>
            </div>
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">Pengembangan Kebijakan Lingkungan</h1>
              <p className="mb-4">
                <strong style={{ color: "#14183e" }}>
                  Pengaturan dan Insentif:{" "}
                </strong>
                Menerapkan kebijakan yang mendukung energi terbarukan,
                pengelolaan hutan yang berkelanjutan, dan praktik-praktik
                lingkungan yang baik melalui insentif dan regulasi.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Kerjasama */}
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">Kerjasama Global</h1>
              <p className="mb-4">
                <strong style={{ color: "#14183e" }}>
                  Perjanjian Internasional:{" "}
                </strong>
                Berpartisipasi dalam perjanjian dan kerjasama internasional
                untuk mengatasi perubahan iklim secara bersama-sama, seperti
                Kesepakatan Paris.
              </p>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div>
                <img className="img-fluid" src="/img/scc_kerjasama.png" />
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
                    src="https://www.youtube.com/embed/29jyaPIWzFI?si=qlNtzYUksZYBFIUd"
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
          <div className="row g-5 align-items-center py-5">
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

export default StopClimateChange;
