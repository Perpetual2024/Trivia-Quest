import { useState, useEffect } from 'react';

const SkillList = ({ projectId }) => {
  const [skills, setSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState('');

  useEffect(() => {
    // Fetch available skills from your API
    const fetchSkills = async () => {
      try {
        const response = await fetch('/api/skills');
        const data = await response.json();
        setSkills(data);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };

    fetchSkills();
  }, []);

  const handleAddSkill = async () => {
    try {
      await fetch('/api/project_skills', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectId, skillId: selectedSkill }),
      });
      // Optionally, you can fetch skills associated with the project after adding a new one
    } catch (error) {
      console.error('Error linking skill to project:', error);
    }
  };

  return (
    <div>
      <h3>Skills</h3>
      <select onChange={(e) => setSelectedSkill(e.target.value)} value={selectedSkill}>
        <option value="">Select a skill</option>
        {skills.map((skill) => (
          <option key={skill.id} value={skill.id}>
            {skill.name}
          </option>
        ))}
      </select>
      <button onClick={handleAddSkill}>Add Skill</button>
    </div>
  );
};

export default SkillList;
