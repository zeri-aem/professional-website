import { ChevronLeft, ChevronRight, type LucideIcon } from "lucide-react";
import { useState } from "react";

type CarouselImage = {
  id: number;
  image: string | LucideIcon;
};

type CarouselProps = {
  images: CarouselImage[];
};

const NAVSIZE = 40;

function Carousel({ images }: CarouselProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const current = images[currentImage];

  return (
    <div className="relative">
      <div className="flex justify-center items-center rounded shadow w-full h-full">
        {typeof current.image === "string" ? (
          <img
            src={current.image}
            alt={current.image}
            className="object-contain w-full h-150"
          />
        ) : (
          <div className="bg-[#e63946] w-full h-full flex justify-center items-center">
            <current.image size={200} className="text-[#f1faee] m-10" />
          </div>
        )}
      </div>

      {images.length > 1 && (
        <>
          <button
            className="absolute top-1/2 left-0 text-[#1d3557] hover:text-[#457b9d] cursor-pointer disabled:text-gray-500 disabled:hover:text-gray-500 disabled:cursor-auto"
            onClick={() => setCurrentImage((prev) => prev - 1)}
            disabled={currentImage === 0}
          >
            <ChevronLeft size={NAVSIZE} />
          </button>
          <button
            className="absolute top-1/2 right-0 text-[#1d3557] hover:text-[#457b9d] cursor-pointer disabled:text-gray-500 disabled:hover:text-gray-500 disabled:cursor-auto"
            onClick={() => setCurrentImage((prev) => prev + 1)}
            disabled={currentImage === images.length - 1}
          >
            <ChevronRight size={NAVSIZE} />
          </button>
        </>
      )}
    </div>
  );
}

export default Carousel;
