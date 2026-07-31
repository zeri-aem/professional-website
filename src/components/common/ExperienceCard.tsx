type Responsibilities = {
  id: number;
  responsibility: string;
};

type ExperienceCardProps = {
  companyName: string;
  responsibilities: Responsibilities[];
};

function ExperienceCard({
  companyName,
  responsibilities,
}: ExperienceCardProps) {
  return (
    <div className="flex flex-col gap-2 p-5 justify-start items-start rounded-2xl bg-blue-300">
      <h1>{companyName}</h1>
      {responsibilities.map((res) => (
        <li key={res.id} className="ml-5 max-w-5xl min-w-90">
          {res.responsibility}
        </li>
      ))}
    </div>
  );
}

export default ExperienceCard;
