import React from 'react'
import { Link } from 'react-router-dom'
import './PageHeader.scss'

const PageHeader = ({ title, subtitle, background, breadcrumbs = [] }) => {
  return (
    <div 
      className="page-header"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Futuristic Background Effects */}
      <div className="header-bg-constellation"></div>
      <div className="header-overlay"></div>
      <div className="floating-header-particles">
        <div className="header-particle">⚡</div>
        <div className="header-particle">🚀</div>
        <div className="header-particle">💎</div>
        <div className="header-particle">✨</div>
        <div className="header-particle">🔮</div>
        <div className="header-particle">⭐</div>
      </div>
      
      <div className="container">
        <div className="header-content">
          <div className="content-badge">
            <div className="badge-glow"></div>
            <span className="badge-icon">🎯</span>
            <span className="badge-text">Saidzoda Engineering</span>
          </div>
          
          <h1 className="page-title">
            <span className="title-text">
              {title.split(' ').map((word, index) => (
                //<span key={index} className={`title-word ${index === title.split(' ').length - 1 ? 'title-gradient' : ''}`}>
                <span key={index} className="title-word" style={{ color: 'white' }}>
                  {word}{index < title.split(' ').length - 1 && ' '}
                </span>
              ))}
            </span>
          </h1>
          
          {subtitle && (
            <p className="page-subtitle">
              <span className="subtitle-text">{subtitle}</span>
            </p>
          )}
          
          {breadcrumbs.length > 0 && (
            <div className="breadcrumbs">
              <div className="breadcrumb-container">
                <div className="breadcrumb-glow"></div>
                <Link to="/" className="breadcrumb-link">
                  <span className="breadcrumb-icon">🏠</span>
                  <span className="breadcrumb-text">Home</span>
                </Link>
                {breadcrumbs.map((crumb, index) => (
                  <React.Fragment key={index}>
                    <span className="separator">
                      <span className="separator-icon">▶</span>
                    </span>
                    {index === breadcrumbs.length - 1 ? (
                      <span className="current">
                        <span className="current-icon">📍</span>
                        <span className="current-text">{crumb.label}</span>
                      </span>
                    ) : (
                      <Link to={crumb.url} className="breadcrumb-link">
                        <span className="breadcrumb-text">{crumb.label}</span>
                      </Link>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}
          
          <div className="header-stats">
            <div className="stat-item">
              <div className="stat-icon">🏆</div>
              <div className="stat-number">2024</div>
              <div className="stat-label">Founded</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">⚡</div>
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🎯</div>
              <div className="stat-number">100%</div>
              <div className="stat-label">Success</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageHeader