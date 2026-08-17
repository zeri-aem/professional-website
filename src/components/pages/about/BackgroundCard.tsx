import type { ReactNode } from "react";
import { useState } from "react";

type BackgroundProps = {
  time: string;
  children: ReactNode;
};

function BackgroundCard({ time, children }: BackgroundProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="perspective-[1000px] w-full min-h-100 cursor-pointer hover:scale-105 transition-transform duration-300"
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <div
        className={`relative w-full min-h-100 transition-transform duration-500 transform-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 flex text-center justify-center items-center rounded-2xl text-4xl text-[#f1faee] bg-[#1d3557] backface-hidden">
          {time}
        </div>

        {/* Back */}
        <div className="absolute inset-0 flex flex-col justify-center overflow-hidden items-center text-justify rounded-2xl text-[#f1faee] bg-[#e63946] p-5 rotate-y-180 backface-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}

export default BackgroundCard;
