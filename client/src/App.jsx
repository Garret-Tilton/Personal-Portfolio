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

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Projects />
              <Resume />
              <Contact />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
