import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Concern() {
  return (
    <>
      <Header />
      <Hero>
        <div className="btn btn-sm border rounded-pill text-white px-3 mb-3 animated slideInRight">
          ATMO.STEM
        </div>
        <h1 className="display-4 text-white mb-4 animated slideInRight">
          Concern Atmostem
        </h1>
        <p className="text-white mb-4 animated slideInRight">
          Inilah fokus kami dalam mengatasi permasalahan yang ada di Bumi ini.
        </p>
      </Hero>
      {/* About atmosfer */}
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">Atmosfer</h1>
              <p className="mb-4">
                Atmosfer adalah lapisan gas-gas yang melingkupi planet, seperti
                Bumi. Terdiri dari nitrogen, oksigen, dan sejumlah kecil gas
                lainnya, atmosfer bertindak sebagai perisai dan memainkan peran
                kunci dalam menjaga kondisi lingkungan yang mendukung kehidupan
                kita.
              </p>
              <a className="btn btn-primary rounded-pill px-4" href="/concern">
                Selengkapnya tentang atmosfer
              </a>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div>
                <img className="img-fluid" src="/img/concern_atmosfer.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pemanasan Bumi */}
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div>
                <img className="img-fluid" src="/img/concern_industri.png" />
              </div>
            </div>
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">Pemanasan Bumi</h1>
              <p className="mb-4">
                Pemanasan global, atau pemanasan bumi, adalah peningkatan suhu
                rata-rata permukaan bumi. Fenomena ini terkait erat dengan
                peningkatan konsentrasi gas rumah kaca di atmosfer, seperti
                karbon dioksida dan metana, yang meningkatkan kemampuan atmosfer
                untuk menahan panas. Aktivitas manusia, seperti pembakaran bahan
                bakar fosil dan deforestasi, berkontribusi besar terhadap
                peningkatan konsentrasi gas-gas ini.
              </p>
              <p className="mb-4">
                Efek rumah kaca menyebabkan peningkatan suhu global dan berbagai
                dampak termasuk perubahan iklim, naiknya permukaan laut,
                intensitas badai yang lebih besar, dan perubahan pola cuaca.
                Pemanasan global juga dapat memicu perubahan ekosistem, termasuk
                migrasi spesies dan penurunan keanekaragaman hayati.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Data Pemanasan Bumi */}
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-12 wow fadeIn" data-wow-delay="0.5s">
              <iframe
                src="https://cdn.climatechangetracker.org/embedding/yearly-average-temperature-anomaly?theme=light&tempunit=c&shadow=false"
                scrolling="no"
                frameBorder="0"
                style={{ width: "100%", height: "400px" }}
              ></iframe>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <p className="mb-4">
                Dapat teramati dari grafik di atas bahwa suhu rata-rata bumi
                mengalami peningkatan yang konsisten dari tahun ke tahun.
                Penyebab utama dari perubahan ini adalah pemanasan global, yang
                dipicu oleh sejumlah faktor termasuk aktivitas manusia seperti
                pembakaran bahan bakar fosil. Pertumbuhan suhu yang signifikan,
                sekitar 0.2 derajat Celsius per dekade sejak tahun 1980-an,
                menunjukkan eskalasi dampak pemanasan global yang perlu
                mendapatkan perhatian serius dalam upaya perlindungan lingkungan
                dan mitigasi perubahan iklim.
              </p>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <iframe
                src="https://cdn.climatechangetracker.org/embedding/rate-of-change?theme=light&tempunit=c&shadow=false"
                scrolling="no"
                frameBorder="0"
                style={{ width: "100%", height: "400px" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* Pemanasan Bumi */}
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div>
                <img className="img-fluid" src="/img/concern_kesehatan.png" />
              </div>
            </div>
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">Bahayanya zat kimia dalam udara</h1>
              <p className="mb-4">
                Gas rumah kaca, yang termasuk di dalamnya seperti karbon
                dioksida (CO2), metana (CH4), dan nitrogen oksida (NOx),
                merupakan ancaman serius terhadap kesehatan manusia ketika
                terkait dengan polusi udara. Gas-gas ini berperan dalam
                meningkatkan efek rumah kaca, menyebabkan perubahan iklim
                global, dan memberikan dampak negatif pada kesehatan manusia.
              </p>
              <iframe
                src="https://cdn.climatechangetracker.org/embedding/monthly-greenhouse-gases-impact-on-energy-balance?theme=light&shadow=false"
                scrolling="no"
                frameBorder="0"
                style={{ width: "100%", height: "400px" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* Penyebab */}
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-12 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">Tapi siapa penyebabnya?</h1>
              <p className="">
                Penyebab utama dari peningkatan gas rumah kaca di atmosfer
                berasal dari aktivitas manusia yang menghasilkan emisi gas-gas
                tersebut.
              </p>
              <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                  {/* Item Penyebab */}
                  <div className="row g-5 align-items-center">
                    <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
                      <h4>Pembakaran Bahan Bakar Fosil</h4>
                      <p className="mb-4">
                        Penggunaan bahan bakar fosil seperti batu bara, minyak,
                        dan gas alam untuk keperluan energi adalah penyebab
                        utama emisi gas rumah kaca. Proses ini terjadi dalam
                        sektor energi, transportasi, dan industri.
                      </p>
                    </div>
                    <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                      <div>
                        <img
                          className="img-fluid"
                          src="/img/concern_fosil.png"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Item Penyebab */}
                  <div className="row g-5 align-items-center">
                    <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
                      <h4>Deforestasi</h4>
                      <p className="mb-4">
                        Penebangan hutan secara besar-besaran atau deforestasi
                        menyebabkan hilangnya pohon-pohon yang sebelumnya dapat
                        menyerap karbon dioksida (CO2) dari atmosfer. Dengan
                        berkurangnya jumlah pohon, kapasitas alam untuk menyerap
                        gas rumah kaca menurun.
                      </p>
                    </div>
                    <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                      <div>
                        <img
                          className="img-fluid"
                          src="/img/concern_deforestasi.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                  {/* Item Penyebab */}
                  <div className="row g-5 align-items-center">
                    <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
                      <h4>Pertanian</h4>
                      <p className="mb-4">
                        Praktik pertanian, terutama produksi ternak, dapat
                        menghasilkan metana (CH4), gas rumah kaca yang lebih
                        poten. Proses fermentasi dalam saluran pencernaan hewan
                        ternak adalah sumber utama emisi metana dari sektor
                        pertanian.
                      </p>
                    </div>
                    <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                      <div>
                        <img
                          className="img-fluid"
                          src="/img/concern_ternak2.png"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Item Penyebab */}
                  <div className="row g-5 align-items-center">
                    <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
                      <h4>Industri</h4>
                      <p className="mb-4">
                        Proses industri seperti produksi semen, peleburan logam,
                        dan kimia juga berkontribusi pada emisi gas rumah kaca,
                        terutama karbon dioksida.
                      </p>
                    </div>
                    <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                      <div>
                        <img
                          className="img-fluid"
                          src="/img/concern_pabrik.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pemakaian manusia */}
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div>
                <img className="img-fluid" src="/img/concern_bumiapi.png" />
              </div>
            </div>
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">Dampak yang kita timbulkan</h1>
              <p className="mb-4">
                Bagaimana bisa kita sebagai manusia dapat menyebabkan dampak
                perubahan iklim ini? padahal rumah kita satu-satunya hanya bumi
                ini, tapi kenapa kita mulai merusaknya?.
              </p>
              <iframe
                src="https://cdn.climatechangetracker.org/embedding/human-induced-yearly-co2-emissions?theme=light&shadow=false"
                scrolling="no"
                frameBorder="0"
                style={{ width: "100%", height: "400px" }}
              ></iframe>
            </div>
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <iframe
                src="https://cdn.climatechangetracker.org/embedding/breakdown-yearly-human-induced-co2-emissions?theme=light&shadow=false"
                scrolling="no"
                frameBorder="0"
                style={{ width: "100%", height: "400px" }}
              ></iframe>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
              <p>
                Dari grafik di atas, kita bisa lihat bahwa manusia banyak sekali
                menyumbang emisi gas rumah kaca ke atmosfer. Dari berbagai
                sektor, sektor energi adalah penyumbang terbesar emisi gas rumah
                kaca, diikuti oleh sektor industri dan transportasi.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Akibat */}
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-12 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">Lalu kemana perginya semua emisi itu?</h1>
              <p className="mb-4">
                Mari kita perhatikan dan telaah secara mendalam grafik yang
                menggambarkan penyebaran emisi gas CO2 yang dihasilkan setiap
                tahun. Grafik ini mencerminkan dampak besar yang kita timbulkan
                terhadap lingkungan dan atmosfer.
              </p>
              <iframe
                src="https://cdn.climatechangetracker.org/embedding/yearly-absorption-of-human-induced-co2-emissions?theme=light&shadow=false"
                scrolling="no"
                frameBorder="0"
                style={{ width: "100%", height: "400px" }}
              ></iframe>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <p className="mb-4">
                NOOO TIDAAAKKK!! Atmosfer-lah yang bekerja paling keras dalam
                menyerap semua emisi CO2 yang kita hasilkan di bumi ini. Setiap
                tahun, jumlah emisi CO2 yang dilepaskan ke atmosfer terus
                meningkat, menciptakan ketidakseimbangan yang signifikan dalam
                ekosistem global.
              </p>
              <p className="mb-4">
                Hal ini benar benar sangat berbahaaya, karena atmosfer ketika
                atmosfer menyerap begitu banyak emisi CO2, maka atmosfer akan
                menjadi lebih panas, dan hal ini akan menyebabkan pemanasan
                global.
              </p>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <iframe
                src="https://cdn.climatechangetracker.org/embedding/yearly-atmospheric-co2-increase?theme=light&shadow=false"
                scrolling="no"
                frameBorder="0"
                style={{ width: "100%", height: "400px" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* Apa yg akan terjadi */}
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">Apa yang akan terjadi?</h1>
              <p className="mb-4">
                Jika atmosfer yang menjadi lapisan pelindung kita mulai rusak,
                kita sebagai manusia yang tinggal di planet bumi ini akan sangat
                terancam. Kita akan terancam oleh radiasi matahari, kita akan
                terancam oleh suhu yang sangat panas, dan bisa saja tempat
                tinggal kita sekarang ini terendam air laut.
              </p>
              <p className="mb-4">
                Karena sangking panasnya bumi kita ini, es yang bebada di kutub
                utara dan kutub selatan bumi akan mencair, dan hal ini akan
                menyebabkan permukaan air laut akan naik, dan bisa saja tempat
                tinggal kita sekarang ini terendam air laut. Entah berapa lama
                lagi kita bisa bertahan hidup di bumi ini.
              </p>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div>
                <img className="img-fluid" src="/img/concern_cair.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Penyebab */}
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-12 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">
                What if (
                <span style={{ color: "#EC5F87" }}>Global Warming Menang</span>)
              </h1>
              <p className="">
                Jika global warming terus meningkat tanpa upaya serius untuk
                memitigasinya, dampaknya akan sangat serius dan merugikan.
                Beberapa potensi konsekuensi dari kemenangan global warming ini
                melibatkan perubahan signifikan dalam sistem iklim, lingkungan,
                dan kehidupan manusia.
              </p>
              <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                  {/* Item Penyebab */}
                  <div className="row g-5 align-items-center">
                    <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
                      <h4>Peningkatan Suhu Global</h4>
                      <p className="mb-4">
                        Suhu rata-rata permukaan bumi akan terus meningkat,
                        menyebabkan perubahan iklim yang drastis. Ini dapat
                        mengakibatkan gelombang panas yang lebih sering dan
                        intens, perubahan pola curah hujan, dan cuaca ekstrem
                        lainnya.
                      </p>
                    </div>
                    <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                      <div>
                        <img
                          className="img-fluid"
                          src="/img/concern_panas.png"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Item Penyebab */}
                  <div className="row g-5 align-items-center">
                    <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
                      <h4>Kenaikan Permukaan Air Laut</h4>
                      <p className="mb-4">
                        Pemanasan global dapat menyebabkan pelelehan es di kutub
                        dan gletser, yang pada gilirannya akan menyebabkan
                        kenaikan permukaan air laut. Kenaikan air laut dapat
                        mengancam pulau-pulau kecil, pesisir, dan kota-kota di
                        seluruh dunia.
                      </p>
                    </div>
                    <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                      <div>
                        <img
                          className="img-fluid"
                          src="/img/concern_banjir.png"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Item Penyebab */}
                  <div className="row g-5 align-items-center">
                    <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
                      <h4>Kerusakan Ekosistem</h4>
                      <p className="mb-4">
                        Perubahan suhu dan pola hujan dapat mengakibatkan
                        kerusakan pada ekosistem di darat dan laut. Ini dapat
                        mempengaruhi keberlanjutan hayati dan menyebabkan
                        kepunahan massal pada berbagai spesies.
                      </p>
                    </div>
                    <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                      <div>
                        <img
                          className="img-fluid"
                          src="/img/concern_ekosistem.png"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Item Penyebab */}
                  <div className="row g-5 align-items-center">
                    <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
                      <h4>Perubahan dalam Pola Cuaca</h4>
                      <p className="mb-4">
                        Peningkatan suhu dapat mengubah pola sirkulasi atmosfer,
                        mempengaruhi musim dan pola cuaca. Hal ini dapat
                        menyebabkan periode kemarau yang lebih panjang, banjir
                        yang lebih sering, dan peningkatan kejadian cuaca
                        ekstrem.
                      </p>
                    </div>
                    <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                      <div>
                        <img
                          className="img-fluid"
                          src="/img/concern_cuaca.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                  {/* Item Penyebab */}
                  <div className="row g-5 align-items-center">
                    <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
                      <h4>Ancaman Terhadap Kesehatan Manusia</h4>
                      <p className="mb-4">
                        Peningkatan suhu dan perubahan lingkungan dapat membawa
                        dampak negatif pada kesehatan manusia, seperti
                        peningkatan kasus penyakit menular, khususnya di daerah
                        yang lebih hangat.
                      </p>
                    </div>
                    <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                      <div>
                        <img
                          className="img-fluid"
                          src="/img/concern_kesehatan.png"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Item Penyebab */}
                  <div className="row g-5 align-items-center">
                    <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
                      <h4>Krisis Pangan</h4>
                      <p className="mb-4">
                        Perubahan iklim dapat mempengaruhi produksi pangan
                        dengan merusak pertanian dan perikanan. Krisis pangan
                        dapat terjadi akibat penurunan hasil tanaman dan
                        gangguan pasokan pangan global.
                      </p>
                    </div>
                    <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                      <div>
                        <img
                          className="img-fluid"
                          src="/img/concern_pangan.png"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Item Penyebab */}
                  <div className="row g-5 align-items-center">
                    <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
                      <h4>Kerugian Ekonomi</h4>
                      <p className="mb-4">
                        Dampak-dampak tersebut dapat menyebabkan kerugian
                        ekonomi yang signifikan, termasuk biaya perbaikan akibat
                        bencana alam, penurunan produktivitas pertanian, dan
                        beban kesehatan masyarakat.
                      </p>
                    </div>
                    <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                      <div>
                        <img
                          className="img-fluid"
                          src="/img/concern_ekonomi.png"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Item Penyebab */}
                  <div className="row g-5 align-items-center">
                    <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
                      <h4>Krisis Migrasi</h4>
                      <p className="mb-4">
                        Kenaikan permukaan air laut, perubahan iklim ekstrem,
                        dan tekanan pada sumber daya alam dapat memicu krisis
                        migrasi massal, dengan jutaan orang terpaksa
                        meninggalkan rumah mereka untuk mencari tempat yang
                        lebih aman dan berkelanjutan.
                      </p>
                    </div>
                    <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                      <div>
                        <img
                          className="img-fluid"
                          src="/img/concern_migrasi.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Apa yg akan terjadi */}
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div
              className="col-lg-12 wow fadeIn text-center"
              data-wow-delay="0.5s"
            >
              <h1 className="mb-4">Cara kita mengatasinya</h1>
              <p>
                Jika kamu peduli dengan bumi ini, maka kita harus memulainya
                dari sekarang sebelum terlambat. Perubahan yang besar dimulai
                dengan satu langkah kecil.
              </p>
            </div>
            <div
              className="col-lg-12 wow fadeIn text-center mb-5"
              data-wow-delay="0.1s"
            >
              <a href="/stop-climate-change" className="start-button">
                Stop It!
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Service */}
      <div className="container-fluid bg-light">
        <div className="container">
          <div className="row g-5 align-items-center py-5 mt-5">
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

export default Concern;
