import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [projectToEdit, setProjectToEdit] = useState(null);
  const [updatedProject, setUpdatedProject] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    fetch("http://127.0.0.1:5555/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error(error));
  }, []);

  const handleDeleteProject = (projectId) => {
    setProjects(projects.filter(project => project.id !== projectId)); // Remove project from state
  };

  const handleEditProject = (project) => {
    console.log("Editing project:", project);  // Log to check if the function is triggered
    setProjectToEdit(project); // Set project for editing
    setUpdatedProject({
      title: project.title,
      description: project.description,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProject((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    // Send the updated project data to the server
    fetch(`http://127.0.0.1:5555/projects/${projectToEdit.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProject),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the project in the local state
        setProjects((prevProjects) =>
          prevProjects.map((project) =>
            project.id === projectToEdit.id ? data : project
          )
        );

        setProjectToEdit(null); // Close the edit form
      })
      .catch((error) => console.error(error));
  };

  console.log(projectToEdit);  // Log the state to see if it's getting updated correctly

  return (
    <div>
      <h2>Project List</h2>
      <div className="project-list">
        {projects
        .filter(project => project.id)
        .map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            handleDeleteProject={handleDeleteProject}
            handleEditProject={handleEditProject}
          />
        ))}
      </div>

      {projectToEdit && (
        <div className="edit-form" style={{display: 'block', padding: '20px', border: '1px solid #000'}}>
          <h3>Edit Project</h3>
          <form onSubmit={handleSubmitEdit}>
          <div>
              <label htmlFor="id">Id</label>
              <input
                type="integer"
                name="id"
                id="id"
                value={updatedProject.id}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                value={updatedProject.title}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                value={updatedProject.description}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="image">Image</label>
              <textarea
                name="image"
                id="image"
                value={updatedProject.image}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="user_id">User_id</label>
              <input
                type="integer"
                name="user_id"
                id="user_id"
                value={updatedProject.user_id}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Save Changes</button>
            <button type="button" onClick={() => setProjectToEdit(null)}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ProjectList;
