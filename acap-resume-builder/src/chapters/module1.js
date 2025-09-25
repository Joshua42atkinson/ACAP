export const module1Content = {
  1: {
    title: 'Activity 1.1: The Resume Autopsy',
    objective: 'The learner will analyze their current resume to identify its strengths and weaknesses.',
    activity: 'ResumeAutopsy',
    script: [
      { type: 'bot', text: "Welcome to the first activity: The Resume Autopsy!" },
      { type: 'bot', text: "Did you know that, on average, a recruiter will spend only seven seconds looking at a resume? Our goal is to make every second count." },
      { type: 'bot', text: "Let's look at a 'before' and 'after' example to see how to transform a resume from a list of duties into a powerful story of your accomplishments." }
    ],
    content: `
      <h3>The "Before" Resume: A List of Duties</h3>
      <div class="resume-example">
        <h4>Jane Doe</h4>
        <p><strong>Responsibilities:</strong></p>
        <ul>
          <li>Responsible for customer service.</li>
          <li>Handled scheduling for the team.</li>
          <li>Tasked with updating the company website.</li>
        </ul>
      </div>

      <h3>The "After" Resume: A Story of Accomplishments</h3>
      <div class="resume-example">
        <h4>Jane Doe</h4>
        <p><strong>Key Accomplishments:</strong></p>
        <ul>
          <li><strong>Elevated Customer Satisfaction:</strong> Increased positive customer feedback by 25% by implementing a new follow-up system.</li>
          <li><strong>Optimized Team Scheduling:</strong> Reduced scheduling conflicts by 90% by creating and managing a new centralized calendar system.</li>
          <li><strong>Enhanced Online Presence:</strong> Redesigned three key pages of the company website, leading to a 15% increase in user engagement.</li>
        </ul>
      </div>
      <p><strong>The difference?</strong> The "After" resume uses action verbs and quantifies achievements. It doesn't just say what Jane did; it shows the impact she made.</p>
    `
  },
  2: {
    title: 'Activity 1.2: Deconstructing Job Descriptions',
    objective: 'The learner will analyze a real job description to extract key skills and qualifications.',
    activity: 'JobDescriptionAnalysis',
    script: [
      { type: 'bot', text: "Now, let's become detectives. Your mission is to deconstruct a job description to find the clues that tell you what an employer *really* wants." },
      { type: 'bot', text: "We're looking for keywords, skills, and qualifications. These are the building blocks of a tailored resume." }
    ],
    content: `
      <h3>Sample Job Description: Project Coordinator</h3>
      <div class="job-description">
        <p>
          We are looking for a detail-oriented and proactive <strong>Project Coordinator</strong> to join our dynamic team. The ideal candidate will be responsible for tracking project timelines, coordinating with stakeholders, and preparing status reports. Strong <strong>communication skills</strong> and experience with project management software (e.g., Asana, Trello) are essential. A key part of this role is ensuring that projects are delivered on time and within budget. We value <strong>problem-solving</strong> and a collaborative spirit. The Project Coordinator will also be responsible for maintaining project documentation and facilitating team meetings.
        </p>
      </div>
    `,
    keywords: ['Project Coordinator', 'communication skills', 'problem-solving', 'Asana', 'Trello', 'project timelines', 'status reports']
  },
  3: {
    title: 'Activity 1.3: The "Experience Inventory"',
    objective: 'The learner will brainstorm and articulate their professional accomplishments.',
    activity: 'ExperienceInventory',
    script: [
      { type: 'bot', text: "It's time to build your 'Experience Inventory.' This is your master document of all your skills and accomplishments." },
      { type: 'bot', text: "Remember, don't just list your duties. Focus on what you achieved. What did you improve, create, or solve? Use numbers to quantify your impact whenever possible." }
    ],
    content: `
      <h3>Worksheet: The Experience Inventory</h3>
      <p>For each role you've held, think about the following:</p>
      <ul>
        <li><strong>Key Responsibilities:</strong> What were you expected to do?</li>
        <li><strong>Key Accomplishments:</strong> What results did you deliver? (e.g., "Increased store efficiency by 15% by reorganizing the stockroom layout.")</li>
        <li><strong>Skills Used:</strong> What technical and soft skills did you apply?</li>
      </ul>
      <p>This inventory will be the foundation for your new, powerful resume.</p>
    `
  },
  4: {
    title: 'Activity 1.4: The "Tailoring" Simulation',
    objective: 'The learner will rewrite a section of their resume to reflect the keywords from a target job description.',
    activity: 'TailoringSimulation',
    script: [
      { type: 'bot', text: "Let's practice tailoring. This is where you match your experiences from the 'Experience Inventory' to the employer's needs from the job description." },
      { type: 'bot', text: "Start each bullet point with a strong action verb. Let's make them shine!" }
    ],
    content: `
        <h3>Resource: Powerful Action Verbs</h3>
        <p>Use this list to make your accomplishments stand out.</p>
        <div class="action-verbs">
          <div><strong>Leadership:</strong> Coordinated, Directed, Executed, Guided, Managed, Oversaw, Supervised, Trained</div>
          <div><strong>Communication:</strong> Addressed, Authored, Corresponded, Documented, Explained, Presented, Promoted, Publicized</div>
          <div><strong>Technical:</strong> Analyzed, Computed, Configured, Operated, Programmed, Repaired, Solved, Upgraded</div>
          <div><strong>Creative:</strong> Designed, Developed, Founded, Illustrated, Invented, Originated, Revitalized, Shaped</div>
          <div><strong>Efficiency:</strong> Centralized, Consolidated, Decreased, Eliminated, Improved, Increased, Organized, Reduced</div>
        </div>
    `
  },
  5: {
    title: 'Activity 1.5: Collaborative Peer Review',
    objective: 'The learner will provide and receive constructive feedback on their newly tailored resume section.',
    activity: 'PeerReview',
    script: [
      { type: 'bot', text: "You're not in this alone! The best way to improve your writing is to get a fresh set of eyes on it." },
      { type: 'bot', text: "The goal isn't to criticize, but to help. Be a helpful coach for your partner." }
    ],
    content: `
      <h3>Worksheet: Peer Review Checklist</h3>
      <p>As you review your partner's resume draft, consider the following:</p>
      <ul>
        <li>Is the Professional Summary clear and tailored?</li>
        <li>Does the Experience section use strong action verbs?</li>
        <li>Is there at least one accomplishment with a number?</li>
        <li>Is the formatting clean and easy to read?</li>
      </ul>
      <p>Provide one positive comment and one constructive suggestion for improvement.</p>
    `
  }
};