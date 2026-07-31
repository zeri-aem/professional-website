import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};

function Button({ children }: ButtonProps) {
  return (
    <button
      type="button"
      className="rounded p-2 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white"
    >
      {children}
    </button>
  );
}

export default Button;
