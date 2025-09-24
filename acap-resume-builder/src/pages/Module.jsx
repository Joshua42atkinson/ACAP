import React from 'react';
import { useParams, Link } from 'react-router-dom';

// In a real application, this data would come from a CMS or API
const moduleData = {
  '1': {
    title: 'Module 1: Build Your Resume',
    objective: 'The learner will transform their existing resume from a simple list of duties into a compelling narrative of their professional accomplishments, tailored specifically to a target job.',
    activities: [
      { id: 1, title: 'Activity 1.1: The Resume Autopsy' },
      { id: 2, title: 'Activity 1.2: Deconstructing Job Descriptions' },
      { id: 3, title: 'Activity 1.3: The "Experience Inventory"' },
      { id: 4, title: 'Activity 1.4: The "Tailoring" Simulation' },
      { id: 5, title: 'Activity 1.5: Collaborative Peer Review' },
    ]
  },
  '2': {
    title: 'Module 2: Build Your Network',
    objective: 'Develop skills to proactively network and find opportunities.',
  },
  '3': {
    title: 'Module 3: Demonstrate Your Value',
    objective: 'Master interviewing and follow-up techniques.',
  }
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

      <hr />

      {moduleId === '1' && module.activities ? (
        <div>
          <h2>Module Activities</h2>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            {module.activities.map(activity => (
              <li key={activity.id} style={{ marginBottom: '10px' }}>
                <Link to={`/resume-builder/chapter/${activity.id}`}>{activity.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <>
          {/* Interactive, "chunked" content will be implemented here in a future phase. */}
          <p>Module content coming soon...</p>
        </>
      )}


      <br />
      <Link to="/modules">Back to Course Modules</Link>
    </div>
  );
}

export default Module;
