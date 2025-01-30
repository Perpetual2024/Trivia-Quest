import React from 'react';

const SkillList = ({ skills }) => {
  return (
    <div className="skill-list">
      {skills.map(skill => (
        <span key={skill.id}>{skill.name}</span>
      ))}
    </div>
  );
}

export default SkillList;
