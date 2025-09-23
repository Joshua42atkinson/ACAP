import React, { createContext, useState, useEffect, useContext } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useAuth } from './AuthContext';

export const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const { user } = useAuth();
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResume = async () => {
      if (user) {
        setLoading(true);
        const { data, error } = await supabase
          .from('resumes')
          .select('resume_data')
          .eq('id', user.id)
          .single();

        if (error) {
          console.error('Error fetching resume:', error);
        } else if (data) {
          // Merge fetched data with an initial structure to avoid null fields
          const initialData = {
            personalInfo: {}, experience: [], education: [], skills: []
          };
          setResumeData({ ...initialData, ...data.resume_data });
        }
        setLoading(false);
      }
    };

    fetchResume();
  }, [user]);

  const updateResumeData = async (newData) => {
    if (user) {
      const { error } = await supabase
        .from('resumes')
        .update({ resume_data: newData, updated_at: new Date() })
        .eq('id', user.id);

      if (error) {
        console.error('Error updating resume:', error);
      }
    }
  };

  const handleSetResumeData = (data) => {
    setResumeData(data);
    updateResumeData(data);
  };

  // Render children only when data has been loaded
  if (loading) {
    return <div>Loading resume...</div>;
  }

  return (
    <ResumeContext.Provider value={{ resumeData, setResumeData: handleSetResumeData }}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => {
  return useContext(ResumeContext);
};
