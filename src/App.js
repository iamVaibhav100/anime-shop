import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Routes, Route } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

const HatsPage2 = () => (
  <div>
    <h1>Sneakers</h1>
  </div>
);

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="shop/hats" element={<HatsPage />} />
        <Route path="shop/sneakers" element={<HatsPage2 />} />
      </Routes>
    </div>
  );
}

export default App;
