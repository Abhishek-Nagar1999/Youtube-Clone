import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/navbar.tsx";
import VideoPlayer from "./Components/Pages/videoPlayer.tsx";
import LandingPage from "./Components/Pages/landingPage.tsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [searchBy, setSearchBy] = useState("");
  const [selectedVideo, setSelectedVideo] = useState({});
  const [showSidebar, setShowSidebar] = useState(false);
  // const API = process.env.API_KEY

  return (
    <Router>
      <Navbar
        setSearchBy={setSearchBy}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <LandingPage
              searchBy={searchBy}
              setSelectedVideo={setSelectedVideo}
              showSidebar={showSidebar}
            />
          }
        />
        <Route
          path="/videoPlayer"
          exact
          element={<VideoPlayer selectedVideo={selectedVideo} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
