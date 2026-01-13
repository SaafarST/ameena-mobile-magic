import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import ContactCTA from '@/components/common/ContactCTA'
import './SaidzodaCharity.scss'

const CharityProjectCard = ({ project, index, inView }) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div 
      className={`charity-card ${inView ? 'fade-in' : ''}`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="card-glow"></div>
      <div className="card-shine"></div>
      
      <div className="charity-image">
        <div className="image-container">
          <div className="image-overlay"></div>
          <img 
            src={project.image} 
            alt={project.title}
            onLoad={() => setImageLoaded(true)}
            className={imageLoaded ? 'loaded' : ''}
          />
          <div className="status-badge">
            <span className="status-icon">{project.statusIcon}</span>
            <span className="status-text">{project.status}</span>
          </div>
        </div>
      </div>
      
      <div className="charity-content">
        <div className="project-meta">
          <span className="location">📍 {project.location}</span>
          <span className="beneficiaries">👥 {project.beneficiaries} beneficiaries</span>
        </div>
        
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-details">
          <div className="detail-item">
            <span className="detail-label">Investment:</span>
            <span className="detail-value">{project.investment}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Timeline:</span>
            <span className="detail-value">{project.timeline}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Impact:</span>
            <span className="detail-value">{project.impact}</span>
          </div>
        </div>
        
        <div className="project-tags">
          {project.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="tag">#{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

const ImpactCounter = ({ number, label, suffix = "", inView }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (inView) {
      const target = parseInt(number)
      const duration = 2000
      const increment = target / (duration / 16)
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, 16)
      
      return () => clearInterval(timer)
    }
  }, [inView, number])

  return (
    <div className="impact-stat">
      <div className="stat-number">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

const SaidzodaCharity = () => {
  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const { ref: impactRef, inView: impactInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const charityProjects = [
    {
      id: 1,
      title: "10 kW Solar Panel Installation",
      description: "Sustainable energy solution for central mosque of Dushanbe. This solar installation provides clean, renewable electricity, reducing energy costs and environmental impact for religious communities.",
      location: "Central Mosques, Dushanbe",
      beneficiaries: 15000,
      investment: "135,000 Samani",
      timeline: "In Progress",
      impact: "60% reduction in electricity costs",
      status: "In Progress",
      statusIcon: "🔄",
      image: "/images/charity/solar-panels.jpg",
      tags: ["Solar", "Sustainable", "Energy", "Religious-Community"]
    },
    {
      id: 2,
      title: "Hand Wash Station for Lolazor Village",
      description: "Installing modern hand washing facility to promote hygiene and health in rural communities. These stations feature automatic dispensers, water-saving technology, and educational signage in local languages.",
      location: "Lolazor Village, Hisor",
      beneficiaries: 1200,
      investment: "12,000 Samani",
      timeline: "Completed 2024",
      impact: "95% reduction in waterborne illnesses",
      status: "Completed",
      statusIcon: "✅",
      image: "/images/charity/handwash-station.jpg",
      tags: ["Health", "Hygiene", "Rural-Development", "Community"]
    },
    {
      id: 3,
      title: "Vertical Z-Elevator & Product Feeding Hopper",
      description: "Advanced agricultural processing equipment to boost local farming productivity. This system automates grain handling, reduces manual labor, and increases processing efficiency for the entire village.",
      location: "Lolazor Village, Hisor",
      beneficiaries: 1000,
      investment: "45,000 Samani",
      timeline: "Completed 2024",
      impact: "300% increase in processing capacity",
      status: "Completed",
      statusIcon: "✅",
      image: "/images/charity/z-elevator.jpg",
      tags: ["Agriculture", "Technology", "Productivity", "Innovation"]
    }  
  ]

  return (
    <div className="saidzoda-charity-page">
      {/* Impact Statistics - First Section Users See */}
      <section ref={impactRef} className="impact-section" style={{ paddingTop: '120px' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Impact in Numbers</h2>
            <p className="section-subtitle">
              Measurable change through engineering excellence
            </p>
          </div>
          
          <div className="impact-grid">
            <ImpactCounter number="17000" label="Lives Impacted" suffix="+" inView={impactInView} />
            <ImpactCounter number="3" label="Active Projects" inView={impactInView} />
            <ImpactCounter number="192000" label="Investment in Samani" suffix="" inView={impactInView} />
            <ImpactCounter number="100" label="Success Rate" suffix="%" inView={impactInView} />
          </div>
        </div>
      </section>

      {/* Charity Projects */}
      <section ref={projectsRef} className="projects-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-gradient">Transformative Projects</span>
            </h2>
            <p className="section-subtitle">
              Engineering solutions that create lasting change in communities across Tajikistan
            </p>
          </div>
          
          <div className="projects-grid">
            {charityProjects.map((project, index) => (
              <CharityProjectCard 
                key={project.id} 
                project={project} 
                index={index}
                inView={projectsInView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="values-content">
            <h2 className="values-title">Our Core Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">🌍</div>
                <h3>Sustainability</h3>
                <p>Every solution we implement is designed for long-term environmental and social sustainability.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🤝</div>
                <h3>Community Partnership</h3>
                <p>We work hand-in-hand with local communities to ensure our solutions meet real needs.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">⚡</div>
                <h3>Innovation</h3>
                <p>We leverage cutting-edge technology to create innovative solutions for complex challenges.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">💫</div>
                <h3>Excellence</h3>
                <p>We maintain the highest standards of engineering and project delivery in all our initiatives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="charity-cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-icon">
              <span>🚀</span>
            </div>
            <h2 className="cta-title">Join Our Mission</h2>
            <p className="cta-description">
              Partner with us to bring innovative engineering solutions to communities that need them most. 
              Together, we can build a better future for all.
            </p>
            <div className="cta-actions">
              <button className="cta-btn primary">
                <span>Partner With Us</span>
                <div className="btn-glow"></div>
              </button>
              <button className="cta-btn secondary">
                <span>Learn More</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <ContactCTA />
    </div>
  )
}

export default SaidzodaCharity