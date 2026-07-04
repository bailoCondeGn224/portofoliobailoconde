import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { linksRouter, Link as LinkType } from "../../components/route/RouteLink";
import { FaBars, FaTimes } from "react-icons/fa";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleActive = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-bg/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <Container className="flex justify-between items-center text-base sm:text-lg lg:text-xl font-normal text-text-primary py-3 sm:py-4">
        {/* Logo */}
        <Link to="/" className="flex justify-center gap-1 items-center">
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold">
            Bailo Conde
          </h2>
          <span className="text-2xl sm:text-3xl lg:text-4xl text-brand-500">.</span>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex justify-around items-center gap-3 lg:gap-6 xl:gap-8">
          <ul className="flex justify-around items-center gap-3 lg:gap-6 xl:gap-8">
            {linksRouter.map((menu: LinkType) => (
              <li key={menu.id} className="relative">
                <NavLink
                  onClick={handleActive}
                  to={menu.link ?? "/"}
                  className={({ isActive, isPending }) =>
                    `cursor-pointer hover:text-brand-500 relative block text-sm lg:text-base xl:text-lg transition-colors duration-200 ${
                      isActive
                        ? "text-brand-500 after:block after:absolute after:-bottom-1 after:h-[2px] after:w-full after:bg-brand-500"
                        : ""
                    } ${isPending ? "pending" : ""}`
                  }
                >
                  {menu.text}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button to="/contact" variant="primary" className="!py-2 !px-4 lg:!py-2.5 lg:!px-6 xl:!py-3 xl:!px-8 !text-sm lg:!text-base">
            Engagez-moi
          </Button>
        </div>

        {/* Menu Mobile */}
        <div className="md:hidden flex items-center">
          <button
            className="text-2xl text-brand-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Overlay Mobile */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-bg/95 backdrop-blur-md flex flex-col justify-center items-center gap-6 sm:gap-8 text-lg sm:text-xl font-medium z-[9999] px-4">
            <ul className="space-y-6 sm:space-y-8 text-center">
              {linksRouter.map((menu: LinkType) => (
                <li key={menu.id} className="relative">
                  <NavLink
                    onClick={handleActive}
                    to={menu.link ?? "/"}
                    className={({ isActive, isPending }) =>
                      `cursor-pointer text-text-primary text-xl sm:text-2xl transition-colors duration-200 ${
                        isActive
                          ? "text-brand-500 after:block after:absolute after:-bottom-1 after:h-[2px] after:w-full after:bg-brand-500"
                          : "hover:text-brand-500"
                      } ${isPending ? "pending" : ""}`
                    }
                  >
                    {menu.text}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Button to="/contact" variant="primary" onClick={handleActive}>
              Engagez-moi
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Navbar;
