import { useState } from "react";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import {landing} from "./pages/landing.jsx"
function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/home" element=/> */}
          <Route path="/home" element={<landing/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
