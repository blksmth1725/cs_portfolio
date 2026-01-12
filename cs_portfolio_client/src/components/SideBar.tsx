'use client';

import '@/styles/sideBar.css';
import MenuButton from '@/components/MenuButton';

type SectionType = 'introduction' | 'workExperience' | 'educationCertifications' | 'languages' | 'contact' | 'projects';

interface SideBarProps {
  activeSection: SectionType;
  onSectionChange: (section: SectionType) => void;
}

const SideBar = ({ activeSection, onSectionChange }: SideBarProps) => {
    const handleClick = (section: string) => {
        onSectionChange(section as SectionType);
    };
  return (
    <div className="side-bar">
        <div className="side-bar-content">
            <MenuButton 
                title="Introduction" 
                section="introduction" 
                onClick={handleClick}
                isActive={activeSection === 'introduction'}
            />
        </div>
        <div className="side-bar-content">
            <MenuButton 
                title="Work Experience" 
                section="workExperience" 
                onClick={handleClick}
                isActive={activeSection === 'workExperience'}
            />
        </div>
        <div className="side-bar-content">
            <MenuButton 
                title="Education + Certifications" 
                section="educationCertifications" 
                onClick={handleClick}
                isActive={activeSection === 'educationCertifications'}
            />
        </div>
        <div className="side-bar-content">
            <MenuButton 
                title="Languages" 
                section="languages" 
                onClick={handleClick}
                isActive={activeSection === 'languages'}
            />
        </div>
        <div className="side-bar-content">
            <MenuButton 
                title="Contact" 
                section="contact" 
                onClick={handleClick}
                isActive={activeSection === 'contact'}
            />
        </div>
        <div className="side-bar-content">
            <MenuButton 
                title="Projects" 
                section="projects" 
                onClick={handleClick}
                isActive={activeSection === 'projects'}
            />
        </div>
    </div>
  );
};

export default SideBar;