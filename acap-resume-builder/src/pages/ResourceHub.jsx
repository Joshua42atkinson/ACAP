import React from 'react';

// TODO: The interactive features described in the text (e.g., peer review, video uploads, forums, worksheets) are not yet implemented. This would require a backend and further frontend development.

function ResourceHub() {
  return (
    <div>
      <h1>Resource Hub</h1>
      <p>Here you will find a searchable repository of all the tools, templates, and external links mentioned throughout the course. This hub is designed to be a central place for all support materials, allowing you to focus on the active learning in the modules.</p>

      <p>Valuable career sites for your job search journey:</p>
      <ul>
        <li><a href="https://www.careeronestop.org/" target="_blank" rel="noopener noreferrer">CareerOneStop</a></li>
        <li><a href="https://www.onetonline.org/" target="_blank" rel="noopener noreferrer">O*NET Online</a></li>
      </ul>

      <hr />

      <h2>Resume Tools</h2>
      <ul>
        <li>Downloadable Resume Templates (coming soon)</li>
        <li>Action Verb Lists (coming soon)</li>
        <li>Peer Review Rubric (coming soon)</li>
      </ul>

      <h2>Networking Tools</h2>
      <ul>
        <li>Email Scripts and Templates (coming soon)</li>
        <li>Guide to Using LinkedIn Effectively (coming soon)</li>
        <li>Informational Interview Question Samples (coming soon)</li>
      </ul>

      <h2>Interview Tools</h2>
      <ul>
        <li>Common Behavioral Interview Questions (coming soon)</li>
        <li>STAR Method Worksheet (coming soon)</li>
        <li>Salary Negotiation Resources (coming soon)</li>
      </ul>

      <h2>Well-being Tools</h2>
      <ul>
        <li>Links to Mental Health Resources (coming soon)</li>
        <li>Stress Management Guides & Exercises (coming soon)</li>
      </ul>
    </div>
  );
}

export default ResourceHub;
