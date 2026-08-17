import { NavLink } from "react-router-dom";
import { Moon, Menu, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <>
      {/* Navbar for medium to large screens */}
      <nav className="hidden dark:bg-[#212121] md:flex justify-between w-full h-16 items-center p-5 gap-5 bg-[#f1faee] text-[#1d3557] dark:text-[f1faee]">
        {/* Change this to NavLink later */}
        <div className="flex gap-5 justify-center items-center">
          <NavLink
            to="/"
            className="font-bold text-xl text-[#1d3557] dark:text-[#f1faee]"
          >
            Zeri
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#1d3557] dark:text-[#a8dadc]"
                : "text-[#457b9d] hover:text-[#a8dadc] dark:text-[#f1faee]"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#1d3557] dark:text-[#a8dadc]"
                : "text-[#457b9d] hover:text-[#a8dadc] dark:text-[#f1faee]"
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#1d3557] dark:text-[#a8dadc]"
                : "text-[#457b9d] hover:text-[#a8dadc] dark:text-[#f1faee]"
            }
            to="/projects"
          >
            Projects
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#1d3557] dark:text-[#a8dadc]"
                : "text-[#457b9d] hover:text-[#a8dadc] dark:text-[#f1faee]"
            }
            to="/experience"
          >
            Experience
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#1d3557] dark:text-[#a8dadc]"
                : "text-[#457b9d] hover:text-[#a8dadc] dark:text-[#f1faee]"
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
        <div className="flex">
          {/* Icon -> install lucide-react for the moon and sun */}
          <button
            onClick={() => setIsDark((prev) => !prev)}
            className="hover:text-[#457b9d] dark:text-[#f1faee] hover:dark:text-[#a8dadc] p-2 rounded-3xl cursor-pointer"
          >
            {isDark ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      </nav>

      {/* Navbar for mobile phones or small screens */}
      <nav className="md:hidden flex justify-between items-center p-5 relative">
        <h1 className="text-xl text-[#1d3557] dark:text-[#f1faee]">Zeri</h1>
        <div className="flex items-center gap-2">
          <div className="flex">
            {/* Icon -> install lucide-react for the moon and sun */}
            <button
              onClick={() => setIsDark((prev) => !prev)}
              className="hover:text-[#457b9d] dark:text-[#f1faee] hover:dark:text-[#a8dadc] p-2 rounded-3xl cursor-pointer"
            >
              {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>
          <Menu
            size={30}
            strokeWidth={3}
            onClick={() => setIsOpen((prev) => !prev)}
            className="hover:text-[#457b9d] text-[#1d3557] dark:text-[#f1faee] cursor-pointer"
          />

          {isOpen && (
            <div
              className="flex flex-col absolute top-20 left-0 dark:text-[#f1faee] bg-[#f1faee] dark:bg-[#212121] gap-2 w-full z-100"
              onClick={() => setIsOpen(false)}
            >
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[#1d3557] dark:text-[#a8dadc] border-b border-gray-200 p-3"
                    : "text-[#457b9d] hover:text-[#a8dadc] dark:text-[#f1faee] border-b border-gray-200 p-3"
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[#1d3557] dark:text-[#a8dadc] border-b border-gray-200 p-3"
                    : "text-[#457b9d] hover:text-[#a8dadc] dark:text-[#f1faee] border-b border-gray-200 p-3"
                }
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[#1d3557] dark:text-[#a8dadc] border-b border-gray-200 p-3"
                    : "text-[#457b9d] hover:text-[#a8dadc] dark:text-[#f1faee] border-b border-gray-200 p-3"
                }
                to="/projects"
              >
                Projects
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[#1d3557] dark:text-[#a8dadc] border-b border-gray-200 p-3"
                    : "text-[#457b9d] hover:text-[#a8dadc] dark:text-[#f1faee] border-b border-gray-200 p-3"
                }
                to="/experience"
              >
                Experience
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[#1d3557] dark:text-[#a8dadc] border-b border-gray-200 p-3"
                    : "text-[#457b9d] hover:text-[#a8dadc] dark:text-[#f1faee] border-b border-gray-200 p-3"
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
