import { space } from "postcss/lib/list";
import React, { useState } from "react";
import { FaBars, FaTasks } from "react-icons/fa";
// import './App.css'; // You can create this file for styling
import { ImCross } from "react-icons/im";
import { NavLink, Outlet } from "react-router-dom";
import Profile from "./Profile/Profile";
import MainContent from "./MainContent";
import { CiBookmarkPlus, CiTrash } from "react-icons/ci";
import { MdTaskAlt } from "react-icons/md";

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const outSide = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={` dark:bg-slate-900 ${isSidebarOpen ? "overflow-hidden" : ""}`}
    >
      {/* Your existing HTML code here */}
      {/* ... */}

      {/* Sidebar Toggle Button */}
      <button
        type="button"
        className="text-gray-500 hover:text-gray-600"
        aria-label="Toggle Sidebar"
      >
        <span className="sr-only">Toggle Sidebar</span>
        <div onClick={toggleSidebar}>
          {" "}
          <FaBars />
        </div>
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-all duration-300 transform fixed top-0 start-0 bottom-0 z-[60] w-64 bg-[#FAF8F7] pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500`}
      >
        <h1 onClick={outSide} className="text-3xl block lg:hidden">
          X
        </h1>

        <div className="">
          <Profile></Profile>
        </div>

        <div className="mt-10">
          <ul className="flex flex-col pl-5 gap-10 font-dmsnas">
            <NavLink  to='dashboard'
              className={({ isActive }) =>
                isActive
                  ? " flex items-center gap-1 text-red-600  font-bold font-dmsnas"
                  : " flex items-center gap-1   font-bold font-dmsnas"
              }
            >
              {" "}
              <CiBookmarkPlus className="text-2xl"></CiBookmarkPlus> Add Task
            </NavLink>
            <NavLink to='alltask'
              className={({ isActive }) =>
                isActive
                  ? " flex items-center gap-1 text-red-600 font-bold font-dmsnas"
                  : " flex items-center gap-1  font-bold font-dmsnas"
              }
            >
              {" "}
              <FaTasks className="text-xl" />
              All Task
            </NavLink>
            <NavLink to='complete'
              className={({ isActive }) =>
                isActive
                  ? " flex items-center gap-1 text-red-600 font-bold font-dmsnas"
                  : " flex items-center gap-1  font-bold font-dmsnas"
              }
            >
              <MdTaskAlt className="text-2xl" /> Complete Task
            </NavLink>
            <NavLink to='trash'
              className={({ isActive }) =>
                isActive
                  ? " flex items-center gap-1 text-red-600 font-bold font-dmsnas"
                  : " flex items-center gap-1  font-bold font-dmsnas"
              }
            >
              <CiTrash className="text-2xl" /> Trash
            </NavLink>
          </ul>
        </div>
      </div>

      {/* Content */}
      <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
      <Outlet></Outlet>
      
      </div>
    </div>
  );
};

export default SideBar;
