import { useEffect, useState, render } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Concern from "./pages/Concern";
import ErrorPage from "./pages/ErrorPage";
import PartialSpinner from "./pages/components/PartialSpinner";
import Articles from "./pages/Articles";

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
        <Route path="/article" element={<Articles />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
