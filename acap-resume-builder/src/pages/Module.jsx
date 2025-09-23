import React from 'react';
import { Link } from 'react-router-dom';

function Module() {
  return (
    <div>
      <h2>Module 1: Constructing the Professional Narrative</h2>
      <p>This module is designed to guide you through the process of creating a powerful and tailored resume.</p>
      <h3>Activities:</h3>
      <ul>
        <li><Link to="/resume-builder">Activity: Create Your Resume (Experience Inventory)</Link></li>
        {/* Future activities will be added here */}
      </ul>
    </div>
  );
}

export default Module;
