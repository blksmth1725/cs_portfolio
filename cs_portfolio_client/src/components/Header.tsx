'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import '@/styles/components.css';

export default function Header() {
  const { isAuthenticated, logout, user } = useAuth();
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.push('/login');
    setIsDropdownOpen(false);
  };

  const handleSettings = () => {
    // TODO: Implement settings functionality
    console.log('Settings clicked');
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          {/* Logo */}
          <div className="header-logo">
            <h1 className="header-logo-text">
              CS/Portfolio
            </h1>
          </div>

          {/* Navigation - only show when authenticated */}
          {isAuthenticated && (
            <nav className="header-nav">
              <button
                className="nav-item"
                onClick={() => window.dispatchEvent(new CustomEvent('sectionChange', { detail: 'introduction' }))}
              >
                Introduction
              </button>
              <button
                className="nav-item"
                onClick={() => window.dispatchEvent(new CustomEvent('sectionChange', { detail: 'educationCertifications' }))}
              >
                ED.PH.CC
              </button>
              <button
                className="nav-item"
                onClick={() => window.dispatchEvent(new CustomEvent('sectionChange', { detail: 'contact' }))}
              >
                Contact
              </button>
              <button
                className="nav-item"
                onClick={() => window.dispatchEvent(new CustomEvent('sectionChange', { detail: 'projects' }))}
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
                  link.href = '/assets/resume.pdf';
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
                        <div className="user-name">
                          {user?.name || 'User'}
                        </div>
                        <div className="user-email">
                          {user?.email || ''}
                        </div>
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
