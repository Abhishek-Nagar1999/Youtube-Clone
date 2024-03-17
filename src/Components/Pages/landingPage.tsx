import React, { useEffect, useState } from "react";
import VideoCards from "../Pages/cards.tsx";
import Sidebar from "../sidebar/sidebar.tsx";
import { SEARCH, VIDEO_LIST } from "../../Services/apiServices.js";

export default function LandingPage({
  searchBy,
  setSelectedVideo,
  showSidebar,
}) {
  const [videoData, setVideoData] = useState([]);

  const fetchVideoList = async () => {
    try {
      const { data } = await VIDEO_LIST.getVideosList();
      setVideoData(data?.items);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = async (searchBy: string) => {
    try {
      const { data } = await SEARCH.getSearchResults(searchBy);
      setVideoData(data?.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const debouncer = setTimeout(() => {
      searchBy.length > 1 ? handleSearch(searchBy) : fetchVideoList();
    }, 1500);
    return () => clearTimeout(debouncer);
  }, [searchBy]);

  useEffect(() => {
    fetchVideoList();
  }, []);

  return (
    <div>
      <Sidebar showSidebar={showSidebar} />
      <VideoCards
        videoData={videoData}
        setSelectedVideo={setSelectedVideo}
        showSidebar={showSidebar}
      />
    </div>
  );
}
