import { NavLink } from "react-router-dom";
import { Moon } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex justify-between w-full h-16 items-center bg-[#f1faee]">
      {/* Change this to NavLink later */}
      <div className="flex gap-5 p-5">
        <NavLink
          className={({
            isActive,
          }) => `text-lg font-bold text-[#1d3557] hover:text-[#457b9d]
          ${isActive ? "text-[#457b9d]" : "text-[#1d3557]"}`}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({
            isActive,
          }) => `text-lg font-bold text-[#1d3557] hover:text-[#457b9d]
          ${isActive ? "text-[#457b9d]" : "text-[#1d3557]"}`}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({
            isActive,
          }) => `text-lg font-bold text-[#1d3557] hover:text-[#457b9d]
          ${isActive ? "text-[#457b9d]" : "text-[#1d3557]"}`}
          to="/projects"
        >
          Projects
        </NavLink>
        <NavLink
          className={({
            isActive,
          }) => `text-lg font-bold text-[#1d3557] hover:text-[#457b9d]
          ${isActive ? "text-[#457b9d]" : "text-[#1d3557]"}`}
          to="/experience"
        >
          Experience
        </NavLink>
        <NavLink
          className={({
            isActive,
          }) => `text-lg font-bold text-[#1d3557] hover:text-[#457b9d]
          ${isActive ? "text-[#457b9d]" : "text-[#1d3557]"}`}
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
      <div className="flex p-5">
        {/* Icon -> install lucide-react for the moon and sun */}
        <button className=" hover:bg-[#d9e1d7] p-2 rounded-3xl cursor-pointer">
          <Moon size={24} />
        </button>
      </div>
    </nav>
  );
}
