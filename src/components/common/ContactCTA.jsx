import React from 'react'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import './ContactCTA.scss'

const ContactCTA = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })
  
  return (
    <section ref={ref} className={`contact-cta-section ${inView ? 'fade-in' : ''}`}>
      {/* Futuristic Background Elements */}
      <div className="cta-bg-constellation"></div>
      <div className="floating-cta-particles">
        <div className="cta-particle">⚡</div>
        <div className="cta-particle">🚀</div>
        <div className="cta-particle">💎</div>
        <div className="cta-particle">⭐</div>
        <div className="cta-particle">🔮</div>
        <div className="cta-particle">✨</div>
      </div>
      
      <div className="container">
        <div className="cta-content">
          <div className="cta-badge">
            <div className="badge-glow"></div>
            <span className="badge-icon">🎯</span>
            <span className="badge-text">Ready to Transform?</span>
          </div>
          
          <h2 className="cta-title">
            <span className="title-line">Ready to Work</span>
            <span className="title-line title-gradient">With the Future?</span>
          </h2>
          
          <p className="cta-description">
            Let's discuss how Saidzoda Engineering can revolutionize your next project. Our team of experts is ready to deliver cutting-edge solutions that exceed your expectations.
          </p>
          
          <div className="cta-stats">
            <div className="stat-item">
              <div className="stat-icon">⚡</div>
              <div className="stat-number">24h</div>
              <div className="stat-label">Response Time</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🎯</div>
              <div className="stat-number">100%</div>
              <div className="stat-label">Success Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🚀</div>
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
          </div>
          
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary cta-primary-btn">
              <span className="btn-bg-effect"></span>
              <span className="btn-content">
                <span className="btn-icon">🚀</span>
                <span className="btn-text">Get in Touch</span>
              </span>
              <span className="btn-glow"></span>
            </Link>
            
            <Link to="/services" className="btn btn-outline cta-outline-btn">
              <span className="btn-bg-grid"></span>
              <span className="btn-content">
                <span className="btn-icon">⚙️</span>
                <span className="btn-text">Explore Services</span>
              </span>
              <span className="btn-scan-line"></span>
            </Link>
          </div>
          
          <div className="cta-trust-indicators">
            <div className="trust-item">
              <div className="trust-icon">🏆</div>
              <span>Award Winning</span>
            </div>
            <div className="trust-item">
              <div className="trust-icon">🔒</div>
              <span>Secure & Reliable</span>
            </div>
            <div className="trust-item">
              <div className="trust-icon">⚡</div>
              <span>Lightning Fast</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA