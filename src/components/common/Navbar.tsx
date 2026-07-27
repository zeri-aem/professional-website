import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-amber-600">
      {/* Change this to NavLink later */}
      <div className="flex gap-5 p-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className="flex p-5">
        {/* Icon -> install lucide-react for the moon and sun */}
        <h1>Light</h1>
      </div>
    </nav>
  );
}
