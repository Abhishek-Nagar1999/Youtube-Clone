// Logo
import React from "react";
import Logo from "../../Assets/Logo/YouTube-logo.svg";
// Icons
import { FiMenu } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";
import { TiMicrophone } from "react-icons/ti";

export default function Navbar({ setSearchBy }) {
  return (
    <nav className="w-full h-[5rem] bg-black flex flex-row justify-between">
      <div className="flex flex-row">
        <FiMenu
          color={"white"}
          className="pl-2 mx-2 h-full w-[2rem] cursor-pointer"
        />
        <img
          src={Logo}
          alt="Youtube-logo"
          className="h-[100%] w-[9rem] cursor-pointer"
        />
      </div>
      <div className="h-[2.5rem] w-[30%] my-auto flex flex-row ">
        <span className=" h-[2.5rem] w-full my-auto flex flex-row border border-gray rounded-full bg-gray cursor-pointer ">
          <input
            type="text"
            className="px-4 w-full bg-black border border-gray text-white rounded-l-full focus:outline-none focus:border-blue"
            onChange={(e) => setSearchBy(e.target.value)}
          />
          <GoSearch
            color={"white"}
            className=" mx-3 my-auto h-[70%] w-[2rem]"
          />
        </span>
        <span className="mx-3 flex justify-center items-center h-[2.5rem] w-[2.7rem] bg-gray rounded-full">
          <TiMicrophone color="white" className=" h-[1.6rem] w-[1.6rem] " />
        </span>
      </div>
      <div className="mx-[2.2rem] flex flex-row justify-center items-center">
        <IoNotificationsOutline
          color="white"
          className="mx-3 h-[1.5rem] w-[2rem] flex"
        />
        <div className="mx-3 bg-orange text-white flex justify-center items-center h-[2.2rem] w-[2.2rem] rounded-full">
          A
        </div>
      </div>
    </nav>
  );
}
