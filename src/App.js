import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.tsx";
import LandingPage from "./Components/Pages/landingPage.tsx";

function App() {
  const [searchBy, setSearchBy] = useState("");
  const [videoData, setVideoData] = useState([]);
  // const API = process.env.API_KEY
  const fetchVideoList = async () => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyAG6Jvn5UCq7RDgJ18OoFsW3ozoWYGB370`
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

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
    searchBy.length > 1 && handleSearch(searchBy);
  }, [searchBy]);

  useEffect(() => {
    fetchVideoList();
  }, []);

  console.log(videoData);

  return (
    <div className="App">
      <Navbar searchBy={searchBy} setSearchBy={setSearchBy} />
      <LandingPage videoData={videoData} />
    </div>
  );
}

export default App;
