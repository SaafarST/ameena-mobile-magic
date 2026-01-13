import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './HeroSection.scss'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      title: "ENGINEERING THE FUTURE",
      subtitle: "🏆 Leading Engineering Solutions in Central Asia",
      description: "Transforming industries through cutting-edge engineering, innovative IT solutions, and breakthrough technology that powers tomorrow's world.",
      badge: "Next-Generation Technology",
      cta: {
        primary: {
          text: "Explore Solutions",
          link: "/services"
        },
        secondary: {
          text: "View Projects",
          link: "/projects"
        }
      }
    },
    {
      title: "INNOVATING TOMORROW",
      subtitle: "⚡ Revolutionary IT & Software Solutions",
      description: "From AI-powered applications to enterprise-grade systems, we architect digital solutions that revolutionize how businesses operate.",
      badge: "Cutting-Edge Technology",
      cta: {
        primary: {
          text: "IT Solutions",
          link: "/services#it"
        },
        secondary: {
          text: "Get Started",
          link: "/contact"
        }
      }
    },
    {
      title: "BUILDING POSSIBILITIES",
      subtitle: "🚀 Advanced Engineering & Data Solutions", 
      description: "Pioneering mechanical, electrical, and civil engineering excellence combined with next-gen data intelligence for unprecedented results.",
      badge: "Industry-Leading Expertise",
      cta: {
        primary: {
          text: "Engineering Services",
          link: "/services#engineering"
        },
        secondary: {
          text: "Our Impact",
          link: "/projects"
        }
      }
    }
  ]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    
    return () => clearInterval(interval)
  }, [slides.length])
  
  const handleDotClick = (index) => {
    setCurrentSlide(index)
  }
  
  return (
    <section className="hero-section">
      {/* Animated Tech Grid Background */}
      <div className="tech-grid"></div>
      
      {/* Floating Tech Elements */}
      <div className="floating-elements">
        <div className="floating-icon">⚡</div>
        <div className="floating-icon">🔧</div>
        <div className="floating-icon">💡</div>
        <div className="floating-icon">⚙️</div>
        <div className="floating-icon">🚀</div>
      </div>

      <div className="hero-slides">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div className="overlay"></div>
            <div className="container">
              <div className="hero-content">
                <div className="hero-badge">
                  {slide.badge}
                </div>
                <h1 className="hero-title">{slide.title}</h1>
                <div className="hero-subtitle">{slide.subtitle}</div>
                <p className="hero-description">{slide.description}</p>
                <div className="hero-cta">
                  <Link to={slide.cta.primary.link} className="btn btn-primary">
                    {slide.cta.primary.text}
                  </Link>
                  <Link to={slide.cta.secondary.link} className="btn btn-secondary">
                    {slide.cta.secondary.text}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="slide-dots">
        {slides.map((_, index) => (
          <button 
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      <div className="scroll-indicator">
        <a href="#about" aria-label="Scroll down">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 16l-6-6h12l-6 6z"/>
          </svg>
        </a>
      </div>
    </section>
  )
}

export default HeroSection