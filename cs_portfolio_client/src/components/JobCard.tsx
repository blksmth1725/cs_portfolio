'use client';

import { JobCard as JobCardType } from '@/app/utils/constants';

interface JobCardProps {
    jobCard: JobCardType;
    isExpanded: boolean;
    onClick: () => void;
}

const JobCard = ({ jobCard, isExpanded, onClick }: JobCardProps) => {
    return (
        <div 
            className={`job-card ${isExpanded ? 'expanded' : 'collapsed'}`}
            onClick={onClick}
        >
            <div className="job-card-header">
                {jobCard.id === 3 && !isExpanded? (<div className="job-title">M & O Consultant</div>) : (<div className="job-title">{jobCard.title}</div>)}
                
                <div className="job-company">{jobCard.company}</div>
                <div className="job-meta">
                    <span className="job-location-pill">{jobCard.location}</span>
                    <span className="job-dates-pill">{jobCard.dates}</span>
                </div>
            </div>
            
            {isExpanded && (
                <div className="job-card-details">
                    <div className="job-description">{jobCard.description}</div>
                    <ul>
                        {jobCard.responsibilities.map((responsibility) => (
                            <li className="job-responsibility" key={responsibility}>{responsibility}</li>
                        ))}
                    </ul>
                </div>
            )}
            
            {!isExpanded && (
                <div className="expand-hint">Click to expand</div>
            )}
        </div>
    );
};  

export default JobCard;