export type casObject = {
  id: number;
  challenge: string;
  solution: string;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  tech: string[];
  github: string;
  year: number;
  difficulty: number;
  cas: casObject[];
};

export type ProjectCardProps = Pick<
  Project,
  "id" | "title" | "description" | "year" | "category" | "image"
>;
