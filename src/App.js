import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import Aboutcomponent from "./components/About";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

function Homepage() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Projects />
      <Footer />
    </div>
  )
}

function About() {
  return (
    <div>
      <Aboutcomponent />
    </div>
  )
}

export default App;