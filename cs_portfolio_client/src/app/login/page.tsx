'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import '@/styles/login.css';

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showSignupFields, setShowSignupFields] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const switchMode = (signUp: boolean) => {
    setError(''); // Clear errors when switching
    
    if (signUp) {
      // Going to Sign Up - show fields immediately
      setIsSignUp(true);
      setShowSignupFields(true);
    } else {
      // Going to Sign In - animate fields out first
      if (isSignUp) {
        setIsTransitioning(true);
        // Wait for exit animation to complete before hiding fields
        setTimeout(() => {
          setIsSignUp(false);
          setShowSignupFields(false);
          setIsTransitioning(false);
        }, 300); // Match the animation duration
      } else {
        setIsSignUp(false);
        setShowSignupFields(false);
      }
    }
  };



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Validation for signup
    if (isSignUp) {
      if (!firstName.trim()) {
        setError('First name is required');
        setLoading(false);
        return;
      }
      if (!lastName.trim()) {
        setError('Last name is required');
        setLoading(false);
        return;
      }
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        setLoading(false);
        return;
      }
      if (password.length < 6) {
        setError('Password must be at least 6 characters long');
        setLoading(false);
        return;
      }
    }
    
    try {
      const endpoint = isSignUp ? '/api/auth/signup' : '/api/auth/login';
      const payload = isSignUp 
        ? { name: `${firstName} ${lastName}`, email, password }
        : { email, password };

      const response = await fetch(`http://localhost:5001${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Authentication failed');
      }

      // Login successful - store user data and redirect
      login({
        id: data.id,
        name: data.name,
        email: data.email,
        token: data.token,
      });
      
      router.push('/home');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-main-container">
        {/* Toggle Buttons */}
        <div className="form-toggle">
          <button 
            type="button"
            className={`toggle-btn ${!isSignUp ? 'active' : ''}`}
            onClick={() => switchMode(false)}
          >
            Sign In
          </button>
          <button 
            type="button"
            className={`toggle-btn ${isSignUp ? 'active' : ''}`}
            onClick={() => switchMode(true)}
          >
            Sign Up
          </button>
        </div>

        {/* Form Container */}
        <div className="form-content">
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
          
            {/* Sign Up only fields */}
            {(isSignUp || showSignupFields) && (
              <>
                <div className={`form-group signup-field ${isTransitioning ? 'exiting' : ''}`}>
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Enter your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required={isSignUp}
                  />
                </div>
                <div className={`form-group signup-field ${isTransitioning ? 'exiting' : ''}`}>
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Enter your last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required={isSignUp}
                  />
                </div>
              </>
            )}
            
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-input password-input"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {showPassword ? (
                      // Eye-off icon (when password is visible)
                      <>
                        <path d="m9.88 9.88a3 3 0 1 0 4.24 4.24" />
                        <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                        <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                        <line x1="2" x2="22" y1="2" y2="22" />
                      </>
                    ) : (
                      // Eye icon (when password is hidden)
                      <>
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                      </>
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Confirm Password - Sign Up only */}
            {(isSignUp || showSignupFields) && (
              <div className={`form-group signup-field ${isTransitioning ? 'exiting' : ''}`}>
                <label className="form-label">Confirm Password</label>
                <div className="password-input-container">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="form-input password-input"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required={isSignUp}
                  />
                  <button
                    type="button"
                    className="password-toggle-btn"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {showConfirmPassword ? (
                        // Eye-off icon (when password is visible)
                        <>
                          <path d="m9.88 9.88a3 3 0 1 0 4.24 4.24" />
                          <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                          <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                          <line x1="2" x2="22" y1="2" y2="22" />
                        </>
                      ) : (
                        // Eye icon (when password is hidden)
                        <>
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                          <circle cx="12" cy="12" r="3" />
                        </>
                      )}
                    </svg>
                  </button>
                </div>
              </div>
            )}
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="loading-spinner"></span>
                  {isSignUp ? 'Creating Account...' : 'Signing In...'}
                </>
              ) : (
                isSignUp ? 'Sign Up' : 'Sign In'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
