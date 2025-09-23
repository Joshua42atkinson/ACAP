import React from 'react';

function CommunityForum() {
  return (
    <div>
      <h1>Community Forum</h1>
      <p>This is a space to connect with your peers, ask questions, share your successes, and provide constructive feedback.</p>
      {/* Sitemap indicates sub-forums */}
      <ul>
        <li>General Discussion</li>
        <li>Module 1 Discussion</li>
        <li>Module 2 Discussion</li>
        <li>Module 3 Discussion</li>
      </ul>
    </div>
  );
}

export default CommunityForum;
