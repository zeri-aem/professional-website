import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type ButtonProps = {
  children: ReactNode;
  to: string;
};

function Button({ children, to }: ButtonProps) {
  return (
    <NavLink
      to={to}
      type="button"
      className="rounded p-2 cursor-pointer text-white bg-[#1d3557] hover:bg-[#457b9d] transition-all duration-300"
    >
      {children}
    </NavLink>
  );
}

export default Button;
