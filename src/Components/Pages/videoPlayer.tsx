import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function VideoPlayer({ videoData, selectedVideo }) {
  const { embedHtml } = useParams();
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    const { player } = videoData[selectedVideo];
    const parser = new DOMParser();
    const doc = parser.parseFromString(player?.embedHtml, "text/html");

    const iframe = doc.querySelector("iframe");
    const src = iframe?.getAttribute("src") || "";

    setVideoSrc(src);
  }, [embedHtml]);

  return (
    <div className="px-[3rem] pt-[5rem] bg-black h-[100vh]">
      <iframe
        src={videoSrc}
        title=""
        height="750"
        width="70%"
        className="my-[1rem] rounded-2xl"
      ></iframe>
    </div>
  );
}
