import React from 'react';
import { useParams, Link } from 'react-router-dom';

// TODO: The interactive features described in the text (e.g., peer review, video uploads, forums, worksheets) are not yet implemented. This would require a backend and further frontend development.

import Module1Content from '../components/modules/Module1Content';
import Module2Content from '../components/modules/Module2Content';
import Module3Content from '../components/modules/Module3Content';

// In a real application, this data would come from a CMS or API
const moduleData = {
  '1': {
    title: 'Module 1: Constructing the Professional Narrative: Resumes & Cover Letters',
    objective: 'This first module is designed to guide learners through the process of creating a powerful and tailored resume. It directly addresses the target behavior of submitting customized application materials. The instructional approach is explicitly constructivist, moving away from prescriptive lectures on formatting and instead engaging learners in a series of problem-based, reflective, and collaborative activities. The goal is for each participant to construct their own professional documents through a process of discovery and peer interaction.',
  },
  '2': {
    title: 'Module 2: Building the Professional Network: Proactive Job Search Strategies',
    objective: 'This module is designed to develop the critical behavior of proactive networking, including the specific skill of conducting informational interviews. The curriculum is structured to move learners from the relatively controlled environment of document creation into the more dynamic and often intimidating domain of interpersonal engagement. The constructivist activities within this module are designed to systematically build skills and confidence, transforming the learner\'s perception of networking from a daunting obligation to a manageable and valuable strategy.',
  },
  '3': {
    title: 'Module 3: Demonstrating Value and Competence: Interviewing & Follow-Up',
    objective: 'The final module of the workshop concentrates on the crucial stage of the job search: the interview. The curriculum is designed to build competence and confidence in two key target behaviors: articulating one\'s value using the STAR method and executing a professional, timely follow-up. The activities in this module are heavily performance-based, emphasizing active practice, self-reflection, and peer feedback as the primary mechanisms for learning.',
  }
};

function Module() {
  const { moduleId } = useParams();
  const module = moduleData[moduleId];

  const renderModuleContent = () => {
    switch (moduleId) {
      case '1':
        return <Module1Content />;
      case '2':
        return <Module2Content />;
      case '3':
        return <Module3Content />;
      default:
        return null;
    }
  };

  if (!module) {
    return <div>Module not found.</div>;
  }

  return (
    <div>
      <h1>{module.title}</h1>
      <p><em>{module.objective}</em></p>

      <hr />

      {renderModuleContent()}

      <Link to="/modules">Back to Course Modules</Link>
    </div>
  );
}

export default Module;
