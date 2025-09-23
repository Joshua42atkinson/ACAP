import React from 'react';
import { Link } from 'react-router-dom';

function CourseModules() {
  return (
    <div>
      <h1>Course Modules</h1>
      <p>This is the central hub for your learning journey. Work through the modules in order to build your skills progressively.</p>
      <ul>
        <li><Link to="/modules/1">Module 1: Build Your Resume</Link></li>
        <li><Link to="/modules/2">Module 2: Build Your Network</Link></li>
        <li><Link to="/modules/3">Module 3: Demonstrate Your Value</Link></li>
      </ul>
    </div>
  );
}

export default CourseModules;
