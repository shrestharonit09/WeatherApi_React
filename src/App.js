import React from "react";
import Navbar from "./component/Navbar";
import Weatherpart from "./component/Weatherpart";
import Home from "./component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Weather" element={<Weatherpart />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
