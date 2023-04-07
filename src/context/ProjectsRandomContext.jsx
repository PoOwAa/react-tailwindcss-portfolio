import { createContext, useState } from "react";
import { projectsData } from "../data/projects";

export const ProjectsRandomContext = createContext();

export const ProjectsRandomProvider = (props) => {
  // Pick 6 random projects
  const projectsRandomData = projectsData.sort(() => 0.5 - Math.random()).slice(0, 3);

  const [projects, setProjects] = useState(projectsRandomData);

  return (
    <ProjectsRandomContext.Provider
      value={{
        projects,
        setProjects,
      }}
    >
      {props.children}
    </ProjectsRandomContext.Provider>
  );
}