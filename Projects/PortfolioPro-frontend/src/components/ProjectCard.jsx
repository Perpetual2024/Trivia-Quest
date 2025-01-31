import React from 'react';

function ProjectCard({ project, handleDeleteProject, handleEditProject }) {
  const handleDelete = () => {
    fetch(`http://127.0.0.1:5555/projects/${project.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => handleDeleteProject(project.id))
      .catch((error) => console.error('Error deleting project:', error));
  };

  const handleEdit = () => {
    handleEditProject(project); // Set the project to edit in parent component
  };

  return (
    <div className="project-card">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <img src={project.image} alt={project.title} />
      <p><strong>User ID:</strong> {project.user_id}</p>
      <button onClick={handleEdit}>Edit Project</button>
      <button onClick={handleDelete}>Delete Project</button>
    </div>
  );
}

export default ProjectCard;
