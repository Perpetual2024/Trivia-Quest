import React from 'react'
import ProjectForm from '../components/ProjectForm'

    function ProjectPage() {
        const handleAddProject = (project) => {
          // handle the added project (e.g., update state or display confirmation)
          console.log("Project added:", project);
        };
      
        return (
          <div>
            <h1>Project Page</h1>
            <ProjectForm handleAddProject={handleAddProject} />
          </div>
        );
      }
      
      export default ProjectPage;
 