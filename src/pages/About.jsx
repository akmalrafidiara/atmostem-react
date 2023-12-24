import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function About() {
  const [text, setText] = React.useState("");
  const [isReadMore, setIsReadMore] = React.useState(true);
  const originalText = `Selamat datang di halaman "Tentang Kami" AtmoSTEM! Kami adalah
  tim berdedikasi yang terdiri dari individu-individu berbakat
  dengan latar belakang luas dalam bidang STEM (Sains, Teknologi,
  Rekayasa, Seni, dan Matematika) dan komitmen yang kuat terhadap
  pendidikan lingkungan. Setiap anggota tim membawa pengalaman
  unik dan keahlian khusus untuk memastikan keberhasilan proyek
  ini. Untuk mengenal lebih jauh tentang para pemikir di balik
  layar. Jangan ragu untuk menghubungi kami melalui informasi
  kontak yang tersedia jika Anda memiliki pertanyaan atau masukan.
  Kami sangat bersemangat untuk berbagi pengetahuan kami dan
  berkolaborasi dengan Anda dalam upaya bersama menjaga
  keberlanjutan lingkungan. Terima kasih telah mengunjungi website
  kami di AtmoSTEM!`; // Replace with your original text
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
        <div class="btn btn-sm border rounded-pill text-white px-3 mb-3 animated slideInRight">
          ATMO.STEM
        </div>
        <h1 class="display-4 text-white mb-4 animated slideInRight">
          Menyelami Dunia Udara Mencari Cakrawala
        </h1>
        <p class="text-white mb-4 animated slideInRight">
          Where air meets curiosity, the symphony of the atmosphere unfolds
          <br />
          —a journey through the unseen, a tale written in every breath.
        </p>
        <a
          href=""
          class="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInRight"
        >
          Read More
        </a>
        <a
          href=""
          class="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight"
        >
          Contact Us
        </a>
      </Hero>
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
