import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/navbar.tsx";
import VideoCards from "./Components/Pages/cards.tsx";
import VideoPlayer from "./Components/Pages/videoPlayer.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [searchBy, setSearchBy] = useState("");
  const [videoData, setVideoData] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState();

  const fetchVideoList = async () => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyAG6Jvn5UCq7RDgJ18OoFsW3ozoWYGB370`
      );
      const { items } = await response.json();
      setVideoData(items);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = async (searchBy) => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchBy}s&key=AIzaSyAG6Jvn5UCq7RDgJ18OoFsW3ozoWYGB370`
      );
      const { items } = await response.json();
      setVideoData(items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const debouncer = setTimeout(() => {
      searchBy.length > 1 ? handleSearch(searchBy) : fetchVideoList();
      clearInterval(debouncer);
    }, 2000);
  }, [searchBy]);

  useEffect(() => {
    fetchVideoList();
  }, []);

  return (
    <Router>
      <Navbar setSearchBy={setSearchBy} />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <VideoCards
              videoData={videoData}
              setSelectedVideo={setSelectedVideo}
            />
          }
        />
        <Route
          path="/videoPlayer"
          exact
          element={
            <VideoPlayer videoData={videoData} selectedVideo={selectedVideo} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
