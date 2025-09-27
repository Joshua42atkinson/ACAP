import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { moduleData } from '../course-data';
import Module2 from './Module2';
import Module3 from './Module3';

function Module() {
  const { moduleId } = useParams();
  const module = moduleData[moduleId];

  if (!module) {
    return <div>Module not found.</div>;
  }

  // Specific content for Module 1, aligned with Gagné's Nine Events
  const renderModule1Content = () => (
    <div>
      {/* Event 1: Gain Attention */}
      <div className="gagne-event">
        <h2>1. Gaining Attention</h2>
        <p>"On average, a recruiter spends just <strong>7 seconds</strong> reviewing a resume. How can we make every second count?"</p>
        <p>This module is designed to help you transform your resume from a passive list of duties into a powerful story of your accomplishments.</p>
      </div>

      {/* Event 2: Inform Learners of Objectives */}
      <div className="gagne-event">
        <h2>2. Learning Objectives</h2>
        <p>By the end of this module, you will be able to:</p>
        <ul>
          <li>Deconstruct a job description to identify key employer needs.</li>
          <li>Create a personal 'Experience Inventory' to catalog your skills and achievements.</li>
          <li>Construct a tailored resume that scores 'Proficient' or higher on the official ACAP rubric.</li>
        </ul>
      </div>

      {/* Event 3: Stimulate Recall of Prior Learning */}
      <div className="gagne-event">
        <h2>3. Reflecting on Your Experience</h2>
        <p>Think about the last resume you wrote. What part was the most challenging? What are you most proud of? Keep this in mind as we introduce new strategies.</p>
      </div>

      {/* Event 4: Present the Content */}
      <div className="gagne-event">
        <h2>4. Core Concepts: The Professional Narrative</h2>
        <p>This section contains the core instructional content for building a powerful resume.</p>
        <ul>
          <li><Link to="/resume-builder/chapter/1">1.1: The Resume Autopsy</Link></li>
          <li><Link to="/resume-builder/chapter/2">1.2: Deconstructing Job Descriptions</Link></li>
        </ul>
      </div>

      {/* Event 5: Provide Learning Guidance */}
      <div className="gagne-event">
        <h2>5. Tools for the Task</h2>
        <p>Download these resources to help you organize your thoughts and structure your resume.</p>
        <ul>
            <li><a href="/experience-inventory-worksheet.md" download>Experience Inventory Worksheet</a></li>
            <li><a href="/modern-resume-template.md" download>Modern Resume Template</a></li>
            <li><a href="/powerful-action-verbs.md" download>List of Powerful Action Verbs</a></li>
        </ul>
      </div>

      {/* Event 6: Elicit Performance (Practice) */}
      <div className="gagne-event">
        <h2>6. Your Turn: Practice</h2>
        <p>This is the hands-on part of the workshop. Use the tools and concepts from the previous sections to begin drafting your own resume.</p>
        <ul>
          <li><Link to="/resume-builder/chapter/3">1.3: The "Experience Inventory"</Link></li>
          <li><Link to="/resume-builder/chapter/4">1.4: The "Tailoring" Simulation</Link></li>
        </ul>
      </div>

      {/* Event 7: Provide Feedback */}
      <div className="gagne-event">
        <h2>7. Peer Review & Feedback</h2>
        <p>Share your draft with peers and provide constructive feedback. This is a critical step for improvement.</p>
        <ul>
          <li><Link to="/resume-builder/chapter/5">1.5: Collaborative Peer Review</Link></li>
        </ul>
      </div>

      {/* Event 8: Assess Performance */}
      <div className="gagne-event">
        <h2>8. Final Assessment</h2>
        <p>After the workshop, you will submit your final resume to be scored against the official rubric. This is the Level 2 evaluation for this module.</p>
      </div>

      {/* Event 9: Enhance Retention and Transfer */}
      <div className="gagne-event">
        <h2>9. Looking Ahead</h2>
        <p>The skills you've learned here are not just for one resume. In this final section, we discuss how to adapt your "master" resume for different job applications in the future.</p>
      </div>
    </div>
  );

  return (
    <div>
      <h1>{module.title}</h1>
      <p><em>{module.objective}</em></p>
      <hr />

      {moduleId === '1' && renderModule1Content()}
      {moduleId === '2' && <Module2 />}
      {moduleId === '3' && <Module3 />}
      {!['1', '2', '3'].includes(moduleId) && <p>Module content coming soon...</p>}

      <br />
      <Link to="/modules">Back to Course Modules</Link>
    </div>
  );
}

export default Module;