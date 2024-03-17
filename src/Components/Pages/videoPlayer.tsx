import React, { useEffect, useState } from "react";

export default function VideoPlayer({ selectedVideo }) {
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    if (selectedVideo) {
      const { player } = selectedVideo;
      const parser = new DOMParser();
      const doc = parser.parseFromString(player.embedHtml, "text/html");
      const iframe = doc.querySelector("iframe");
      const src = iframe?.getAttribute("src") || "";
      setVideoSrc(src);
    }
  }, [selectedVideo]);

  return (
    <div className="px-[3rem] pt-[5rem] bg-black h-[100vh]">
      <iframe
        src={videoSrc}
        title={selectedVideo?.title}
        height="750"
        width="70%"
        className="my-[1rem] rounded-2xl"
      ></iframe>
    </div>
  );
}
