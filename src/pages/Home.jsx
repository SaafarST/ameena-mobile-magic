
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
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.2, triggerOnce: true })
  const { ref: servicesRef, inView: servicesInView } = useInView({ threshold: 0.1, triggerOnce: true })
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.2, triggerOnce: true })

  const achievements = [
    { number: '100+', label: 'Active Learners', icon: '🚀', pulse: 'primary' },
    { number: '4', label: 'Languages Supported', icon: '🌐', pulse: 'success' },
    { number: '5+', label: 'AI Models Tuned', icon: '🧠', pulse: 'accent' },
    { number: '33', label: 'Schools Pipeline', icon: '🏫', pulse: 'primary' }
  ]

  return (
    <div className="home-page">
      <HeroSection />

      <section ref={aboutRef} className={`section about-section ${aboutInView ? 'fade-in' : ''}`}>
        <div className="section-bg-neural"></div>
        <div className="floating-code-particles">
          <div className="code-particle">{'<LLM>'}</div>
          <div className="code-particle">{'01'}</div>
          <div className="code-particle">{'{ TPU }'}</div>
          <div className="code-particle">{'</>'}</div>
          <div className="code-particle">{'AI'}</div>
        </div>

        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <div className="section-badge">🧬 Saidzoda AI Lab</div>
              <h2 className="section-title">Building Sovereign AI & Infrastructure for Central Asia</h2>
              <div className="company-highlight">
                <div className="highlight-badge"><span className="pulse-dot"></span>Est. 2024 • IT Park Resident</div>
                <p className="highlight-text">
                  We are the team behind <strong>Ameena</strong> — Central Asia’s first AI learning platform. We build sovereign LLMs and educational AI products, <strong>not client services.</strong>
                </p>
              </div>
              <div className="cta-buttons">
                <a href="https://ameena.tj" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-futuristic">
                  <span>Try Ameena AI</span>
                  <div className="btn-glow"></div>
                </a>
              </div>
            </div>

            <div className="about-visual">
              <div className="visual-container">
                <div className="tech-grid-bg"></div>
                <div className="central-hub">
                  <div className="hub-core">
                    {/* Updated logo source to ensure it exists */}
                    <img src="/images/logo/saidzoda-logo-dark.jpeg" alt="Saidzoda" className="hub-logo" />
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
            <h2 className="section-title">Our Technology Ventures</h2>
            <p className="section-subtitle">Innovation Divisions & Proprietary Products</p>
          </div>

          <div className="services-grid">
            <ServiceCard
              title="Ameena AI"
              icon="🧠"
              description="Central Asia's first Sovereign AI Education Platform. 100+ active learners, offline-first architecture."
              link="https://ameena.tj"
              isExternal={true}
              category="it"
              delay={100}
            />

            <ServiceCard
              title="Saidzoda AI Labs"
              icon="🧬"
              description="Fine-tuning Sovereign LLMs (CA-8B) on Google TPUs. Open-source research for Tajik & Uzbek."
              link="https://ai.saidzoda.com"
              isExternal={true}
              category="data"
              delay={200}
            />

            <ServiceCard
              title="Green Energy Infra"
              icon="☀️"
              description="Proprietary solar grid deployment and energy management systems."
              link="/services#solar"
              category="solar"
              delay={300}
            />

            <ServiceCard
              title="Civil Tech"
              icon="🏗️"
              description="Infrastructure engineering and technological development."
              link="/services#engineering"
              category="engineering"
              delay={400}
            />
          </div>
        </div>
      </section>

      <section ref={statsRef} className={`section stats-section ${statsInView ? 'fade-in' : ''}`}>
        <div className="stats-matrix-bg"></div>
        <div className="container">
          <div className="stats-header">
            <h3 className="stats-title">Our Impact</h3>
          </div>
          <div className="stats-grid">
            {achievements.map((item, index) => (
              <div key={index} className={`stat-item stat-${item.pulse}`} style={{ animationDelay: `${index * 200}ms` }}>
                <div className="stat-icon"><span>{item.icon}</span></div>
                <div className="stat-number">{item.number}</div>
                <div className="stat-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientsSection />
      <ContactCTA />
    </div>
  )
}

export default Home