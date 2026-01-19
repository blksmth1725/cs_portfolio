import '../styles/sections/sectionsSharedStyles.css';
import '../styles/sections/contact.css';

const Contact = () => {

  return (
    <div className="section-content">
      <div className="section-main-title">Get In Touch</div>

      {/* Contact Info */}
      <div className="contact-info-section">
        <div className="contact-info-grid">
          <div className="contact-item">

            <div className="contact-info-content">
              <div className="contact-label">Email</div>
              <div className="contact-value">csheen1725@gmail.com</div>
            </div>
          </div>
          <div className="contact-item">

            <div className="contact-info-content">
              <div className="contact-label">Phone</div>
              <div className="contact-value">(786) 832-1691</div>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-info-content">
              <div className="contact-label">Location</div>
              <div className="contact-value">Atlanta, GA, United States</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form-section">
        <h3 className="form-title">Send me a message</h3>
        <div className="contact-form">
          <div className="form-layout">
            <div className="form-left">
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Your company name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Your job title"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@company.com"
                />
              </div>
            </div>

            <div className="form-right">
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or opportunity..."
                  rows={8}
                />
              </div>
            </div>
          </div>

          <button
            type="button"
            className="submit-button"
          >
            Send Message
          </button>
        </div>
      </div>

    </div>
  );
};

export default Contact;