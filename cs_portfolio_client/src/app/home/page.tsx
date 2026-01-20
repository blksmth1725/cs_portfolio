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
  const [isFading, setIsFading] = useState(false);
  const [displaySection, setDisplaySection] = useState<SectionType>('introduction');

  useEffect(() => {
    const handleSectionChange = (event: CustomEvent) => {
      const newSection = event.detail as SectionType;
      if (newSection !== displaySection) {
        // Start fade out
        setIsFading(true);

        // After fade out completes, change section and fade in
        setTimeout(() => {
          setDisplaySection(newSection);
          setActiveSection(newSection);
          // Trigger fade in
          setTimeout(() => {
            setIsFading(false);
          }, 10);
        }, 200); // Match CSS transition duration
      }
    };

    window.addEventListener('sectionChange', handleSectionChange as EventListener);

    return () => {
      window.removeEventListener('sectionChange', handleSectionChange as EventListener);
    };
  }, [displaySection]);

  const renderSectionContent = () => {
    return (
      <>
        {displaySection === 'introduction' && <Introduction />}
        {displaySection === 'workExperience' && <WorkExperience />}
        {displaySection === 'educationCertifications' && <EducationCertifications />}
        {displaySection === 'contact' && <Contact />}
        {displaySection === 'projects' && <Projects />}
      </>
    );
  };

  return (
    <ProtectedRoute>
      <div className="home-page-container">
        <div className={`home-page-content-full ${isFading ? 'fade-out' : 'fade-in'}`}>
          {renderSectionContent()}
        </div>
      </div>
    </ProtectedRoute>
  );
}