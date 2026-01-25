'use client';

import '@/styles/sections/projects.css';
import { PROJECTS } from '@/app/utils/constants';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
const Projects = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(PROJECTS[0]?.id || '');
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const selectedProject = PROJECTS.find(project => project.id === selectedProjectId) || PROJECTS[0];

  const handleProjectChange = (projectId: string) => {
    setSelectedProjectId(projectId);
    setCurrentMediaIndex(0); // Reset carousel when changing projects
  };

  const handlePrevious = () => {
    setCurrentMediaIndex((prev) => 
      prev === 0 ? selectedProject.media.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentMediaIndex((prev) => 
      prev === selectedProject.media.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="section-content">
      <div className="projects-layout">
        <div className="projects-maincard">
        <div className={`project-card ${selectedProjectId === selectedProject.id ? 'active' : ''}`}>
          <div className="project-card-title">{selectedProject.title}</div>
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
                {selectedProject.media[currentMediaIndex].type === 'video' ? (
                  <video 
                    src={selectedProject.media[currentMediaIndex].src}
                    controls
                    loop
                  />
                ) : (
                  <img 
                    src={selectedProject.media[currentMediaIndex].src} 
                    alt={selectedProject.media[currentMediaIndex].type} 
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
                  onClick={() => setCurrentMediaIndex(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="project-buttons">
          {PROJECTS.map((project) => (
            <button 
              key={project.id} 
              className={`project-button ${project.id === selectedProjectId ? 'active' : ''}`} 
              onClick={() => handleProjectChange(project.id)}
            >
              <div className="project-button-title">{project.title}</div>
            </button>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;