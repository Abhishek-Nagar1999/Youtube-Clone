import React from "react";

export default function LandingPage({ videoData }) {
  return (
    <div className="bg-black grid grid-cols-12">
      {videoData?.map((items: any, index: number) => {
        return (
          <div
            className="w-[28rem] h-[20rem]  border col-span-3 rounded-2xl m-1 "
            key={index}
          >
            {/* <div className='h-full w-full'> */}
            <img
              alt="thumbnail"
              src={items?.snippet?.thumbnails?.medium?.url}
              className="mt-0 h-[75%] w-[100%] rounded-2xl"
            />
            <p className="text-white">{items?.snippet?.title}</p>
            {/* </div> */}
          </div>
        );
      })}
    </div>
  );
}
