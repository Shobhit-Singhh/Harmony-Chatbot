import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Memory from "./pages/Memory";
import Profile from "./pages/Profile";
import SOS from "./pages/SOS";
import Community from "./pages/Community";
import Recommendation from "./pages/Recommendation";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Welcome to AI Health Assistant
              </h2>
              <p className="text-gray-600">
                Describe your symptoms, and our AI will assist you in finding relevant health information.
              </p>
            </div>
          } />
          <Route path="memory" element={<Memory />} />
          <Route path="recommendation" element={<Recommendation />} />
          <Route path="sos" element={<SOS />} />
          <Route path="profile" element={<Profile />} />
          <Route path="community" element={<Community />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
