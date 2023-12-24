import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import PartialSpinner from "./pages/components/PartialSpinner";

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
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
