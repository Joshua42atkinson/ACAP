import React from 'react';
import { Link } from 'react-router-dom';

function CourseModules() {
  return (
    <div>
      <h1>Course Modules</h1>
      <p>This is the central hub for your learning journey. Work through the modules in order to build your skills progressively.</p>
      <ul>
        <li><Link to="/modules/1">Module 1: Build Your Resume</Link></li>
        {/* Placeholders for future modules */}
        <li>Module 2: Build Your Network (Coming Soon)</li>
        <li>Module 3: Demonstrate Your Value (Coming Soon)</li>
      </ul>
    </div>
  );
}

export default CourseModules;
