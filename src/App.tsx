import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "animate.css";
import Header from "./components/header";
import Home from "./pages/Home";
import Footer from "./components/footer";
import OluwaseunParish from "./pages/oluwaseun";
import TrueVineParish from "./pages/truevine";



const App: React.FC = () => {
  return (
    <Router>
      <div className="font-sans">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oluwaseun" element={<OluwaseunParish />} />
          <Route path="/true-vine" element={<TrueVineParish />} />
          
        </Routes>
        <Footer/>
       
      </div>
    </Router>
  );
};

export default App;
