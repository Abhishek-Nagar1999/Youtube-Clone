import React from "react";
import { GoHome } from "react-icons/go";

export default function Sidebar({ showSidebar }) {
  return (
    <>
      {showSidebar && (
        <div className="h-[100vh] w-[13rem] pr-[1rem] bg-black fixed left-0 top-[5rem] overflow-y-auto">
          <div className="w-full h-[2.5rem] text-white m-2 rounded-lg  flex items-center justify-start font-normal hover:bg-grey-50 cursor-pointer">
            <GoHome className="h-[2rem] w-[1.5rem] mx-[1rem]" />
            Home
          </div>
        </div>
      )}
    </>
  );
}
