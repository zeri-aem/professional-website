import type { ComponentPropsWithoutRef } from "react";
import { NavLink } from "react-router-dom";

type NavProps = {
  elem: "nav";
  // children: ReactNode;
  // to: string;
} & ComponentPropsWithoutRef<typeof NavLink>;

type AProps = {
  elem: "a";
  // children: ReactNode;
  href: string;
} & ComponentPropsWithoutRef<"a">;

type ButtonProps = NavProps | AProps;

function Button(props: ButtonProps) {
  if (props.elem === "a") {
    const { href, children, ...aProps } = props;

    return (
      <a href={href} {...aProps}>
        {children}
      </a>
    );
  } else if (props.elem === "nav") {
    const { to, children, ...navProps } = props;

    return (
      <NavLink
        to={to}
        className="rounded p-2 cursor-pointer text-white bg-[#1d3557] hover:bg-[#457b9d] transition-all duration-300"
        {...navProps}
      >
        {children}
      </NavLink>
    );
  }
}

export default Button;
