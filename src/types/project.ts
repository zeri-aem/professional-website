export type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  tech: string[];
  github: string;
  year: number;
  diff: number;
};

export type ProjectCardProps = Pick<
  Project,
  "id" | "title" | "description" | "year" | "category" | "image"
>;
