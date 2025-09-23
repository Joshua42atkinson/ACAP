import React from 'react';
import { Link } from 'react-router-dom';

function CourseModules() {
  return (
    <div>
      <h1>Course Modules</h1>
      <ul>
        <li><Link to="/modules/1">Module 1: Constructing the Professional Narrative</Link></li>
      </ul>
    </div>
  );
}

export default CourseModules;
