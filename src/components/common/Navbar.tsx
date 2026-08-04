import { NavLink } from "react-router-dom";
import { Moon } from "lucide-react";

export default function Navbar() {
  return (
    <nav
      className="hidden md:flex justify-between w-full h-16
    items-center font-bold p-5 gap-5 bg-[#f1faee] text-[#1d3557] border border-gray-200"
    >
      {/* Change this to NavLink later */}
      <div className="flex gap-5 justify-center items-center">
        <h1 className="text-xl text-[#1d3557]">Zeri</h1>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#1d3557]" : "text-[#457b9d] hover:text-[#a8dadc]"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#1d3557]" : "text-[#457b9d] hover:text-[#a8dadc]"
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#1d3557]" : "text-[#457b9d] hover:text-[#a8dadc]"
          }
          to="/projects"
        >
          Projects
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#1d3557]" : "text-[#457b9d] hover:text-[#a8dadc]"
          }
          to="/experience"
        >
          Experience
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#1d3557]" : "text-[#457b9d] hover:text-[#a8dadc]"
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
      <div className="flex">
        {/* Icon -> install lucide-react for the moon and sun */}
        <button className=" hover:bg-[#d9e1d7] p-2 rounded-3xl cursor-pointer">
          <Moon size={24} />
        </button>
      </div>
    </nav>
  );
}
