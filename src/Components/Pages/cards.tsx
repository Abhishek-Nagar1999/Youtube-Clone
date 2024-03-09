import React from "react";
import { formatNumber, formatText } from "../../utils/helper";
import { useNavigate } from "react-router-dom";

export default function VideoCards({ videoData, setSelectedVideo }) {
  const navigate = useNavigate();

  const handleIndex = (index: any) => {
    setSelectedVideo(index);
    navigate("/videoPlayer", { replace: true });
  };

  return (
    <div className="bg-black grid grid-cols-12 pt-[5rem]">
      {videoData?.map((items: any, index: number) => {
        return (
          <div
            className="w-[27rem] h-[22rem]  border col-span-3 rounded-2xl m-1 cursor-pointer "
            key={index}
            onClick={() => handleIndex(index)}
          >
            <img
              alt="thumbnail"
              src={items?.snippet?.thumbnails?.medium?.url}
              className="mt-0 h-[75%] w-[100%] rounded-2xl"
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
