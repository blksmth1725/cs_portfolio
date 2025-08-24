import ProtectedRoute from '@/components/ProtectedRoute';
import '@/styles/pages.css';

export default function HomePage() {
  return (
    <ProtectedRoute>
      <div className="home-page-container">
        <div className="home-page-content">
          <h1 className="home-page-title">Christian Sheen</h1>
          
          <div className="contact-info">
            <p>csheen1725@gmail.com</p>
            <p>(786)832-1691</p>
            <p>Miami, United States</p>
            <p>linkedin.com/in/csheen</p>
            <p>github.com/blksmth1725</p>
          </div>

          <div className="professional-title">
            <h2>Software Engineer: Front End Developer</h2>
          </div>

          <div className="summary">
            <p>Software engineer who creatively solves problems to deliver seamless user experiences. I strive to understand people, technology, and how they interact to build useful applications/features. The goal is to help others bring their ideas to life through technology, helping them reach customers and grow.</p>
          </div>

          <div className="work-experience">
            <h2>WORK EXPERIENCE</h2>
            
            <div className="job">
              <h3>Software Engineer | Watch Systems LLC | Covington, LA | 06/2022 - Present</h3>
              <h4>Migration of legacy desktop applications to browser based applications</h4>
              <ul>
                <li>NCIC Security clearance.</li>
                <li>CJIS Security clearance.</li>
                <li>Frontend development of browser based application (OffenderWatch)</li>
                <li>API development for OffenderWatch</li>
                <li>Backend development working with NCIC application - ties in our legacy application with NCIC DB as well as OffenderWatch</li>
                <li>Developmental work on our OffenderwatchMobile app that allows law enforcement to leverage our software out in the field from their phones</li>
              </ul>
            </div>

            <div className="job">
              <h3>Junior Software Engineer | Pedra CRM LLC | Miami, FL | 06/2021 - 06/2022</h3>
              <h4>Building CRM system for existing API</h4>
              <ul>
                <li>Currently working on an iOS app with SwiftUI and Apollo as my Graphql client which provides the same functionality as the web application. (iOS)</li>
                <li>Designing of 10+ Views performing queries with persisted user authorization via session tokens. (iOS)</li>
                <li>Built payment feature on web application to process transactions and store users' payment information in a secure manner. (Web Next.js)</li>
                <li>Using Graphql to query and mutate data with over 20 query/mutation endpoints resulting in 3 features moving into production. (Web Next.js)</li>
                <li>Learning about business logic for CRMs to give said features an intuitive feel, allowing users to create, modify or delete at many instances within their pipeline. (Web Next.js)</li>
              </ul>
            </div>

            <div className="job">
              <h3>Marketing + Operations Consultant | TD LUX | Miami, FL | 11/2018 - 04/2021</h3>
              <h4>Led marketing, inventory, and operations projects</h4>
              <ul>
                <li>Collaborated with the marketing team on 1-2 monthly campaigns to drive traffic towards our online platforms, resulting in 15% increase in online orders during COVID</li>
                <li>During Covid-19 peak: tasked with redesigning one of the locations. Created floor plans, renderings and designed new furniture. This resulted in 20% more square footage, which allowed us to provide guests with a safe dining experience.</li>
                <li>Created a process to track inventory and maintenance requirements across 6 restaurants allowing the business to efficiently repair or replace machines resulting in no down time.</li>
              </ul>
            </div>

            <div className="job">
              <h3>Architectural Assistant | Archimia | Miami, FL | 07/2017 - 07/2018</h3>
              <h4>Created and modified architectural drawings</h4>
              <ul>
                <li>Authored 10 renders based on a residential project the firm was overseeing, resulting in the selection of materials/finishes which fit within the budget and satisfied clients aesthetic demands.</li>
                <li>Designing for over 800 hours in Revit. Contributed to 6 projects of which 4 I saw to completion.</li>
                <li>Sourced information from FBC & IBC to satisfy ADA, easement & egress, setback, FAR standards. Through proper implementation the business made fewer trips to the city for approval which improved delivery times.</li>
              </ul>
            </div>
          </div>

          <div className="education">
            <h2>EDUCATION + CERTIFICATION</h2>
            
            <div className="education-item">
              <h3>Full Stack Web Development Bootcamp 01/2019 - 01/2020</h3>
              <p>Bottega University, Utah (Remote)</p>
              <p>Technologies used: JavaScript, HTML, CSS, Node.js, Express.js, React, Redux, MongoDB</p>
            </div>

            <div className="education-item">
              <h3>Certificate of completion 02/2021 - 03/2021</h3>
              <p>UDEMY, Node with React: Full stack Web Development</p>
            </div>

            <div className="education-item">
              <h3>Certificate of completion 04/2021 - 05/2021</h3>
              <p>MERN stack front-back Web Development course</p>
            </div>

            <div className="education-item">
              <h3>Architecture Associates in Art</h3>
              <p>Miami Dade College, Miami, FL Completed 70 credits hours toward a degree in Architectural Arts.</p>
              <p>08/2012 - 08/2014</p>
              <p><strong>Courses:</strong></p>
              <ul>
                <li>Adv. Design Theory</li>
                <li>Arch Structures</li>
                <li>Environmental Sys in Arch</li>
              </ul>
            </div>
          </div>

          <div className="languages">
            <h2>LANGUAGES</h2>
            <ul>
              <li>English - Native or Bilingual Proficiency</li>
              <li>Spanish - Native or Bilingual Proficiency</li>
              <li>Italian - Limited Working Proficiency</li>
            </ul>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
