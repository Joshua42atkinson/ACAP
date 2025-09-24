import React, { createContext, useState, useEffect, useContext } from 'react';
import { supabase } from '../supabaseClient';

const ResumeContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const useResumeContext = () => useContext(ResumeContext);

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
    parStatements: [],
    currentProblem: '',
    currentAction: '',
    currentResult: '',
  };

  const [resumeData, setResumeData] = useState(initialData);
  const [isSaving, setIsSaving] = useState(false);

  const updateResumeData = (section, index, field, value) => {
    setResumeData(prevData => {
      const newData = { ...prevData };

      if (section === 'personalInfo') {
        newData.personalInfo = { ...prevData.personalInfo, [field]: value };
      } else if (section === 'skills') {
        newData.skills = typeof value === 'string' ? value.split(',').map(s => s.trim()) : prevData.skills;
      } else if (section === 'experience' || section === 'education') {
        newData[section] = prevData[section].map((item, i) => {
          if (i === index) {
            return { ...item, [field]: value };
          }
          return item;
        });
      }

      return newData;
    });
  };

  const addResumeEntry = (section) => {
    setResumeData(prevData => {
      const newEmptyItem = section === 'experience'
        ? { jobTitle: '', company: '', location: '', startDate: '', endDate: '', description: '' }
        : { degree: '', school: '', location: '', graduationYear: '' };

      return {
        ...prevData,
        [section]: [...prevData[section], newEmptyItem]
      };
    });
  };

  const saveResumeToSupabase = async () => {
    setIsSaving(true);
    try {
      const { data, error } = await supabase
        .from('resumes')
        .upsert({ id: 1, data: resumeData }, { onConflict: 'id' });

      if (error) {
        throw error;
      }
      console.log('Resume saved to Supabase:', data);
    } catch (error) {
      console.error('Error saving resume to Supabase:', error);
    }
    setIsSaving(false);
  };

  useEffect(() => {
    const loadResumeFromSupabase = async () => {
      try {
        const { data, error } = await supabase
          .from('resumes')
          .select('data')
          .eq('id', 1)
          .single();

        if (error && error.code !== 'PGRST116') { // Ignore 'range not satisfiable' error if no resume exists
          throw error;
        }

        if (data) {
          setResumeData(data.data);
        }
      } catch (error) {
        console.error('Error loading resume from Supabase:', error);
      }
    };

    loadResumeFromSupabase();
  }, []);

  return (
    <ResumeContext.Provider value={{ resumeData, setResumeData, updateResumeData, addResumeEntry, saveResumeToSupabase, isSaving }}>
      {children}
    </ResumeContext.Provider>
  );
};
