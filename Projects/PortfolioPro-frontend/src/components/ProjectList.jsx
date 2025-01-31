import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [projectToEdit, setProjectToEdit] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/project")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error(error));
  }, []);


  const handleDeleteProject = (projectId) => {
    setProjects(projects.filter(project => project.id !== projectId)); // Remove project from state
  };

  const handleEditProject = (project) => {
    setProjectToEdit(project); // Set project for editing
  };

  return (
    <div>
      <h2>Project List</h2>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            handleDeleteProject={handleDeleteProject}
            handleEditProject={handleEditProject}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
