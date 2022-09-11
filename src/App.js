import React from "react";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import JavaScript from "./components/JavaScript";
import PHP from "./components/PHP";
import Python from "./components/Python";


function App() {
  return (
    <div className="bg-dark" >
      <Routes>
            <Route path="/" element={<Home />} />
						<Route path="/javascript" element={<JavaScript />} />
						<Route path="/php" element={<PHP />} />
						<Route path="/python" element={<Python />} />
      </Routes>
    </div>
  );
}

export default App;
