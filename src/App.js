import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { PATHS } from "./paths";
import LandingPage from "./components/LandingPage/LandingPage";
import Detail from "./components/Detail/Detail";

export const centeredStyle = {
  width: "100%",
  height: "100vh",
  // display: "grid",
  // placeItems: "center",
  background: "black",
};

function App() {
  return <div className="App bg-black" style={centeredStyle} >
    <Routes>
      <Route path={PATHS.LANDING_PAGE} element={<LandingPage />} />
      <Route path="/movies/:imdbID" element={<Detail />} />
    </Routes>
  </div>;
}

export default App;
