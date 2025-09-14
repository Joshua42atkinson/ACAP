import React, { useState, useEffect } from 'react';

const chapters = {
    // ... (All 12 chapters with narratives and hints would be here)
    1: { title: "The Ordinary World", narrative: "Welcome. Every great journey starts with a single step. Let's start gently by sharing a little about you. There's no pressure here, just fill out what you're comfortable with.", hint: "You can start with just your name. We can add more later!" },
    2: { title: "The Call to Adventure", narrative: "Your past experiences have given you unique strengths. Let's honor that journey. Think about a past job, even if it feels small. What was it? Every experience is valuable.", hint: "Think about any paid work, volunteer positions, or even helping a family member. It all counts." },
    3: { title: "Refusal of the Call", narrative: "Sometimes, looking back is tough, and that's okay. Don't worry about getting it perfect. Just start with one memory, one role. We'll be here to help you shape it.", hint: "If you can't remember exact dates, that's fine. Just focus on what you did. We can come back to the details." },
    4: { title: "Meeting the Mentor", narrative: "That's us! Think of us as a friendly guide. Let's think about what you did in that role. What was a typical day like? You can just talk about it, and we'll figure out the rest together.", hint: "Try to think of one thing you did that you were proud of in that role." },
    5: { title: "Crossing the Threshold", narrative: "You've taken the first step, which is often the hardest. Wonderful. If you feel ready, let's think about another experience. If not, we can work more on this one. The journey is yours to command.", hint: "Each experience you add makes your story stronger. Keep going!" },
    6: { title: "Tests, Allies, and Enemies", narrative: "You have so many skills that have helped you navigate your life. Let's name a few. They can be anything from 'good listener' to 'skilled at carpentry'. All skills are your allies on this path.", hint: "Think about things you're naturally good at, or things people ask you for help with." },
    7: { title: "Approach to the Inmost Cave", narrative: "Your education and training, formal or informal, have given you wisdom. What's something you've learned that you're proud of? Let's add it to your story.", hint: "This could be a high school diploma, a training course, or even a book you read that taught you something important." },
    8: { title: "The Ordeal", narrative: "Take a deep breath. You've gathered so much of your story. Now, let's just look at it together. See how far you've come. We're just here to organize it, not to judge.", hint: "The hardest part is over. Now we just refine what you've already accomplished." },
    9: { title: "Reward", narrative: "Look at this. You've created a map of your strengths and experiences. This is a powerful tool, a treasure you've unearthed yourself. Take a moment to appreciate what you've done.", hint: "This document is a testament to your resilience and capabilities." },
    10: { title: "The Road Back", narrative: "Now, let's think about who we want to share this story with. What kind of person or place would be lucky to have you? This helps us shape the story for the right audience.", hint: "Are you looking for a quiet office job, or something more hands-on? Knowing this helps tailor your resume." },
    11: { title: "Resurrection", narrative: "Your story is taking its final, powerful form. It's a reflection of your resilience. Let's create a short summary you can use to introduce yourself confidently.", hint: "Click the 'Generate Interview Summary' button in the preview to get a starting point." },
    12: { title: "Return with the Elixir", narrative: "You're ready. You hold in your hands a summary of your journey, ready to be shared. This is your elixir. Go forward with the quiet confidence of someone who knows their own strength.", hint: "Congratulations! You've completed the journey. Use the 'Print/Download' button to get your resume." }
};

const StoryMode = ({ currentChapter, setCurrentChapter }) => {
  const [showHint, setShowHint] = useState(false);
  const chapter = chapters[currentChapter];

  const speak = (text) => {
    // Stop any previous speech
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    // Here you could configure the voice, rate, pitch, etc.
    window.speechSynthesis.speak(utterance);
  };

  // Cleanup speech on component unmount
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const nextChapter = () => {
    if (currentChapter < 12) {
      setCurrentChapter(currentChapter + 1);
      setShowHint(false);
      window.speechSynthesis.cancel(); // Stop speech on chapter change
    }
  };

  const prevChapter = () => {
    if (currentChapter > 1) {
      setCurrentChapter(currentChapter - 1);
      setShowHint(false);
      window.speechSynthesis.cancel(); // Stop speech on chapter change
    }
  };

  return (
    <div className="story-mode">
      <h3>
        Chapter {currentChapter}: {chapter.title}
        <button onClick={() => speak(chapter.narrative)} className="play-button">▶️ Play</button>
      </h3>
      <p>{chapter.narrative}</p>

      <div className="story-controls">
        <button onClick={prevChapter} disabled={currentChapter === 1}>Previous Chapter</button>
        <button onClick={() => setShowHint(!showHint)}>
          {showHint ? 'Hide Hint' : 'Feeling Stuck?'}
        </button>
        <button onClick={nextChapter} disabled={currentChapter === 12}>Next Chapter</button>
      </div>

      {showHint && (
        <div className="hint-box">
          <p>{chapter.hint}</p>
          <button onClick={() => speak(chapter.hint)} className="play-button">▶️ Play Hint</button>
        </div>
      )}
    </div>
  );
};

export default StoryMode;
