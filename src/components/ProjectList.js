import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {


  const item = projects.map(project => {
    return < ProjectItem  
      key = {project.id}
      name = {project.name} 
      about ={project.about} 
      technologies={project.technologies}/>
  }
    
  );
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {item}
      </div>
    </div>
  );
}

export default ProjectList;
// id: 1,
// name: "Reciplease",
// about: "A recipe tracking app",
// technologies: ["Rails", "Bootstrap CSS"],