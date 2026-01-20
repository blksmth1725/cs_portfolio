'use client';

import { useState } from 'react';
import { EDUCATION, PROFESSIONAL_HIGHLIGHTS, CORE_COMPETENCIES, SKILLS } from '@/app/utils/constants';
import '@/styles/sections/ecc.css';

const EducationCertifications = () => {
  const [selectedEducationId, setSelectedEducationId] = useState(EDUCATION[0]?.id || '');

  const selectedEducation = EDUCATION.find(edu => edu.id === selectedEducationId) || EDUCATION[0];

  const renderStars = (level: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < level ? 'filled' : ''}`}>★</span>
    ));
  };

  return (
    <div className="section-content">
      <div className="education-layout">
        {/* Left Side - Full Height Container */}
        <div className="education-main-card">
          <div className="education-card-header">
            <h2 className="education-institution">{selectedEducation.institution}</h2>
            <h3 className="education-degree">{selectedEducation.degree}</h3>
            <div className="education-meta">
              <span className="education-field">{selectedEducation.field}</span>
              <span className="education-location">{selectedEducation.location}</span>
              <span className="education-dates">{selectedEducation.startDate} - {selectedEducation.endDate}</span>
              <span className={`education-status ${selectedEducation.status}`}>
                {selectedEducation.status === 'completed' ? 'Completed' : 'In Progress'}
              </span>
            </div>
          </div>

          <div className="education-card-content">
            <div className="education-content-main">
              <p className="education-description">{selectedEducation.description}</p>

              {selectedEducation.courses && selectedEducation.courses.length > 0 && (
                <div className="education-courses">
                  <h4>Key Courses:</h4>
                  <ul>
                    {selectedEducation.courses.map((course, index) => (
                      <li key={index}>{course}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedEducation.gpa && (
                <div className="education-gpa">
                  <h4>GPA: <span className="gpa-value">{selectedEducation.gpa}</span></h4>
                </div>
              )}
            </div>

            {selectedEducation.technologies && selectedEducation.technologies.length > 0 && (
              <div className="education-technologies">
                <h4>Technologies Learned:</h4>
                <div className="tech-tags">
                  {selectedEducation.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Education Selection Buttons */}
          <div className="education-buttons">
            {EDUCATION.map((edu) => (
              <button
                key={edu.id}
                className={`education-button ${selectedEducationId === edu.id ? 'active' : ''}`}
                onClick={() => setSelectedEducationId(edu.id)}
              >
                <div className="education-button-institution">{edu.institution}</div>
                <div className="education-button-degree">{edu.degree}</div>
                <div className="education-button-dates">{edu.startDate} - {edu.endDate}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side - Three Containers */}
        <div className="education-right-column">
          {/* Top Row - Two Containers Side by Side */}
          <div className="education-right-top">
            {/* Professional Highlights */}
            <div className="education-highlights-card">
              <h3 className="card-title">Professional Highlights</h3>
              <div className="highlights-content">
                <ul className="highlights-list">
                  {PROFESSIONAL_HIGHLIGHTS.slice(0, 6).map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Core Competencies */}
            <div className="education-competencies-card">
              <h3 className="card-title">Core Competencies</h3>
              <div className="competencies-content">
                <ul className="competencies-list">
                  {CORE_COMPETENCIES.map((competency, index) => (
                    <li key={index}>{competency}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Container - Technical Skills */}
          <div className="education-skills-card">
            <h3 className="card-title">Technical Skills</h3>
            <div className="skills-content">
              <div className="skills-grid">
                {SKILLS.sort((a, b) => b.level - a.level).map((skill) => (
                  <div key={skill.name} className="skill-pill">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-rating">
                      <div className="stars">
                        {renderStars(skill.level)}
                      </div>
                      <span className="skill-score">{skill.level}/5</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCertifications;