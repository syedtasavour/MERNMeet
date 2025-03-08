import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import  LandingPage  from "./pages/LandingPage.jsx";
import Authentication from "./pages/authentication.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import VideoMeetComponent from "./pages/VideoMeet.jsx";

function App() {
  return (
    <Router>
      <AuthProvider >
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path='/:url' element={<VideoMeetComponent />} />

      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
