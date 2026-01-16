'use client';

import { useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';
import SideBar from '@/components/SideBar';
import Introduction from '@/components/Introduction';
import WorkExperience from '@/components/WorkExperience';
import EducationCertifications from '@/components/EducationCertifications';
import Contact from '@/components/Contact';
import Projects from '@/components/Projects';
import '@/styles/pages.css';

type SectionType = 'introduction' | 'workExperience' | 'educationCertifications' | 'contact' | 'projects';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<SectionType>('introduction');

  const renderSectionContent = () => {
    return (
      <>
        {activeSection === 'introduction' && <Introduction />}
        {activeSection === 'workExperience' && <WorkExperience />}
        {activeSection === 'educationCertifications' && <EducationCertifications />}
        {activeSection === 'contact' && <Contact />}
        {activeSection === 'projects' && <Projects />}
      </>
    );
  };

  return (
    <ProtectedRoute>
      <div className="home-page-container">
        <div className="home-page-layout">
          <SideBar 
            activeSection={activeSection} 
            onSectionChange={setActiveSection} 
          />
          <div className={`home-page-content ${activeSection === 'workExperience' ? 'work-experience-active' : ''}`}>
            {renderSectionContent()}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}