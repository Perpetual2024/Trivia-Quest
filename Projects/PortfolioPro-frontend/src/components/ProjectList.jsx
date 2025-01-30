import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = ({ projects }) => {
  // Check if projects is an array and not empty
  if (!projects || projects.length === 0) {
    return <div>No projects found</div>;
  }

  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
