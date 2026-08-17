import ReactMarkdown from "react-markdown";
import Carousel from "./Carousel";
import type { LucideIcon } from "lucide-react";

type CarouselImage = {
  id: number;
  image: string | LucideIcon;
};

type Talents = {
  id: number;
  topic: string;
  images: CarouselImage[];
  description: string;
};

type BeyondCardProps = {
  id: number;
  type: string;
  title: string;
  content: Talents[];
};

function BeyondCard({ id, type, title, content }: BeyondCardProps) {
  // If length of a talent is <= 1: Don't do the tabs just a normal setup
  // If length >= 2: Do Tabs
  // In the tab: idx % 2 === 0 (if it is even): we invert the image (maybe left or right I don't know)
  // const [activeTab, setActiveTab] = useState(content[0]?.id);

  // const data = about.beyondCode
  //   .find((talent) => talent.id === id)
  //   ?.content.find((cont) => cont.id === activeTab);

  // If the content is just <= 1: render this
  // if (content.length <= 1) {
  return (
    <article className="flex flex-col">
      <h2 className="font-bold text-3xl text-[#457b9d] dark:text-[#a8dadc] mb-5">
        {title}
      </h2>
      <div className="flex flex-col gap-10">
        {content.map((cont) =>
          cont.id % 2 === 0 ? (
            <div className="grid md:grid-cols-2 gap-5" key={cont.id}>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-2xl">{cont.topic}</h3>
                {/* whitespace-pre-line -> to use \n in strings */}
                <p className="text-justify whitespace-pre-line">
                  <ReactMarkdown>{cont.description}</ReactMarkdown>
                </p>
              </div>
              {<Carousel images={cont.images} key={cont.id} />}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-5" key={cont.id}>
              {<Carousel images={cont.images} key={cont.id} />}
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-2xl">{cont.topic}</h3>
                <p className="text-justify whitespace-pre-line">
                  <ReactMarkdown>{cont.description}</ReactMarkdown>
                </p>
              </div>
            </div>
          ),
        )}
      </div>
    </article>
  );
}

export default BeyondCard;
