import React, { createContext, useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

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
  const [isSaving, setIsSaving] = useState(false);

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
    <ResumeContext.Provider value={{ resumeData, setResumeData, saveResumeToSupabase, isSaving }}>
      {children}
    </ResumeContext.Provider>
  );
};
