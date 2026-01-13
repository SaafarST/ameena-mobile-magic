import React from 'react'
import { useInView } from 'react-intersection-observer'
import PageHeader from '@/components/common/PageHeader'
import ContactCTA from '@/components/common/ContactCTA'
import './About.scss'

const About = () => {
  const { ref: missionRef, inView: missionInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })
  
  const { ref: teamRef, inView: teamInView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })
  
  const achievements = [
    { number: '2024', label: 'Founded', icon: '🚀', color: 'primary' },
    { number: '15+', label: 'Projects Delivered', icon: '⚡', color: 'secondary' },
    { number: '6', label: 'Major Clients', icon: '🏢', color: 'accent' },
    { number: '100%', label: 'Success Rate', icon: '⭐', color: 'success' }
  ]
  
   
  const teamMembers = [
    {
      name: 'Madina Abdusalom',
      position: 'Founder & CEO',
      department: 'Leadership',
      experience: '15+ Years',
      expertise: ['Strategic Planning', 'Business Development', 'Engineering Leadership'],
      bio: 'Visionary leader and founder driving innovation and strategic growth in engineering and technology solutions.',
      image: '/images/team/ceo.jpg',
      social: {
        linkedin: '#',
        email: 'madina@saidzoda.com'
      }
    },
    {
      name: 'Tohir Saidzoda',
      position: 'Chief Technology Officer',
      department: 'Technology',
      experience: '12+ Years',
      expertise: ['Software Architecture', 'Cloud Solutions', 'AI/ML'],
      bio: 'Technology expert leading our digital transformation initiatives and emerging technology adoption.',
      image: '/images/team/cto.jpg',
      social: {
        linkedin: '#',
        email: 'tohir@saidzoda.com'
      }
    },
    {
      name: 'Hiloliddin Jaloliddin',
      position: 'Lead Mobile Developer',
      department: 'Mobile Development',
      experience: '8+ Years',
      expertise: ['iOS Development', 'Android Development', 'Cross-Platform Solutions'],
      bio: 'Mobile development expert creating innovative mobile applications and cross-platform solutions.',
      image: '/images/team/mobile-lead.jpg',
      social: {
        linkedin: '#',
        email: 'hiloliddin@saidzoda.com'
      }
    },
    {
      name: 'Bedil Karim',
      position: 'Lead Data Engineer',
      department: 'Data Engineering',
      experience: '7+ Years',
      expertise: ['Big Data', 'Analytics', 'Data Pipelines'],
      bio: 'Data engineering specialist building robust data infrastructure and analytics solutions for complex challenges.',
      image: '/images/team/data-lead.jpg',
      social: {
        linkedin: '#',
        email: 'bedil@saidzoda.com'
      }
    },
    {
      name: 'Saeed Muhammad',
      position: 'Lead Crypto & Blockchain',
      department: 'Blockchain',
      experience: '6+ Years',
      expertise: ['Blockchain Development', 'Cryptocurrency', 'Smart Contracts'],
      bio: 'Blockchain expert pioneering decentralized solutions and cryptocurrency integrations for next-gen applications.',
      image: '/images/team/crypto-lead.jpg',
      social: {
        linkedin: '#',
        email: 'saeed@saidzoda.com'
      }
    },
    {
      name: 'Hushang Mirzo',
      position: 'Lead Frontend Developer',
      department: 'Frontend Development',
      experience: '7+ Years',
      expertise: ['React/Next.js', 'UI/UX Design', 'Modern Web Technologies'],
      bio: 'Frontend development leader creating stunning user interfaces and exceptional user experiences.',
      image: '/images/team/frontend-lead.jpg',
      social: {
        linkedin: '#',
        email: 'hushang@saidzoda.com'
      }
    }
  ]
  
  return (
    <div className="about-page">
      {/* Futuristic Hero Section */}
      <section className="about-hero">
        <div className="hero-bg-constellation"></div>
        <div className="floating-quantum-particles">
          <div className="quantum-particle">Q1</div>
          <div className="quantum-particle">∞</div>
          <div className="quantum-particle">Σ</div>
          <div className="quantum-particle">π</div>
          <div className="quantum-particle">△</div>
          <div className="quantum-particle">◊</div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              🌟 Engineering Excellence Since 2024
            </div>
            <h1 className="hero-title">Shaping Tomorrow's Technology</h1>
            <p className="hero-subtitle">
              We are Saidzoda Engineering - pioneers of innovation, architects of the future, and builders of technological excellence in Central Asia
            </p>
            <div className="hero-achievements">
              {achievements.map((achievement, index) => (
                <div key={index} className={`achievement-item achievement-${achievement.color}`}>
                  <div className="achievement-icon">{achievement.icon}</div>
                  <div className="achievement-number">{achievement.number}</div>
                  <div className="achievement-label">{achievement.label}</div>
                  <div className="achievement-glow"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section ref={missionRef} className={`section mission-section ${missionInView ? 'fade-in' : ''}`}>
        {/* Neural Network Background */}
        <div className="section-bg-neural"></div>
        <div className="floating-mission-elements">
          <div className="mission-element">🎯</div>
          <div className="mission-element">🔮</div>
          <div className="mission-element">⚡</div>
          <div className="mission-element">🚀</div>
        </div>
        
        <div className="container">
          <div className="section-header text-center">
            <div className="section-badge">
              💡 Our Foundation
            </div>
            <h2 className="section-title">Mission & Vision</h2>
            <p className="section-subtitle">
              The driving forces behind our technological revolution
            </p>
          </div>
          
          <div className="mission-vision-grid">
            <div className="mission-vision-card mission-card">
              <div className="card-background">
                <div className="card-aurora"></div>
                <div className="card-grid"></div>
              </div>
              
              <div className="card-content">
                <div className="icon-container">
                  <div className="icon-orbit">
                    <div className="orbit-ring"></div>
                    <div className="orbit-ring orbit-ring-2"></div>
                  </div>
                  <div className="icon">
                    <span>🎯</span>
                  </div>
                </div>
                <h3>Our Mission</h3>
                <p>To deliver revolutionary solutions and exceptional services in Information Technology, Engineering, and Technology projects, empowering our clients to achieve operational excellence and sustainable growth in the digital age.</p>
              </div>
              
              <div className="card-scan-line"></div>
            </div>
            
            <div className="mission-vision-card vision-card">
              <div className="card-background">
                <div className="card-aurora"></div>
                <div className="card-grid"></div>
              </div>
              
              <div className="card-content">
                <div className="icon-container">
                  <div className="icon-orbit">
                    <div className="orbit-ring"></div>
                    <div className="orbit-ring orbit-ring-2"></div>
                  </div>
                  <div className="icon">
                    <span>🔮</span>
                  </div>
                </div>
                <h3>Our Vision</h3>
                <p>To be the premier technology partner in Central Asia, recognized globally for our commitment to innovation, excellence, and sustainable practices that transform the technological landscape of the region.</p>
              </div>
              
              <div className="card-scan-line"></div>
            </div>
          </div>
          
          <div className="company-story">
            <div className="story-content">
              <div className="story-header">
                <div className="story-badge">
                  📈 Our Journey
                </div>
                <h3>Engineering the Future</h3>
              </div>
              
              <div className="story-timeline">
                <div className="timeline-item">
                  <div className="timeline-dot">
                    <div className="dot-pulse"></div>
                  </div>
                  <div className="timeline-content">
                    <h4>2024 - Foundation</h4>
                    <p>Established with a clear mission to transform Tajikistan's technology landscape through innovative engineering solutions.</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-dot">
                    <div className="dot-pulse"></div>
                  </div>
                  <div className="timeline-content">
                    <h4>Rapid Growth</h4>
                    <p>Expanded from IT projects to comprehensive engineering services, technology implementation, and advanced data solutions.</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-dot">
                    <div className="dot-pulse"></div>
                  </div>
                  <div className="timeline-content">
                    <h4>Present Day</h4>
                    <p>Leading technological advancement and economic growth, partnering with government agencies, international organizations, and private enterprises.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="story-visual">
              <div className="visual-container">
                <div className="tech-matrix"></div>
                <div className="central-logo">
                  <div className="logo-glow"></div>
                  <img src="/images/logo/saidzoda-logo-dark.jpeg" alt="Saidzoda Engineering" />
                </div>
                <div className="growth-indicators">
                  <div className="indicator indicator-1">
                    <div className="indicator-pulse"></div>
                    <span>2024</span>
                  </div>
                  <div className="indicator indicator-2">
                    <div className="indicator-pulse"></div>
                    <span>Growth</span>
                  </div>
                  <div className="indicator indicator-3">
                    <div className="indicator-pulse"></div>
                    <span>Future</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      <section ref={teamRef} className={`section team-section ${teamInView ? 'fade-in' : ''}`}>
        <div className="section-bg-space"></div>
        <div className="floating-team-elements">
          <div className="team-element">👨‍💻</div>
          <div className="team-element">⚡</div>
          <div className="team-element">🧠</div>
          <div className="team-element">🚀</div>
          <div className="team-element">💡</div>
          <div className="team-element">🔬</div>
        </div>
        
        <div className="container">
          <div className="section-header text-center">
            <div className="section-badge">
              👥 Meet the Visionaries
            </div>
            <h2 className="section-title">Our Expert Team</h2>
            <p className="section-subtitle">
              The brilliant minds driving technological innovation and engineering excellence
            </p>
          </div>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="member-background">
                  <div className="member-aurora"></div>
                  <div className="member-grid"></div>
                </div>
                
                <div className="member-photo">
                  <div className="photo-frame">
                    <div className="frame-glow"></div>
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="photo-overlay">
                    <div className="social-links">
                      <a href={member.social.linkedin} className="social-link">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a href={`mailto:${member.social.email}`} className="social-link">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.749L12 10.855l9.615-7.034h.749c.904 0 1.636.732 1.636 1.636z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="member-info">
                  <div className="member-header">
                    <h3 className="member-name">{member.name}</h3>
                    <div className="member-position">{member.position}</div>
                  </div>
                  
                  <div className="member-meta">
                    <div className="meta-item">
                      <span className="meta-icon">🏢</span>
                      <span className="meta-text">{member.department}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-icon">⏱️</span>
                      <span className="meta-text">{member.experience}</span>
                    </div>
                  </div>
                  
                  <p className="member-bio">{member.bio}</p>
                  
                  <div className="member-expertise">
                    <h5>Expertise</h5>
                    <div className="expertise-tags">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="expertise-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="member-scan-line"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <ContactCTA />
    </div>
  )
}

export default About