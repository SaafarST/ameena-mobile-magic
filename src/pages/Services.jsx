import React from 'react'
import { useInView } from 'react-intersection-observer'
import ContactCTA from '@/components/common/ContactCTA'
import './Services.scss'

const ServiceSection = ({ id, title, description, features, image, icon, isEven, inView }) => {
  return (
    <section id={id} className={`service-detail-section ${isEven ? 'even' : ''} ${inView ? 'fade-in' : ''}`}>
      {/* Background Effects */}
      <div className="service-bg-aurora"></div>
      <div className="floating-service-particles">
        <div className="service-particle">⚡</div>
        <div className="service-particle">🔧</div>
        <div className="service-particle">💻</div>
        <div className="service-particle">🚀</div>
      </div>
      
      <div className="container">
        <div className="service-content">
          <div className="service-info">
            <div className="service-icon">
              <div className="icon-glow"></div>
              <div className="icon-orbit">
                <div className="orbit-ring"></div>
                <div className="orbit-ring orbit-ring-2"></div>
              </div>
              <img src={icon} alt={`${title} icon`} />
            </div>
            
            <h2 className="service-title">
              <span className="title-gradient">{title}</span>
            </h2>
            
            <p className="service-description">{description}</p>
            
            <div className="service-features">
              <div className="features-header">
                <div className="features-icon">⭐</div>
                <h3>Key Features</h3>
              </div>
              <ul className="features-list">
                {features.map((feature, index) => (
                  <li key={index} className="feature-item" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="feature-check">
                      <div className="check-glow"></div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="feature-text">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="service-image">
            <div className="image-container">
              <div className="image-glow"></div>
              <div className="image-frame">
                <img src={image} alt={title} />
              </div>
              <div className="image-overlay">
                <div className="overlay-pattern"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Services = () => {
  const servicesData = [
    {
      id: 'it',
      title: 'IT Services',
      description: 'We provide comprehensive IT solutions to meet your business needs, from custom software development to IT infrastructure management, all designed to optimize your operations and enhance your competitive edge.',
      icon: '/images/icons/it-service.png',
      image: '/images/services/it-services.jpg',
      features: [
        'Custom Software Development',
        'Web & Mobile Application Development',
        'IT Infrastructure Setup & Management',
        'IT Consultancy & Strategy',
        'System Integration',
        'IT Security Solutions'
      ]
    },
    {
      id: 'engineering',
      title: 'Engineering Services',
      description: 'Our engineering expertise spans mechanical, electrical, and civil disciplines, providing comprehensive solutions from initial concept through detailed design, implementation, and maintenance phases.',
      icon: '/images/icons/engineering.png',
      image: '/images/services/engineering-services.jpg',
      features: [
        'Mechanical Engineering & Design',
        'Electrical Systems Engineering',
        'Civil Engineering Projects',
        'Project Management & Supervision',
        'Technical Documentation & Standards',
        'Engineering Analysis & Optimization'
      ]
    },
    {
      id: 'technology',
      title: 'Technology Services',
      description: 'We deliver advanced technology solutions for both government and private sectors, with particular emphasis on urban development and infrastructure projects that drive modernization and efficiency.',
      icon: '/images/icons/technology.png',
      image: '/images/services/technology-services.jpg',
      features: [
        'Urban Technology Solutions',
        'Smart City Infrastructure',
        'IoT Implementation',
        'Technology Consultation',
        'Process Automation',
        'Technology Integration & Deployment'
      ]
    },
    {
      id: 'data',
      title: 'Data Engineering',
      description: 'Our data engineering services provide end-to-end solutions for managing, processing, and extracting value from your data, helping you make informed decisions and gain competitive insights.',
      icon: '/images/icons/data.png',
      image: '/images/services/data-engineering.jpg',
      features: [
        'Data Architecture Design',
        'ETL Pipeline Development',
        'Big Data Processing & Analytics',
        'Business Intelligence Integration',
        'Data Warehouse Implementation',
        'Real-time Data Processing Solutions'
      ]
    }
  ]
  
  // Create a ref and inView state for each service section
  const serviceRefs = servicesData.map(() => useInView({
    threshold: 0.2,
    triggerOnce: true
  }))
  
  const { ref: introRef, inView: introInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })
  
  const { ref: processRef, inView: processInView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })
  
  return (
    <div className="services-page">
      <section ref={introRef} className={`services-intro section ${introInView ? 'fade-in' : ''}`}>
        <div className="intro-bg-constellation"></div>
        <div className="container">
          <div className="intro-content text-center">
            <div className="intro-badge">
              <div className="badge-pulse"></div>
              <span className="badge-icon">🎯</span>
              <span className="badge-text">How We Help</span>
            </div>
            <h2 className="intro-title">
              <span className="title-line">Transforming Ideas into</span>
              <span className="title-line title-gradient">Digital Reality</span>
            </h2>
            <p className="intro-description">
              At Saidzoda Engineering, we combine technical expertise with innovative thinking to deliver solutions 
              that drive technological advancement and operational excellence. Our comprehensive range of services 
              is designed to address the complex challenges faced by organizations in today's rapidly evolving landscape.
            </p>
          </div>
        </div>
      </section>
      
      {servicesData.map((service, index) => {
        const { ref, inView } = serviceRefs[index]
        return (
          <div ref={ref} key={service.id}>
            <ServiceSection
              {...service}
              isEven={index % 2 !== 0}
              inView={inView}
            />
          </div>
        )
      })}
      
      <section ref={processRef} className={`process-section section ${processInView ? 'fade-in' : ''}`}>
        <div className="process-bg-matrix"></div>
        <div className="floating-process-particles">
          <div className="process-particle">🔄</div>
          <div className="process-particle">⚡</div>
          <div className="process-particle">🎯</div>
          <div className="process-particle">🚀</div>
          <div className="process-particle">💎</div>
          <div className="process-particle">✨</div>
        </div>
        
        <div className="container">
          <div className="section-header text-center">
            <div className="section-badge">
              <div className="badge-glow"></div>
              <span className="badge-icon">🔄</span>
              <span className="badge-text">Our Methodology</span>
            </div>
            <h2 className="section-title">
              <span className="title-gradient">Our Approach</span>
            </h2>
            <p className="section-subtitle">
              Our structured process ensures quality results and client satisfaction
            </p>
          </div>
          
          <div className="process-timeline">
            <div className="timeline-line"></div>
            
            <div className="process-step" style={{ animationDelay: '0ms' }}>
              <div className="step-number">
                <div className="number-glow"></div>
                <span>01</span>
              </div>
              <div className="step-content">
                <div className="content-bg"></div>
                <div className="step-icon">🔍</div>
                <h3>Discovery & Analysis</h3>
                <p>We begin by thoroughly understanding your requirements, challenges, and objectives through in-depth analysis and consultation.</p>
              </div>
            </div>
            
            <div className="process-step" style={{ animationDelay: '200ms' }}>
              <div className="step-number">
                <div className="number-glow"></div>
                <span>02</span>
              </div>
              <div className="step-content">
                <div className="content-bg"></div>
                <div className="step-icon">🎨</div>
                <h3>Solution Design</h3>
                <p>Our experts create detailed specifications and designs that align with your goals, incorporating best practices and innovative approaches.</p>
              </div>
            </div>
            
            <div className="process-step" style={{ animationDelay: '400ms' }}>
              <div className="step-number">
                <div className="number-glow"></div>
                <span>03</span>
              </div>
              <div className="step-content">
                <div className="content-bg"></div>
                <div className="step-icon">⚙️</div>
                <h3>Implementation & Development</h3>
                <p>We execute the plan with precision, maintaining clear communication and regular progress updates throughout the development phase.</p>
              </div>
            </div>
            
            <div className="process-step" style={{ animationDelay: '600ms' }}>
              <div className="step-number">
                <div className="number-glow"></div>
                <span>04</span>
              </div>
              <div className="step-content">
                <div className="content-bg"></div>
                <div className="step-icon">🔬</div>
                <h3>Testing & Quality Assurance</h3>
                <p>Rigorous testing ensures that all deliverables meet our high standards for quality, performance, and reliability.</p>
              </div>
            </div>
            
            <div className="process-step" style={{ animationDelay: '800ms' }}>
              <div className="step-number">
                <div className="number-glow"></div>
                <span>05</span>
              </div>
              <div className="step-content">
                <div className="content-bg"></div>
                <div className="step-icon">🚀</div>
                <h3>Deployment & Integration</h3>
                <p>We carefully implement the solution in your environment, ensuring seamless integration with existing systems and processes.</p>
              </div>
            </div>
            
            <div className="process-step" style={{ animationDelay: '1000ms' }}>
              <div className="step-number">
                <div className="number-glow"></div>
                <span>06</span>
              </div>
              <div className="step-content">
                <div className="content-bg"></div>
                <div className="step-icon">🛠️</div>
                <h3>Ongoing Support & Maintenance</h3>
                <p>Our relationship continues after deployment with comprehensive support, maintenance, and optimization services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ContactCTA />
    </div>
  )
}

export default Services