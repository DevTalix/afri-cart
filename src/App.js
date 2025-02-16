import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* Add more routes here for different pages like ProductPage, Cart, etc. */}
      </Routes>
    </Router>
  );
}

export default App;

