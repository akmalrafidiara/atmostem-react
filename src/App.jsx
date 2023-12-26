import { useEffect, useState, render } from "react";
import { Link, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Concern from "./pages/Concern";
import ErrorPage from "./pages/ErrorPage";
import PartialSpinner from "./pages/components/PartialSpinner";
import Articles from "./pages/Articles";
import Steam from "./pages/Steam";
import ModalSearch from "./pages/components/ModalSearch";
import StopClimateChange from "./pages/concern_page/StopClimateChange";
import Atmosfer from "./pages/concern_page/Atmosfer";
import EfekRumahKaca from "./pages/concern_page/EfekRumahKaca";
import Ozon from "./pages/concern_page/Ozon";
import Udara from "./pages/concern_page/Udara";

function App({ titlePage = "Home" }) {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    document.title = `Atmostem | ${titlePage}`;
  }, [titlePage]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 1);
    return () => clearTimeout(timer); // This is to clear the timer when the component unmounts
  }, []);

  return (
    <>
      {showSpinner && <PartialSpinner />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/concern" element={<Concern />} />
        <Route path="/stop-climate-change" element={<StopClimateChange />} />
        <Route path="/atmosfer" element={<Atmosfer />} />
        <Route path="/efek-rumah-kaca" element={<EfekRumahKaca />} />
        <Route path="/ozon" element={<Ozon />} />
        <Route path="/udara" element={<Udara />} />
        <Route path="/article" element={<Articles />} />
        <Route path="/steam" element={<Steam />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
      <ModalSearch />
    </>
  );
}

export default App;
