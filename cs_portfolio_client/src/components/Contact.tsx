'use client';

import { useState } from 'react';
import { CONTACT_INFO, REFERRALS } from '@/app/utils/constants';
import '@/styles/sections/contact.css';

const Contact = () => {
  const { email, phone, location, socialMedia } = CONTACT_INFO;
  const { github, linkedin, leetcode } = socialMedia;

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phoneNumber: '',
    email: '',
    message: ''
  });

  const [selectedReferenceLetter, setSelectedReferenceLetter] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <div className="section-content">
      <div className="contact-layout">
        {/* Left - Contact Info */}
        <div className="contact-info-card">
          <div className="contact-header">
            <h1 className="contact-title">LET'S TALK</h1>
          </div>

          <div className="contact-info-section">
            <div className="contact-info-container">
              <div className="contact-info-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <span className="contact-value">Christian Sheen</span>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <span className="contact-value">{phone}</span>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <span className="contact-value">{email}</span>
              </div>
            </div>
          </div>

          {/* Referrals Section */}
          <div className="referrals-section">
            <h3 className="referrals-title">Referrals</h3>
            <div className="referrals-list">
              {REFERRALS.map((referral) => (
                <div key={referral.id} className="referral-item">
                  <div className="referral-content">
                    <div className="referral-row-1">
                      <span className="referral-name">
                        {referral.firstName} {referral.lastName}
                      </span>
                      <div className="referral-contact-info">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12" className="referral-icon">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                        <span>{referral.email}</span>
                      </div>
                    </div>
                    <div className="referral-row-2">
                      <div className="referral-position-company">
                        <span className="referral-position">{referral.position}</span>
                        <span className="referral-company">{referral.company}</span>
                      </div>
                      <div className="referral-contact-info">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12" className="referral-icon">
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                        </svg>
                        <span>{referral.phone}</span>
                      </div>
                    </div>
                  </div>
                  {referral.referenceLetter && (
                    <button
                      className="referral-letter-btn"
                      onClick={() => setSelectedReferenceLetter(referral.referenceLetter || null)}
                    >
                      Recommendation letter
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="social-media-section">
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href={leetcode} target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-2.92-2.355-7.26-2.072-9.83.613l-.161.161L13.483.001z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="contact-form-card">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group message-group">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                rows={12}
                required
              />
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Reference Letter Modal */}
      {selectedReferenceLetter && (
        <div className="reference-modal-overlay" onClick={() => setSelectedReferenceLetter(null)}>
          <div className="reference-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="reference-modal-close"
              onClick={() => setSelectedReferenceLetter(null)}
            >
              ×
            </button>
            <iframe
              src={selectedReferenceLetter}
              className="reference-modal-iframe"
              title="Reference Letter"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;