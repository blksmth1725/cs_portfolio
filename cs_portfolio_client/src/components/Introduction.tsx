'use client';

import { useState } from 'react';
import { INTRO_CAROUSEL_ITEMS } from '../app/utils/constants';
import '../styles/sections/sectionsSharedStyles.css';
import '../styles/sections/introduction.css';

const Introduction = () => {
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);

  console.log(INTRO_CAROUSEL_ITEMS);

  const goToPrevious = () => {
    setCurrentCarouselIndex(prev =>
      prev === 0 ? INTRO_CAROUSEL_ITEMS.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentCarouselIndex(prev =>
      prev === INTRO_CAROUSEL_ITEMS.length - 1 ? 0 : prev + 1
    );
  };

  const currentItem = INTRO_CAROUSEL_ITEMS[currentCarouselIndex];

  return (
    <div className="section-content">

      <div className="section-main-title">Front End Developer</div>

      <div className="skills-cards-grid">
        <div className="skill-card ">
          <div className="programming-language">HTML</div>
          <div className="skill-rating">
            <span className="stars">★★★★★</span> <span className="score">5/5</span>
          </div>
        </div>
        <div className="skill-card ">
          <div className="programming-language">CSS</div>
          <div className="skill-rating">
            <span className="stars">★★★★★</span> <span className="score">5/5</span>
          </div>
        </div>
        <div className="skill-card ">
          <div className="programming-language">JavaScript</div>
          <div className="skill-rating">
            <span className="stars">★★★★★</span> <span className="score">5/5</span>
          </div>
        </div>
        <div className="skill-card ">
          <div className="programming-language">React</div>
          <div className="skill-rating">
            <span className="stars">★★★★★</span> <span className="score">5/5</span>
          </div>
        </div>
        <div className="skill-card ">
          <div className="programming-language">Node.js</div>
          <div className="skill-rating">
            <span className="stars">★★★★★</span> <span className="score">5/5</span>
          </div>
        </div>
        <div className="skill-card ">
          <div className="programming-language">Python</div>
          <div className="skill-rating">
            <span className="stars">★★★★★</span> <span className="score">5/5</span>
          </div>
        </div>
        <div className="skill-card ">
          <div className="programming-language">C#</div>
          <div className="skill-rating">
            <span className="stars">★★★★★</span> <span className="score">5/5</span>
          </div>
        </div>
        <div className="skill-card ">
          <div className="programming-language">SQL</div>
          <div className="skill-rating">
            <span className="stars">★★★★★</span> <span className="score">5/5</span>
          </div>
        </div>
        <div className="skill-card ">
          <div className="programming-language">.NET</div>
          <div className="skill-rating">
            <span className="stars">★★★★★</span> <span className="score">5/5</span>
          </div>
        </div>
        <div className="skill-card ">
          <div className="programming-language">Express.js</div>
          <div className="skill-rating">
            <span className="stars">★★★★★</span> <span className="score">5/5</span>
          </div>
        </div>
      </div>

      <div className="intro-section-carousel-container">
        <div className="intro-section-carousel">
          <button className="intro-section-carousel-button left" onClick={goToPrevious}>
            <span>&lt;</span>
          </button>
          <div className={`intro-section-carousel-content ${currentItem.sections.length === 1 ? 'single-section' :
            currentItem.sections.length === 2 ? 'dual-section' :
              'triple-section'
            }`}>
            {currentItem.sections.map(section => (
              <div key={section.id} className="intro-section-carousel-section">
                <div className="carousel-item-title">{section.title}</div>

                {/* Left/Right text layout for About Me */}
                {section.leftText && section.rightText && (
                  <div className="about-me-split-layout">
                    <div className="about-me-left">
                      {section.leftText.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                    <div className="about-me-right">
                      {section.rightText.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                )}

                {/* Regular text for other sections */}
                {section.text && (
                  <div>
                    {section.text.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                )}

                {/* List items */}
                {section.listItems && section.listItems.length > 0 && (
                  <ul>
                    {section.listItems.map(item => (
                      <li key={item.id}>{item.title}: <span className="technologies">{item.technologies?.join(', ')}</span></li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <button className="intro-section-carousel-button right" onClick={goToNext}>
            <span>&gt;</span>
          </button>
        </div>
        <div className="carousel-indicators">
          {INTRO_CAROUSEL_ITEMS.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${index === currentCarouselIndex ? 'active' : ''}`}
              onClick={() => setCurrentCarouselIndex(index)}
            />
          ))}
        </div>
      </div>
      {/* Buttons 
      <div className="intro-cards-buttons">
            {introSectionButtons.map((cardId) => (
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
          <div className="intro-cards">
                <div id="section-about" className="intro-section">
                  <div className="sub-intro-title">About Me</div>
                  <p>With over 4 years of professional software development experience, I specialize in full-stack web development with a focus on creating intuitive user interfaces and robust backend systems. My journey spans from architectural design to modern web applications, giving me a unique perspective on both technical implementation and user experience design.</p>
                </div>

                <div id="section-competencies" className="intro-section">
                  <div className="sub-intro-title">Core Competencies</div>
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
                  <div className="sub-intro-title">Professional Highlights</div>
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
                  <div className="sub-intro-title">Languages</div>
                  <ul className="languages-list">
                    <li>English - Native or Bilingual Proficiency</li>
                    <li>Spanish - Native or Bilingual Proficiency</li>
                    <li>Italian - Limited Working Proficiency</li>
                  </ul>
                </div>
          </div>
          
          */}

    </div>
  );
};

export default Introduction;