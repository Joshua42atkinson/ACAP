import React, { useState, useEffect } from 'react';
import Slides from '../components/Slides';
import './Module2.css';

const rubricItemsData = [
    { category: 'Formatting & Readability', criteria: 'Is clean, professional, and easy to skim in 15 seconds.', points: 3 },
    { category: 'Formatting & Readability', criteria: 'Uses consistent formatting for dates, titles, and locations.', points: 2 },
    { category: 'Contact Information', criteria: 'Includes name, professional email, and phone number.', points: 1 },
    { category: 'Tailoring', criteria: 'Includes keywords from the job description.', points: 3 },
    { category: 'Experience Section', criteria: 'Describes experience using action verbs to focus on accomplishments.', points: 3 },
    { category: 'Experience Section', criteria: 'Quantifies accomplishments with numbers or specific outcomes.', points: 2 },
    { category: 'Grammar & Spelling', criteria: 'Is flawlessly written with no errors.', points: 1 }
];

function Module2() {
    // State for Resume Rubric
    const [checkedRubricItems, setCheckedRubricItems] = useState({});
    const [resumeScore, setResumeScore] = useState(0);
    const [resumeLevel, setResumeLevel] = useState({ text: '', className: '' });

    // State for Cover Letter Activity
    const [coverLetterFeedback, setCoverLetterFeedback] = useState({ text: '', type: '' });
    const [selectedCoverLetter, setSelectedCoverLetter] = useState(null);


    // State for STAR Story Builder
    const [starStory, setStarStory] = useState({ s: '', t: '', a: '', r: '' });
    const [showStarStory, setShowStarStory] = useState(false);

    // --- Resume Rubric Logic ---
    const handleRubricChange = (index) => {
        setCheckedRubricItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const resetRubric = () => {
        setCheckedRubricItems({});
    };

    useEffect(() => {
        const totalScore = rubricItemsData.reduce((acc, item, index) => {
            return checkedRubricItems[index] ? acc + item.points : acc;
        }, 0);
        setResumeScore(totalScore);

        let level = { text: 'Needs Improvement', className: 'bg-red-100 text-red-800' };
        if (totalScore > 12) {
            level = { text: 'Exemplary', className: 'bg-green-100 text-green-800' };
        } else if (totalScore > 8) {
            level = { text: 'Proficient', className: 'bg-yellow-100 text-yellow-800' };
        }
        setResumeLevel(level);
    }, [checkedRubricItems]);


    // --- Cover Letter Logic ---
    const checkCoverLetter = (type) => {
        setSelectedCoverLetter(type);
        if (type === 'tailored') {
            setCoverLetterFeedback({ text: "Correct! The tailored version is specific and shows genuine interest.", type: 'correct' });
        } else {
            setCoverLetterFeedback({ text: "Not quite. The tailored version connects directly to the company.", type: 'incorrect' });
        }
    };

    const getCoverLetterButtonClass = (type) => {
        if (!selectedCoverLetter || selectedCoverLetter !== type) return 'btn-secondary';

        if (type === 'tailored' && coverLetterFeedback.type === 'correct') return 'bg-green-200';
        if (type === 'generic' && coverLetterFeedback.type === 'incorrect') return 'bg-red-200';

        // Handle the case where the user clicks the wrong "correct" button
        if (type === 'generic' && selectedCoverLetter === 'generic') return 'bg-red-200';
        if (type === 'tailored' && selectedCoverLetter === 'tailored' && coverLetterFeedback.type === 'incorrect') return 'bg-red-200';


        return 'btn-secondary';
    };


    // --- STAR Story Builder Logic ---
    const handleStarInputChange = (e) => {
        const { id, value } = e.target;
        setStarStory(prev => ({ ...prev, [id.split('-')[1]]: value }));
    };

    const generateStarStory = () => {
        setShowStarStory(true);
    };

    const isStarStoryIncomplete = !starStory.s || !starStory.t || !starStory.a || !starStory.r;

    return (
        <div className="antialiased">
            <header className="module-header sticky top-0 z-50 shadow-md">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold text-gray-800">ACAP Module 2</h1>
                        <p className="text-sm text-gray-600">Crafting Your Career Narrative</p>
                    </div>
                </nav>
            </header>

            <main className="container mx-auto p-4 md:p-8">
                <Slides>
                    {/* Introduction Slide */}
                    <div className="section-card rounded-lg p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Module 2: Introduction</h2>
                        <p className="text-lg text-gray-600 mb-4">Welcome to the second module in the Job Readiness Workshop Series. In Module 1, you identified your skills and career interests. Now, it's time to learn how to communicate your value effectively to potential employers. This module is all about telling your professional story in a way that gets you noticed.</p>
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                            <h3 className="font-bold text-blue-800">Learning Objectives</h3>
                            <ul className="list-disc list-inside mt-2 text-blue-700">
                                <li>Transform a standard resume into a powerful marketing document.</li>
                                <li>Write a compelling cover letter tailored to a specific job.</li>
                                <li>Master the STAR method to showcase your accomplishments in interviews.</li>
                                <li>Understand how these documents work together to create a strong application package.</li>
                            </ul>
                        </div>
                        <p className="mt-4 text-gray-600">This section provides the foundational knowledge for crafting job application materials that stand out. We will break down each component—the resume, the cover letter, and interview stories—into simple, manageable steps. By the end, you'll have the tools and confidence to present yourself as the ideal candidate for the jobs you want.</p>
                    </div>

                    {/* Resume Slide */}
                    <div className="section-card rounded-lg p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Part 1: The Modern Resume</h2>
                        <p className="text-gray-600 mb-6">Think of your resume not as a history of your past jobs, but as an advertisement for your future career. Its goal is to get you an interview. In today's job market, especially here in Maine where community and specific skills are key, a generic resume won't cut it. This section will teach you how to tailor your resume to highlight your most relevant skills and accomplishments for each specific job you apply for.</p>

                        <div className="border-t border-gray-200 mt-6 pt-6">
                            <h3 className="text-xl font-semibold mb-4">Interactive Resume Check-Up</h3>
                            <p className="text-gray-600 mb-6">Let's evaluate a resume based on the key criteria employers look for. Check the boxes below for each element you believe is handled correctly in a strong resume. Your goal is to achieve a "Proficient" or "Exemplary" score.</p>

                            <div className="space-y-4">
                                {rubricItemsData.reduce((acc, item, index) => {
                                    const lastItem = acc.length > 0 ? acc[acc.length - 1].props.item : null;
                                    if (!lastItem || lastItem.category !== item.category) {
                                        acc.push(<h4 key={item.category} className="text-md font-semibold text-gray-700 mt-4 first:mt-0">{item.category}</h4>);
                                    }
                                    acc.push(
                                        <label key={index} item={item} className="flex items-center p-3 bg-gray-50 rounded-md border border-gray-200 cursor-pointer hover:bg-gray-100">
                                            <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                                checked={!!checkedRubricItems[index]}
                                                onChange={() => handleRubricChange(index)}
                                            />
                                            <span className="ml-3 text-sm text-gray-600">{item.criteria} (+{item.points} pts)</span>
                                        </label>
                                    );
                                    return acc;
                                }, [])}
                            </div>

                            <div className="mt-6 p-4 rounded-lg bg-gray-50 flex items-center justify-between">
                                <div>
                                    <span className="font-bold text-lg">Your Score: <span id="resume-score">{resumeScore}</span> / 15</span>
                                    <p className="text-sm text-gray-500">Based on the official ACAP rubric.</p>
                                </div>
                                <div className="text-right">
                                    <span className={`font-bold text-lg px-4 py-2 rounded-full ${resumeLevel.className}`}>{resumeLevel.text}</span>
                                </div>
                            </div>
                            <div className="mt-4">
                                <button onClick={resetRubric} className="btn-secondary px-4 py-2 rounded-md text-sm">Reset</button>
                            </div>
                        </div>
                    </div>

                    {/* Cover Letter Slide */}
                    <div className="section-card rounded-lg p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Part 2: The Compelling Cover Letter</h2>
                        <p className="text-gray-600 mb-6">If the resume is the advertisement, the cover letter is the personal introduction. It's your chance to connect with a real person, show your personality, and explain why you are genuinely interested in *this* specific job at *this* specific company. It bridges the gap between your past experience and the company's future needs. Here, we'll focus on crafting a letter that is professional, persuasive, and tailored to the employer.</p>

                        <div className="mt-6 border-t pt-6">
                            <h3 className="text-xl font-semibold mb-2">Key Ingredients of a Great Cover Letter</h3>
                            <p className="text-gray-600 mb-4">A good cover letter has three main parts:</p>
                            <div className="grid md:grid-cols-3 gap-4 text-center">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-bold">1. The Hook</h4>
                                    <p className="text-sm">Grab their attention. Mention the specific job and express your enthusiasm. Show you've done your research on the company.</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-bold">2. The Pitch</h4>
                                    <p className="text-sm">Connect your skills directly to the job description. Pick 2-3 key requirements and explain how you meet them, using examples.</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-bold">3. The Close</h4>
                                    <p className="text-sm">Reiterate your interest and confidence. State your desire for an interview and thank them for their time and consideration.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 border-t pt-6">
                            <h3 className="text-xl font-semibold mb-2">Activity: Spot the Difference</h3>
                            <p className="text-gray-600 mb-4">Below are two opening paragraphs for a cover letter. One is generic, the other is tailored. Can you tell which is which?</p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="border p-4 rounded-lg">
                                    <p className="font-mono text-sm">"To Whom It May Concern:</p>
                                    <p className="font-mono text-sm mt-2">I am writing to apply for the open position at your company that I saw advertised online. I have many skills that would be a good fit for your. I have attached my resume for your review."</p>
                                    <div className="mt-4">
                                        <button onClick={() => checkCoverLetter('generic')} className={`w-full py-2 rounded-md ${getCoverLetterButtonClass('generic')}`}>This is the Generic One</button>
                                    </div>
                                </div>
                                <div className="border p-4 rounded-lg">
                                <p className="font-mono text-sm">"Dear Hiring Manager,</p>
                                <p className="font-mono text-sm mt-2">I was thrilled to see the posting for the Customer Service Representative position at Aroostook County Action Program on the JobsInME website. Having followed ACAP's impactful work in our community for years, I am deeply impressed by your commitment to workforce development and would be honored to contribute my skills in client support to your team."</p>
                                <div className="mt-4">
                                    <button onClick={() => checkCoverLetter('tailored')} className={`w-full py-2 rounded-md ${getCoverLetterButtonClass('tailored')}`}>This is the Tailored One</button>
                                </div>
                                </div>
                            </div>
                            <div className={`mt-4 text-center h-6 ${coverLetterFeedback.type === 'correct' ? 'feedback-correct' : 'feedback-incorrect'}`}>{coverLetterFeedback.text}</div>
                        </div>
                    </div>

                    {/* STAR Method Slide */}
                    <div className="section-card rounded-lg p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Part 3: The STAR Method</h2>
                        <p className="text-gray-600 mb-6">Your resume and cover letter get you the interview. The STAR method helps you succeed *in* the interview. When an interviewer says, "Tell me about a time when...", they are asking for a story that proves you have the skills you claim. The STAR method provides a simple, powerful framework for telling that story clearly and effectively. It's a way to turn your experiences into compelling evidence of your abilities.</p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <h3 className="font-bold text-lg text-blue-800">S - Situation</h3>
                                <p className="text-sm text-blue-700">Briefly describe the context. Where were you? What was the challenge?</p>
                            </div>
                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <h3 className="font-bold text-lg text-green-800">T - Task</h3>
                                <p className="text-sm text-green-700">What was your specific responsibility? What goal were you trying to achieve?</p>
                            </div>
                            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                                <h3 className="font-bold text-lg text-yellow-800">A - Action</h3>
                                <p className="text-sm text-yellow-700">What specific steps did YOU take to address the situation and complete the task?</p>
                            </div>
                            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                                <h3 className="font-bold text-lg text-purple-800">R - Result</h3>
                                <p className="text-sm text-purple-700">What was the outcome? Quantify it if possible (e.g., "saved 10 hours a week," "increased sales by 5%").</p>
                            </div>
                        </div>

                        <div className="mt-8 border-t pt-6">
                            <h3 className="text-xl font-semibold mb-2">Interactive STAR Story Builder</h3>
                            <p className="text-gray-600 mb-4">Let's practice. Think about a time you solved a problem at work or in a volunteer role. Use the fields below to build your STAR story for the interview question: "Tell me about a time you had to handle a difficult customer."</p>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="star-s" className="block text-sm font-medium text-gray-700">Situation:</label>
                                    <textarea id="star-s" rows="2" className="mt-1 block w-full rounded-md shadow-sm interactive-input p-2" placeholder="e.g., At my previous retail job, a customer was upset because an item they wanted was out of stock." value={starStory.s} onChange={handleStarInputChange}></textarea>
                                </div>
                                <div>
                                    <label htmlFor="star-t" className="block text-sm font-medium text-gray-700">Task:</label>
                                    <textarea id="star-t" rows="2" className="mt-1 block w-full rounded-md shadow-sm interactive-input p-2" placeholder="e.g., My goal was to de-escalate the situation and find a solution that would leave the customer satisfied." value={starStory.t} onChange={handleStarInputChange}></textarea>
                                </div>
                                <div>
                                    <label htmlFor="star-a" className="block text-sm font-medium text-gray-700">Action:</label>
                                    <textarea id="star-a" rows="3" className="mt-1 block w-full rounded-md shadow-sm interactive-input p-2" placeholder="e.g., I actively listened to their concerns, apologized for the inconvenience, then checked our inventory system for nearby stores. I also showed them a similar product that was in stock and explained its benefits." value={starStory.a} onChange={handleStarInputChange}></textarea>
                                </div>
                                <div>
                                    <label htmlFor="star-r" className="block text-sm font-medium text-gray-700">Result:</label>
                                    <textarea id="star-r" rows="2" className="mt-1 block w-full rounded-md shadow-sm interactive-input p-2" placeholder="e.g., The customer appreciated the effort, purchased the alternative item, and left a positive review online mentioning my name. This helped improve our store's customer satisfaction score for the month." value={starStory.r} onChange={handleStarInputChange}></textarea>
                                </div>
                            </div>
                            <div className="mt-6">
                                <button onClick={generateStarStory} className="btn-primary px-6 py-2 rounded-md">Combine My Story</button>
                            </div>
                            {showStarStory && (
                                <div className="mt-6">
                                    <h4 className="font-semibold">Your Interview-Ready Story:</h4>
                                    <div className="mt-2 p-4 bg-gray-50 rounded-lg border">
                                        {isStarStoryIncomplete ? (
                                            <p className="text-red-600">Please fill out all four parts to generate your story.</p>
                                        ) : (
                                            <>
                                                <p><strong className="text-blue-700">Situation:</strong> {starStory.s}</p>
                                                <p className="mt-2"><strong className="text-green-700">Task:</strong> {starStory.t}</p>
                                                <p className="mt-2"><strong className="text-yellow-700">Action:</strong> {starStory.a}</p>
                                                <p className="mt-2"><strong className="text-purple-700">Result:</strong> {starStory.r}</p>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Wrap Up Slide */}
                    <div className="section-card rounded-lg p-6 md:p-8 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Module 2: Wrap Up & Next Steps</h2>
                        <p className="text-gray-600 mb-6 max-w-3xl mx-auto">Congratulations on completing Module 2! You now have a clear framework for building a powerful resume, writing a persuasive cover letter, and telling compelling stories in your interviews. These are the core tools you'll use to market yourself effectively in your job search.</p>
                        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg text-left max-w-2xl mx-auto">
                            <h3 className="font-bold text-green-800">Key Takeaways</h3>
                            <ul className="list-disc list-inside mt-2 text-green-700">
                                <li><strong>Tailoring is essential.</strong> A one-size-fits-all approach doesn't work. Customize your resume and cover letter for every application.</li>
                                <li><strong>Focus on accomplishments, not just duties.</strong> Show what you achieved, not just what you were supposed to do. Use numbers to show impact.</li>
                                <li><strong>The STAR method proves your skills.</strong> Use it to structure your answers and provide concrete evidence of your abilities during interviews.</li>
                            </ul>
                        </div>
                        <p className="mt-6 text-gray-600">Your next step is to apply what you've learned. Start drafting your new resume and a template for your cover letters. Practice building STAR stories for common interview questions. In Module 3, we will focus on networking and interview skills to put these amazing materials to use.</p>
                    </div>
                </Slides>
            </main>
        </div>
    );
}

export default Module2;