import React, { useState, useEffect, useRef } from 'react';
import './Module3.css';

const interviewQuestions = [
    {
        q: "Tell me about yourself.",
        a: "This is your professional elevator pitch. Don't recite your resume. Structure your answer: 1) Start with a brief overview of your experience. 2) Connect your skills directly to the job description. 3) Finish by stating why you are interested in this specific role."
    },
    {
        q: "What is your greatest weakness?",
        a: "Be honest but strategic. Choose a real, minor weakness. Most importantly, explain what steps you are taking to improve. This shows self-awareness and a commitment to growth. Example: 'I've been working on my public speaking skills by volunteering to lead team meetings.'"
    },
    {
        q: "Why do you want to work here?",
        a: "Show you've done your research. Mention something specific about the company's mission, values, recent projects, or community involvement that excites you. Connect your own values and career goals to what you've learned about them."
    },
    {
        q: "Where do you see yourself in 5 years?",
        a: "Employers want to see ambition and that this role fits into your career plan. Talk about skills you want to develop and the types of responsibilities you hope to take on. Frame it in the context of growing with their company."
    },
    {
        q: "Tell me about a time you dealt with a difficult situation or conflict.",
        a: "This is a perfect time to use the STAR method. Describe the Situation, your Task, the Action you took (focus on communication and problem-solving), and the positive Result. Show that you can handle challenges professionally and constructively."
    }
];

function Module3() {
    // State for mobile menu
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // State for Networking Pitch Builder
    const [pitch, setPitch] = useState({ p1: '', p2: '', p3: '' });
    const [showPitch, setShowPitch] = useState(false);

    // State for Interview Simulator
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [showStrategy, setShowStrategy] = useState(false);

    // State for Follow-up Email Generator
    const [emailInputs, setEmailInputs] = useState({ interviewerName: '', jobTitle: '', specificPoint: '' });
    const [generatedEmail, setGeneratedEmail] = useState('');
    const [copyFeedback, setCopyFeedback] = useState('');

    // Refs for smooth scrolling
    const introductionRef = useRef(null);
    const networkingRef = useRef(null);
    const interviewingRef = useRef(null);
    const followUpRef = useRef(null);
    const wrapUpRef = useRef(null);

    const sectionRefs = {
        introduction: introductionRef,
        networking: networkingRef,
        interviewing: interviewingRef,
        'follow-up': followUpRef,
        'wrap-up': wrapUpRef,
    };

    const handleNavClick = (id) => {
        const ref = sectionRefs[id];
        if (ref && ref.current) {
            ref.current.scrollIntoView({
                behavior: 'smooth'
            });
        }
        setIsMobileMenuOpen(false);
    };

    // --- Networking Pitch Logic ---
    const handlePitchChange = (e) => {
        const { id, value } = e.target;
        setPitch(prev => ({...prev, [id.split('-')[1]]: value}));
    };

    const generatePitch = () => {
        setShowPitch(true);
    };

    // --- Interview Simulator Logic ---
    const showNextQuestion = () => {
        const nextIndex = currentQuestion
            ? (interviewQuestions.findIndex(q => q.q === currentQuestion.q) + 1) % interviewQuestions.length
            : 0;
        setCurrentQuestion(interviewQuestions[nextIndex]);
        setShowStrategy(false);
    };

    const toggleStrategy = () => {
        if (currentQuestion) {
            setShowStrategy(!showStrategy);
        }
    };

    // --- Follow-up Email Logic ---
    const handleEmailInputChange = (e) => {
        const { id, value } = e.target;
        const key = id.replace(/-/g, ''); // 'interviewer-name' -> 'interviewerName'
        setEmailInputs(prev => ({...prev, [key]: value}));
    };

    const generateEmail = () => {
        const { interviewerName, jobTitle, specificPoint } = emailInputs;
        const emailTemplate = `Subject: Thank you - ${jobTitle || '[Job Title]'} Interview

Dear ${interviewerName || '[Interviewer Name]'},

Thank you so much for taking the time to speak with me today about the ${jobTitle || '[Job Title]'} position. I truly enjoyed our conversation and learning more about the role and the team at ACAP.

I was particularly interested in ${specificPoint || '[something specific from your conversation]'}, and it was great to understand how this position contributes to your mission.

My experience in [Your Key Skill] aligns well with the requirements you described, and I am confident I can make a valuable contribution. I am very enthusiastic about the opportunity to join your team and support the important work you do in our community.

Thank you again for your time and consideration. I look forward to hearing from you soon.

Best regards,

[Your Name]`;
        setGeneratedEmail(emailTemplate);
    };

    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText(generatedEmail).then(() => {
            setCopyFeedback('Copied!');
            setTimeout(() => setCopyFeedback(''), 2000);
        }).catch(() => {
            setCopyFeedback('Failed to copy.');
        });
    };

    return (
        <div className="antialiased">
            {/* Header & Navigation */}
            <header className="module-header sticky top-0 z-50 shadow-md">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold text-gray-800">ACAP Module 3</h1>
                        <p className="text-sm text-gray-600">Networking and Interviewing</p>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <a href="#introduction" onClick={(e) => {e.preventDefault(); handleNavClick('introduction');}} className="nav-link pb-1">Introduction</a>
                        <a href="#networking" onClick={(e) => {e.preventDefault(); handleNavClick('networking');}} className="nav-link pb-1">Networking</a>
                        <a href="#interviewing" onClick={(e) => {e.preventDefault(); handleNavClick('interviewing');}} className="nav-link pb-1">Interviewing</a>
                        <a href="#follow-up" onClick={(e) => {e.preventDefault(); handleNavClick('follow-up');}} className="nav-link pb-1">Follow-Up</a>
                        <a href="#wrap-up" onClick={(e) => {e.preventDefault(); handleNavClick('wrap-up');}} className="nav-link pb-1">Wrap Up</a>
                    </div>
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                </nav>
                {isMobileMenuOpen && (
                    <div className="md:hidden px-6 pb-4">
                        <a href="#introduction" onClick={(e) => {e.preventDefault(); handleNavClick('introduction');}} className="block py-2 text-center nav-link">Introduction</a>
                        <a href="#networking" onClick={(e) => {e.preventDefault(); handleNavClick('networking');}} className="block py-2 text-center nav-link">Networking</a>
                        <a href="#interviewing" onClick={(e) => {e.preventDefault(); handleNavClick('interviewing');}} className="block py-2 text-center nav-link">Interviewing</a>
                        <a href="#follow-up" onClick={(e) => {e.preventDefault(); handleNavClick('follow-up');}} className="block py-2 text-center nav-link">Follow-Up</a>
                        <a href="#wrap-up" onClick={(e) => {e.preventDefault(); handleNavClick('wrap-up');}} className="block py-2 text-center nav-link">Wrap Up</a>
                    </div>
                )}
            </header>

            {/* Main Content */}
            <main className="container mx-auto p-4 md:p-8">
                {/* Introduction Section */}
                <section ref={introductionRef} id="introduction" className="mb-12 scroll-mt-24">
                    <div className="section-card rounded-lg p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Module 3: Introduction</h2>
                        <p className="text-lg text-gray-600 mb-4">Welcome to the final module of the Job Readiness Workshop. You've done the hard work of identifying your strengths and crafting your professional story. Now it's time to take that story on the road. This module focuses on the active parts of a job search: making connections and acing the interview.</p>
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                            <h3 className="font-bold text-blue-800">Learning Objectives</h3>
                            <ul className="list-disc list-inside mt-2 text-blue-700">
                                <li>Understand the importance of networking in a community-focused job market like Maine's.</li>
                                <li>Develop a concise "elevator pitch" to introduce yourself confidently.</li>
                                <li>Learn how to thoroughly prepare for a job interview.</li>
                                <li>Practice answering common interview questions effectively.</li>
                                <li>Master the art of the post-interview follow-up to leave a lasting impression.</li>
                            </ul>
                        </div>
                        <p className="mt-4 text-gray-600">This section will equip you with the strategies and confidence to engage with potential employers. We'll cover everything from building professional relationships to handling tough interview questions, ensuring you're fully prepared to turn your job applications into job offers.</p>
                    </div>
                </section>

                {/* Networking Section */}
                <section ref={networkingRef} id="networking" className="mb-12 scroll-mt-24">
                    <div className="section-card rounded-lg p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Part 1: The Power of Networking in Maine</h2>
                        <p className="text-gray-600 mb-6">The word "networking" can sound intimidating, but in Maine, it often just means building relationships and getting to know people in your community. Many of the best job opportunities aren't posted online; they're filled through word-of-mouth. This section is about learning how to introduce yourself and your goals in a natural, confident way.</p>
                        <div className="border-t border-gray-200 mt-6 pt-6">
                            <h3 className="text-xl font-semibold mb-4">Interactive Pitch Builder</h3>
                            <p className="text-gray-600 mb-4">Your "elevator pitch" is a 30-second summary of who you are, what you do, and what you're looking for. It's a crucial tool for career fairs, community events, or even a chance encounter. Let's build yours now.</p>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="pitch-1" className="block text-sm font-medium text-gray-700">Who you are:</label>
                                    <input type="text" id="pitch-1" className="mt-1 block w-full rounded-md shadow-sm interactive-input p-2" placeholder="e.g., I'm a dedicated administrative professional with over 5 years of experience..." value={pitch.p1} onChange={handlePitchChange} />
                                </div>
                                <div>
                                    <label htmlFor="pitch-2" className="block text-sm font-medium text-gray-700">What is your specialty or key skill?</label>
                                    <input type="text" id="pitch-2" className="mt-1 block w-full rounded-md shadow-sm interactive-input p-2" placeholder="e.g., ...specializing in office management and improving workflow efficiency." value={pitch.p2} onChange={handlePitchChange} />
                                </div>
                                <div>
                                    <label htmlFor="pitch-3" className="block text-sm font-medium text-gray-700">What are you looking for?</label>
                                    <input type="text" id="pitch-3" className="mt-1 block w-full rounded-md shadow-sm interactive-input p-2" placeholder="e.g., I'm currently seeking a role where I can help a local organization thrive." value={pitch.p3} onChange={handlePitchChange} />
                                </div>
                            </div>
                            <div className="mt-6">
                                <button onClick={generatePitch} className="btn-primary px-6 py-2 rounded-md">Generate My Pitch</button>
                            </div>
                            {showPitch && (
                                <div className="mt-6">
                                    <h4 className="font-semibold">Your Professional Pitch:</h4>
                                    <div className="mt-2 p-4 bg-gray-50 rounded-lg border">
                                        {pitch.p1 || pitch.p2 || pitch.p3 ? `${pitch.p1} ${pitch.p2} ${pitch.p3}` : 'Please fill in all three parts to create your pitch.'}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Interviewing Section */}
                <section ref={interviewingRef} id="interviewing" className="mb-12 scroll-mt-24">
                    <div className="section-card rounded-lg p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Part 2: Mastering the Interview</h2>
                        <p className="text-gray-600 mb-6">An interview is a two-way conversation. It's your chance to determine if the company is a good fit for you, just as they are evaluating you. Preparation is the key to reducing anxiety and performing your best. This means researching the company, understanding the role, and preparing to talk about your experience using the STAR method you learned in Module 2.</p>
                        <div className="mt-6 border-t pt-6">
                            <h3 className="text-xl font-semibold mb-2">Interview Question Simulator</h3>
                            <p className="text-gray-600 mb-4">Let's practice how to approach some of the most common interview questions. Click "Next Question" to see a new prompt, then think about how you would answer. Click "Reveal Strategy" to see a best-practice approach.</p>
                            <div className="bg-gray-50 border rounded-lg p-6 text-center flashcard flex flex-col justify-center items-center">
                                <p className="text-lg font-medium text-gray-800">{currentQuestion ? currentQuestion.q : 'Click the button to start!'}</p>
                                {showStrategy && currentQuestion && (
                                    <div className="mt-4 text-sm text-left text-blue-800 bg-blue-100 p-4 rounded-md w-full">
                                        <strong>Strategy:</strong> {currentQuestion.a}
                                    </div>
                                )}
                            </div>
                            <div className="mt-4 flex justify-center space-x-4">
                                <button onClick={showNextQuestion} className="btn-primary px-5 py-2 rounded-md">Next Question</button>
                                <button onClick={toggleStrategy} className="btn-secondary px-5 py-2 rounded-md" disabled={!currentQuestion}>
                                    {showStrategy ? 'Hide Strategy' : 'Reveal Strategy'}
                                </button>
                            </div>
                        </div>
                        <div className="mt-8 border-t pt-6">
                            <h3 className="text-xl font-semibold mb-2">Questions to Ask the Employer</h3>
                            <p className="text-gray-600 mb-4">Always have 2-3 thoughtful questions prepared to ask at the end of the interview. This shows your engagement and interest in the role. Here are some ideas:</p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>What does a typical day or week look like in this role?</li>
                                <li>How does this role contribute to the company's larger goals?</li>
                                <li>What are the biggest challenges someone in this position would face?</li>
                                <li>What do you enjoy most about working here?</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Follow-Up Section */}
                <section ref={followUpRef} id="follow-up" className="mb-12 scroll-mt-24">
                    <div className="section-card rounded-lg p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Part 3: The Crucial Follow-Up</h2>
                        <p className="text-gray-600 mb-6">The job search doesn't end when you walk out of the interview. A prompt, professional follow-up email (or thank-you note) is essential. It's your final chance to make a good impression, reiterate your interest, and remind the hiring manager of your qualifications. Aim to send it within 24 hours of your interview.</p>
                        <div className="mt-6 border-t pt-6">
                            <h3 className="text-xl font-semibold mb-4">Follow-Up Email Generator</h3>
                            <p className="text-gray-600 mb-4">Use this tool to create a polished, professional thank-you email. Just fill in the details from your interview.</p>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="interviewer-name" className="block text-sm font-medium text-gray-700">Interviewer's Name:</label>
                                    <input type="text" id="interviewer-name" className="mt-1 block w-full rounded-md shadow-sm interactive-input p-2" placeholder="e.g., Ms. Jane Smith" value={emailInputs.interviewerName} onChange={handleEmailInputChange} />
                                </div>
                                <div>
                                    <label htmlFor="job-title" className="block text-sm font-medium text-gray-700">Job Title You Interviewed For:</label>
                                    <input type="text" id="job-title" className="mt-1 block w-full rounded-md shadow-sm interactive-input p-2" placeholder="e.g., Administrative Coordinator" value={emailInputs.jobTitle} onChange={handleEmailInputChange} />
                                </div>
                                <div>
                                    <label htmlFor="specific-point" className="block text-sm font-medium text-gray-700">Something specific you discussed:</label>
                                    <input type="text" id="specific-point" className="mt-1 block w-full rounded-md shadow-sm interactive-input p-2" placeholder="e.g., our conversation about the new community garden project" value={emailInputs.specificPoint} onChange={handleEmailInputChange} />
                                </div>
                            </div>
                            <div className="mt-6 flex items-center space-x-4">
                                <button onClick={generateEmail} className="btn-primary px-6 py-2 rounded-md">Generate Email</button>
                                {generatedEmail && <button onClick={copyEmailToClipboard} className="btn-secondary px-6 py-2 rounded-md">Copy to Clipboard</button>}
                                <span className="text-sm text-green-700">{copyFeedback}</span>
                            </div>
                            {generatedEmail && (
                                <div className="mt-6">
                                    <h4 className="font-semibold">Your Follow-Up Email Template:</h4>
                                    <div className="mt-2 p-4 bg-gray-50 rounded-lg border whitespace-pre-wrap text-sm">{generatedEmail}</div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Wrap Up Section */}
                <section ref={wrapUpRef} id="wrap-up" className="scroll-mt-24">
                    <div className="section-card rounded-lg p-6 md:p-8 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Module 3 & Series Wrap Up</h2>
                        <p className="text-gray-600 mb-6 max-w-3xl mx-auto">You've reached the end of the Job Readiness Workshop Series! You have systematically built the skills, materials, and confidence needed to successfully navigate the modern job market. From self-assessment to your final thank-you note, you now have a complete toolkit for your career journey.</p>
                        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg text-left max-w-2xl mx-auto">
                            <h3 className="font-bold text-green-800">Final Takeaways</h3>
                            <ul className="list-disc list-inside mt-2 text-green-700">
                                <li><strong>Networking is relationship-building.</strong> Be genuine, be curious, and be yourself.</li>
                                <li><strong>Preparation is the key to interview confidence.</strong> Research, practice, and prepare your questions.</li>
                                <li><strong>Always follow up.</strong> A thoughtful thank-you note can set you apart from other candidates.</li>
                                <li><strong>Your job search is a marathon, not a sprint.</strong> Stay positive, be persistent, and use the tools you've learned here.</li>
                            </ul>
                        </div>
                        <p className="mt-6 text-gray-600 font-semibold">ACAP is here to support you. We wish you the very best in your job search and your future career!</p>
                    </div>
                </section>

            </main>
        </div>
    );
}

export default Module3;