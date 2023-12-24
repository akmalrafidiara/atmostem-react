import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";

function App({ titlePage = "Home" }) {
  useEffect(() => {
    document.title = `Atmostem | ${titlePage}`;
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
