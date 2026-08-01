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
      className="rounded p-2 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white"
    >
      {children}
    </NavLink>
  );
}

export default Button;
