export const module1Content = {
  1: {
    title: 'Activity 1.1: The Resume Autopsy',
    objective: 'The learner will analyze their current resume to identify its strengths and weaknesses.',
    activity: 'ResumeAutopsy',
    script: [
      { type: 'bot', text: "Welcome to the first activity: The Resume Autopsy!" },
      { type: 'bot', text: "We'll start by analyzing a 'before' and 'after' example to see what makes a resume effective." },
    ],
    content: `
      <h3>"Before" Resume Example:</h3>
      <div style="border: 1px solid #ccc; padding: 10px; margin-bottom: 20px;">
        <h4>Jane Doe</h4>
        <p><strong>Responsibilities:</strong></p>
        <ul>
          <li>Responsible for customer service.</li>
          <li>Handled scheduling for the team.</li>
          <li>Tasked with updating the company website.</li>
        </ul>
      </div>

      <h3>"After" Resume Example:</h3>
      <div style="border: 1px solid #ccc; padding: 10px;">
        <h4>Jane Doe</h4>
        <p><strong>Key Accomplishments:</strong></p>
        <ul>
          <li><strong>Elevated Customer Satisfaction:</strong> Increased positive customer feedback by 25% by implementing a new follow-up system.</li>
          <li><strong>Optimized Team Scheduling:</strong> Reduced scheduling conflicts by 90% by creating and managing a new centralized calendar system.</li>
          <li><strong>Enhanced Online Presence:</strong> Redesigned three key pages of the company website, leading to a 15% increase in user engagement.</li>
        </ul>
      </div>
    `
  },
  2: {
    title: 'Activity 1.2: Deconstructing Job Descriptions',
    objective: 'The learner will analyze a real job description to extract key skills and qualifications.',
    activity: 'JobDescriptionAnalysis',
    script: [
      { type: 'bot', text: "Now, let's become detectives and deconstruct a job description." },
      { type: 'bot', text: "Your mission is to find the clues that tell you what an employer *really* wants." }
    ],
    content: `
      <h3>Sample Job Description: Project Coordinator</h3>
      <div style="border: 1px solid #ccc; padding: 10px; margin-bottom: 20px;">
        <p>
          We are looking for a detail-oriented and proactive <strong>Project Coordinator</strong> to join our dynamic team. The ideal candidate will be responsible for tracking project timelines, coordinating with stakeholders, and preparing status reports. Strong <strong>communication skills</strong> and experience with project management software (e.g., Asana, Trello) are essential. A key part of this role is ensuring that projects are delivered on time and within budget. We value <strong>problem-solving</strong> and a collaborative spirit. The Project Coordinator will also be responsible for maintaining project documentation and facilitating team meetings.
        </p>
      </div>
    `
  },
  3: {
    title: 'Activity 1.3: The "Experience Inventory"',
    objective: 'The learner will brainstorm and articulate their professional accomplishments.',
    activity: 'ExperienceInventory',
    script: [
      { type: 'bot', text: "It's time to build your arsenal of accomplishments." },
      { type: 'bot', text: "Use the 'Experience Inventory' worksheet to capture all your great work." }
    ],
    content: `
        <p>
            Download the <a href="/experience-inventory-worksheet.md" download>Experience Inventory Worksheet</a> and start filling it out. This will be the foundation for your new, powerful resume.
        </p>
    `
  },
  4: {
    title: 'Activity 1.4: The "Tailoring" Simulation',
    objective: 'The learner will rewrite a section of their resume to reflect the keywords from a target job description.',
    activity: 'TailoringSimulation',
    script: [
      { type: 'bot', text: "Let's practice tailoring your resume." },
      { type: 'bot', text: "This is where you take your experiences and match them to the employer's needs." }
    ],
    content: `
        <p>
            Using the job description from the previous activity and your Experience Inventory, rewrite three bullet points from your resume. Use the <a href="/powerful-action-verbs.md" download>List of Powerful Action Verbs</a> to make them shine.
        </p>
    `
  },
  5: {
    title: 'Activity 1.5: Collaborative Peer Review',
    objective: 'The learner will provide and receive constructive feedback on their newly tailored resume section.',
    activity: 'PeerReview',
    script: [
      { type: 'bot', text: "You're not in this alone! It's time for some peer support." },
      { type: 'bot', text: "Share your work and get valuable feedback from your colleagues in the workshop." }
    ],
    content: `
        <p>
            Share your tailored resume bullet points with a partner. Use a simple checklist to give and receive constructive feedback. The goal is to help each other improve.
        </p>
    `
  }
};