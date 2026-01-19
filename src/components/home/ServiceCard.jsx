
import React from 'react'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import './ServiceCard.scss'

const ServiceCard = ({ title, icon, description, link, delay = 0, category = "technology", isExternal = false }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  // Logic: If icon string contains a slash or dot, it's a file path. Otherwise, it's an emoji.
  const isImage = icon.includes('/') || icon.includes('.')

  return (
    <div
      ref={ref}
      className={`service-card ${inView ? 'slide-in-up' : ''} service-card-${category}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Animated Tech Grid Background */}
      <div className="card-tech-pattern"></div>

      {/* Floating Particles */}
      <div className="floating-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Glow Effect */}
      <div className="card-glow"></div>

      {/* Card Content */}
      <div className="card-content">
        <div className="service-icon">
          <div className="icon-orbit">
            <div className="orbit-ring"></div>
            <div className="orbit-ring orbit-ring-2"></div>
          </div>
          <div className="icon-glow"></div>

          {/* --- THE FIX: Render Image or Emoji --- */}
          {isImage ? (
            <img src={icon} alt={title} className="icon-img" />
          ) : (
            <span className="icon-emoji">{icon}</span>
          )}
          {/* ------------------------------------- */}

          <div className="icon-pulse"></div>
        </div>

        <div className="service-header">
          <div className="service-badge">
            {category.toUpperCase()}
          </div>
          <h3 className="service-title">{title}</h3>
        </div>

        <p className="service-description">{description}</p>

        {/* --- THE FIX: Handle External Links (Ameena) vs Internal --- */}
        {isExternal ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="service-link">
            <span className="link-text">Launch Platform</span>
            <div className="link-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </div>
            <div className="link-ripple"></div>
          </a>
        ) : (
          <Link to={link} className="service-link">
            <span className="link-text">Explore Solutions</span>
            <div className="link-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
            <div className="link-ripple"></div>
          </Link>
        )}
      </div>

      <div className="holographic-border"></div>
    </div>
  )
}

export default ServiceCard