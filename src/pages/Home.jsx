import React from 'react'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import HeroSection from '@/components/home/HeroSection'
import ServiceCard from '@/components/home/ServiceCard'
import ProjectShowcase from '@/components/home/ProjectShowcase'
import ClientsSection from '@/components/home/ClientsSection'
import ContactCTA from '@/components/common/ContactCTA'
import './Home.scss'

const Home = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })
  
  const { ref: servicesRef, inView: servicesInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  
  const { ref: statsRef, inView: statsInView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })
  
  const achievements = [
    { number: '15+', label: 'Completed Projects', icon: '🚀', pulse: 'primary' },
    { number: '10kW', label: 'Solar Installed', icon: '☀️', pulse: 'solar' },
    { number: '8+', label: 'Satisfied Clients', icon: '🏢', pulse: 'accent' },
    { number: '3', label: 'International Partners', icon: '🌍', pulse: 'success' }
  ]
  
  return (
    <div className="home-page">
      <HeroSection />
      
      <section ref={aboutRef} className={`section about-section ${aboutInView ? 'fade-in' : ''}`}>
        {/* Animated Background Effects */}
        <div className="section-bg-neural"></div>
        <div className="floating-code-particles">
          <div className="code-particle">{'<>'}</div>
          <div className="code-particle">{'01'}</div>
          <div className="code-particle">{'{ }'}</div>
          <div className="code-particle">{'</>'}</div>
          <div className="code-particle">{'10'}</div>
          <div className="code-particle">{'☀️'}</div>
        </div>
        
        <div className="container">
          <div className="about-grid">
            {/* Left Content */}
            <div className="about-content">
              <div className="section-badge">
                🌟 About Saidzoda Engineering
              </div>
              
              <h2 className="section-title">
                Engineering the Green Future of Central Asia
              </h2>
              
              <div className="company-highlight">
                <div className="highlight-badge">
                  <span className="pulse-dot"></span>
                  Established 2024
                </div>
                <p className="highlight-text">
                  We've rapidly emerged as a leading force in IT, Engineering, Sustainable Solar Energy, and Technology sectors in Tajikistan.
                </p>
              </div>
              
              <div className="mission-statement">
                <div className="mission-icon">
                  <div className="icon-orbit">
                    <div className="orbit-ring"></div>
                    <div className="orbit-ring orbit-ring-2"></div>
                  </div>
                  <span>🎯</span>
                </div>
                <div className="mission-content">
                  <h4>Our Mission</h4>
                  <p>To deliver innovative solutions and high-quality services in Information Technology, Engineering, Sustainable Energy, and Technology projects, becoming the preferred partner for engineering solutions in Central Asia.</p>
                </div>
              </div>
              
              <div className="cta-buttons">
                <Link to="/about" className="btn btn-primary btn-futuristic">
                  <span>Learn More</span>
                  <div className="btn-glow"></div>
                  <div className="btn-shine"></div>
                </Link>
                <Link to="/projects" className="btn btn-outline btn-holographic">
                  <span>View Our Projects</span>
                  <div className="btn-scan-line"></div>
                </Link>
              </div>
            </div>
            
            {/* Right Visual */}
            <div className="about-visual">
              <div className="visual-container">
                {/* Tech Grid Background */}
                <div className="tech-grid-bg"></div>
                
                {/* Central Hub */}
                <div className="central-hub">
                  <div className="hub-core">
                    <div className="core-pulse"></div>
                    <div className="logo-container">
                      <div className="logo-aurora"></div>
                      <div className="logo-rays">
                        <div className="ray"></div>
                        <div className="ray"></div>
                        <div className="ray"></div>
                        <div className="ray"></div>
                        <div className="ray"></div>
                        <div className="ray"></div>
                        <div className="ray"></div>
                        <div className="ray"></div>
                      </div>
                      <img src="/images/logo/saidzoda-logo-dark.jpeg" alt="Saidzoda Engineering" className="hub-logo" />
                      <div className="logo-glow-ring"></div>
                    </div>
                  </div>
                  
                  
                  {/* Connecting Lines */}
                  <div className="connection-lines">
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                    <div className="line line-4"></div>
                  </div>
                  
                  {/* Service Nodes */}
                  <div className="service-node node-1">
                    <div className="node-pulse"></div>
                    <span>💻</span>
                  </div>
                  <div className="service-node node-2">
                    <div className="node-pulse"></div>
                    <span>⚙️</span>
                  </div>
                  <div className="service-node node-3">
                    <div className="node-pulse"></div>
                    <span>☀️</span>
                  </div>
                  <div className="service-node node-4">
                    <div className="node-pulse"></div>
                    <span>📊</span>
                  </div>
                </div>
                
                {/* Floating Data */}
                <div className="floating-data">
                  <div className="data-stream stream-1">
                    <div className="data-bit">1</div>
                    <div className="data-bit">0</div>
                    <div className="data-bit">1</div>
                  </div>
                  <div className="data-stream stream-2">
                    <div className="data-bit">0</div>
                    <div className="data-bit">1</div>
                    <div className="data-bit">0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section ref={servicesRef} className={`section services-section tech-bg ${servicesInView ? 'fade-in' : ''}`}>
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Core Services</h2>
            <p className="section-subtitle">
              Comprehensive solutions for your business needs
            </p>
          </div>
          
          <div className="services-grid">
            <ServiceCard 
              title="IT Services"
              icon="/images/icons/it-service.png"
              description="Development and maintenance of custom software solutions, IT consultancy, and infrastructure setup."
              link="/services#it"
              category="it"
              delay={100}
            />
            
            <ServiceCard 
              title="Engineering Services"
              icon="/images/icons/engineering.png"
              description="Mechanical, electrical, and civil engineering services from project conception to completion."
              link="/services#engineering"
              category="engineering"
              delay={200}
            />
            
            <ServiceCard 
              title="Solar Solutions"
              icon="/images/icons/solar.png"
              description="Solar panel installation, energy audits, and battery storage systems for sustainable energy independence."
              link="/services#solar"
              category="solar"
              delay={300}
            />
            
            <ServiceCard 
              title="Data Engineering"
              icon="/images/icons/data.png"
              description="End-to-end data solutions, including architecture design, ETL pipelines, big data processing, and analytics integration."
              link="/services#data"
              category="data"
              delay={400}
            />
          </div>
        </div>
      </section>
      
      <section ref={statsRef} className={`section stats-section ${statsInView ? 'fade-in' : ''}`}>
        {/* Matrix Background */}
        <div className="stats-matrix-bg"></div>
        <div className="stats-aurora"></div>
        
        <div className="container">
          <div className="stats-header">
            <h3 className="stats-title">Our Impact in Numbers</h3>
            <div className="stats-decoration">
              <div className="decoration-line"></div>
              <div className="decoration-diamond"></div>
              <div className="decoration-line"></div>
            </div>
          </div>
          
          <div className="stats-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className={`stat-item stat-${achievement.pulse}`} style={{ animationDelay: `${index * 200}ms` }}>
                <div className="stat-background">
                  <div className="stat-glow"></div>
                  <div className="stat-pattern"></div>
                </div>
                
                <div className="stat-icon">
                  <div className={`icon-pulse pulse-${achievement.pulse}`}></div>
                  <span>{achievement.icon}</span>
                </div>
                
                <div className="stat-number">{achievement.number}</div>
                <div className="stat-label">{achievement.label}</div>
                
                <div className="stat-scan-line"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <ProjectShowcase />
      
      <ClientsSection />
      
      <ContactCTA />
    </div>
  )
}

export default Home