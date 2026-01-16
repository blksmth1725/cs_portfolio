'use client';

import { useState } from 'react';
import '@/styles/sections/introduction.css';

const Introduction = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>('about');

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/CS_CV_2025.pdf';
    link.download = 'Christian_Sheen_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCardClick = (cardId: string) => {
    const element = document.getElementById(`section-${cardId}`);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setExpandedCard(cardId);
  };

  return (
    <div className="section-content">
      <div className="intro-layout">
        <div className="professional-title">
          <h2>FRONT END DEVELOPER</h2>
        </div>
        
        <div className="skills-cards-grid">
          <div className="skill-card programming-language">
            <h4>HTML</h4>
            <div className="skill-rating">
              <span className="stars">★★★★★</span> <span className="score">5/5</span>
            </div>
          </div>
          <div className="skill-card programming-language">
            <h4>CSS</h4>
            <div className="skill-rating">
              <span className="stars">★★★★★</span> <span className="score">5/5</span>
            </div>
          </div>
          <div className="skill-card programming-language">
            <h4>JavaScript</h4>
            <div className="skill-rating">
              <span className="stars">★★★★★</span> <span className="score">5/5</span>
            </div>
          </div>
          <div className="skill-card programming-language">
            <h4>React</h4>
            <div className="skill-rating">
              <span className="stars">★★★★★</span> <span className="score">5/5</span>
            </div>
          </div>
          <div className="skill-card programming-language">
            <h4>Node.js</h4>
            <div className="skill-rating">
              <span className="stars">★★★★★</span> <span className="score">5/5</span>
            </div>
          </div>
          <div className="skill-card programming-language">
            <h4>Python</h4>
            <div className="skill-rating">
              <span className="stars">★★★★★</span> <span className="score">5/5</span>
            </div>
          </div>
          <div className="skill-card programming-language">
            <h4>C#</h4>
            <div className="skill-rating">
              <span className="stars">★★★★★</span> <span className="score">5/5</span>
            </div>
          </div>
          <div className="skill-card programming-language">
            <h4>SQL</h4>
            <div className="skill-rating">
              <span className="stars">★★★★★</span> <span className="score">5/5</span>
            </div>
          </div>
          <div className="skill-card programming-language">
            <h4>.NET</h4>
            <div className="skill-rating">
              <span className="stars">★★★★★</span> <span className="score">5/5</span>
            </div>
          </div>
          <div className="skill-card programming-language">
            <h4>Express.js</h4>
            <div className="skill-rating">
              <span className="stars">★★★★★</span> <span className="score">5/5</span>
            </div>
          </div>
        </div>

        <div className="intro-split-view">
          <div className="intro-cards-left">
            <div className="intro-expanded-card">
              <div className="intro-card expanded">
                <div id="section-about" className="intro-section">
                  <h3>About Me</h3>
                  <p>With over 4 years of professional software development experience, I specialize in full-stack web development with a focus on creating intuitive user interfaces and robust backend systems. My journey spans from architectural design to modern web applications, giving me a unique perspective on both technical implementation and user experience design.</p>
                </div>

                <div id="section-competencies" className="intro-section">
                  <h3>Core Competencies</h3>
                  <ul className="competencies-list">
                    <li>Frontend Development (React, Next.js, React Native)</li>
                    <li>Backend Development (Node.js, .NET, API Design)</li>
                    <li>Database Management (MySQL, SQL Server)</li>
                    <li>Mobile App Development (iOS, SwiftUI, React Native)</li>
                    <li>Security Clearances (NCIC, CJIS)</li>
                    <li>UI/UX Design & Implementation</li>
                  </ul>
                </div>

                <div id="section-highlights" className="intro-section">
                  <h3>Professional Highlights</h3>
                  <ul className="highlights-list">
                    <li>Led migration of legacy desktop applications to modern browser-based solutions</li>
                    <li>Developed secure applications with NCIC and CJIS security clearances</li>
                    <li>Built mobile applications serving law enforcement in the field</li>
                    <li>Designed and implemented payment processing systems with secure data handling</li>
                    <li>Contributed to 20+ GraphQL endpoints resulting in 3 production features</li>
                    <li>Increased online orders by 15% through strategic marketing campaigns during COVID</li>
                  </ul>
                </div>


                <div id="section-languages" className="intro-section">
                  <h3>Languages</h3>
                  <ul className="languages-list">
                    <li>English - Native or Bilingual Proficiency</li>
                    <li>Spanish - Native or Bilingual Proficiency</li>
                    <li>Italian - Limited Working Proficiency</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="intro-cards-right">
            {['about', 'competencies', 'highlights', 'languages'].map((cardId) => (
              <button 
                key={cardId} 
                className={`intro-nav-button ${expandedCard === cardId ? 'active' : ''}`}
                onClick={() => handleCardClick(cardId)}
              >
                {cardId === 'about' && 'About Me'}
                {cardId === 'competencies' && 'Core Competencies'}
                {cardId === 'highlights' && 'Professional Highlights'}
                {cardId === 'languages' && 'Languages'}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;