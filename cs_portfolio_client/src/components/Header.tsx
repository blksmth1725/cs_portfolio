'use client';

import { useState, useEffect, useRef } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import '@/styles/components.css';

export default function Header() {
  const { isAuthenticated, logout, user } = useAuth();
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('introduction');
  const navRef = useRef<HTMLElement>(null);
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });
  const [isJiggling, setIsJiggling] = useState(false);
  const [logoJiggling, setLogoJiggling] = useState(false);

  const handleLogout = () => {
    setIsDropdownOpen(false);
    // Redirect first, then clear auth to prevent blank screen
    router.push('/login');
    logout();
  };

  const handleSettings = () => {
    // TODO: Implement settings functionality
    console.log('Settings clicked');
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleSectionChange = (event: CustomEvent) => {
      setActiveSection(event.detail);
    };

    window.addEventListener(
      'sectionChange',
      handleSectionChange as EventListener
    );

    return () => {
      window.removeEventListener(
        'sectionChange',
        handleSectionChange as EventListener
      );
    };
  }, []);

  useEffect(() => {
    // Trigger logo jiggle when user signs in
    if (isAuthenticated) {
      // Set Introduction as the default active section when signing in
      setActiveSection('introduction');
      window.dispatchEvent(
        new CustomEvent('sectionChange', { detail: 'introduction' })
      );

      // Small delay to allow transition to start
      const timer = setTimeout(() => {
        setLogoJiggling(true);
        setTimeout(() => {
          setLogoJiggling(false);
        }, 300); // Match jiggle animation duration
      }, 400); // Wait for transition to complete
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    const updateSliderPosition = () => {
      if (!navRef.current) return;

      const activeButton = navRef.current.querySelector(
        `.nav-item.active`
      ) as HTMLElement;
      if (activeButton) {
        const navRect = navRef.current.getBoundingClientRect();
        const buttonRect = activeButton.getBoundingClientRect();
        const left = buttonRect.left - navRect.left;
        const width = buttonRect.width;

        setSliderStyle({ left, width });

        // Trigger jiggle animation after slider reaches position
        setTimeout(() => {
          setIsJiggling(true);
          setTimeout(() => {
            setIsJiggling(false);
          }, 300); // Match jiggle animation duration
        }, 300); // Wait for slider animation to complete
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(updateSliderPosition, 0);
    window.addEventListener('resize', updateSliderPosition);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateSliderPosition);
    };
  }, [activeSection]);

  return (
    <header className="header">
      <div className="header-container">
        <div
          className={`header-content ${!isAuthenticated ? 'header-content-centered' : ''}`}
        >
          {/* Logo */}
          <div className={`header-logo ${logoJiggling ? 'logo-jiggle' : ''}`}>
            <h1 className="header-logo-text">
              <img src="/csaLogo.png" alt="CSA" className="header-logo-icon" />
              <span>/Portfolio</span>
            </h1>
          </div>

          {/* Navigation - only show when authenticated */}
          {isAuthenticated && (
            <nav className="header-nav" ref={navRef}>
              <div
                className={`nav-slider ${isJiggling ? 'jiggle' : ''}`}
                style={{
                  left: `${sliderStyle.left}px`,
                  width: `${sliderStyle.width}px`,
                }}
              />
              <button
                className={`nav-item ${activeSection === 'introduction' ? 'active' : ''}`}
                onClick={() => {
                  setActiveSection('introduction');
                  window.dispatchEvent(
                    new CustomEvent('sectionChange', { detail: 'introduction' })
                  );
                }}
              >
                Introduction
              </button>
              <button
                className={`nav-item ${activeSection === 'educationCertifications' ? 'active' : ''}`}
                onClick={() => {
                  setActiveSection('educationCertifications');
                  window.dispatchEvent(
                    new CustomEvent('sectionChange', {
                      detail: 'educationCertifications',
                    })
                  );
                }}
              >
                ED.PH.CC
              </button>
              <button
                className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => {
                  setActiveSection('contact');
                  window.dispatchEvent(
                    new CustomEvent('sectionChange', { detail: 'contact' })
                  );
                }}
              >
                Contact
              </button>
              <button
                className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={() => {
                  setActiveSection('projects');
                  window.dispatchEvent(
                    new CustomEvent('sectionChange', { detail: 'projects' })
                  );
                }}
              >
                Projects
              </button>
            </nav>
          )}

          {/* Right side - User menu when authenticated */}
          {isAuthenticated && (
            <div className="header-actions">
              <button
                className="nav-item download-btn"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/public/CS_CV_2026.pdf';
                  link.download = 'Christian_Sheen_Resume.pdf';
                  link.click();
                }}
              >
                Download Resume
              </button>
              <div className="user-menu-container">
                <button
                  onClick={toggleDropdown}
                  className={`user-menu-trigger ${isDropdownOpen ? 'active' : ''}`}
                  aria-label="User menu"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </button>

                {isDropdownOpen && (
                  <>
                    <div
                      className="dropdown-overlay"
                      onClick={() => setIsDropdownOpen(false)}
                    ></div>
                    <div className="user-dropdown">
                      <div className="user-info">
                        <div className="user-name">{user?.name || 'User'}</div>
                        <div className="user-email">{user?.email || ''}</div>
                      </div>
                      <div className="dropdown-divider"></div>
                      <button
                        className="dropdown-item"
                        onClick={handleSettings}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="3"></circle>
                          <path d="m12 1 1.68 2.32 2.32 1.68-1.68 2.32L12 9l-1.68-2.32L8 5.36l1.68-2.32L12 1z"></path>
                          <path d="M19.07 4.93a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>
                        </svg>
                        Settings
                      </button>
                      <button
                        className="dropdown-item logout-item"
                        onClick={handleLogout}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                          <polyline points="16,17 21,12 16,7"></polyline>
                          <line x1="21" y1="12" x2="9" y2="12"></line>
                        </svg>
                        Logout
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
