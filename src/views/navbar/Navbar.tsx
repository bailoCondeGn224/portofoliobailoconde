/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link, linksRouter } from "../../components/route/RouteLink";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const saveToLocalStorage = (key: string, value: string) => {
  //   localStorage.setItem(key, value);
  // };

  const handleActive = (e: string) => {
    // saveToLocalStorage("name", e);
    setIsMenuOpen(false);
  };

  return (
    <div className="flex justify-between items-center text-base sm:text-lg lg:text-xl font-normal text-white px-4 sm:px-6 lg:px-8 xl:px-12 py-3 sm:py-4 mx-auto w-full max-w-screen-2xl">
      {/* Logo */}
      <div className="flex justify-center gap-1 items-center">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">Bailo Conde</h2>
        <span className="text-2xl sm:text-3xl lg:text-4xl text-green-500">.</span>
      </div>

      {/* Menu Desktop */}
      <div className="hidden md:flex justify-around items-center gap-3 lg:gap-6 xl:gap-8">
        <ul className="flex justify-around items-center gap-3 lg:gap-6 xl:gap-8">
          {linksRouter.map((menu: Link) => (
            <li key={menu.id} className="relative">
              <NavLink
                onClick={() => handleActive(menu.text)}
                to={menu.link}
                className={({ isActive, isPending }) =>
                  `cursor-pointer hover:text-green-500 relative block text-sm lg:text-base xl:text-lg transition-colors duration-200 ${
                    isActive
                      ? "text-green-500 after:block after:absolute after:bottom-0 after:h-[3px] after:w-[100%] after:bg-green-500"
                      : ""
                  } ${isPending ? "pending" : ""}`
                }
              >
                {menu.text}
              </NavLink>
            </li>
          ))}
        </ul>
        <button className="bg-green-500 py-2 px-4 lg:py-2.5 lg:px-6 xl:py-3 xl:px-8 rounded-full text-sm lg:text-base font-medium hover:bg-green-600 hover:shadow-lg transition duration-200 ease-in-out whitespace-nowrap">
          Engagez-moi
        </button>
      </div>

      {/* Menu Mobile */}
      <div className="md:hidden flex items-center">
        <button
          className="text-2xl text-green-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Overlay Mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center gap-6 sm:gap-8 text-lg sm:text-xl font-medium z-[9999] px-4">
          <ul className="space-y-6 sm:space-y-8 text-center">
            {linksRouter.map((menu: Link) => (
              <li key={menu.id} className="relative">
                <NavLink
                  onClick={() => handleActive(menu.text)}
                  to={menu.link}
                  className={({ isActive, isPending }) =>
                    `cursor-pointer text-white text-xl sm:text-2xl transition-colors duration-200 ${
                      isActive
                        ? "text-green-500 after:block after:absolute after:bottom-0 after:h-[3px] after:w-[100%] after:bg-green-500"
                        : "hover:text-green-500"
                    } ${isPending ? "pending" : ""}`
                  }
                >
                  {menu.text}
                </NavLink>
              </li>
            ))}
          </ul>
          <button className="bg-green-500 py-3 px-8 sm:py-4 sm:px-10 rounded-full text-base sm:text-lg font-medium hover:bg-green-600 transition duration-200 ease-in-out shadow-lg">
            Engagez-moi
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
