"use client";

import { getFirstName, getInitials } from "@/lib/utils";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const user = {
    name: "Anargyros Stylidis",
  };
  return (
    <nav className="w-full bg-blue-500 p-4">
      <div className="flex justify-center md:justify-end ">
        <div className="flex items-center gap-2 relative cursor-pointer">
          <div
            onClick={() => setShowMenu(!showMenu)}
            className="p-2.5 rounded-full bg-indigo-500 border border-gray-300 overflow-hidden"
          >
            {getInitials(user.name)}
          </div>
          <div
            onClick={() => setShowMenu(!showMenu)}
            className="text-sm text-gray-800"
          >
            Hi, {getFirstName(user.name)}
          </div>
          {showMenu && (
            <div className="absolute hidden md:block top-10 right-0 z-50 bg-white border border-gray-200 rounded-md overflow-hidden">
              <div className="flex flex-col ">
                <div className="text-gray-500 hover:bg-gray-100 px-4 py-2">
                  Home
                </div>
                <div className="text-gray-500 hover:bg-gray-100 px-4 py-2">
                  Settings
                </div>
                <div className="text-gray-500 hover:bg-gray-100 px-4 py-2">
                  Logout
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {showMenu && (
        <div className="fixed top-0 left-0 block md:hidden w-[100vw] z-[100] p-3 bg-blue-900 bg-opacity-90">
          <div
            onClick={() => setShowMenu(false)}
            className="absolute top-0 left-0 m-4 text-white"
          >
            X
          </div>
          <div className="flex flex-col gap-2 justify-center items-center text-white">
            <div>Home</div>
            <div>Settings</div>
            <div>Logout</div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
