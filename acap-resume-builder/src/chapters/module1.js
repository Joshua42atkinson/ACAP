export const module1Content = {
  1: {
    title: 'Activity 1.1: The Resume Autopsy',
    objective: 'The learner will analyze their current resume to identify its strengths and weaknesses, establishing a clear starting point for their quest.',
    activity: 'ResumeAutopsy',
    script: [
      { type: 'bot', text: "Welcome to your first quest: The Resume Autopsy! (Game Mechanic: Establishing a baseline in the 'Starting Zone')" },
      { type: 'bot', text: "This first step is all about understanding what we're working with. We'll look at your current resume to find its strengths and areas for improvement." },
    ],
    yang: {
      title: 'Practical Action: The "How-To"',
      howTo: [
        "Upload & Scan: You'll start by uploading your most recent resume into our tool. The system will perform a basic scan for common formatting issues and keyword density, giving you an instant, automated first impression.",
        "The \"Red Pen\" Test: Read your resume from the perspective of a hiring manager who has 15 seconds to make a decision. What is the very first thing that catches your eye? Can you tell what kind of job you're looking for within 5 seconds? Circle every statement that is a \"duty\" (e.g., \"Responsible for filing reports\") versus an \"accomplishment\" (e.g., \"Streamlined filing system, saving 3 hours per week\"). Be honest."
      ]
    },
    yin: {
      title: 'Emotional Support: The "Why-To"',
      whyTo: "Private Journal Prompt: \"This resume represents a chapter of my professional life. Before I rewrite it, what are three things on this document I am genuinely proud of? What's one experience listed here that taught me a valuable lesson, even if it was difficult at the time?\" This exercise honors past work and separates self-worth from the document itself."
    },
    deliverable: 'A copy of their current resume marked up with highlighted duties vs. accomplishments.',
    smeFeedback: [
      "Are these \"Red Pen\" questions the right ones to force a critical, employer-centric perspective?",
      "Is the journal prompt effective for helping a client process the emotions tied to their work history before they begin editing?"
    ]
  },
  2: {
    title: 'Activity 1.2: Deconstructing Job Descriptions',
    objective: 'The learner will analyze a real job description to extract the key skills, qualifications, and "insider language" the employer is looking for.',
    activity: 'JobDescriptionAnalysis',
    script: [
      { type: 'bot', text: "Great job on the autopsy. Now for some intel gathering! (Game Mechanic: 'Intel Gathering' Quest)" },
      { type: 'bot', text: "In this quest, you'll learn to dissect a real job description to find out what employers *really* want." }
    ],
    yang: {
      title: 'Practical Action: The "How-To"',
      howTo: [
        "Find Your Target: Find one real, local job posting online that you are interested in. Copy and paste the full text into the text box provided.",
        "The Keyword Highlighter: Our tool will guide you through highlighting different parts of the description: Hard Skills (Yellow), Soft Skills (Blue), and Key Duties (Green)."
      ]
    },
    yin: {
      title: 'Emotional Support: The "Why-To"',
      whyTo: "Community Forum Prompt: \"Share one 'soft skill' you highlighted in your job description. Then, share a brief example of a time you used that skill, even if it wasn't in a formal job. The goal is to see that we all have these skills from many parts of our lives.\" This builds community and helps learners see their own transferable skills."
    },
    deliverable: 'A highlighted job description with at least 10-15 identified keywords and skills.',
    smeFeedback: [
      "Is this color-coding system an intuitive way to teach clients how to dissect a job post?",
      "Will the forum prompt successfully get clients to recognize and value their own soft skills?"
    ]
  },
  3: {
    title: 'Activity 1.3: The "Experience Inventory"',
    objective: 'The learner will brainstorm and articulate their professional accomplishments using the "Problem-Action-Result" (PAR) framework.',
    activity: 'ExperienceInventory',
    script: [
      { type: 'bot', text: "Now that you know what they're looking for, it's time to build your arsenal. (Game Mechanic: 'Building Your Arsenal' - Earn XP for each story)" },
      { type: 'bot', text: "We're going to translate your past work into powerful accomplishment statements." }
    ],
    yang: {
      title: 'Practical Action: The "How-To"',
      howTo: [
        "The PAR Worksheet: For each key duty you identified in the last step, you'll fill out a simple \"PAR\" statement in the worksheet provided. Think of it like telling a mini-story.",
        "Problem: What was a problem, challenge, or situation you faced? (e.g., \"The client filing system was disorganized and inefficient.\")",
        "Action: What specific action did you take to solve it? (e.g., \"I designed and implemented a new digital, color-coded filing system.\")",
        "Result: What was the positive, measurable outcome? (e.g., \"This reduced file retrieval time by 50% and eliminated lost documents.\")"
      ]
    },
    yin: {
      title: 'Emotional Support: The "Why-To"',
      whyTo: "Reframing Exercise: \"Many of us are taught not to 'brag.' But stating a factual result isn't bragging; it's providing evidence of your value. Look at your PAR statements. This isn't arrogance; it's the story of your competence. How does it feel to see your accomplishments laid out so clearly?\""
    },
    deliverable: 'A list of at least 5-7 distinct PAR statements related to their past experiences.',
    smeFeedback: [
      "Is the PAR framework the most effective method for this audience, or would STAR (Situation, Task, Action, Result) be better introduced here?",
      "How can we best phrase the \"reframing exercise\" to help clients overcome the \"humility barrier\" that often prevents them from articulating their successes?"
    ]
  },
  4: {
    title: 'Activity 1.4: The "Tailoring" Simulation',
    objective: 'The learner will rewrite a section of their resume to directly reflect the keywords and required skills from their target job description.',
    activity: 'TailoringSimulation',
    script: [
      { type: 'bot', text: "It's time to bring it all together. Welcome to the Crafting Challenge! (Game Mechanic: 'Crafting Challenge')" },
      { type: 'bot', text: "Your mission is to rewrite the bullet points for your most recent job, transforming 'duty' language into 'accomplishment' language." }
    ],
    yang: {
      title: 'Practical Action: The "How-To"',
      howTo: [
        "The Challenge: You will be presented with your original resume's \"Experience\" section on the left, and your list of highlighted keywords and PAR statements on the right.",
        "Drag, Drop, and Rewrite: Your task is to rewrite the bullet points for your most recent job. Drag your powerful PAR statements in. Integrate the keywords you highlighted.",
        "An \"Alignment Score\" will update in real-time, showing you how well your new text matches the job description."
      ]
    },
    yin: {
      title: 'Emotional Support: The "Why-To"',
      whyTo: "Low-Stakes Rationale: \"This is a practice zone. The 'Alignment Score' isn't a judgment; it's a guide. The goal here is to experiment and build the muscle memory of tailoring your resume. There's no pressure to get it perfect on the first try.\""
    },
    deliverable: 'A rewritten "Experience" section for one job with a high "Alignment Score."',
    smeFeedback: [
      "From a usability perspective, does the \"drag and drop\" concept make sense?",
      "Is an \"Alignment Score\" a motivating tool, or could it feel intimidating? How should we frame it to be encouraging?"
    ]
  },
  5: {
    title: 'Activity 1.5: Collaborative Peer Review',
    objective: 'The learner will provide and receive constructive feedback on their newly tailored resume section using a structured rubric.',
    activity: 'PeerReview',
    script: [
      { type: 'bot', text: "You've done amazing work. The final quest is about community and support. (Game Mechanic: 'Guild Support')" },
      { type: 'bot', text: "The job search can feel isolating, but you're not in this alone. In this step, you'll give and receive anonymous feedback." }
    ],
    yang: {
      title: 'Practical Action: The "How-To"',
      howTo: [
        "Submit Your Work: You'll anonymously submit your revised \"Experience\" section.",
        "Review Two Peers: You will then be assigned two anonymous submissions from your peers.",
        "Use the Rubric: Using the provided rubric, you will give feedback on: Clarity, Impact, and Relevance."
      ]
    },
    yin: {
      title: 'Emotional Support: The "Why-To"',
      whyTo: "Community Building Prompt: \"The job search can feel isolating. This exercise is about building a supportive community. When you give feedback, focus on being helpful and constructive. When you receive it, remember that your peers are on this quest with you. The goal is for everyone to finish with a stronger resume and the knowledge that they aren't in this alone.\""
    },
    deliverable: 'Constructive feedback provided to two peers and received on their own resume section.',
    smeFeedback: [
      "What are the 3-4 most critical and easy-to-understand criteria to include in the peer review rubric?",
      "What ground rules do we need to establish to ensure the anonymous feedback remains positive and constructive?"
    ]
  }
};
