import React from 'react'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import ContactCTA from '@/components/common/ContactCTA'
import './Medical.scss'

const Medical = () => {
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })
  
  const { ref: servicesRef, inView: servicesInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  
  const { ref: expertiseRef, inView: expertiseInView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const pharmacovigilanceServices = [
    {
      title: "Safety Data Collection & Processing",
      description: "Collection, processing and submission of drug safety reports to regulatory authorities, providing safety information to authorized government agencies.",
      icon: "🛡️"
    },
    {
      title: "Literature & Media Monitoring",
      description: "Monitoring official publications, medical literature, and medical websites for drug safety information and adverse reactions.",
      icon: "📊"
    },
    {
      title: "Regulatory Query Response",
      description: "Preparation of responses to queries from authorized federal executive authorities on drug safety monitoring issues.",
      icon: "📋"
    },
    {
      title: "Healthcare Consultation",
      description: "Providing consultations to consumers and healthcare professionals via phone and email regarding drug applications and adverse reactions.",
      icon: "💬"
    }
  ]

  const registrationServices = [
    {
      title: "Registration Dossier Preparation",
      description: "Preparation and submission of registration dossiers for pharmaceutical products and amendments, including materials and samples according to established requirements.",
      icon: "📁"
    },
    {
      title: "State Registration Process",
      description: "Conducting state registration work for pharmaceutical products and making changes to registration dossiers.",
      icon: "✅"
    },
    {
      title: "Regulatory Compliance",
      description: "Preparation of responses to queries from authorized authorities during state registration, confirmation, and dossier amendments.",
      icon: "⚖️"
    }
  ]

  const features = [
    { number: '15+', label: 'Years Combined Experience', icon: '🏥' },
    { number: '100%', label: 'Regulatory Compliance', icon: '✓' },
    { number: '24/7', label: 'Support Available', icon: '🕒' },
    { number: '3', label: 'Countries Served', icon: '🌍' }
  ]

  return (
    <div className="medical-page">
      {/* Hero Section */}
      <section ref={heroRef} className={`medical-hero ${heroInView ? 'fade-in' : ''}`}>
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <div className="medical-pattern"></div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-icon">🏥</span>
              Medical & Pharmaceutical Services
            </div>
            
            <h1 className="hero-title">
              Pharmaceutical Excellence & 
              <span className="highlight"> Regulatory Compliance</span>
            </h1>
            
            <p className="hero-description">
              Professional pharmacovigilance and pharmaceutical registration services in Central Asia. 
              We ensure quality, compliance, and safety in pharmaceutical operations with expertise 
              in regulatory affairs and drug safety monitoring.
            </p>
            
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Get Consultation
              </Link>
              <Link to="#services" className="btn btn-outline">
                Our Services
              </Link>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="medical-icon-grid">
              <div className="medical-icon">🧬</div>
              <div className="medical-icon">💊</div>
              <div className="medical-icon">🔬</div>
              <div className="medical-icon">📋</div>
              <div className="medical-icon">🏥</div>
              <div className="medical-icon">⚕️</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-number">{feature.number}</div>
                <div className="feature-label">{feature.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pharmacovigilance Services */}
      <section ref={servicesRef} id="services" className={`services-section ${servicesInView ? 'fade-in' : ''}`}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Pharmacovigilance Services</h2>
            <p className="section-subtitle">
              Comprehensive drug safety monitoring and regulatory compliance services
            </p>
          </div>
          
          <div className="services-grid">
            {pharmacovigilanceServices.map((service, index) => (
              <div key={index} className="service-card" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Services */}
      <section ref={expertiseRef} className={`registration-section ${expertiseInView ? 'fade-in' : ''}`}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Drug Registration Services</h2>
            <p className="section-subtitle">
              Complete pharmaceutical registration and regulatory documentation support
            </p>
          </div>
          
          <div className="registration-grid">
            {registrationServices.map((service, index) => (
              <div key={index} className="registration-card" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="card-header">
                  <div className="card-icon">{service.icon}</div>
                  <h3 className="card-title">{service.title}</h3>
                </div>
                <p className="card-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <div className="container">
          <div className="why-choose-content">
            <div className="content-left">
              <h2 className="section-title">Why Choose Saidzoda Medical</h2>
              <div className="advantages">
                <div className="advantage-item">
                  <div className="advantage-icon">🎯</div>
                  <div className="advantage-content">
                    <h4>Expert Compliance</h4>
                    <p>Deep understanding of regulatory requirements in Central Asian markets</p>
                  </div>
                </div>
                
                <div className="advantage-item">
                  <div className="advantage-icon">⚡</div>
                  <div className="advantage-content">
                    <h4>Fast Processing</h4>
                    <p>Streamlined processes for quick turnaround times without compromising quality</p>
                  </div>
                </div>
                
                <div className="advantage-item">
                  <div className="advantage-icon">🔒</div>
                  <div className="advantage-content">
                    <h4>Data Security</h4>
                    <p>Highest standards of data protection and confidentiality for all client information</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="content-right">
              <div className="medical-visual">
                <div className="visual-circle">
                  <div className="center-logo">⚕️</div>
                  <div className="orbit orbit-1">
                    <div className="orbit-item">📋</div>
                  </div>
                  <div className="orbit orbit-2">
                    <div className="orbit-item">🛡️</div>
                  </div>
                  <div className="orbit orbit-3">
                    <div className="orbit-item">⚖️</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  )
}

export default Medical