'use client';

import '@/styles/sections/education.css';

const EducationCertifications = () => {
  return (
    <div className="section-content">
      <div className="education">
        <div className="education-header-section">
          <h2>EDUCATION + CERTIFICATIONS</h2>
          <div className="education-summary">
            <div className="summary-stats">
              <div className="stat-item">
                <span className="stat-number">6+</span>
                <span className="stat-label">Years Learning</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3</span>
                <span className="stat-label">Certifications</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">70</span>
                <span className="stat-label">College Credits</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">8+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>
          </div>
        </div>

        <div className="education-grid">
          <div className="education-card primary">
            <div className="education-header">
              <div className="education-title-section">
                <h3>Full Stack Web Development Bootcamp</h3>
                <div className="education-meta">
                  <span className="institution">Bottega University</span>
                  <span className="location">Utah (Remote)</span>
                  <span className="duration">Jan 2019 - Jan 2020</span>
                </div>
              </div>
            </div>
            <div className="education-content">
              <p className="education-description">Comprehensive full-stack development program covering modern web technologies and industry best practices.</p>
              <div className="technologies-section">
                <h4>Technologies Mastered:</h4>
                <div className="tech-tags">
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">HTML5</span>
                  <span className="tech-tag">CSS3</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">Express.js</span>
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Redux</span>
                  <span className="tech-tag">MongoDB</span>
                </div>
              </div>
            </div>
          </div>

          <div className="education-card certification">
            <div className="education-header">
              <div className="education-title-section">
                <h3>Node with React: Full Stack Web Development</h3>
                <div className="education-meta">
                  <span className="institution">Udemy</span>
                  <span className="duration">Feb 2021 - Mar 2021</span>
                  <span className="status completed">Certificate Completed</span>
                </div>
              </div>
            </div>
            <div className="education-content">
              <p className="education-description">Advanced certification focusing on modern React development patterns and Node.js backend integration.</p>
            </div>
          </div>

          <div className="education-card certification">
            <div className="education-header">
              <div className="education-title-section">
                <h3>MERN Stack Front-Back Web Development</h3>
                <div className="education-meta">
                  <span className="institution">Online Certification</span>
                  <span className="duration">Apr 2021 - May 2021</span>
                  <span className="status completed">Certificate Completed</span>
                </div>
              </div>
            </div>
            <div className="education-content">
              <p className="education-description">Specialized training in MongoDB, Express.js, React, and Node.js stack development.</p>
            </div>
          </div>

          <div className="education-card degree">
            <div className="education-header">
              <div className="education-title-section">
                <h3>Architecture Associates in Art</h3>
                <div className="education-meta">
                  <span className="institution">Miami Dade College</span>
                  <span className="location">Miami, FL</span>
                  <span className="duration">Aug 2012 - Aug 2014</span>
                </div>
              </div>
            </div>
            <div className="education-content">
              <p className="education-description">Completed 70 credit hours toward a degree in Architectural Arts, developing strong design thinking and spatial reasoning skills.</p>
              <div className="courses-section">
                <h4>Key Coursework:</h4>
                <div className="course-list">
                  <span className="course-item">Advanced Design Theory</span>
                  <span className="course-item">Architectural Structures</span>
                  <span className="course-item">Environmental Systems in Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCertifications;