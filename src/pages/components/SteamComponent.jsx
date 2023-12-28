import React from "react";

function SteamComponent() {
  return (
    <>
      {/* Science */}
      <div className="container-fluid mt-5">
        <div className="container">
          <h1 className="display-1 mb-5">
            <i className="fa fa-flask me-2"></i> Science
          </h1>
          <div className="row g-5 align-items-center">
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                Science
              </div>
              <h1 className="mb-4">
                Bagaimana bumi kita dilindungi oleh Atmosfer?
              </h1>
              <p className="mb-4">
                Atmosfer adalah lapisan gas-gas yang melibatkan planet, termasuk
                Bumi, yang terikat oleh gravitasi. Lapisan ini terdiri dari
                nitrogen, oksigen, argon, karbon dioksida, dan gas-gas lainnya.
                Atmosfer Bumi dibagi menjadi beberapa lapisan, termasuk
                troposfer, stratosfer, mesosfer, termosfer, dan eksosfer. Setiap
                lapisan memiliki karakteristik unik yang mempengaruhi cuaca,
                iklim, dan fenomena alam lainnya.
              </p>
              <p className="mb-4">
                Atmosfer berfungsi sebagai penopang kehidupan dengan menyediakan
                oksigen untuk respirasi dan melindungi planet dari radiasi
                berbahaya. Lebih dari itu, pemahaman atmosfer menjadi kunci
                dalam ilmu pengetahuan, memungkinkan peneliti untuk memahami
                dinamika cuaca, perubahan iklim, dan fenomena alam lainnya yang
                memengaruhi kehidupan di Bumi.
              </p>
              <a className="btn btn-primary rounded-pill px-4" href="/concern">
                Cari tau lebih lanjut tentang atmosfer
              </a>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div>
                <img className="img-fluid" src="/img/steam_atmosfer.png" />
              </div>
            </div>
          </div>
          <div className="row g-5 align-items-center mt-3">
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div>
                <img className="img-fluid" src="/img/steam_ozon.png" />
              </div>
            </div>
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                Science
              </div>
              <h1 className="mb-4">Lapisan Ozon</h1>
              <p className="mb-4">
                Lapisan ozon adalah bagian dari atmosfer Bumi yang terletak di
                stratosfer, di ketinggian sekitar 10 hingga 50 kilometer di atas
                permukaan. Lapisan ini mengandung molekul-molekul ozon (O3) yang
                membentuk perisai pelindung terhadap radiasi ultraviolet (UV)
                yang berasal dari Matahari. Fungsi utama lapisan ozon adalah
                menyerap sebagian besar radiasi UV-B dan UV-C yang dapat
                memiliki dampak negatif pada kehidupan di Bumi.
              </p>
              <a className="btn btn-primary rounded-pill px-4" href="/concern">
                Cari tau lebih lanjut tentang lapisan ozon
              </a>
            </div>
          </div>
          <div className="row g-5 align-items-center mt-3">
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                Science
              </div>
              <h1 className="mb-4">Efek Rumah Kaca</h1>
              <p className="mb-4">
                Efek rumah kaca adalah fenomena di mana gas-gas seperti karbon
                dioksida (CO2), metana (CH4), dan uap air menangkap sebagian
                radiasi panas Matahari yang dipantulkan oleh permukaan Bumi.
                Gas-gas ini memungkinkan cahaya matahari masuk ke atmosfer,
                namun mereka juga menghalangi sebagian panas yang dipancarkan
                oleh Bumi untuk keluar ke luar angkasa. Akibatnya, suhu global
                Bumi meningkat, menciptakan kondisi pemanasan yang dikenal
                sebagai efek rumah kaca.
              </p>
              <a className="btn btn-primary rounded-pill px-4" href="/concern">
                Cari tau lebih lanjut tentang efek rumah kaca
              </a>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div>
                <img className="img-fluid" src="/img/steam_rumahkaca.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Technology */}
      <div className="container-fluid mt-5">
        <div className="container">
          <h1 className="display-1 mb-5">
            <i className="fa fa-cogs me-2 mt-5"></i> Technology
          </h1>
          <div className="row g-5 align-items-center">
            <div className="col-lg-12 wow fadeIn" data-wow-delay="0.5s">
              <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                Technology
              </div>
              <h1 className="mb-4">Pengukuran Kualitas Udara</h1>
              <p className="mb-4">
                Pengukuran kualitas udara melibatkan penggunaan berbagai alat
                dan instrumen untuk menentukan konsentrasi berbagai komponen
                dalam udara yang dapat memengaruhi kesehatan manusia dan
                lingkungan.
              </p>
              <iframe
                src="https://waqi.info/id/#/c/-6.209/106.756/10.4z"
                frameBorder="0"
                style={{ width: "100%", height: "500px" }}
                scrolling="no"
              ></iframe>
            </div>
          </div>
          <div className="row g-5 align-items-center mt-3">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                Technology
              </div>
              <h1 className="mb-4">Teknologi untuk melindungi lapisan ozon</h1>
              <p className="mb-4">
                Teknologi untuk melindungi lapisan ozon mencakup berbagai
                inovasi dan prakarsa yang bertujuan untuk mengurangi produksi
                dan penggunaan senyawa kimia yang merusak ozon.
              </p>
              <iframe
                src="https://earth.nullschool.net/#current/chem/surface/currents/overlay=so2smass/orthographic=110.62,-1.74,528"
                frameBorder="0"
                style={{ width: "100%", height: "500px" }}
                scrolling="no"
              ></iframe>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="row g-5 align-items-center">
                <div className="col-lg-12 wow fadeIn" data-wow-delay="0.5s">
                  <h3 className="mb-4">Teknologi Penggantian Refrigeran</h3>
                  <p className="mb-4">
                    Teknologi untuk melindungi lapisan ozon mencakup berbagai
                    inovasi dan prakarsa yang bertujuan untuk mengurangi
                    produksi dan penggunaan senyawa kimia yang merusak ozon.
                  </p>
                  <img className="img-fluid" src="/img/steam_freon.png" />
                </div>
                <div className="col-lg-12 wow fadeIn" data-wow-delay="0.5s">
                  <h3 className="mb-4">
                    Teknologi Pembersihan dan Pengolahan Udara
                  </h3>
                  <p className="mb-4">
                    Penggunaan sistem penyaringan dan teknologi pengolahan udara
                    di berbagai industri membantu mengurangi pelepasan zat-zat
                    kimia berbahaya ke atmosfer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Engineering */}
      <div className="container-fluid mt-5">
        <div className="container">
          <h1 className="display-1 mb-5 mt-5">
            <i className="fa fa-tools me-2"></i> Engineering
          </h1>
          <div className="row g-5 align-items-center">
            <div className="col-lg-12 wow fadeIn" data-wow-delay="0.5s">
              <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                Engineering
              </div>
              <h1 className="mb-4">Desain Penjernih Udara</h1>
              <p className="mb-4">
                Kualitas udara merupakan aspek vital bagi kesehatan manusia,
                terutama karena banyaknya polutan di udara yang dapat
                menyebabkan berbagai masalah pernapasan dan kesehatan lainnya.
                Dalam lingkungan perkotaan yang padat penduduk, peningkatan
                polusi udara sering kali menjadi perhatian utama. Oleh karena
                itu, perlu dikembangkan solusi inovatif untuk meningkatkan
                kualitas udara dalam ruangan.
              </p>
            </div>
            <div className="col-lg-12 wow fadeIn" data-wow-delay="0.5s">
              <div className="row g-5 align-items-center">
                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                  <h4 className="mb-4">Filter Partikel Halus</h4>
                  <p className="mb-4">
                    Alat ini dilengkapi filter HEPA untuk menangkap partikel
                    halus dan polutan. Filter dapat diganti dengan mudah,
                    memberikan kenyamanan pengguna dalam perawatan.
                  </p>
                </div>
                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                  <h4 className="mb-4">Sistem Penyaringan Gas</h4>
                  <p className="mb-4">
                    Menggunakan teknologi karbon aktif untuk menyerap gas
                    berbahaya. Dilengkapi dengan indikator untuk memonitor
                    tingkat polutan udara secara real-time.
                  </p>
                </div>
                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                  <h4 className="mb-4">Teknologi Sensor</h4>
                  <p className="mb-4">
                    Integrasi sensor kualitas udara (CO2, kelembaban, suhu)
                    memungkinkan alat menyesuaikan kecepatan penghisap otomatis
                    sesuai hasil pengukuran.
                  </p>
                </div>
                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                  <h4 className="mb-4">Desain Aerodinamis</h4>
                  <p className="mb-4">
                    Desain saluran udara efisien memaksimalkan sirkulasi udara
                    dan menerapkan prinsip aerodinamika untuk efisiensi energi.
                  </p>
                </div>
                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                  <h4 className="mb-4">Sistem Pemurnian UV-C</h4>
                  <p className="mb-4">
                    Dilengkapi lampu UV-C untuk membunuh bakteri dan virus,
                    dengan sensor keselamatan yang mematikan lampu saat alat
                    dibuka.
                  </p>
                </div>
                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                  <h4 className="mb-4">Konsumsi Energi Rendah</h4>
                  <p className="mb-4">
                    Mengoptimalkan efisiensi energi dengan motor penghisap hemat
                    energi dan mode hemat energi yang dapat diaktifkan.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-12 wow fadeIn" data-wow-delay="0.5s">
              <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                  <h2 className="mb-4">
                    Membuat Alat Penyaring Udara Sederhana
                  </h2>
                  <p className="mb-4">
                    Dalam membuat alat penyaring udara sederhana, kita dapat
                    memanfaatkan bahan-bahan yang mudah didapatkan di sekitar
                    kita. Dengan demikian kita dapat menjaga diri kita dari
                    udara yang tidak sehat.
                  </p>
                </div>
                <div className="col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                  <h4 className="mb-4">Menggunakan Kain</h4>
                  <img
                    className="img-fluid"
                    src="/img/steam_udarasederhana1.png"
                  />
                </div>
                <div className="col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                  <h4 className="mb-4">Menggunakan media air</h4>
                  <img
                    className="img-fluid"
                    src="/img/steam_udarasederhana2.png"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-12 wow fadeIn" data-wow-delay="0.5s">
              <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                Engineering
              </div>
              <h1 className="mb-4">Rekayasa Lingkungan</h1>
              <p className="mb-4">
                Penyediaan wawasan dan himbauan mengenai bagaimana rekayasa
                lingkungan dapat digunakan untuk mengurangi polusi udara dan
                memitigasi efek rumah kaca menjadi kunci dalam menjaga
                keseimbangan ekosistem kita. Rekayasa lingkungan melibatkan
                penerapan solusi teknologi untuk merancang sistem yang lebih
                efisien dan ramah lingkungan.
              </p>
              <h3 className="mb-4">Bagaimana caranya?</h3>
              <ul>
                <li>
                  Inovasi Teknologi: Pengembangan teknologi yang ramah
                  lingkungan, seperti kendaraan listrik, energi terbarukan, dan
                  sistem pengelolaan limbah yang efisien.
                </li>
                <li>
                  Desain Kota Berkelanjutan: Membangun kota yang berfokus pada
                  transportasi massal, taman kota, dan arsitektur ramah
                  lingkungan untuk mengurangi emisi gas rumah kaca.
                </li>
                <li>
                  Penggunaan Bahan Ramah Lingkungan: Memilih bahan konstruksi
                  dan produk yang memiliki dampak lingkungan lebih kecil selama
                  siklus hidupnya.
                </li>
                <li>
                  Pengelolaan Limbah yang Efektif: Implementasi sistem
                  pengelolaan limbah yang canggih untuk mengurangi pencemaran
                  udara dari limbah industri dan domestik.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Art */}
      <div className="container-fluid mt-5">
        <div className="container">
          <h1 className="display-1 mb-5 mt-5">
            <i className="fa fa-tools me-2"></i> Art
          </h1>
          <div className="row g-5 align-items-center">
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
              <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                Art
              </div>
              <h1 className="mb-4">Climate Time Machine By Nasa</h1>
              <p>
                Permainan interaktif yang dibuat oleh nasa tentang perubahan
                iklim yang terjadi di bumi ini dari tahun ke tahun. Kamu bisa
                lihat perubahan bumi ini dibeberapa aspek loh, ayo coba
                sekarang!
              </p>
            </div>
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <div className="interactive-container mb-5">
                <iframe
                  src="https://climate.nasa.gov/interactives/climate_time_machine"
                  frameborder="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mathematics */}
      <div className="container-fluid mt-5">
        <div className="container">
          <h1 className="display-1 mb-5 mt-5">
            <i className="fa fa-tools me-2"></i> Mathematics
          </h1>
          <div className="row g-5 align-items-center">
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                Mathematics
              </div>
              <h1 className="mb-4">Perhitungan Kuantitatif</h1>
              <p className="mb-4">
                Dalam era perkembangan industri, perubahan suhu global menjadi
                perhatian utama, terutama seiring meningkatnya emisi gas rumah
                kaca. Dalam artikel ini, kita akan menjelaskan bagaimana
                menghitung secara kuantitatif kontribusi peningkatan emisi CO2
                terhadap perubahan suhu global, dengan memperhatikan
                faktor-faktor seperti GWP dan sensitivitas iklim.
              </p>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div>
                <img className="img-fluid" src="/img/steam_math.png" />
              </div>
            </div>
          </div>
          <div className="row g-5 align-items-start">
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
              <h4 className="mb-4">Langkah 1: Kuantifikasi Emisi CO2</h4>
              <p className="mb-4">
                Pertama-tama, mari fokus pada jumlah emisi CO2 yang dilepaskan
                ke atmosfer sebagai hasil dari aktivitas manusia, seperti
                pembakaran bahan bakar fosil. Misalkan ada peningkatan emisi
                sebesar X ton.
              </p>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
              <h4 className="mb-4">
                Langkah 2: Menggunakan Faktor Pemanasan Global (GWP)
              </h4>
              <p>
                GWP merupakan faktor kunci yang mengukur potensi pemanasan
                global suatu gas dibandingkan dengan CO2. Untuk CO2, GWP
                dianggap sebagai 1. Jika kita memiliki X ton CO2 dengan GWP 100,
                kita dapat menghitung Kontribusi Pemanasan Global (CG) dengan
                menggunakan rumus
              </p>
              <p className="equation">CG = X &times; GWP</p>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
              <h4 className="mb-4">
                Langkah 3: Pengaruh Pemanasan Global terhadap Suhu
              </h4>
              <p>
                Kontribusi Pemanasan Global (CG) bukanlah akhir dari kalkulasi.
                Sensitivitas iklim, yang diukur oleh parameter seperti Transient
                Climate Response (TCR), memainkan peran penting. Dalam rumus
              </p>
              <p class="equation">&Delta;T = CG &times; TCR, &Delta;T</p>
              <p className="mb-4">
                menggambarkan perubahan suhu, dan X dan Y adalah nilai-nilai
                yang kita dapatkan dari langkah-langkah sebelumnya.
              </p>
            </div>
          </div>
          <div className="row g-5 align-items-center">
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
              <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                Mathematics
              </div>
              <h1 className="mb-4">Data pencemaran udara</h1>
              <p className="mb-4">
                Kalo kamu lihat grafik ini apakah kamu memiliki rasa untuk
                menuntaskan semua masalah ini?
              </p>
            </div>
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.1s">
              <iframe
                src="https://cdn.climatechangetracker.org/embedding/human-induced-yearly-co2-emissions?theme=light&shadow=false"
                scrolling="no"
                frameBorder="0"
                style={{ width: "100%", height: "400px" }}
              ></iframe>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
              <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                Mathematics
              </div>
              <h1 className="mb-4">Bagaimana dengan grafik ini?</h1>
              <p className="mb-4">
                Sekarang kamu sadar bagaimana udara yang masuk setiap hari ke
                dalam paru-paru kamu bukan udara yang sehat.
              </p>
            </div>
            <div className="col-lg-8 wow fadeIn mb-5" data-wow-delay="0.1s">
              <iframe
                src="https://aqicn.org/map/world/id/"
                scrolling="no"
                frameBorder="0"
                style={{ width: "100%", height: "400px" }}
              ></iframe>
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
                Dampak dari polusi udara terhadap kesehatan kamu 🚩
              </h1>
              <div className="position-relative w-100 mt-3 mb-2">
                <div className="video-container">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/GVBeY1jSG9Y?si=67wGxW_xwIJE_i_T"
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
    </>
  );
}

export default SteamComponent;
