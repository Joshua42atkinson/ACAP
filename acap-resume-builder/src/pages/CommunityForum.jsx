import React from 'react';
import './CommunityForum.css'; // Assuming we'll add some styles

// TODO: The interactive features described in the text (e.g., peer review, video uploads, forums, worksheets) are not yet implemented. This would require a backend and further frontend development.

function CommunityForum() {
  return (
    <div>
      <h1>Community Forum</h1>
      <p>This is a space to connect with your peers, ask questions, share your successes, and provide constructive feedback. The forums below are designed to support your journey through each module.</p>

      <div className="forum-category">
        <h2>General Discussion</h2>
        <div className="forum-topic">
          <div className="topic-title"><a href="#">Welcome & Introductions</a></div>
          <div className="topic-meta">Share a bit about yourself and what you hope to gain from this workshop.</div>
        </div>
        <div className="forum-topic">
          <div className="topic-title"><a href="#">Questions & Feedback</a></div>
          <div className="topic-meta">Have a question about the course or feedback for us? Post it here.</div>
        </div>
      </div>

      <div className="forum-category">
        <h2>Module 1: Resume Building</h2>
        <div className="forum-topic">
          <div className="topic-title"><a href="#">Module 1 Discussion</a></div>
          <div className="topic-meta">Discuss the activities and concepts from Module 1.</div>
        </div>
        <div className="forum-topic">
          <div className="topic-title"><a href="#">Peer Resume Review</a></div>
          <div className="topic-meta">Post your tailored resume here for peer feedback as per Activity 3.3.</div>
        </div>
      </div>

      <div className="forum-category">
        <h2>Module 2: Networking</h2>
        <div className="forum-topic">
          <div className="topic-title"><a href="#">Module 2 Discussion</a></div>
          <div className="topic-meta">Discuss the activities and concepts from Module 2.</div>
        </div>
        <div className="forum-topic">
          <div className="topic-title"><a href="#">Simulated Networking Event</a></div>
          <div className="topic-meta">Participate in the virtual career fair as per Activity 4.3.</div>
        </div>
      </div>

      <div className="forum-category">
        <h2>Module 3: Interviewing</h2>
        <div className="forum-topic">
          <div className="topic-title"><a href="#">Module 3 Discussion</a></div>
          <div className="topic-meta">Discuss the activities and concepts from Module 3.</div>
        </div>
        <div className="forum-topic">
          <div className="topic-title"><a href="#">Mock Interview Feedback</a></div>
          <div className="topic-meta">Post your mock interview video here for peer feedback as per Activity 5.2.</div>
        </div>
        <div className="forum-topic">
          <div className="topic-title"><a href="#">Follow-Up Email Review</a></div>
          <div className="topic-meta">Post your draft follow-up email here for a final peer check as per Activity 5.3.</div>
        </div>
      </div>

    </div>
  );
}

export default CommunityForum;
