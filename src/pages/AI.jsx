import React, { useEffect, useState } from 'react';
import './AI.scss';

const AI = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for subtle parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Models data - matching ai.saidzoda.com exactly
  const models = [
    {
      name: "CA-8B",
      tag: "INFRASTRUCTURE",
      status: "LIVE / DEPLOYED",
      desc: "The foundational Large Language Model trained specifically on Central Asian linguistics, history, and cultural nuance.",
      context: "8k – 32k",
      color: "#3b82f6"
    },
    {
      name: "Ameena",
      tag: "EDUCATION",
      status: "PUBLIC BETA",
      desc: "Fine-tuned for STEM tutoring and multilingual interaction. The brain behind ameena.tj.",
      context: "8k – 32k",
      color: "#10b981"
    },
    {
      name: "Asad-27B",
      tag: "ENTERPRISE",
      status: "PRIVATE PILOT",
      desc: "High-parameter model designed for complex reasoning, legal analysis, and banking operations.",
      context: "8k – 32k",
      color: "#8b5cf6"
    },
    {
      name: "Nano-0.6B",
      tag: "EDGE / MOBILE",
      status: "OPTIMIZING",
      desc: "Ultra-lightweight quantization for offline on-device inference. AI for the remotest regions.",
      context: "8k – 32k",
      color: "#f59e0b"
    }
  ];

  return (
    <div className="ai-page">
      {/* Background Grid Pattern */}
      <div className="background-grid"></div>

      {/* Main Content */}
      <div className="ai-content">

        {/* Hero Section */}
        <section className="hero-section">
          <div className="badge">SOVEREIGN AI INFRASTRUCTURE</div>
          <h1 className="main-title">
            Central Asia’s <br />
            <span className="gradient-text">Native Intelligence</span>
          </h1>
          <p className="subtitle">
            We built the AI that speaks Tajik, Uzbek, and Kyrgyz natively. Powered by 500M+ tokens of regional context. Deployment-ready for Enterprise and Government.
          </p>
          <div className="cta-group">
            <a href="https://ameena.tj" target="_blank" rel="noopener noreferrer" className="btn-primary">
              🤖 Try Ameena (Beta)
            </a>
            <a href="mailto:Tohir@saidzoda.com?subject=API Access Request" className="btn-secondary">
              Request API Access
            </a>
          </div>
          <div className="chat-demo">
            <div className="input-box">Salom, how are you?</div>
            <div className="output-box">
              Salom! Man yaxshi, rahmat. How can Saidzoda Engineering help your organization today?
            </div>
          </div>
        </section>

        {/* The Unreplicable Data Moat */}
        <section className="data-moat-section">
          <h2 className="section-title">The Unreplicable Data Moat</h2>
          <p className="section-desc">
            Global models rely on translation layers that lose nuance. CA-8B is trained on the largest proprietary dataset of Central Asian literature, law, news, and oral history.
          </p>
          <div className="moat-stats">
            <div className="stat-item">
              <div className="stat-number">500M+</div>
              <div className="stat-label">Native Tokens</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Cultural Alignment</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">0%</div>
              <div className="stat-label">Data Leakage</div>
            </div>
          </div>
          <div className="data-sources">
            <div className="source-box">LITERATURE</div>
            <div className="source-box highlight">LEGAL CODE</div>
            <div className="source-box">HISTORY</div>
          </div>
        </section>

        {/* The Model Garden */}
        <section className="model-garden-section">
          <h2 className="section-title">The Model Garden</h2>
          <div className="models-grid">
            {models.map((model, idx) => (
              <div key={idx} className="model-card" style={{ borderColor: model.color }}>
                <div className="card-header">
                  <span className="tag" style={{ backgroundColor: `${model.color}20`, color: model.color }}>
                    {model.tag}
                  </span>
                  <span className="status">{model.status}</span>
                </div>
                <h3 className="model-name">{model.name}</h3>
                <p className="model-desc">{model.desc}</p>
                <div className="context-info">
                  <span>Context Window</span>
                  <span>{model.context}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ecosystem Integration */}
        <section className="ecosystem-section">
          <div className="ecosystem-grid">
            <div className="eco-item">
              <h3>Istem.tj Integration</h3>
              <p>Empowering the next generation with AI tutors.</p>
            </div>
            <div className="eco-item">
              <h3>Native TTS</h3>
              <p><em>In Development</em> — Text-to-Speech in local dialects.</p>
            </div>
            <div className="eco-item">
              <h3>On-Premise</h3>
              <p>Secure deployment for banks & ministries.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <h2>Ready to Deploy Sovereign AI?</h2>
          <p>Partner with Central Asia's AI Leader.</p>
          <a href="mailto:Tohir@saidzoda.com?subject=Enterprise AI Partnership" className="btn-glow">
            Schedule Enterprise Demo
          </a>
        </section>

      </div>

      {/* Floating Tech Elements (Subtle) */}
      <div className="floating-tech">
        <div className="tech-element" style={{ top: '10%', left: '5%' }}>CA-8B</div>
        <div className="tech-element" style={{ top: '20%', right: '8%' }}>AMEENA</div>
        <div className="tech-element" style={{ top: '60%', left: '3%' }}>0.6B</div>
        <div className="tech-element" style={{ top: '75%', right: '10%' }}>∞</div>
      </div>
    </div>
  );
};

export default AI;