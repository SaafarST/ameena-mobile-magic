import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useLocation } from 'react-router-dom'
import PageHeader from '@/components/common/PageHeader'
import ContactCTA from '@/components/common/ContactCTA'
import './Projects.scss'

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [filteredProjects, setFilteredProjects] = useState([])
  const location = useLocation()
  
  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  
  const categories = [
    { id: 'all', label: 'All Projects', icon: '🎯', count: 10 },
    { id: 'it', label: 'IT Solutions', icon: '💻', count: 4 },
    { id: 'engineering', label: 'Engineering', icon: '⚙️', count: 3 },
    { id: 'technology', label: 'Technology', icon: '🚀', count: 2 },
    { id: 'data', label: 'Data Solutions', icon: '📊', count: 1 }
  ]
  
  const projects = [
    {
      id: 1,
      title: 'Advanced Fruit Processing Facility',
      category: 'engineering',
      image: '/images/projects/fruit-processing.jpg',
      client: 'ACDI/VOCA, USAID',
      location: 'Isfara, Tajikistan',
      year: '2024',
      status: 'Completed',
      impact: '300% Productivity Boost',
      duration: '6 months',
      description: 'Revolutionary food processing equipment installation that transformed local agricultural capabilities with cutting-edge automation and IoT integration.',
      features: [
        'AI-powered dicing machine installation',
        'Precision calibration system setup',
        'Laser-based fruit cleaning technology',
        'Comprehensive staff training program',
        'Predictive maintenance protocols'
      ],
      technologies: ['Industrial IoT', 'Automation', 'AI Processing', 'Laser Tech'],
      results: [
        '300% increase in processing capacity',
        '85% reduction in manual labor',
        '99.9% quality consistency',
        'Zero downtime in first 6 months'
      ]
    },
    {
      id: 2,
      title: 'Smart Climate Control System',
      category: 'engineering',
      image: '/images/projects/vrf-system.jpg',
      client: 'Tole LLC',
      location: 'Dushanbe, Tajikistan',
      year: '2024',
      status: 'Completed',
      impact: '40% Energy Savings',
      duration: '3 months',
      description: 'Next-generation VRF system design creating optimal learning environments through intelligent climate control and energy optimization.',
      features: [
        'Multi-zone smart HVAC design',
        'AI-driven temperature regulation',
        'Ultra-quiet operation technology',
        'Predictive maintenance system',
        'Mobile app integration'
      ],
      technologies: ['Smart HVAC', 'IoT Sensors', 'AI Control', 'Mobile App'],
      results: [
        '40% reduction in energy costs',
        'Perfect temperature consistency',
        '90% noise reduction',
        '24/7 remote monitoring'
      ]
    },
    {
      id: 3,
      title: 'Industrial Power Backup Solutions',
      category: 'engineering',
      image: '/images/projects/power-backup.jpg',
      client: 'Gayur Group LLC',
      location: 'Sughd Region, Tajikistan',
      year: '2024',
      status: 'Completed',
      impact: '99.9% Uptime',
      duration: '4 months',
      description: 'Mission-critical power infrastructure ensuring zero-downtime operations across multiple manufacturing facilities.',
      features: [
        'Intelligent UPS configuration',
        'Automated diesel generator systems',
        'Smart voltage stabilization',
        'Instantaneous switchover technology',
        'Real-time power analytics'
      ],
      technologies: ['Smart Grid', 'Automation', 'IoT Monitoring', 'Analytics'],
      results: [
        '99.9% power availability',
        'Zero production interruptions',
        '50% faster recovery times',
        'Predictive failure detection'
      ]
    },
    {
      id: 4,
      title: 'www.Mino.tj - Digital Business Ecosystem',
      category: 'it',
      image: '/images/projects/mino-directory.jpg',
      client: 'Private Business',
      location: 'Dushanbe, Tajikistan',
      year: '2024',
      status: 'Live',
      impact: '10K+ Active Users',
      duration: '8 weeks',
      description: 'Comprehensive digital platform revolutionizing business discovery and networking in Tajikistan with advanced AI-powered features.',
      features: [
        'AI-powered business matching',
        'Advanced search algorithms',
        'Real-time analytics dashboard',
        'Multi-language support',
        'Progressive Web App technology'
      ],
      technologies: ['React', 'Node.js', 'AI/ML', 'PWA', 'MongoDB'],
      results: [
        '10,000+ registered businesses',
        '500% increase in connections',
        '95% user satisfaction',
        '50K+ monthly searches'
      ]
    },
    {
      id: 5,
      title: 'AI-Powered Queue Management',
      category: 'technology',
      image: '/images/projects/queue-system.jpg',
      client: 'Private Hospital',
      location: 'Dushanbe, Tajikistan',
      year: '2024',
      status: 'Completed',
      impact: '70% Wait Reduction',
      duration: '10 weeks',
      description: 'Revolutionary queue optimization system using machine learning to predict and manage patient flow with unprecedented efficiency.',
      features: [
        'ML-driven flow prediction',
        'Smart ticket dispensing',
        'Real-time wait notifications',
        'Multi-service coordination',
        'Patient satisfaction tracking'
      ],
      technologies: ['Machine Learning', 'IoT', 'Real-time Analytics', 'Mobile'],
      results: [
        '70% reduction in wait times',
        '95% patient satisfaction',
        '300% staff efficiency',
        'Zero queue overflow incidents'
      ]
    },
    {
      id: 6,
      title: 'Enterprise Manufacturing Portal',
      category: 'it',
      image: '/images/projects/unicorn-website.jpg',
      client: 'Unicorn Industries',
      location: 'Dushanbe, Tajikistan',
      year: '2024',
      status: 'Completed',
      impact: '500% Online Growth',
      duration: '12 weeks',
      description: 'Modern e-commerce platform with advanced manufacturing workflow integration and real-time inventory management.',
      features: [
        'Advanced e-commerce engine',
        'Real-time inventory sync',
        'Custom order management',
        'Automated workflow integration',
        'Analytics-driven insights'
      ],
      technologies: ['Next.js', 'E-commerce', 'CMS', 'Analytics', 'API'],
      results: [
        '500% increase in online sales',
        '80% automation of orders',
        '60% faster fulfillment',
        '24/7 global accessibility'
      ]
    },
    {
      id: 7,
      title: 'GayurPack Industrial Packaging Solutions Website',
      category: 'it',
      image: '/images/projects/gayurpack-website.jpg',
      client: 'Gayur Group LLC',
      location: 'Dushanbe, Tajikistan',
      year: '2024',
      status: 'Completed',
      impact: '200% Lead Generation',
      duration: '6 weeks',
      description: 'Professional company website showcasing advanced industrial packaging solutions with interactive product catalog and technical specifications.',
      features: [
        '3D product visualization',
        'Technical specification engine',
        'Automated quote generation',
        'Multi-language localization',
        'Industrial case study portal'
      ],
      technologies: ['Vue.js', '3D WebGL', 'PWA', 'SEO', 'CMS'],
      results: [
        '200% increase in qualified leads',
        '90% faster quote generation',
        '150% longer session times',
        'Global market expansion'
      ]
    },
    {
      id: 8,
      title: 'Smart Greenhouse Technology',
      category: 'technology',
      image: '/images/projects/greenhouse.jpg',
      client: 'ACDI/VOCA, USAID',
      location: 'Isfara, Tajikistan',
      year: '2024',
      status: 'Completed',
      impact: '400% Yield Increase',
      duration: '5 months',
      description: 'Next-generation 720m² smart greenhouse with AI-controlled climate systems and precision agriculture technology.',
      features: [
        'AI-controlled climate systems',
        'Precision irrigation automation',
        'LED spectrum optimization',
        'IoT sensor networks',
        'Predictive crop analytics'
      ],
      technologies: ['Agricultural AI', 'IoT Sensors', 'Automation', 'Analytics'],
      results: [
        '400% increase in crop yield',
        '60% water usage reduction',
        'Year-round production',
        '99% crop survival rate'
      ]
    },
    {
      id: 9,
      title: 'Secure Messaging Platform',
      category: 'it',
      image: '/images/projects/zyng-app.jpg',
      client: 'Private Investor',
      location: 'Dushanbe, Tajikistan',
      year: '2024',
      status: 'Completed',
      impact: 'Military-Grade Security',
      duration: '16 weeks',
      description: 'Ultra-secure peer-to-peer messaging application with quantum-resistant encryption and zero-knowledge architecture.',
      features: [
        'Quantum-resistant encryption',
        'Zero-knowledge architecture',
        'Serverless peer-to-peer design',
        'Self-destructing messages',
        'Biometric authentication'
      ],
      technologies: ['Quantum Encryption', 'P2P', 'Biometrics', 'React Native'],
      results: [
        'Unbreakable message security',
        'Zero data storage on servers',
        'Sub-second message delivery',
        'Cross-platform compatibility'
      ]
    },
    {
      id: 10,
      title: 'Content Management Ecosystem',
      category: 'it',
      image: '/images/projects/tiksaver-app.jpg',
      client: 'Private Client',
      location: 'Dushanbe, Tajikistan',
      year: '2024',
      status: 'Completed',
      impact: '1M+ Downloads',
      duration: '10 weeks',
      description: 'Advanced content management platform with AI-powered organization and engagement optimization for digital creators.',
      features: [
        'AI-powered content organization',
        'Engagement analytics engine',
        'Multi-platform integration',
        'Automated content scheduling',
        'Creator monetization tools'
      ],
      technologies: ['AI/ML', 'Analytics', 'Multi-platform API', 'Cloud'],
      results: [
        '1M+ app downloads',
        '80% creator retention',
        '300% engagement increase',
        'Global creator community'
      ]
    }
  ]
  
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory))
    }
  }, [activeCategory])

  // Handle navigation from ProjectShowcase
  useEffect(() => {
    if (location.hash) {
      const projectId = location.hash.replace('#project-', '')
      const targetProject = projects.find(p => p.id === parseInt(projectId))
      
      if (targetProject) {
        setActiveCategory(targetProject.category)
        
        setTimeout(() => {
          const element = document.getElementById(`project-${projectId}`)
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'center'
            })
            element.classList.add('highlighted')
            setTimeout(() => {
              element.classList.remove('highlighted')
            }, 3000)
          }
        }, 500)
      }
    }
  }, [location.hash])
  
  return (
    <div className="projects-page">
      {/* Futuristic Page Header */}
      <section className="projects-hero">
        <div className="hero-bg-space"></div>
        <div className="floating-data-bits">
          <div className="data-bit">01</div>
          <div className="data-bit">10</div>
          <div className="data-bit">11</div>
          <div className="data-bit">00</div>
          <div className="data-bit">AI</div>
          <div className="data-bit">ML</div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              🚀 Innovation Portfolio
            </div>
            <h1 className="hero-title">Engineering Tomorrow</h1>
            <p className="hero-subtitle">
              Discover our revolutionary projects that are reshaping industries and defining the future of technology in Central Asia
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">10+</div>
                <div className="stat-label">Revolutionary Projects</div>
              </div>
              <div className="stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">Success Rate</div>
              </div>
              <div className="stat">
                <div className="stat-number">5★</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section ref={projectsRef} className={`projects-showcase section ${projectsInView ? 'fade-in' : ''}`}>
        {/* Space Background */}
        <div className="section-bg-galaxy"></div>
        <div className="floating-tech-elements">
          <div className="tech-element">⚡</div>
          <div className="tech-element">🔧</div>
          <div className="tech-element">💡</div>
          <div className="tech-element">🚀</div>
          <div className="tech-element">⚙️</div>
          <div className="tech-element">💻</div>
          <div className="tech-element">📊</div>
          <div className="tech-element">🎯</div>
        </div>
        
        <div className="container">
          <div className="section-header">
            <div className="projects-categories">
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
                  <div className="btn-aurora"></div>
                  <div className="btn-scan-line"></div>
                </button>
              ))}
            </div>
          </div>
          
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                id={`project-${project.id}`}
                className="project-card"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Card Background Effects */}
                <div className="card-hologram"></div>
                <div className="card-neural-net"></div>
                <div className="card-glow"></div>
                
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="image-tech-overlay"></div>
                  <div className="status-indicator">
                    <div className={`status-dot ${project.status.toLowerCase()}`}></div>
                    <span className="status-text">{project.status}</span>
                  </div>
                  <div className="category-chip">
                    <span className="chip-icon">
                      {categories.find(c => c.id === project.category)?.icon}
                    </span>
                    <span className="chip-text">
                      {categories.find(c => c.id === project.category)?.label}
                    </span>
                  </div>
                </div>
                
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="impact-badge">
                      <span className="impact-icon">📈</span>
                      <span className="impact-text">{project.impact}</span>
                    </div>
                  </div>
                  
                  <div className="project-meta-grid">
                    <div className="meta-item">
                      <span className="meta-icon">🏢</span>
                      <div className="meta-content">
                        <span className="meta-label">Client</span>
                        <span className="meta-value">{project.client}</span>
                      </div>
                    </div>
                    <div className="meta-item">
                      <span className="meta-icon">📍</span>
                      <div className="meta-content">
                        <span className="meta-label">Location</span>
                        <span className="meta-value">{project.location}</span>
                      </div>
                    </div>
                    <div className="meta-item">
                      <span className="meta-icon">📅</span>
                      <div className="meta-content">
                        <span className="meta-label">Year</span>
                        <span className="meta-value">{project.year}</span>
                      </div>
                    </div>
                    <div className="meta-item">
                      <span className="meta-icon">⏱️</span>
                      <div className="meta-content">
                        <span className="meta-label">Duration</span>
                        <span className="meta-value">{project.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech-stack">
                    <h4 className="tech-title">Technologies Used</h4>
                    <div className="tech-tags">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="project-results">
                    <h4 className="results-title">Key Results</h4>
                    <div className="results-grid">
                      {project.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="result-item">
                          <div className="result-icon">✓</div>
                          <span className="result-text">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="project-scan-line"></div>
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <div className="no-projects-icon">🔍</div>
              <h3>No Projects Found</h3>
              <p>No projects found in this category. Please try another category.</p>
            </div>
          )}
        </div>
      </section>
      
      <ContactCTA />
    </div>
  )
}

export default Projects