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
            <h2 className="form-title">
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </h2>

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
              <input
                type="password"
                className="form-input"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Confirm Password - Sign Up only */}
            {(isSignUp || showSignupFields) && (
              <div className={`form-group signup-field ${isTransitioning ? 'exiting' : ''}`}>
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-input"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required={isSignUp}
                />
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
