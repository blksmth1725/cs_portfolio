'use client';

import { useState } from 'react';
import '@/styles/sections/introduction.css';
import { PERSONAL_INFO, WORK_EXPERIENCE } from '@/app/utils/constants';

const Introduction = () => {
  const { name, title, summary } = PERSONAL_INFO;
  const [selectedWorkId, setSelectedWorkId] = useState(WORK_EXPERIENCE[0]?.id || '');

  const selectedWork = WORK_EXPERIENCE.find(work => work.id === selectedWorkId) || WORK_EXPERIENCE[0];

  return (
    <div className="section-content">
      <div className="introduction-layout">
        {/* Left side - Text card */}
        <div className="intro-text-card">
          <div className="intro-header">
            <div className="intro-name">{name}</div>
            <div className="intro-title">{title}</div>
          </div>
          <div className="intro-summary">
            {summary.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

        </div>

        {/* Center - Work experience card */}
        <div className="intro-work-card">
          <div className="work-card-header">
            <h3 className="work-company">{selectedWork.company}</h3>
            <div className="work-position">{selectedWork.position}</div>
            <div className="work-meta">
              <span className="work-location">{selectedWork.location}</span>
              <span className="work-dates">{selectedWork.startDate} - {selectedWork.endDate}</span>
            </div>
          </div>

          <div className="work-card-content">
            <div className="work-content-main">
              <p className="work-description">{selectedWork.description}</p>

              <div className="work-responsibilities">
                <h4>Key Responsibilities:</h4>
                <ul>
                  {selectedWork.responsibilities.slice(0, 4).map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="work-technologies">
              <h4>Technologies:</h4>
              <div className="tech-tags">
                {selectedWork.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Work selection buttons */}
        <div className="intro-work-buttons">
          {WORK_EXPERIENCE.map((work) => (
            <button
              key={work.id}
              className={`work-button ${selectedWorkId === work.id ? 'active' : ''}`}
              onClick={() => setSelectedWorkId(work.id)}
            >
              <div className="work-button-company">{work.company}</div>
              <div className="work-button-position">{work.position}</div>
              <div className="work-button-dates">{work.startDate} - {work.endDate}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Introduction;