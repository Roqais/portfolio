import React from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Directly import components
import Home from "./components/Home";
import Skill from "./components/Skill";
import SkillDetail from "./components/Tools";
import Certificates from "./components/Certificates";
import Experience from "./components/Experience";
import ContactMe from "./components/ContactMe";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="font-poppins pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/Tools" element={<SkillDetail />} />
            <Route path="/Certificates" element={<Certificates />} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/ContactME" element={<ContactMe />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
