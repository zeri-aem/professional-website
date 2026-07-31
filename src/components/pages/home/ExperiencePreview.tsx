import ExperienceCard from "../../common/ExperienceCard";

const dummyData = [
  {
    id: 1,
    companyName: "DXC",
    responsibilities: [
      {
        id: 1,
        responsibility:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        id: 2,
        responsibility:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        id: 3,
        responsibility:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  },
  {
    id: 2,
    companyName: "Tanod",
    responsibilities: [
      {
        id: 1,
        responsibility:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        id: 2,
        responsibility:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        id: 3,
        responsibility:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  },
];

function ExperiencePreview() {
  return (
    <div className="flex justify-start items-center pl-50 pr-50 bg-purple-300/30">
      <div className="flex flex-col justify-start items-start gap-3 p-5">
        <h1 className="text-4xl">
          <strong>Experience</strong>
        </h1>
        {/* ExperienceCard */}
        <div className="flex gap-5">
          {dummyData.map((data) => (
            <div key={data.id}>
              {
                <ExperienceCard
                  companyName={data.companyName}
                  responsibilities={data.responsibilities}
                />
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperiencePreview;
