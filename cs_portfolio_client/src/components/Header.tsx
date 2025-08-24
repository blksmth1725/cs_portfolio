'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import '@/styles/components.css';

export default function Header() {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
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
          
          {/* Right side - Logout button when authenticated */}
          {isAuthenticated && (
            <div className="header-actions">
              <button
                onClick={handleLogout}
                className="header-logout-button"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
