// This file will hold the content for Module 1.
// The structure will be refined as we build out the chapters.

export const module1Content = {
  1: {
    title: 'Activity 1.1: The Resume Autopsy',
    script: [
      { type: 'bot', text: "Welcome to your first quest: The Resume Autopsy!" },
      { type: 'bot', text: "This first step is all about understanding what we're working with. We'll look at your current resume to find its strengths and areas for improvement." },
      { type: 'bot', text: "Please upload your most recent resume below. The tool will do a basic scan for formatting and keywords." },
    ],
    activity: 'ResumeAutopsy', // This will correspond to a component name
  },
  2: {
    title: 'Activity 1.2: Deconstructing Job Descriptions',
    script: [
      { type: 'bot', text: "Great job on the autopsy. Now for some intel gathering!" },
      { type: 'bot', text: "In this quest, you'll learn to dissect a real job description to find out what employers *really* want." },
      { type: 'bot', text: "Find one local job posting you're interested in, and paste the full text into the box below." },
      { type: 'bot', text: "Then, use the highlighters to tag the different kinds of skills and duties you see. This will be your treasure map for the next step." }
    ],
    activity: 'JobDescriptionAnalysis',
  },
  3: {
    title: 'Activity 1.3: The "Experience Inventory"',
    script: [
      { type: 'bot', text: "Now that you know what they're looking for, it's time to build your arsenal." },
      { type: 'bot', text: "We're going to translate your past work into powerful accomplishment statements." },
      { type: 'bot', text: "Use the worksheet below to frame your experiences as mini-stories, using the Problem-Action-Result (PAR) model. Try to create at least 5." },
      { type: 'bot', text: "Remember, stating a factual result isn't bragging; it's providing evidence of your value. This isn't arrogance; it's the story of your competence." }
    ],
    activity: 'ExperienceInventory',
  },
  4: {
    title: 'Activity 1.4: The "Tailoring" Simulation',
    script: [
      { type: 'bot', text: "It's time to bring it all together. Welcome to the Crafting Challenge!" },
      { type: 'bot', text: "On the left, you'll see your original resume section and the intel you've gathered: your keywords and PAR statements." },
      { type: 'bot', text: "Your mission is to rewrite the bullet points for your most recent job in the text area on the right." },
      { type: 'bot', text: "Transform your 'duty' language into 'accomplishment' language. Weave in your powerful PAR stories and keywords. The 'Alignment Score' is just a guide, not a judgment. Have fun experimenting!" }
    ],
    activity: 'TailoringSimulation',
  },
  5: {
    title: 'Activity 1.5: Collaborative Peer Review',
    script: [
      { type: 'bot', text: "You've done amazing work. The final quest is about community and support." },
      { type: 'bot', text: "The job search can feel isolating, but you're not in this alone. In this step, you'll give and receive anonymous feedback." },
      { type: 'bot', text: "When you give feedback, focus on being helpful and constructive. When you receive it, remember that your peers are on this quest with you. Let's help everyone finish strong!" }
    ],
    activity: 'PeerReview',
  },
};
