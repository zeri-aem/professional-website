import { useState } from "react";
import { about } from "../../../data/about";

// I DIDNT USE THIS: THIS IS ONLY FOR REFERENCE FOR CREATING TABS

type Talents = {
  id: number;
  topic: string;
  image: string;
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
  const [activeTab, setActiveTab] = useState(content[0]?.id);

  const data = about.beyondCode
    .find((talent) => talent.id === id)
    ?.content.find((cont) => cont.id === activeTab);

  // If the content is just <= 1: render this
  if (content.length <= 1) {
    return (
      <article className="flex flex-col">
        <h2 className="font-bold text-3xl text-[#457b9d] dark:text-[#a8dadc] mb-5">
          {title}
        </h2>
        {content.map((cont) => (
          <>
            <div className="grid md:grid-cols-2 gap-5" key={cont.id}>
              <img src={cont.image} alt={cont.topic} />
              <div>
                <h1>{cont.topic}</h1>
                <p>{cont.description}</p>
              </div>
            </div>
          </>
        ))}
      </article>
    );
  }

  // Else if >= 2: render the tabs
  return (
    <article className="flex flex-col gap-5">
      <h2 className="font-bold text-3xl text-[#457b9d] dark:text-[#a8dadc] mb-5">
        {title}
      </h2>
      {/* Tabs */}
      <div className="flex justify-center items-center flex-wrap">
        {content.map((cont) => (
          <button
            key={cont.id}
            className={`p-3 min-w-50 text-[#f1faee] cursor-pointer w-full md:w-auto hover:bg-[#225778] dark:hover:bg-[#2f4565] ${activeTab === cont.id ? "bg-[#1d3557] dark:bg-[#457b9d]" : "bg-[#457b9d] dark:bg-[#1d3557]"}`}
            onClick={() => setActiveTab(cont.id)}
          >
            {cont.topic}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-5 justify-center">
        {data?.id! % 2 === 0 ? (
          <>
            <div>{data?.description}</div>
            <div className="justify-self-center">
              <img
                src={data?.image}
                alt={data?.topic}
                className="w-full object-cover"
              />
            </div>
          </>
        ) : (
          <>
            <div className="justify-self-center">
              <img
                src={data?.image}
                alt={data?.topic}
                className="w-full object-cover"
              />
            </div>
            <div>{data?.description}</div>
          </>
        )}
      </div>
    </article>
  );
}

export default BeyondCard;
