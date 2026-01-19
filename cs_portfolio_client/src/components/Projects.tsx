'use client';

import { PROJECT_CARDS } from '@/app/utils/constants';
import '../styles/sections/sectionsSharedStyles.css';

const Projects = () => {
  return (
    <div className="section-content">
      <div className="projects">
        <div className="section-main-title">Projects</div>
        <div className="project-cards-container">
          {PROJECT_CARDS.map((projectCard) => (
            <div className="project-card" key={projectCard.id}>
              <div className="project-card-header">
                {projectCard.title}
              </div>
              <div className="project-card-description">
                {projectCard.description}
              </div>
              <div className="project-card-url">
                <a href={projectCard.url} target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;