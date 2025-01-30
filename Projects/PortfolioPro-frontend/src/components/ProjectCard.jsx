import React, {useState} from 'react'

const ProjectCard = ({ project }) => {
  const [showMore, setShowMore] = useState(false)
     function handleClick(){
      setShowMore(!showMore);
     }
    return (
      <div className="project-card">
        <h2>{project.name}</h2>
        <p>{project.description}</p>

        {showMore ? (
          <button onClick={handleClick}>Show More</button>
        ): (
          <button onClick={handleClick}>Show Less</button>
        ) }
      </div>
    );
  }
  
  export default ProjectCard;
  