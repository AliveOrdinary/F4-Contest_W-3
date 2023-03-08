import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import { PATHS_MAP } from "./paths";
import LandingPage from "./components/LandingPage/LandingPage";
import Detail from "./components/Detail/Detail";

export const centeredStyle = {
  width: "100vw",
  height: "100vh",
  // display: "flex",
  // alignItems: "center",
  // justifyContent: "center",
  background: "black",
};

function App() {
  return <div className="App" style={centeredStyle}>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/movies/:imdbID" element={<Detail />} />
    </Routes>
  </div>;
}

export default App;
