import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [language, setLanguage] = useState('en')
  const location = useLocation()
  
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    console.log('🔥 Toggle clicked! Current state:', isMobileMenuOpen)
    setIsMobileMenuOpen(!isMobileMenuOpen)
    console.log('🔥 Setting to:', !isMobileMenuOpen)
  }
  
  const closeMobileMenu = () => {
    console.log('🔥 Closing menu')
    setIsMobileMenuOpen(false)
  }

  const getLogoSrc = () => {
    if (isHomePage && !isScrolled) {
      return "/images/logo/saidzoda-logo-dark.jpeg"
    }
    return "/images/logo/saidzoda-logo-light.jpeg"
  }

  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 9999,
    background: isScrolled || !isHomePage 
      ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.98))' 
      : 'transparent',
    backdropFilter: 'blur(20px)',
    padding: isScrolled ? '8px 0' : '12px 0',
    transition: 'all 0.6s ease',
    borderBottom: isScrolled || !isHomePage 
      ? '1px solid rgba(59, 130, 246, 0.2)' 
      : 'none',
    boxShadow: isScrolled || !isHomePage 
      ? '0 8px 32px rgba(59, 130, 246, 0.15)' 
      : 'none'
  }

  const containerStyle = {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    textDecoration: 'none',
    transition: 'all 0.5s ease'
  }

  const logoTextStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px'
  }

  const companyNameStyle = {
    fontFamily: "'Orbitron', monospace",
    fontWeight: 700,
    fontSize: '16px',
    color: isScrolled || !isHomePage ? '#1e293b' : 'white',
    transition: 'all 0.3s ease',
    lineHeight: 1
  }

  const taglineStyle = {
    fontFamily: "'Inter', sans-serif",
    fontSize: '10px',
    color: '#60a5fa',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    transition: 'all 0.3s ease',
    lineHeight: 1
  }

  const mobileMenuStyle = {
    position: 'fixed',
    top: 0,
    right: isMobileMenuOpen ? '0' : '-350px',
    width: '320px',
    maxWidth: '85vw',
    height: '100vh',
    background: 'linear-gradient(135deg, rgba(10, 15, 28, 0.98), rgba(30, 41, 59, 0.98))',
    backdropFilter: 'blur(25px)',
    transition: 'right 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    zIndex: 10000,
    padding: '80px 32px 32px',
    overflowY: 'auto',
    boxShadow: '-10px 0 50px rgba(0, 0, 0, 0.3)',
    borderLeft: '1px solid rgba(96, 165, 250, 0.2)'
  }

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(4px)',
    zIndex: 9998,
    display: isMobileMenuOpen ? 'block' : 'none',
    transition: 'opacity 0.3s ease'
  }

  const hamburgerStyle = {
    display: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '8px',
    zIndex: 10001,
    position: 'relative',
    width: '40px',
    height: '40px'
  }

  const hamburgerLineStyle = {
    position: 'absolute',
    width: '24px',
    height: '2px',
    backgroundColor: isScrolled || !isHomePage ? '#1e293b' : 'white',
    borderRadius: '2px',
    transition: 'all 0.4s ease',
    left: '50%',
    transform: 'translateX(-50%)'
  }

  const mobileNavStyle = {
    listStyle: 'none',
    padding: 0,
    margin: '20px 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }

  const mobileNavLinkStyle = {
    display: 'block',
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    padding: '16px 20px',
    borderRadius: '16px',
    background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(59, 130, 246, 0.2)',
    transition: 'all 0.3s ease',
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600
  }

  // Mobile special nav styles (keep these for mobile)
  const aiMobileNavLinkStyle = {
    display: 'block',
    color: '#00ff41',
    textDecoration: 'none',
    fontSize: '18px',
    padding: '16px 20px',
    borderRadius: '16px',
    background: 'linear-gradient(145deg, rgba(0, 255, 65, 0.1), rgba(0, 255, 65, 0.05))',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(0, 255, 65, 0.3)',
    transition: 'all 0.3s ease',
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,
    position: 'relative',
    overflow: 'hidden'
  }

  const labMobileNavLinkStyle = {
    display: 'block',
    color: '#22c55e',
    textDecoration: 'none',
    fontSize: '18px',
    padding: '16px 20px',
    borderRadius: '16px',
    background: 'linear-gradient(145deg, rgba(34, 197, 94, 0.1), rgba(34, 197, 94, 0.05))',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(34, 197, 94, 0.3)',
    transition: 'all 0.3s ease',
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,
    position: 'relative',
    overflow: 'hidden'
  }

  const medicalMobileNavLinkStyle = {
    display: 'block',
    color: '#06b6d4',
    textDecoration: 'none',
    fontSize: '18px',
    padding: '16px 20px',
    borderRadius: '16px',
    background: 'linear-gradient(145deg, rgba(6, 182, 212, 0.1), rgba(6, 182, 212, 0.05))',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(6, 182, 212, 0.3)',
    transition: 'all 0.3s ease',
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,
    position: 'relative',
    overflow: 'hidden'
  }

  const charityMobileNavLinkStyle = {
    display: 'block',
    color: '#ef4444',
    textDecoration: 'none',
    fontSize: '18px',
    padding: '16px 20px',
    borderRadius: '16px',
    background: 'linear-gradient(145deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05))',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(239, 68, 68, 0.3)',
    transition: 'all 0.3s ease',
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,
    position: 'relative',
    overflow: 'hidden'
  }

  const closeButtonStyle = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(96, 165, 250, 0.3)',
    color: 'white',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    cursor: 'pointer',
    zIndex: 10001,
    transition: 'all 0.3s ease'
  }

  const desktopNavStyle = {
    display: 'none',
    alignItems: 'center',
    gap: '16px', // Reduced gap for better spacing
    listStyle: 'none',
    margin: 0,
    padding: 0
  }

  // FIXED: Consistent desktop nav link style for ALL links
  const desktopNavLinkStyle = {
    color: isScrolled || !isHomePage ? '#1e293b' : 'white',
    textDecoration: 'none',
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,
    fontSize: '14px',
    padding: '8px 12px', // Consistent padding for all
    borderRadius: '8px',
    transition: 'all 0.4s ease',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    gap: '6px', // Small gap for icon
    height: '36px', // Fixed height for consistency
    boxSizing: 'border-box'
  }

  // Special desktop styles - MINIMAL differences, just colors
  const aiDesktopNavLinkStyle = {
    ...desktopNavLinkStyle,
    color: '#00ff41',
    textShadow: '0 0 8px rgba(0, 255, 65, 0.3)'
  }

  const labDesktopNavLinkStyle = {
    ...desktopNavLinkStyle,
    color: '#22c55e',
    textShadow: '0 0 8px rgba(34, 197, 94, 0.3)'
  }

  const medicalDesktopNavLinkStyle = {
    ...desktopNavLinkStyle,
    color: '#06b6d4',
    textShadow: '0 0 8px rgba(6, 182, 212, 0.3)'
  }

  const charityDesktopNavLinkStyle = {
    ...desktopNavLinkStyle,
    color: '#ef4444',
    textShadow: '0 0 8px rgba(239, 68, 68, 0.3)'
  }

  const contactBtnStyle = {
    display: 'none',
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '10px',
    textDecoration: 'none',
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,
    fontSize: '14px',
    transition: 'all 0.5s ease',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    gap: '8px'
  }

  return (
    <>
      {/* Mobile Overlay */}
      <div style={overlayStyle} onClick={closeMobileMenu}></div>

      {/* Header */}
      <header style={headerStyle}>
        <div style={containerStyle}>
          {/* Logo */}
          <Link to="/" style={logoStyle} onClick={closeMobileMenu}>
            <img 
              src={getLogoSrc()} 
              alt="Saidzoda Engineering" 
              style={{
                width: '40px', 
                height: '40px', 
                borderRadius: '6px',
                transition: 'all 0.5s ease'
              }}
            />
            <div style={logoTextStyle}>
              <div style={companyNameStyle}>
                Saidzoda Engineering
              </div>
              <div style={taglineStyle}>
                Future Forward
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - FIXED SIZING */}
          <nav style={desktopNavStyle}>
            <ul style={{display: 'flex', alignItems: 'center', gap: '16px', listStyle: 'none', margin: 0, padding: 0}}>
              <li>
                <NavLink to="/" style={desktopNavLinkStyle}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" style={desktopNavLinkStyle}>About</NavLink>
              </li>
              <li>
                <NavLink 
                  to="/lab" 
                  style={labDesktopNavLinkStyle}
                  onMouseOver={(e) => {
                    e.target.style.background = 'rgba(34, 197, 94, 0.1)'
                    e.target.style.transform = 'translateY(-1px)'
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = 'transparent'
                    e.target.style.transform = 'translateY(0)'
                  }}
                >
                  <span>Lab</span>
                  <span style={{fontSize: '12px'}}>🔬</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" style={desktopNavLinkStyle}>Services</NavLink>
              </li>
              <li>
                <NavLink to="/projects" style={desktopNavLinkStyle}>Projects</NavLink>
              </li>
              <li>
                <NavLink 
                  to="/charity" 
                  style={charityDesktopNavLinkStyle}
                  onMouseOver={(e) => {
                    e.target.style.background = 'rgba(239, 68, 68, 0.1)'
                    e.target.style.transform = 'translateY(-1px)'
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = 'transparent'
                    e.target.style.transform = 'translateY(0)'
                  }}
                >
                  <span>Charity</span>
                  <span style={{fontSize: '12px'}}>❤️</span>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/medical" 
                  style={medicalDesktopNavLinkStyle}
                  onMouseOver={(e) => {
                    e.target.style.background = 'rgba(6, 182, 212, 0.1)'
                    e.target.style.transform = 'translateY(-1px)'
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = 'transparent'
                    e.target.style.transform = 'translateY(0)'
                  }}
                >
                  <span>Medical</span>
                  <span style={{fontSize: '12px'}}>🏥</span>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/ai" 
                  style={aiDesktopNavLinkStyle}
                  onMouseOver={(e) => {
                    e.target.style.background = 'rgba(0, 255, 65, 0.1)'
                    e.target.style.transform = 'translateY(-1px)'
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = 'transparent'
                    e.target.style.transform = 'translateY(0)'
                  }}
                >
                  <span>AI</span>
                  <span style={{fontSize: '12px'}}>🤖</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" style={desktopNavLinkStyle}>Contact</NavLink>
              </li>
            </ul>
          </nav>

          {/* Header Right */}
          <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
            {/* Contact Button */}
            <Link to="/contact" style={contactBtnStyle}>
              <span>Get in Touch</span>
              <span>⚡</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button onClick={toggleMobileMenu} style={hamburgerStyle}>
              <span style={{
                ...hamburgerLineStyle,
                top: isMobileMenuOpen ? '19px' : '11px',
                transform: isMobileMenuOpen ? 'translateX(-50%) rotate(45deg)' : 'translateX(-50%)'
              }}></span>
              <span style={{
                ...hamburgerLineStyle,
                top: '19px',
                opacity: isMobileMenuOpen ? 0 : 1,
                transform: isMobileMenuOpen ? 'translateX(20px)' : 'translateX(-50%)'
              }}></span>
              <span style={{
                ...hamburgerLineStyle,
                top: isMobileMenuOpen ? '19px' : '27px',
                transform: isMobileMenuOpen ? 'translateX(-50%) rotate(-45deg)' : 'translateX(-50%)'
              }}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - Keep the rich styling for mobile */}
      <nav style={mobileMenuStyle}>
        <button onClick={closeMobileMenu} style={closeButtonStyle}>
          ✕
        </button>

        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.08) 0%, transparent 50%)
          `,
          pointerEvents: 'none'
        }}></div>

        <ul style={mobileNavStyle}>
          <li>
            <NavLink 
              to="/" 
              style={mobileNavLinkStyle} 
              onClick={closeMobileMenu}
              onMouseOver={(e) => {
                e.target.style.background = 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))'
                e.target.style.color = '#60a5fa'
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))'
                e.target.style.color = 'white'
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              style={mobileNavLinkStyle} 
              onClick={closeMobileMenu}
              onMouseOver={(e) => {
                e.target.style.background = 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))'
                e.target.style.color = '#60a5fa'
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))'
                e.target.style.color = 'white'
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/lab" 
              style={labMobileNavLinkStyle} 
              onClick={closeMobileMenu}
              onMouseOver={(e) => {
                e.target.style.background = 'linear-gradient(135deg, rgba(34, 197, 94, 0.3), rgba(34, 197, 94, 0.2))'
                e.target.style.color = '#22c55e'
                e.target.style.boxShadow = '0 0 20px rgba(34, 197, 94, 0.4)'
                e.target.style.transform = 'translateX(5px)'
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'linear-gradient(145deg, rgba(34, 197, 94, 0.1), rgba(34, 197, 94, 0.05))'
                e.target.style.color = '#22c55e'
                e.target.style.boxShadow = 'none'
                e.target.style.transform = 'translateX(0)'
              }}
            >
              <span style={{position: 'relative', zIndex: 2}}>Saidzoda Lab 🔬</span>
              <div style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.2), transparent)',
                animation: 'lab-scan 3s ease-in-out infinite'
              }}></div>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/services" 
              style={mobileNavLinkStyle} 
              onClick={closeMobileMenu}
              onMouseOver={(e) => {
                e.target.style.background = 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))'
                e.target.style.color = '#60a5fa'
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))'
                e.target.style.color = 'white'
              }}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/projects" 
              style={mobileNavLinkStyle} 
              onClick={closeMobileMenu}
              onMouseOver={(e) => {
                e.target.style.background = 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))'
                e.target.style.color = '#60a5fa'
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))'
                e.target.style.color = 'white'
              }}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/charity" 
              style={charityMobileNavLinkStyle} 
              onClick={closeMobileMenu}
              onMouseOver={(e) => {
                e.target.style.background = 'linear-gradient(135deg, rgba(239, 68, 68, 0.3), rgba(239, 68, 68, 0.2))'
                e.target.style.color = '#ef4444'
                e.target.style.boxShadow = '0 0 20px rgba(239, 68, 68, 0.4)'
                e.target.style.transform = 'translateX(5px)'
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'linear-gradient(145deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05))'
                e.target.style.color = '#ef4444'
                e.target.style.boxShadow = 'none'
                e.target.style.transform = 'translateX(0)'
              }}
            >
              <span style={{position: 'relative', zIndex: 2}}>Social Impact ❤️</span>
              <div style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(239, 68, 68, 0.2), transparent)',
                animation: 'charity-scan 3s ease-in-out infinite'
              }}></div>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/medical" 
              style={medicalMobileNavLinkStyle} 
              onClick={closeMobileMenu}
              onMouseOver={(e) => {
                e.target.style.background = 'linear-gradient(135deg, rgba(6, 182, 212, 0.3), rgba(6, 182, 212, 0.2))'
                e.target.style.color = '#06b6d4'
                e.target.style.boxShadow = '0 0 20px rgba(6, 182, 212, 0.4)'
                e.target.style.transform = 'translateX(5px)'
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'linear-gradient(145deg, rgba(6, 182, 212, 0.1), rgba(6, 182, 212, 0.05))'
                e.target.style.color = '#06b6d4'
                e.target.style.boxShadow = 'none'
                e.target.style.transform = 'translateX(0)'
              }}
            >
              <span style={{position: 'relative', zIndex: 2}}>Medical Services 🏥</span>
              <div style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.2), transparent)',
                animation: 'medical-scan 3s ease-in-out infinite'
              }}></div>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/ai" 
              style={aiMobileNavLinkStyle} 
              onClick={closeMobileMenu}
              onMouseOver={(e) => {
                e.target.style.background = 'linear-gradient(135deg, rgba(0, 255, 65, 0.3), rgba(0, 255, 65, 0.2))'
                e.target.style.color = '#00ff41'
                e.target.style.boxShadow = '0 0 20px rgba(0, 255, 65, 0.4)'
                e.target.style.transform = 'translateX(5px)'
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'linear-gradient(145deg, rgba(0, 255, 65, 0.1), rgba(0, 255, 65, 0.05))'
                e.target.style.color = '#00ff41'
                e.target.style.boxShadow = 'none'
                e.target.style.transform = 'translateX(0)'
              }}
            >
              <span style={{position: 'relative', zIndex: 2}}>AI Solutions 🤖</span>
              <div style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(0, 255, 65, 0.2), transparent)',
                animation: 'ai-scan 3s ease-in-out infinite'
              }}></div>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              style={mobileNavLinkStyle} 
              onClick={closeMobileMenu}
              onMouseOver={(e) => {
                e.target.style.background = 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))'
                e.target.style.color = '#60a5fa'
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))'
                e.target.style.color = 'white'
              }}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Language Selector */}
        <div style={{
          marginTop: '40px', 
          paddingTop: '32px', 
          borderTop: '1px solid rgba(96, 165, 250, 0.2)',
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px'}}>
            <div style={{
              width: '32px',
              height: '32px',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              border: '1px solid rgba(59, 130, 246, 0.3)'
            }}>
              🌐
            </div>
            <h3 style={{
              fontFamily: "'Orbitron', monospace",
              fontSize: '18px',
              fontWeight: 700,
              margin: 0,
              color: '#ffffff'
            }}>
              Language
            </h3>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
            <button 
              style={{
                background: language === 'en' ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' : 'linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                color: 'white',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                padding: '16px 20px',
                borderRadius: '12px',
                cursor: 'pointer',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                transition: 'all 0.3s ease'
              }}
              onClick={() => setLanguage('en')}
            >
              English
            </button>
            <button 
              style={{
                background: language === 'tg' ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' : 'linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                color: 'white',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                padding: '16px 20px',
                borderRadius: '12px',
                cursor: 'pointer',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                transition: 'all 0.3s ease'
              }}
              onClick={() => setLanguage('tg')}
            >
              Тоҷикӣ
            </button>
            <button 
              style={{
                background: language === 'ru' ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' : 'linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                color: 'white',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                padding: '16px 20px',
                borderRadius: '12px',
                cursor: 'pointer',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                transition: 'all 0.3s ease'
              }}
              onClick={() => setLanguage('ru')}
            >
              Русский
            </button>
          </div>
        </div>
      </nav>

      {/* CSS for responsive behavior */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Inter:wght@300;400;500;600;700&display=swap');
        
        @media (min-width: 1024px) {
          nav:first-of-type {
            display: flex !important;
            margin-left: auto;
            margin-right: 48px;
          }
          button:last-of-type {
            display: none !important;
          }
          a[href="/contact"] {
            display: flex !important;
          }
        }
        
        @media (max-width: 1023px) {
          button:last-of-type {
            display: block !important;
          }
        }
        
        /* Active link styles */
        .active {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6) !important;
          color: white !important;
        }
        
        /* Special active states for colored nav items */
        a[href="/medical"].active {
          background: linear-gradient(135deg, #06b6d4, #0891b2) !important;
          color: white !important;
        }
        
        a[href="/ai"].active {
          background: linear-gradient(135deg, #00ff41, #22c55e) !important;
          color: #0a0f1c !important;
        }
        
        a[href="/lab"].active {
          background: linear-gradient(135deg, #22c55e, #16a34a) !important;
          color: white !important;
        }
        
        a[href="/charity"].active {
          background: linear-gradient(135deg, #ef4444, #dc2626) !important;
          color: white !important;
        }
        
        /* Scan animations */
        @keyframes medical-scan {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        @keyframes ai-scan {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        @keyframes lab-scan {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        @keyframes charity-scan {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
    </>
  )
}

export default Header