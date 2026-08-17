import { type LucideIcon } from "lucide-react";

type DoCardProps = {
  Icon: LucideIcon;
  title: string;
  description: string;
};

function DoCard({ Icon, title, description }: DoCardProps) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center bg-white dark:bg-[#1d3557] p-5 rounded-lg shadow hover:border-gray-500 hover:scale-105 transition-all duration-300">
      <Icon size={40} className="text-[#a8dadc] dark:text-[#457b9d]" />
      <h2 className="font-semibold dark:text-[#f1faee]">{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default DoCard;
