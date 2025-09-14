import React, { useContext } from 'react';
import { ResumeContext } from '../context/ResumeContext';

const chapters = {
    1: { title: "The Ordinary World", narrative: "Your journey begins here. Fill in your personal details to introduce our hero." },
    2: { title: "The Call to Adventure", narrative: "Every hero gets a call. Your past experiences are calling to be told. What challenges have you overcome? List your work experience." },
    3: { title: "Refusal of the Call", narrative: "It can be daunting to list everything. Don't worry, just start with the most recent. What was your role?" },
    4: { title: "Meeting the Mentor", narrative: "This is where we come in! We'll guide you. Let's describe your responsibilities and achievements in that role." },
    5: { title: "Crossing the Threshold", narrative: "You've begun! Now, let's add another experience. Each job is a new threshold crossed." },
    6: { title: "Tests, Allies, and Enemies", narrative: "Your skills are your allies. What are you good at? List your top skills." },
    7: { title: "Approach to the Inmost Cave", narrative: "Education has shaped you. Let's add your schooling. This is the foundation of your wisdom." },
    8: { title: "The Ordeal", narrative: "The final challenge in drafting is to bring it all together. Review what you have. Does it tell your story?" },
    9: { title: "Reward", narrative: "You have a complete draft of your resume! This is your treasure, the map to your next adventure." },
    10: { title: "The Road Back", narrative: "Now, who is this story for? Your audience. And who are you to them? A problem solver? A leader? Let's refine the message." },
    11: { title: "Resurrection", narrative: "Your resume is reborn! It's now a powerful tool. Let's generate a summary to practice for interviews." },
    12: { title: "Return with the Elixir", narrative: "You're ready! You have your completed resume and the confidence to use it. Go forth and conquer!" }
};

const isPersonalInfoComplete = (personalInfo) => {
    return personalInfo.name && personalInfo.email && personalInfo.phone;
}

const isExperienceComplete = (experience) => {
    return experience.length > 0 && experience.every(exp => exp.jobTitle && exp.company && exp.description);
}

const areSkillsComplete = (skills) => {
    return skills.length > 0 && skills.every(skill => skill);
}

const isEducationComplete = (education) => {
    return education.length > 0 && education.every(edu => edu.degree && edu.school);
}

const getChapter = (data) => {
    if (!isPersonalInfoComplete(data.personalInfo)) return 1;
    if (data.experience.length === 0) return 2;
    if (!data.experience[0].description) return 4;
    if (data.experience.length === 1 && data.experience[0].description && data.skills.length === 0) return 6;
    if (!areSkillsComplete(data.skills)) return 6;
    if (!isEducationComplete(data.education)) return 7;
    if (isPersonalInfoComplete(data.personalInfo) && isExperienceComplete(data.experience) && areSkillsComplete(data.skills) && isEducationComplete(data.education)) return 9;

    return 8; // Default to the ordeal if in progress
}

const StoryMode = () => {
  const { resumeData } = useContext(ResumeContext);
  const currentChapter = getChapter(resumeData);
  const chapter = chapters[currentChapter];

  return (
    <div className="story-mode">
      <h3>Chapter {currentChapter}: {chapter.title}</h3>
      <p>{chapter.narrative}</p>
    </div>
  );
};

export default StoryMode;
