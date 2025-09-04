import React from "react";
import { Routes, Route } from "react-router-dom";

import './App.css';
import Navbar from "./components/Navbar";
import {
  Home,
  About,
  Projects,
  Resume,
  Contact
} from "./pages";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
