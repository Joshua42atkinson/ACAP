import React from 'react';
import { useParams, Link } from 'react-router-dom';

// In a real application, this data would come from a CMS or API
const moduleData = {
  '1': {
    title: 'Module 1: Build Your Resume',
    objective: 'The goal of this module is for you to construct a powerful, tailored resume through a process of discovery and peer interaction.',
    activities: [
      { id: '1-1', title: 'Activity: Deconstructing Job Descriptions', description: 'Learn to analyze job descriptions to identify key skills and keywords.' },
      { id: '1-2', title: 'Activity: Brainstorming Your "Experience Inventory"', description: 'Create a master document of your skills and accomplishments.' },
      { id: '1-3', title: 'Activity: Peer Resume Review', description: 'Give and receive constructive feedback on your newly tailored resume.' },
      { id: '1-4', title: 'Yin Point: Reflection on Professional Identity', description: 'Reflect on your personal value beyond your professional life.' },
    ]
  },
  // Data for modules 2 and 3 would go here
};

function Module() {
  const { moduleId } = useParams();
  const module = moduleData[moduleId];

  if (!module) {
    return <div>Module not found.</div>;
  }

  return (
    <div>
      <h1>{module.title}</h1>
      <p><em>{module.objective}</em></p>

      <h2>Module Activities</h2>
      <ul>
        {module.activities.map(activity => (
          <li key={activity.id}>
            <strong>{activity.title}:</strong> {activity.description}
          </li>
        ))}
      </ul>

      <Link to="/modules">Back to Course Modules</Link>
    </div>
  );
}

export default Module;
