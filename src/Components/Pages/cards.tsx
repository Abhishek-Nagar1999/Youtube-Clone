import React from "react";
import { formatNumber, formatText } from "../../utils/helper";
import { useNavigate } from "react-router-dom";

export default function VideoCards({
  videoData,
  setSelectedVideo,
  showSidebar,
}) {
  const navigate = useNavigate();

  const handleIndex = (index: any) => {
    setSelectedVideo(videoData[index]);
    navigate("/videoPlayer", { replace: true });
  };

  return (
    <div
      className={`bg-black flex flex-row flex-wrap justify-between pt-[5rem] ${
        showSidebar && "ml-[13rem] px-[1rem]"
      }`}
    >
      {videoData?.map((items: any, index: any) => {
        return (
          <div
            className={` ${
              showSidebar ? "w-[24rem] h-[22rem]" : "w-[22rem] h-[20rem]"
            } rounded-2xl my-1 cursor-pointer `}
            key={index}
            onClick={() => handleIndex(index)}
          >
            <img
              alt="thumbnail"
              src={items?.snippet?.thumbnails?.medium?.url}
              className="mt-0 h-[65%] w-[100%] rounded-2xl"
            />
            <p className="text-white font-medium text-md text-left ">
              {formatText(items?.snippet?.title)}
            </p>
            <div className="my-[0.15rem] text-gray-100 font-normal text-sm text-left ">
              <span className="hover:text-white">
                {items?.snippet?.channelTitle}
              </span>
            </div>
            <div className="my-[0.15rem] text-gray-100 font-normal text-sm text-left">
              {formatNumber(items?.statistics?.viewCount)}
            </div>
          </div>
        );
      })}
    </div>
  );
}
