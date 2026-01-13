import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import './AI.scss'

const AI = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [glitchText, setGlitchText] = useState('COMING SOON')
  
  const { ref: mainRef, inView: mainInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Glitch text effect
  useEffect(() => {
    const glitchChars = ['C', 'O', 'M', 'I', 'N', 'G', ' ', 'S', 'O', 'O', 'N']
    const corrupted = ['ƈ', '๏', '๓', '¡', 'ภ', 'ﻮ', ' ', '丂', '๏', '๏', 'ภ']
    
    const interval = setInterval(() => {
      const shouldGlitch = Math.random() < 0.1
      if (shouldGlitch) {
        const corruptedText = glitchChars.map(char => 
          Math.random() < 0.3 ? corrupted[Math.floor(Math.random() * corrupted.length)] : char
        ).join('')
        setGlitchText(corruptedText)
        
        setTimeout(() => setGlitchText('COMING SOON'), 150)
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="ai-page">
      {/* Neural Network Background */}
      <div className="neural-background">
        <div className="neural-grid"></div>
        <div className="neural-nodes">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`neural-node node-${i % 4}`}></div>
          ))}
        </div>
        <div className="neural-connections">
          {[...Array(15)].map((_, i) => (
            <div key={i} className={`neural-line line-${i % 3}`}></div>
          ))}
        </div>
      </div>

      {/* Matrix Digital Rain */}
      <div className="matrix-rain">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="matrix-column" style={{ left: `${i * 2}%`, animationDelay: `${i * 0.1}s` }}>
            {[...Array(20)].map((_, j) => (
              <span key={j} className="matrix-char">
                {String.fromCharCode(0x30A0 + Math.random() * 96)}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Interactive Cursor Trail */}
      <div 
        className="cursor-trail"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`
        }}
      ></div>

      {/* Main Content */}
      <div ref={mainRef} className={`ai-content ${mainInView ? 'fade-in' : ''}`}>
        {/* Holographic Container */}
        <div className="holo-container">
          <div className="holo-frame">
            <div className="holo-corner corner-tl"></div>
            <div className="holo-corner corner-tr"></div>
            <div className="holo-corner corner-bl"></div>
            <div className="holo-corner corner-br"></div>
            <div className="holo-scan-line"></div>
          </div>

          {/* AI Brain Visual */}
          <div className="ai-brain-container">
            <div className="ai-brain">
              <div className="brain-core">
                <div className="core-pulse"></div>
                <div className="core-rings">
                  <div className="ring ring-1"></div>
                  <div className="ring ring-2"></div>
                  <div className="ring ring-3"></div>
                </div>
              </div>
              
              {/* Neural Pathways */}
              <div className="neural-pathways">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className={`pathway pathway-${i}`}>
                    <div className="pathway-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Text */}
          <div className="ai-text-container">
            <div className="ai-badge">
              <div className="badge-glow"></div>
              <span className="badge-icon">🤖</span>
              <span className="badge-text">Artificial Intelligence</span>
              <div className="badge-scan"></div>
            </div>

            <h1 className="ai-title">
              <span className="title-line">AI Solutions</span>
              <span className="title-line title-gradient">& Machine Learning</span>
            </h1>

            <div className="coming-soon-container">
              <div className="glitch-text" data-text={glitchText}>
                {glitchText}
              </div>
              <div className="typing-cursor"></div>
            </div>

            <p className="ai-description">
              Revolutionary artificial intelligence and machine learning solutions are being developed. 
              Our AI division will bring cutting-edge technology to transform businesses and industries 
              across Central Asia.
            </p>

            {/* Feature Preview */}
            <div className="feature-preview">
              <div className="preview-grid">
                <div className="preview-item">
                  <div className="preview-icon">🧠</div>
                  <span>Deep Learning</span>
                </div>
                <div className="preview-item">
                  <div className="preview-icon">🔮</div>
                  <span>Predictive Analytics</span>
                </div>
                <div className="preview-item">
                  <div className="preview-icon">🤖</div>
                  <span>AI Automation</span>
                </div>
                <div className="preview-item">
                  <div className="preview-icon">⚡</div>
                  <span>Real-time Processing</span>
                </div>
              </div>
            </div>

            {/* Notification Signup */}
            <div className="notify-section">
              <div className="notify-container">
                <div className="notify-form">
                  <input 
                    type="email" 
                    placeholder="Enter your email for updates..."
                    className="notify-input"
                  />
                  <button className="notify-btn">
                    <span>Notify Me</span>
                    <div className="btn-energy"></div>
                  </button>
                </div>
                <p className="notify-text">
                  Be the first to know when our AI solutions go live
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Tech Elements */}
        <div className="floating-tech">
          <div className="tech-element element-1">
            <div className="element-glow"></div>
            <span>{'{ AI }'}</span>
          </div>
          <div className="tech-element element-2">
            <div className="element-glow"></div>
            <span>{'<ML/>'}</span>
          </div>
          <div className="tech-element element-3">
            <div className="element-glow"></div>
            <span>{'01110'}</span>
          </div>
          <div className="tech-element element-4">
            <div className="element-glow"></div>
            <span>{'∞'}</span>
          </div>
          <div className="tech-element element-5">
            <div className="element-glow"></div>
            <span>{'⚡'}</span>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="progress-indicators">
          <div className="progress-item">
            <div className="progress-label">Research & Development</div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '85%' }}></div>
              <div className="progress-spark"></div>
            </div>
            <span className="progress-value">85%</span>
          </div>
          
          <div className="progress-item">
            <div className="progress-label">AI Model Training</div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '72%' }}></div>
              <div className="progress-spark"></div>
            </div>
            <span className="progress-value">72%</span>
          </div>
          
          <div className="progress-item">
            <div className="progress-label">Platform Integration</div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '58%' }}></div>
              <div className="progress-spark"></div>
            </div>
            <span className="progress-value">58%</span>
          </div>
        </div>
      </div>

      {/* Circuit Board Pattern */}
      <div className="circuit-pattern">
        <svg width="100%" height="100%" viewBox="0 0 1200 800">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0,50 L50,50 L50,0 M50,100 L50,50 L100,50" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" fill="none"/>
              <circle cx="50" cy="50" r="3" fill="rgba(59, 130, 246, 0.4)"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" opacity="0.3"/>
        </svg>
      </div>
    </div>
  )
}

export default AI