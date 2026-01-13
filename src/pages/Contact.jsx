import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import './Contact.scss'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })
  
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formError, setFormError] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const { ref: contactInfoRef, inView: contactInfoInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })
  
  const { ref: formRef, inView: formInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })
  
  const { ref: mapRef, inView: mapInView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormError(false)
    
    try {
      // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/xkgboybn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
          _subject: `New contact form submission from ${formData.name}`,
        })
      })
      
      if (response.ok) {
        setFormSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        })
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setFormError(true)
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <div className="contact-page">
      <section className="contact-section section">
        {/* Background Effects */}
        <div className="contact-bg-constellation"></div>
        <div className="floating-contact-particles">
          <div className="contact-particle">📞</div>
          <div className="contact-particle">✉️</div>
          <div className="contact-particle">💬</div>
          <div className="contact-particle">🌟</div>
          <div className="contact-particle">⚡</div>
          <div className="contact-particle">🚀</div>
        </div>
        
        <div className="container">
          <div className="contact-content">
            <div 
              ref={contactInfoRef} 
              className={`contact-info ${contactInfoInView ? 'fade-in' : ''}`}
            >
              <div className="info-header">
                <div className="header-badge">
                  <div className="badge-glow"></div>
                  <span className="badge-icon">🎯</span>
                  <span className="badge-text">Let's Connect</span>
                </div>
                <h2 className="info-title">
                  <span style={{ color: 'white' }}>Get In Touch</span>
                </h2>
                <p className="info-text">
                  Have a project in mind or want to learn more about our services? Our team is ready to discuss how we can help you achieve your goals.
                </p>
              </div>
              
              <div className="contact-methods">
                <div className="contact-method" style={{ animationDelay: '0ms' }}>
                  <div className="method-icon">
                    <div className="icon-glow"></div>
                    <div className="icon-pulse"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="method-content">
                    <h3>Phone</h3>
                    <p><a href="tel:+992111227730">+992 (111) 22-7730</a></p>
                  </div>
                </div>
                
                <div className="contact-method" style={{ animationDelay: '100ms' }}>
                  <div className="method-icon">
                    <div className="icon-glow"></div>
                    <div className="icon-pulse"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div className="method-content">
                    <h3>Email</h3>
                    <p><a href="mailto:tohir.s91@gmail.com">tohir.s91@gmail.com</a></p>
                  </div>
                </div>
                
                <div className="contact-method" style={{ animationDelay: '200ms' }}>
                  <div className="method-icon">
                    <div className="icon-glow"></div>
                    <div className="icon-pulse"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="method-content">
                    <h3>Address</h3>
                    <p>Jabbor Rasulov 8<br />Dushanbe, Tajikistan</p>
                  </div>
                </div>
                
                <div className="contact-method" style={{ animationDelay: '300ms' }}>
                  <div className="method-icon">
                    <div className="icon-glow"></div>
                    <div className="icon-pulse"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                  <div className="method-content">
                    <h3>Working Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="social-links">
                <div className="social-header">
                  <div className="social-icon-header">🌐</div>
                  <h3>Connect With Us</h3>
                </div>
                <div className="social-icons">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
                    <div className="social-bg-effect"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-link">
                    <div className="social-bg-effect"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link">
                    <div className="social-bg-effect"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
                    <div className="social-bg-effect"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div 
              ref={formRef} 
              className={`contact-form-container ${formInView ? 'fade-in' : ''}`}
            >
              <div className="form-bg-aurora"></div>
              <div className="form-grid-pattern"></div>
              
              {formSubmitted ? (
                <div className="form-success">
                  <div className="success-animation">
                    <div className="success-ring"></div>
                    <div className="success-ring success-ring-2"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h2>Message Sent!</h2>
                  <p>Thank you for reaching out. Our team will get back to you shortly.</p>
                  <button 
                    className="btn btn-primary success-btn" 
                    onClick={() => setFormSubmitted(false)}
                  >
                    <span className="btn-bg-effect"></span>
                    <span className="btn-text">Send Another Message</span>
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-header">
                    <div className="form-badge">
                      <div className="badge-pulse"></div>
                      <span className="badge-icon">💬</span>
                      <span className="badge-text">Message Us</span>
                    </div>
                    <h2 className="form-title">
                      <span className="title-gradient">Send Us a Message</span>
                    </h2>
                  </div>
                  
                  {formError && (
                    <div className="form-error">
                      <div className="error-icon">⚠️</div>
                      <p>There was an error submitting your message. Please try again.</p>
                    </div>
                  )}
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your Name*</label>
                      <div className="input-container">
                        <div className="input-glow"></div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address*</label>
                      <div className="input-container">
                        <div className="input-glow"></div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <div className="input-container">
                        <div className="input-glow"></div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="company">Company</label>
                      <div className="input-container">
                        <div className="input-glow"></div>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="service">Service of Interest</label>
                    <div className="select-container">
                      <div className="select-glow"></div>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      >
                        <option value="">Select a service</option>
                        <option value="it">IT Services</option>
                        <option value="engineering">Engineering Services</option>
                        <option value="technology">Technology Services</option>
                        <option value="data">Data Engineering</option>
                        <option value="other">Other/General Inquiry</option>
                      </select>
                      <div className="select-arrow">▼</div>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Your Message*</label>
                    <div className="textarea-container">
                      <div className="textarea-glow"></div>
                      <textarea
                        id="message"
                        name="message"
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                      ></textarea>
                    </div>
                  </div>
                  
                  <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                    <div className="btn-bg-effect"></div>
                    <span className="btn-content">
                      <span className="btn-icon">{isSubmitting ? '⏳' : '🚀'}</span>
                      <span className="btn-text">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    </span>
                    <div className="btn-scan-line"></div>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <section ref={mapRef} className={`map-section ${mapInView ? 'fade-in' : ''}`}>
        <div className="map-bg-effects"></div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23585.943725381552!2d68.7166520628087!3d38.55799566108331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b5d18d1599ae25%3A0xa0b41b2366788fe4!2sJabbor%20Rasulov%20Ave%208%2C%20Dushanbe!5e0!3m2!1sen!2s!4v1749284753554!5m2!1sen!2s"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Saidzoda Engineering Office Location"
          ></iframe>
          <div className="map-overlay">
            <div className="map-card">
              <div className="card-bg-aurora"></div>
              <div className="card-content">
                <div className="location-icon">📍</div>
                <h3>Visit Our Office</h3>
                <p>Jabbor Rasulov 8<br />Dushanbe, Tajikistan</p>
                <a 
                  href="https://maps.google.com/maps?q=Jabbor+Rasulov+Ave+8,+Dushanbe,+Tajikistan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline directions-btn"
                >
                  <span className="btn-bg-grid"></span>
                  <span className="btn-content">
                    <span className="btn-icon">🧭</span>
                    <span className="btn-text">Get Directions</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact