import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="site-footer">
      {/* Futuristic Background Elements */}
      <div className="footer-bg-constellation"></div>
      <div className="floating-footer-particles">
        <div className="footer-particle">⚡</div>
        <div className="footer-particle">🔧</div>
        <div className="footer-particle">💻</div>
        <div className="footer-particle">🚀</div>
        <div className="footer-particle">⚛️</div>
        <div className="footer-particle">🔮</div>
      </div>
      
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo-section">
              <div className="footer-logo">
                <Link to="/">
                  <div className="logo-container">
                    <div className="logo-glow"></div>
                    <img src="https://raw.githubusercontent.com/SaafarST/saidzoda-engineering/main/public/images/logo/saidzoda-logo-dark.jpeg" alt="Saidzoda Engineering" />
                  </div>
                </Link>
              </div>
              <p className="tagline">
                Leading force in IT, Engineering, and Technology sectors in Tajikistan
              </p>
              <div className="company-stats">
                <div className="stat-item">
                  <div className="stat-icon">🎯</div>
                  <div className="stat-number">2024</div>
                  <div className="stat-label">Founded</div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">⚡</div>
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">🏢</div>
                  <div className="stat-number">5</div>
                  <div className="stat-label">Clients</div>
                </div>
              </div>
              <div className="social-links">
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
            
            <div className="footer-links">
              <div className="links-column">
                <div className="column-header">
                  <div className="header-icon">⚙️</div>
                  <h4>Services</h4>
                </div>
                <ul>
                  <li>
                    <Link to="/services#it" className="footer-link">
                      <span className="link-indicator"></span>
                      IT Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/services#engineering" className="footer-link">
                      <span className="link-indicator"></span>
                      Engineering Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/services#technology" className="footer-link">
                      <span className="link-indicator"></span>
                      Technology Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/services#data" className="footer-link">
                      <span className="link-indicator"></span>
                      Data Engineering
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div className="links-column">
                <div className="column-header">
                  <div className="header-icon">🏢</div>
                  <h4>Company</h4>
                </div>
                <ul>
                  <li>
                    <Link to="/about" className="footer-link">
                      <span className="link-indicator"></span>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/projects" className="footer-link">
                      <span className="link-indicator"></span>
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link to="/about#clients" className="footer-link">
                      <span className="link-indicator"></span>
                      Clients
                    </Link>
                  </li>
                  <li>
                    <Link to="/about#partners" className="footer-link">
                      <span className="link-indicator"></span>
                      Partners
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div className="links-column contact-info">
                <div className="column-header">
                  <div className="header-icon">📞</div>
                  <h4>Contact</h4>
                </div>
                <ul>
                  <li className="contact-item">
                    <div className="contact-icon">
                      <div className="icon-pulse"></div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <a href="tel:+992111227730">+992 111 22 7730</a>
                  </li>
                  <li className="contact-item">
                    <div className="contact-icon">
                      <div className="icon-pulse"></div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <a href="mailto:Tohir.s91@gmail.com">Tohir.s91@gmail.com</a>
                  </li>
                  <li className="contact-item">
                    <div className="contact-icon">
                      <div className="icon-pulse"></div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <address>Jabbor Rasulov 8<br />Dushanbe, Tajikistan</address>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-scan-line"></div>
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              <span className="copyright-icon">©</span>
              {currentYear} Saidzoda Engineering. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="/privacy-policy" className="footer-bottom-link">
                <span className="link-glow"></span>
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="footer-bottom-link">
                <span className="link-glow"></span>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer