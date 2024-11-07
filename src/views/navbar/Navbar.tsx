/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link, linksRouter } from "../../components/route/RouteLink";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isActive, setIsActive] = useState("Accueil");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const saveToLocalStorage = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };

  const handleActive = (e: string) => {
    saveToLocalStorage("name", e);
    setIsMenuOpen(false);
  };

  return (
    <div className="flex justify-between items-center text-xl font-normal text-white p-3 mx-auto w-full 2xl:w-7/10 xl:w-4/5 lg:w-9/10">
      {/* Logo */}
      <div className="flex justify-center gap-1 items-center">
        <h2 className="text-2xl md:text-xl">Bailo Conde</h2>
        <span className="text-3xl text-green-500">.</span>
      </div>

      {/* Menu Desktop */}
      <div className="hidden md:flex justify-around items-center gap-1">
        <ul className="flex justify-around items-center gap-4">
          {linksRouter.map((menu: Link) => (
            <li key={menu.id} className="relative">
              <NavLink
                onClick={() => handleActive(menu.text)}
                to={menu.link}
                className={({ isActive }) =>
                  `cursor-pointer hover:text-green-500 relative block ${
                    isActive
                      ? "text-green-500 after:block after:absolute after:bottom-0 after:h-[3px] after:w-[100%] after:bg-green-500"
                      : ""
                  }`
                }
              >
                {menu.text}
              </NavLink>
            </li>
          ))}
        </ul>
        <button className="bg-green-500 py-1 px-1.5 rounded-full font-medium hover:bg-green-600 hover:shadow-lg transition duration-200 ease-in-out">
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
        <div className="fixed inset-1 bg-black bg-opacity-80 flex flex-col items-center mt-12 gap-4 text-xl font-medium z-[9999]">
          <ul className="space-y-6 text-center">
            {linksRouter.map((menu: Link) => (
              <li key={menu.id} className="relative">
                <NavLink
                  onClick={() => handleActive(menu.text)}
                  to={menu.link}
                  className={({ isActive }) =>
                    `cursor-pointer text-white ${
                      isActive
                        ? "text-green-500 after:block after:absolute after:bottom-0 after:h-[3px] after:w-[100%] after:bg-green-500"
                        : ""
                    }`
                  }
                >
                  {menu.text}
                </NavLink>
              </li>
            ))}
          </ul>
          <button className="bg-green-500 py-2 px-4 rounded-full font-medium hover:bg-green-600 transition duration-200 ease-in-out">
            Engagez-moi
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
