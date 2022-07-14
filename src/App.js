import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Detail from "./components/Detail.js";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
