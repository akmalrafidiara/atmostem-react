import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function About() {
  const [text, setText] = React.useState("");
  const [isReadMore, setIsReadMore] = React.useState(true);
  const originalText = `
  Hai, Sobat AtmoSTEM! Selamat datang di Platform kami - tempatnya orang-orang keren dengan kecintaan pada STEM (Sains, Teknologi, Rekayasa, Seni, dan Matematika)! Kami ini tim yang penuh semangat, gabungan dari individu-individu super berbakat dengan pengalaman dan keahlian masing-masing. Nah, kalau penasaran siapa aja yang bikin kehebohan di balik layar, langsung aja kepoin lebih lanjut!
  ()
  Dan jangan sungkan buat kontak-kontakan kita, ya! Kalau ada pertanyaan atau ide cemerlang, kita siap dengerin. Kami nggak sabar banget buat berbagi pengetahuan, ngobrol seru, dan kolaborasi bareng kalian dalam menjaga keberlanjutan lingkungan. Makasih udah mampir ke website kece kita di AtmoSTEM! 🚀✨`;
  const maxLength = 200;

  React.useEffect(() => {
    if (originalText.length > maxLength) {
      setText(originalText.slice(0, maxLength) + "...");
    } else {
      setText(originalText);
    }
  }, [originalText, maxLength]);

  const handleReadMore = () => {
    if (isReadMore) {
      setText(originalText);
    } else {
      setText(originalText.slice(0, maxLength) + "...");
    }
    setIsReadMore(!isReadMore);
  };
  return (
    <>
      <Header />
      <Hero>
        <div className="btn btn-sm border rounded-pill text-white px-3 mb-3 animated slideInRight">
          ATMO.STEM
        </div>
        <h1 className="display-4 text-white mb-4 animated slideInRight">
          About Atmostem
        </h1>
        <p className="text-white mb-4 animated slideInRight">
          Ayo pahami dan jadilah lebih dekat dengan kami!
        </p>
      </Hero>
      {/* About atmostem */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                Atmostem
              </div>
              <h1 className="mb-4">Apa itu Atmostem?</h1>
              <p className="mb-4">
                Selamat datang di Atmostem, ladang kegembiraan belajar di mana
                kepedulian kami terhadap perubahan iklim dunia bertemu dengan
                kesenangan eksplorasi! Kami dengan antusias menggali lebih dalam
                tentang atmosfer dan komponen mendasarnya dengan metode yang tak
                hanya mendidik, tetapi juga menghibur. Melalui pendekatan STEAM
                (Science, Technology, Engineering, Arts, Math), setiap
                pengunjung Atmostem diajak untuk merasakan sensasi belajar yang
                tidak hanya informatif, tetapi juga mengasyikkan.
              </p>
              <p className="mb-4">
                Di Atmostem, kami bermimpi agar setiap orang bisa menikmati
                proses pembelajaran tentang keajaiban atmosfer dan dampaknya
                pada perubahan iklim. Kami yakin bahwa pemahaman yang lebih
                mendalam tentang udara, lapisan ozon, dan efek rumah kaca adalah
                kunci untuk mendorong partisipasi aktif dalam upaya melindungi
                lingkungan dan menciptakan masa depan bumi yang berkelanjutan.
              </p>
              <p className="mb-4">
                Bergabunglah dengan kami dalam perjalanan edukasi ini dan mari
                bersama-sama menjelajahi keindahan sains, teknologi, rekayasa,
                seni, dan matematika. Atmostem bukan hanya tentang pengetahuan,
                tetapi juga tentang memberdayakan setiap individu untuk berperan
                aktif dalam menjaga dan merawat rumah kita bersama. Harapan kami
                adalah bahwa melalui Atmostem, setiap pengunjung dapat meraih
                wawasan baru yang membawa perubahan positif dalam tindakan
                mereka sehari-hari.
              </p>
              <p className="mb-4">
                Sejalan dengan tekad kami untuk menciptakan dampak positif,
                Atmostem senantiasa berkomitmen pada pencapaian Sustainable
                Development Goals (SGDs). Terutama pada poin ke-13, yang
                mengajak kita semua untuk mengambil tindakan konkret dalam
                menghadapi perubahan iklim. Bersama-sama, mari kita menjaga bumi
                kita, bukan hanya sebagai warisan untuk generasi mendatang,
                tetapi juga sebagai rumah yang kita banggakan. Selamat
                mengeksplorasi dan menjadi bagian dari perubahan positif untuk
                masa depan bumi kita! 🌍✨
              </p>
              <p>
                Ayo coba kepoin tentang fokus Kami!
                <br />
                <br />
                <a
                  className="btn btn-primary rounded-pill px-4"
                  href="/concern"
                >
                  Concern
                </a>
              </p>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div>
                <img className="img-fluid" src="/img/about_atmostem.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Logo atmostem */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <h1>Filosofi Logo</h1>
              <p>
                Logo AtmoSTEM menggambarkan semangat kita dalam menaklukkan
                tantangan dan terus berkembang. Panah segitiga yang menembus ke
                atas mencerminkan tekad untuk mencapai puncak pengetahuan dan
                inovasi di dunia STEM (Sains, Teknologi, Rekayasa, Seni, dan
                Matematika). Sebagai huruf A yang terbentuk, simbol ini
                menggambarkan kolaborasi harmonis antara berbagai disiplin ilmu,
                menciptakan kesatuan yang kuat. Dengan panah yang dinamis, logo
                ini juga menggambarkan perjalanan tak terbatas kita dalam
                eksplorasi dan penemuan. AtmoSTEM: Menerangi jalan ke arah
                pengetahuan baru dan menyinari langit dengan inspirasi kreatif!
                🚀✨
              </p>
            </div>
            <div
              className="col-lg-4 wow fadeIn text-center"
              data-wow-delay="0.1s"
            >
              <div>
                <img
                  className="img-fluid shadow p-5 bg-white rounded"
                  src="/img/logo_atmostem.png"
                  style={{ width: "300px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Description STEM */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div
              className="col-lg-4 wow fadeIn d-none d-lg-block"
              data-wow-delay="0.1s"
            >
              <div>
                <img className="img-fluid" src="/img/about_steam.svg" />
              </div>
            </div>
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
              <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                STEAM
              </div>
              <h1 className="mb-4">Apa itu STEAM?</h1>
              <p className="mb-4">
                STEAM itu keren banget, loh! Nama akrab ini singkatan dari
                Science (Ilmu Pengetahuan), Technology (Teknologi), Engineering
                (Rekayasa), Arts (Seni), dan Mathematics (Matematika). Jadi
                begini, gak cuma belajar ilmu pengetahuan dan matematika, tapi
                kita juga diajak berpetualang dalam dunia teknologi, rekayasa,
                dan seni!
              </p>
              <p className="mb-4">
                Ilmu Pengetahuan jadi suguhan utama, bikin kita paham tentang
                dunia fisik dan alam semesta. Nah, Teknologi jadi alat seru buat
                ngasah otak ngehadapi masalah sehari-hari. Ada juga Rekayasa,
                yang mengajarkan kita cara merancang, bikin, dan memecahkan
                masalah dengan gaya yang kreatif.
              </p>
              <p className="mb-4">
                Jangan lupa Seni, yang bakal bawa kita ke dunia kreativitas. Di
                sini kita bisa menyampaikan ide dan solusi dengan sentuhan
                artistik. Terakhir, Matematika ngajarin keterkaitan antara angka
                dan kehidupan nyata, manfaatin matematika untuk pecahin masalah
                sehari-hari.
              </p>
              <p className="mb-4">
                Poke-poke semua elemen ini jadi satu, bikin belajar jadi asyik
                dan menyenangkan! STEAM memberikan kita keterampilan berpikir
                kritis, kreativitas, dan pemecahan masalah. Yuk, ikut
                petualangan seru di Atmostem bareng STEAM! 🚀🌈
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <h6 className="mb-3">
                        <i className="fa fa-check text-primary me-2"></i>Science
                      </h6>
                      <h6 className="mb-0">
                        <i className="fa fa-check text-primary me-2"></i>
                        Technology
                      </h6>
                    </div>
                    <div className="col-sm-6">
                      <h6 className="mb-3">
                        <i className="fa fa-check text-primary me-2"></i>
                        Engeenering
                      </h6>
                      <h6 className="mb-0">
                        <i className="fa fa-check text-primary me-2"></i>Art
                      </h6>
                    </div>
                    <div className="col-sm-6">
                      <h6 className="mb-3">
                        <i className="fa fa-check text-primary me-2"></i>
                        Mathematics
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mb-4 text-end">
                Kunjungi ini agar informasi mu lebih terpercaya!
                <br />
                <br />
                <a
                  className="btn btn-primary rounded-pill px-4"
                  href="https://en.wikipedia.org/wiki/Science,_technology,_engineering,_and_mathematics"
                  target="_blank"
                >
                  Wikipedia
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
              <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                Our Team
              </div>
              <h1 className="mb-4">Meet Our Experienced Team Members</h1>
              <p id="teamDescription" className="mb-4">
                {text}
              </p>
              <a
                id="readMoreButton"
                className="btn btn-primary rounded-pill px-4"
                onClick={handleReadMore}
              >
                {isReadMore ? "Read More" : "Read Less"}
              </a>
            </div>
            <div className="col-lg-7">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="row g-4">
                    <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                      <div className="team-item bg-white text-center rounded p-4 pt-0">
                        <img
                          className="img-fluid rounded-circle p-4"
                          style={{
                            width: "150px",
                            height: "150px",
                            objectFit: "cover",
                          }}
                          src="/img/alfin.jpg"
                          alt=""
                        />
                        <h5 className="mb-0">Muhammad Alfin Khaerudin</h5>
                        <small>1313621003</small> <br />
                        <small>
                          Ilmu Komputer 2021 <br /> Universitas Negeri Jakarta
                        </small>
                        <div className="d-flex justify-content-center mt-3">
                          <a
                            className="btn btn-square btn-primary m-1"
                            href="https://www.facebook.com/muhammad.alvin.5055?mibextid=ZbWKwL"
                            target="_blank2"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a
                            className="btn btn-square btn-primary m-1"
                            href="https://twitter.com/alfin7710?t=QVWkpD1IrvaOmEUEjpeWDg&s=09"
                            target="_blank2"
                          >
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a
                            className="btn btn-square btn-primary m-1"
                            href="https://instagram.com/alvin7710?igshid=MzNlNGNkZWQ4Mg=="
                            target="_blank2"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                          <a
                            className="btn btn-square btn-primary m-1"
                            href="https://www.linkedin.com/in/muhammad-alfin-khaerudin-286a5b231"
                            target="_blank2"
                          >
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                      <div className="team-item bg-white text-center rounded p-4 pt-0">
                        <img
                          className="img-fluid rounded-circle p-4"
                          style={{
                            width: "150px",
                            height: "150px",
                            objectFit: "cover",
                          }}
                          src="/img/kenya.jpg"
                          alt=""
                        />
                        <h5 className="mb-0">Kenya Bhanuwati Pranoto</h5>
                        <small>1313621019</small> <br />
                        <small>
                          Ilmu Komputer 2021 <br /> Universitas Negeri Jakarta
                        </small>
                        <div className="d-flex justify-content-center mt-3">
                          <a
                            className="btn btn-square btn-primary m-1"
                            href="https://www.instagram.com/kenyabhanu"
                            target="_blank2"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                          <a
                            className="btn btn-square btn-primary m-1"
                            href="https://www.linkedin.com/in/kenya-bhanuwati/"
                            target="_blank2"
                          >
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pt-md-4">
                  <div className="row g-4">
                    <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                      <div className="team-item bg-white text-center rounded p-4 pt-0">
                        <img
                          className="img-fluid rounded-circle p-4"
                          style={{
                            width: "150px",
                            height: "150px",
                            objectFit: "cover",
                          }}
                          src="/img/akmal.jpg"
                          alt=""
                        />
                        <h5 className="mb-0">Akmal Rafi Diara Putra</h5>
                        <small>1313621007</small> <br />
                        <small>
                          Ilmu Komputer 2021 <br /> Universitas Negeri Jakarta
                        </small>
                        <div className="d-flex justify-content-center mt-3">
                          <a
                            className="btn btn-square btn-primary m-1"
                            href="https://www.facebook.com/akmal.diara/"
                            target="_blank2"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a
                            className="btn btn-square btn-primary m-1"
                            href="https://twitter.com/takemoal"
                            target="_blank2"
                          >
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a
                            className="btn btn-square btn-primary m-1"
                            href="https://instagram.com/akmalrdp"
                            target="_blank2"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                          <a
                            className="btn btn-square btn-primary m-1"
                            href="https://www.linkedin.com/in/akmalrafidiara/"
                            target="_blank2"
                          >
                            <i className="fab fa-linkedin-in"></i>
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
      </div>
      <Footer />
    </>
  );
}

export default About;
