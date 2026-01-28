'use client';

import '@/styles/sections/projects.css';
import { PROJECTS } from '@/app/utils/constants';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
const Projects = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(PROJECTS[0]?.id || '');
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [mediaLoading, setMediaLoading] = useState(false);
  const selectedProject = PROJECTS.find(project => project.id === selectedProjectId) || PROJECTS[0];

  const handleProjectChange = (projectId: string) => {
    setSelectedProjectId(projectId);
    setCurrentMediaIndex(0); // Reset carousel when changing projects
    setMediaLoading(false);
  };

  const handlePrevious = () => {
    setMediaLoading(true);
    setCurrentMediaIndex((prev) => 
      prev === 0 ? selectedProject.media.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setMediaLoading(true);
    setCurrentMediaIndex((prev) => 
      prev === selectedProject.media.length - 1 ? 0 : prev + 1
    );
  };

  const handleMediaLoad = () => {
    setMediaLoading(false);
  };

  return (
    <div className="section-content">
      <div className="projects-layout">
        <div className="projects-maincard">
          <div className="project-card-title">{selectedProject.title}</div>
          
          {/* Media Carousel - Left */}
          <div className="project-card-media">
            <div className='project-card-media-container'>
              <button 
                className='chevron-left' 
                onClick={handlePrevious}
                aria-label="Previous image"
              >
                <ChevronLeftIcon />
              </button>
              <div className="project-card-media-item">
                {mediaLoading && (
                  <div className="media-loader">
                    <div className="spinner"></div>
                  </div>
                )}
                {selectedProject.media[currentMediaIndex].type === 'video' ? (
                  <video 
                    key={`${selectedProjectId}-${currentMediaIndex}`}
                    src={selectedProject.media[currentMediaIndex].src}
                    controls
                    loop
                    onLoadedData={handleMediaLoad}
                    style={{ opacity: mediaLoading ? 0 : 1 }}
                  />
                ) : (
                  <img 
                    src={selectedProject.media[currentMediaIndex].src} 
                    alt={selectedProject.media[currentMediaIndex].type}
                    onLoad={handleMediaLoad}
                    style={{ opacity: mediaLoading ? 0 : 1 }}
                  />
                )}
              </div>
              <button 
                className='chevron-right' 
                onClick={handleNext}
                aria-label="Next image"
              >
                <ChevronRightIcon />
              </button>
            </div>
            <div className="media-indicators">
              {selectedProject.media.map((_, index) => (
                <button
                  key={index}
                  className={`indicator-dot ${index === currentMediaIndex ? 'active' : ''}`}
                  onClick={() => {
                    setMediaLoading(true);
                    setCurrentMediaIndex(index);
                  }}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Project Info - Middle */}
          <div className="project-info-section">
            <div className="project-description">
              <h3>Description</h3>
              <p>{selectedProject.longDescription}</p>
            </div>

            <div className="project-features">
              <h3>Features</h3>
              <ul>
                {selectedProject.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="project-technologies-list">
              <h3>Technologies</h3>
              <div className="tech-pills">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} className="tech-pill">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Project Buttons - Right */}
          <div className="project-buttons">
          {PROJECTS.map((project) => (
            <button 
              key={project.id} 
              className={`project-button ${project.id === selectedProjectId ? 'active' : ''}`} 
              onClick={() => handleProjectChange(project.id)}
            >
              <div className="project-button-title">{project.title}</div>
              <div className="project-button-dates">{project.startDate} - {project.endDate}</div>
            </button>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;