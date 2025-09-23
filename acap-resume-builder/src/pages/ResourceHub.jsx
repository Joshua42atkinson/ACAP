import React from 'react';

function ResourceHub() {
  return (
    <div>
      <h1>Resource Hub</h1>
      <p>Here you will find a searchable repository of all the tools, templates, and external links mentioned throughout the course.</p>
      {/* According to the sitemap, this will be divided into sections */}
      <h2>Resume Tools</h2>
      <ul>
        <li>Templates</li>
        <li>Action Verb Lists</li>
        <li>Rubrics</li>
      </ul>
      <h2>Networking Tools</h2>
      <ul>
        <li>Email Scripts</li>
        <li>LinkedIn Guide</li>
      </ul>
      <h2>Interview Tools</h2>
      <ul>
        <li>Common Questions</li>
        <li>STAR Method Guide</li>
      </ul>
      <h2>Well-being Tools</h2>
      <ul>
        <li>Links to Mental Health Resources</li>
      </ul>
    </div>
  );
}

export default ResourceHub;
