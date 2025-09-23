import React from 'react';
import { useParams, Link } from 'react-router-dom';

// In a real application, this data would come from a CMS or API
const moduleData = {
  '1': {
    title: 'Module 1: Build Your Resume',
    objective: 'Learn how to build a powerful, tailored resume.',
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

      {/* Interactive, "chunked" content will be implemented here in a future phase. */}
      <p>Module content coming soon...</p>

      <br />
      <Link to="/modules">Back to Course Modules</Link>
    </div>
  );
}

export default Module;
