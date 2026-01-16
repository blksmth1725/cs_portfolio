'use client';

import { useState } from 'react';
import JobCard from '@/components/JobCard';
import { JOB_CARDS } from '@/app/utils/constants';
import '@/styles/sections/workExperience.css';

const WorkExperience = () => {
  const [expandedJobId, setExpandedJobId] = useState<number | null>(JOB_CARDS[0]?.id || null);

  const handleJobCardClick = (jobId: number) => {
    setExpandedJobId(expandedJobId === jobId ? null : jobId);
  };

  return (
    <div className="section-content">
      <div className="work-experience">
        <h2>WORK EXPERIENCE</h2>
        <div className={`job-cards-container ${expandedJobId ? 'has-expanded' : ''}`}>
          <div className="job-cards-main">
            {expandedJobId ? (
              <div className="work-experience-main-card">
                <JobCard
                  jobCard={JOB_CARDS.find(job => job.id === expandedJobId)!}
                  isExpanded={true}
                  onClick={() => handleJobCardClick(expandedJobId)}
                />
              </div>
            ) : (
              <div className="job-cards-grid">
                {JOB_CARDS.map((jobCard) => (
                  <JobCard
                    key={jobCard.id}
                    jobCard={jobCard}
                    isExpanded={false}
                    onClick={() => handleJobCardClick(jobCard.id)}
                  />
                ))}
              </div>
            )}
          </div>
          
          {expandedJobId && (
            <div className="job-cards-sidebar">
              {JOB_CARDS.filter(job => job.id !== expandedJobId).map((jobCard) => (
                <JobCard
                  key={jobCard.id}
                  jobCard={jobCard}
                  isExpanded={false}
                  onClick={() => handleJobCardClick(jobCard.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;