import "./App.css";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import DashboardPage from "./Pages/DashboardPage";
import OnBoardingPage from "./Pages/OnBoardingPage";
import GalleryPage from "./Pages/GalleryPage";

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/onboarding" element={<OnBoardingPage />} />
      </Routes>
    </div>
  );
}

export default App;
