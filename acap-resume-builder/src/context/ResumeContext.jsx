import React, { createContext, useState, useEffect } from 'react';

export const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const initialData = {
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      address: '',
    },
    experience: [
      {
        jobTitle: '',
        company: '',
        location: '',
        startDate: '',
        endDate: '',
        description: '',
      },
    ],
    education: [
      {
        degree: '',
        school: '',
        location: '',
        graduationYear: '',
      },
    ],
    skills: [''],
  };

  const [resumeData, setResumeData] = useState(initialData);

  // Load data from localStorage on initial render
  useEffect(() => {
    try {
      const savedData = localStorage.getItem('acap-resume-data');
      if (savedData) {
        setResumeData(JSON.parse(savedData));
      }
    } catch (error) {
      console.error("Could not load resume data from local storage", error);
    }
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('acap-resume-data', JSON.stringify(resumeData));
    } catch (error) {
      console.error("Could not save resume data to local storage", error);
    }
  }, [resumeData]);

  return (
    <ResumeContext.Provider value={{ resumeData, setResumeData }}>
      {children}
    </ResumeContext.Provider>
  );
};
