'use client';

import '@/styles/sideBar.css';
import MenuButton from '@/components/MenuButton';

type SectionType = 'introduction' | 'workExperience' | 'educationCertifications' | 'contact' | 'projects';

interface SideBarProps {
    activeSection: SectionType;
    onSectionChange: (section: SectionType) => void;
}

const SideBar = ({ activeSection, onSectionChange }: SideBarProps) => {
    const handleClick = (section: string) => {
        onSectionChange(section as SectionType);
    };

    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = '/CS_CV_2025.pdf';
        link.download = 'Christian_Sheen_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div className="side-bar">
            <div className="sidebar-navigation">
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
                        title="Education + Certs"
                        section="educationCertifications"
                        onClick={handleClick}
                        isActive={activeSection === 'educationCertifications'}
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

            <div className="sidebar-bottom">
                <button
                    className="sidebar-download-btn"
                    onClick={handleDownloadResume}
                >
                    Download Resume
                </button>
            </div>
        </div>
    );
};

export default SideBar;