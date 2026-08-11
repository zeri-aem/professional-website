import projectsCover from "../../../assets/projects_cover.png";
import ProjectCard from "./ProjectCard";
import { projects } from "../../../data/projects";
import { ChevronDown, ChevronUp } from "lucide-react";
import { TbMoodSad } from "react-icons/tb";
import { useState, type ChangeEvent } from "react";
import { type Project } from "../../../types/project";

function Projects() {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState<Project[]>([]);
  const [filters, setFilters] = useState<string[]>([]);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [isFilterOpened, setIsFilterOpened] = useState(false);
  const [isSortOpened, setIsSortOpened] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Relevance");
  const [sorts, setSorts] = useState<string[]>([]);

  const handleShowSort = () => {
    const nextState = !isSortOpened;

    setIsSortOpened(nextState);

    if (nextState) {
      setSorts(["Relevance", "Name", "Difficulty"]);

      isFilterOpened && setIsFilterOpened((prev) => !prev);
    } else {
      setSorts([]);
    }
  };

  const handleSelectedSortClick = (sort: string) => {
    setSelectedSort(sort);
    setSorts([]);
    setIsSortOpened((prev) => !prev);
  };

  const handleShowFilter = () => {
    const nextState = !isFilterOpened;

    setIsFilterOpened(nextState);

    if (nextState) {
      setFilters([
        "All",
        ...Array.from(new Set(projects.map((project) => project.category))),
      ]);

      isSortOpened && setIsSortOpened((prev) => !prev);
    } else {
      setFilters([]);
    }
  };

  const handleSelectedFilterClick = (category: string) => {
    // const nextState = !isOpened;

    setSelectedFilter(category);
    setFilters([]);
    setIsFilterOpened((prev) => !prev);
  };

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      selectedFilter === "All" || project.category === selectedFilter;

    return matchesSearch && matchesFilter;
  });

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (selectedSort) {
      case "Relevance":
        return a.id - b.id;

      case "Name":
        return a.title.localeCompare(b.title);

      case "Difficulty":
        return a.diff - b.diff;

      default:
        return 0;
    }
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearch(value);

    if (value.length > 0) {
      const filtered = sortedProjects.filter((project) =>
        project.title.toLowerCase().includes(value.toLowerCase()),
      );

      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center -mx-3 md:-mx-5 lg:-mx-10 mb-10">
        <img
          src={projectsCover}
          alt="Project cover image"
          className="w-full h-120 object-cover"
        />
        <h1 className="font-bold text-8xl absolute text-[#1d3557] text-shadow-sm text-shadow-white">
          Projects
        </h1>
      </div>
      <section className="flex flex-col gap-5">
        <div className="flex items-center justify-between flex-wrap gap-3">
          {/* Search bar */}
          <div className="relative flex flex-1 gap-1">
            <input
              type="text"
              placeholder="Search by name"
              value={search}
              onChange={handleInputChange}
              className="w-full md:w-100 text-md rounded p-3 border bg-white border-gray-400 outline-none focus:border-[#1d3557]"
            />
            {/* Suggestions */}
            {suggestions.length > 0 && (
              <ul className="absolute bg-white border w-100 top-15 rounded-lg z-10">
                {suggestions.map((suggestion) => (
                  <li
                    key={suggestion.id}
                    className="p-2 hover:bg-gray-100 cursor-pointer rounded-lg"
                    onClick={() => {
                      setSearch(suggestion.title);
                      setSuggestions([]);
                    }}
                  >
                    {suggestion.title}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex justify-center gap-2 items-center">
            {/* Sort by something */}
            <div className="relative flex gap-2 justify-center items-center">
              <button
                type="button"
                className="flex justify-center items-center gap-2 rounded p-3 border bg-white border-gray-400 outline-none focus:border-[#1d3557]"
                onClick={handleShowSort}
              >
                Sort by: <span>{selectedSort}</span>{" "}
                {isSortOpened ? (
                  <ChevronUp size={15} />
                ) : (
                  <ChevronDown size={15} />
                )}
              </button>
              {isSortOpened && (
                <ul className="absolute bg-white border w-100 top-15 right-0 rounded z-10">
                  {sorts.map((sort, idx) => (
                    <li
                      key={idx}
                      className="p-2 hover:bg-gray-100 cursor-pointer rounded-lg"
                      onClick={() => handleSelectedSortClick(sort)}
                    >
                      {sort}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Filter by something */}
            <div className="relative flex gap-2 justify-center items-center">
              <button
                type="button"
                className="flex justify-center items-center gap-2 rounded p-3 border bg-white border-gray-400 outline-none focus:border-[#1d3557]"
                onClick={handleShowFilter}
              >
                Filter by: <span>{selectedFilter}</span>{" "}
                {isFilterOpened ? (
                  <ChevronUp size={15} />
                ) : (
                  <ChevronDown size={15} />
                )}
              </button>
              {isFilterOpened && (
                <ul className="absolute bg-white border w-100 top-15 right-0 rounded z-10">
                  {filters.map((category, idx) => (
                    <li
                      key={idx}
                      className="p-2 hover:bg-gray-100 cursor-pointer rounded-lg"
                      onClick={() => handleSelectedFilterClick(category)}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        {/* Projects Section */}

        {sortedProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
            {sortedProjects.map((project) => (
              <ProjectCard {...project} key={project.id} />
            ))}{" "}
          </div>
        ) : (
          <div className="flex justify-center items-center gap-2 m-10">
            <span className="font-bold text-2xl text-[#457b9d]">
              No matching projects found
            </span>
            <TbMoodSad size={30} color="#457b9d" />
          </div>
        )}
      </section>
    </>
  );
}

export default Projects;
