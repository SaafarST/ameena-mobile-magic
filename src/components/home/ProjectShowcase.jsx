import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import './ProjectShowcase.scss'

const ProjectShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const navigate = useNavigate()
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  
  const categories = [
    { id: 'all', label: 'All Projects', icon: '🎯', count: 6 },
    { id: 'it', label: 'IT Solutions', icon: '💻', count: 3 },
    { id: 'engineering', label: 'Engineering', icon: '⚙️', count: 2 },
    { id: 'technology', label: 'Technology', icon: '🚀', count: 1 }
  ]
  
  const projects = [
    {
      id: 1,
      title: 'Advanced Fruit Processing Facility',
      category: 'engineering',
      image: '/images/projects/fruit-processing.jpg',
      client: 'ACDI/VOCA, USAID',
      location: 'Isfara, Tajikistan',
      description: 'State-of-the-art dried fruit processing equipment with automated systems',
      status: 'Completed',
      impact: '300% Productivity Increase',
      tech: ['Automation', 'IoT', 'Processing'],
      projectSlug: 'fruit-processing'
    },
    {
      id: 2,
      title: 'Smart Climate Control System',
      category: 'engineering',
      image: '/images/projects/vrf-system.jpg',
      client: 'Tole LLC',
      location: 'Dushanbe, Tajikistan',
      description: 'VRF system design for optimal learning environment',
      status: 'Completed',
      impact: '40% Energy Savings',
      tech: ['HVAC', 'Smart Controls', 'Energy Efficiency'],
      projectSlug: 'vrf-system'
    },
    {
      id: 3,
      title: 'Digital Business Ecosystem',
      category: 'it',
      image: '/images/projects/mino-directory.jpg',
      client: 'Private Business',
      location: 'Dushanbe, Tajikistan',
      description: 'Comprehensive business directory platform with advanced features',
      status: 'Live',
      impact: '10K+ Active Users',
      tech: ['React', 'Node.js', 'MongoDB'],
      projectSlug: 'mino-directory'
    },
    {
      id: 4,
      title: 'AI-Powered Queue Management',
      category: 'technology',
      image: '/images/projects/queue-system.jpg',
      client: 'Private Hospital',
      location: 'Dushanbe, Tajikistan',
      description: 'Intelligent queue optimization with real-time analytics',
      status: 'Active',
      impact: '60% Wait Time Reduction',
      tech: ['AI', 'Real-time Analytics', 'Mobile App'],
      projectSlug: 'queue-system'
    },
    {
      id: 5,
      title: 'Enterprise Manufacturing Portal',
      category: 'it',
      image: '/images/projects/unicorn-website.jpg',
      client: 'Unicorn Industries',
      location: 'Dushanbe, Tajikistan',
      description: 'Modern web platform for manufacturing excellence',
      status: 'Live',
      impact: '500% Online Growth',
      tech: ['Next.js', 'E-commerce', 'CMS'],
      projectSlug: 'unicorn-website'
    },
    {
      id: 6,
      title: 'Industrial Packaging Solutions',
      category: 'it',
      image: '/images/projects/gayurpack-website.jpg',
      client: 'Gayur Group LLC',
      location: 'Dushanbe, Tajikistan',
      description: 'Premium packaging industry digital transformation',
      status: 'Live',
      impact: '200% Lead Generation',
      tech: ['Vue.js', 'PWA', 'SEO'],
      projectSlug: 'gayurpack-website'
    }
  ]
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  // Function to handle project navigation
  const handleProjectClick = (project) => {
    // Navigate to projects page with project ID in URL hash
    navigate(`/projects#project-${project.id}`)
    
    // Small delay to ensure page navigation, then scroll to project
    setTimeout(() => {
      const projectElement = document.getElementById(`project-${project.id}`)
      if (projectElement) {
        projectElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'center'
        })
        // Add highlight effect
        projectElement.classList.add('highlighted')
        setTimeout(() => {
          projectElement.classList.remove('highlighted')
        }, 3000)
      }
    }, 100)
  }
  
  return (
    <section ref={ref} className={`section projects-section ${inView ? 'fade-in' : ''}`}>
      {/* Animated Background Effects */}
      <div className="section-bg-pattern"></div>
      <div className="floating-elements">
        <div className="floating-icon">💡</div>
        <div className="floating-icon">⚡</div>
        <div className="floating-icon">🔧</div>
        <div className="floating-icon">🚀</div>
        <div className="floating-icon">⚙️</div>
        <div className="floating-icon">💻</div>
      </div>
      
      <div className="container">
        <div className="section-header text-center">
          <div className="section-badge">
            🏆 Our Impact
          </div>
          <h2 className="section-title">Revolutionary Projects</h2>
          <p className="section-subtitle">
            Transforming industries through cutting-edge engineering and innovative technology solutions that define the future
          </p>
          <div className="title-decoration">
            <div className="decoration-pulse"></div>
          </div>
        </div>
        
        <div className="project-categories">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <div className="btn-content">
                <span className="btn-icon">{category.icon}</span>
                <span className="btn-text">{category.label}</span>
                <span className="btn-count">{category.count}</span>
              </div>
              <div className="btn-glow"></div>
              <div className="btn-particles">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
              </div>
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="project-card"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card Background Effects */}
              <div className="card-tech-pattern"></div>
              <div className="card-hologram"></div>
              <div className="card-glow"></div>
              
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="image-overlay"></div>
                <div className="project-overlay">
                  <div className="overlay-content">
                    <h4 className="overlay-title">{project.title}</h4>
                    <p className="overlay-description">{project.description}</p>
                    <button 
                      onClick={() => handleProjectClick(project)}
                      className="project-link"
                    >
                      <span>Explore Project</span>
                      <div className="link-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M7 17L17 7M17 7H7M17 7V17"/>
                        </svg>
                      </div>
                      <div className="link-ripple"></div>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="project-info">
                <div className="project-status">
                  <span className={`status-badge ${project.status.toLowerCase()}`}>
                    <div className="status-pulse"></div>
                    {project.status}
                  </span>
                  <div className="impact-metric">
                    <span className="impact-icon">📈</span>
                    <span className="impact-text">{project.impact}</span>
                  </div>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                
                <div className="project-meta">
                  <div className="meta-item">
                    <span className="meta-icon">🏢</span>
                    <span className="meta-text">{project.client}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">📍</span>
                    <span className="meta-text">{project.location}</span>
                  </div>
                </div>
                
                <div className="tech-stack">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-category-tag">
                  <span className="category-icon">
                    {categories.find(c => c.id === project.category)?.icon}
                  </span>
                  {categories.find(c => c.id === project.category)?.label}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="section-cta">
          <div className="cta-decoration">
            <div className="decoration-orbit">
              <div className="orbit-ring"></div>
              <div className="orbit-ring orbit-ring-2"></div>
            </div>
          </div>
          <Link to="/projects" className="btn btn-primary btn-xl">
            <span>View All Projects</span>
            <div className="btn-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
            <div className="btn-shine"></div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectShowcase