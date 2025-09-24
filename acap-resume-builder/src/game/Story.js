export const story = {
  introduction: {
    script: [
      { text: "Welcome to the Resume Builder Game!", sender: 'ai' },
      { text: "I'm your personal guide, and together we'll build a resume that will impress any employer.", sender: 'ai' },
      { text: "Ready to begin?", sender: 'ai', requiresInput: true, next: "personalInfo" }
    ]
  },
  personalInfo: {
    section: "personalInfo",
    script: [
      { text: "Great! Let's start with the basics. What's your full name?", sender: 'ai', requiresInput: true, key: "name" },
      { text: "Got it. Now, what's your email address?", sender: 'ai', requiresInput: true, key: "email" },
      { text: "And your phone number?", sender: 'ai', requiresInput: true, key: "phone" },
      { text: "Finally, what's your address?", sender: 'ai', requiresInput: true, key: "address", next: "experience" }
    ]
  },
  experience: {
    section: "experience",
    script: [
      { text: "Excellent. Now let's move on to your work experience.", sender: 'ai' },
      { text: "Tell me about your most recent job. What was your job title?", sender: 'ai', requiresInput: true, key: "jobTitle" },
      { text: "And where did you work?", sender: 'ai', requiresInput: true, key: "company" },
      { text: "What was the location?", sender: 'ai', requiresInput: true, key: "location" },
      { text: "When did you start?", sender: 'ai', requiresInput: true, key: "startDate" },
      { text: "And when did you end?", sender: 'ai', requiresInput: true, key: "endDate" },
      { text: "Now, describe your responsibilities and accomplishments. I can help you with this part. Just give me a few key points, and I'll help you craft a compelling description.", sender: 'ai', requiresInput: true, key: "description", next: "addAnotherExperience" }
    ]
  },
  addAnotherExperience: {
    script: [
      { text: "Would you like to add another work experience? (yes/no)", sender: 'ai', requiresInput: true, next: "handleAnotherExperience" }
    ]
  },
  handleAnotherExperience: {
    script: [],
    logic: (input) => input.toLowerCase() === 'yes' ? 'experience' : 'education'
  },
  education: {
    section: "education",
    script: [
      { text: "That's a great start. Now, let's add your education.", sender: 'ai' },
      { text: "What degree did you obtain?", sender: 'ai', requiresInput: true, key: "degree" },
      { text: "From what school?", sender: 'ai', requiresInput: true, key: "school" },
      { text: "Where was it located?", sender: 'ai', requiresInput: true, key: "location" },
      { text: "And what year did you graduate?", sender: 'ai', requiresInput: true, key: "graduationYear", next: "addAnotherEducation" }
    ]
  },
  addAnotherEducation: {
    script: [
      { text: "Would you like to add another education entry? (yes/no)", sender: 'ai', requiresInput: true, next: "handleAnotherEducation" }
    ]
  },
  handleAnotherEducation: {
    script: [],
    logic: (input) => input.toLowerCase() === 'yes' ? 'education' : 'skills'
  },
  skills: {
    section: "skills",
    script: [
      { text: "We're almost done! Let's list some of your skills.", sender: 'ai' },
      { text: "What are some of your key skills? You can list as many as you like, separated by commas.", sender: 'ai', requiresInput: true, key: "skills", next: "conclusion" }
    ]
  },
  conclusion: {
    script: [
      { text: "Fantastic! We've built a solid resume.", sender: 'ai' },
      { text: "You can now view your completed resume and make any final adjustments.", sender: 'ai' }
    ]
  }
};