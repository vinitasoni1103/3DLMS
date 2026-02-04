// src/App.js
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ModelList from "./components/ModelList";
import ModelViewer from "./components/ModelViewer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ModelList />} />
        <Route path="/view/:folder" element={<ModelViewer />} />
      </Routes>
    </Router>
  );
}

export default App;

