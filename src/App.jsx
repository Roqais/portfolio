import React, { Suspense, lazy } from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Lazy load components
const Home = lazy(() => import("./components/Home"));
const Skill = lazy(() => import("./components/Skill"));
const SkillDetail = lazy(() => import("./components/Tools"));
const Certificates = lazy(() => import("./components/Certificates"));
const Experience = lazy(() => import("./components/Experience"));
const ContactMe = lazy(() => import("./components/ContactMe"));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="font-poppins pt-16">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skill" element={<Skill />} />
              <Route path="/Tools" element={<SkillDetail />} />
              <Route path="/Certificates" element={<Certificates />} />
              <Route path="/Experience" element={<Experience />} />
              <Route path="/ContactME" element={<ContactMe />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
