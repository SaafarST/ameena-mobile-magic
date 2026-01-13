import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import './ClientsSection.scss'

const ClientsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  
  const clients = [
    { 
      name: 'ACDI/VOCA', 
      logo: '/images/clients/acdi-voca.svg',
      category: 'International NGO',
      projects: 2,
      partnership: 'Since 2024'
    },
    { 
      name: 'FAO UN', 
      logo: '/images/clients/fao-un.svg',
      category: 'United Nations',
      projects: 1,
      partnership: 'Since 2024'
    },
    { 
      name: 'GAYUR Group LLC', 
      logo: '/images/clients/gayur-group.svg',
      category: 'Manufacturing',
      projects: 4,
      partnership: 'Since 2024'
    },
    { 
      name: 'Tole LLC', 
      logo: '/images/clients/tole-llc.svg',
      category: 'Education',
      projects: 1,
      partnership: 'Since 2024'
    },
    { 
      name: 'USAID', 
      logo: '/images/clients/usaid.svg',
      category: 'Government Agency',
      projects: 2,
      partnership: 'Since 2024'
    }
  ]

  const testimonials = [
    {
      quote: "Saidzoda Engineering transformed our food processing capabilities with cutting-edge technology and unmatched expertise. Their innovative solutions exceeded all expectations and set new industry standards.",
      author: "Project Director",
      company: "ACDI/VOCA, USAID",
      rating: 5,
      //projectValue: "$2.5M",
      completionTime: "3 months"
    },
    {
      quote: "The VRF system they designed for our school creates the perfect learning environment. Professional, reliable, and technically superior. Our students and teachers love the comfortable atmosphere.",
      author: "Facility Manager", 
      company: "Tole LLC",
      rating: 5,
      //projectValue: "$150K",
      completionTime: "6 weeks"
    },
    {
      quote: "Working with Saidzoda Engineering on our digital transformation was exceptional. They delivered a world-class platform that revolutionized our business operations and customer engagement.",
      author: "CEO",
      company: "GAYUR Group LLC",
      rating: 5,
      //projectValue: "$75K",
      completionTime: "8 weeks"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    
    return () => clearInterval(interval)
  }, [testimonials.length])
  
  return (
    <section ref={ref} className={`section clients-section ${inView ? 'fade-in' : ''}`}>
      {/* Animated Background Effects */}
      <div className="section-bg-constellation"></div>
      <div className="floating-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      
      <div className="container">
        <div className="section-header text-center">
          <div className="trust-badge">
            🤝 Trusted Partnerships
          </div>
          <h2 className="section-title">Industry Leaders Choose Us</h2>
          <p className="section-subtitle">
            Powering success for government agencies, international organizations, and forward-thinking businesses across Central Asia
          </p>
          <div className="title-decoration">
            <div className="decoration-pulse"></div>
          </div>
        </div>
        
        <div className="clients-showcase">
          <div className="clients-grid">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="client-card"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Card Background Effects */}
                <div className="card-aurora"></div>
                <div className="card-glow"></div>
                <div className="card-scan-line"></div>
                
                <div className="client-content">
                  <div className="client-logo">
                    <div className="logo-orbit">
                      <div className="orbit-ring"></div>
                    </div>
                    <img src={client.logo} alt={client.name} />
                    <div className="logo-pulse"></div>
                  </div>
                  
                  <div className="client-info">
                    <h4 className="client-name">{client.name}</h4>
                    <span className="client-category">{client.category}</span>
                    
                    <div className="client-stats">
                      <div className="stat-item">
                        <span className="stat-value">{client.projects}</span>
                        <span className="stat-label">Projects</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-value">{client.partnership.split(' ')[1]}</span>
                        <span className="stat-label">Partnership</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Holographic Border */}
                <div className="holographic-border"></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="testimonials-section">
          <div className="testimonials-header">
            <h3 className="testimonials-title">What Our Partners Say</h3>
            <div className="testimonial-controls">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`control-dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                >
                  <div className="dot-pulse"></div>
                </button>
              ))}
            </div>
          </div>
          
          <div className="testimonials-container">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`testimonial ${index === currentTestimonial ? 'active' : ''}`}
              >
                {/* Testimonial Background Effects */}
                <div className="testimonial-aurora"></div>
                <div className="testimonial-grid"></div>
                
                <div className="testimonial-content">
                  <div className="quote-decoration">
                    <div className="quote-icon">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div className="quote-glow"></div>
                  </div>
                  
                  <div className="stars-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">⭐</span>
                    ))}
                  </div>
                  
                  <blockquote className="quote-text">{testimonial.quote}</blockquote>
                  
                  <div className="testimonial-metrics">
                    <div className="metric">
                      <span className="metric-icon">💰</span>
                      <span className="metric-value">{testimonial.projectValue}</span>
                      <span className="metric-label">Project Value</span>
                    </div>
                    <div className="metric">
                      <span className="metric-icon">⚡</span>
                      <span className="metric-value">{testimonial.completionTime}</span>
                      <span className="metric-label">Completion</span>
                    </div>
                  </div>
                  
                  <cite className="quote-author">
                    <span className="author-name">{testimonial.author}</span>
                    <span className="author-company">{testimonial.company}</span>
                  </cite>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="trust-metrics">
          <div className="metric-card">
            <div className="metric-value">12+</div>
            <div className="metric-label">Active Projects</div>
            <div className="metric-glow"></div>
          </div>
          <div className="metric-card">
            <div className="metric-value">5</div>
            <div className="metric-label">Major Clients</div>
            <div className="metric-glow"></div>
          </div>
          <div className="metric-card">
            <div className="metric-value">100%</div>
            <div className="metric-label">Success Rate</div>
            <div className="metric-glow"></div>
          </div>
          <div className="metric-card">
            <div className="metric-value">2024</div>
            <div className="metric-label">Founded</div>
            <div className="metric-glow"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientsSection