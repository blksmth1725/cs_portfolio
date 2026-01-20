'use client';

import { useState, useEffect } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';
import Introduction from '@/components/Introduction';
import WorkExperience from '@/components/WorkExperience';
import EducationCertifications from '@/components/EducationCertifications';
import Contact from '@/components/Contact';
import Projects from '@/components/Projects';
import '@/styles/pages.css';

type SectionType = 'introduction' | 'workExperience' | 'educationCertifications' | 'contact' | 'projects';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<SectionType>('introduction');

  useEffect(() => {
    const handleSectionChange = (event: CustomEvent) => {
      setActiveSection(event.detail as SectionType);
    };

    window.addEventListener('sectionChange', handleSectionChange as EventListener);

    return () => {
      window.removeEventListener('sectionChange', handleSectionChange as EventListener);
    };
  }, []);

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
        <div className="home-page-content-full">
          {renderSectionContent()}
        </div>
      </div>
    </ProtectedRoute>
  );
}