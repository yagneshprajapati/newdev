// src/components/LandingScreen.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles.css';

const LandingScreen = () => {
  const features = [
    { icon: '🔍', label: 'Legal Research', path: '/legal-research' },
    { icon: '💬', label: 'Conversation Module', path: '/conversation' },
    { icon: '🗺️', label: 'Case Connection Map', path: '/case-map' },
    { icon: '📝', label: 'Contract Analysis', path: '/contract-analysis' },
    { icon: '🔍', label: 'Document Analysis', path: '/document-analysis' },
    { icon: '📝', label: 'Form Editor', path: '/form-editor' },
    { icon: '➕', label: 'Client Intake', path: '/client-intake' },
    { icon: '📊', label: 'Scenario Analyzer', path: '/scenario-analyzer' },
  ];

  return (
    <div className="landing-screen">
      <div className="container">
        <h1>Welcome to Legal Tech</h1>
        <div className="feature-grid">
          {features.map((feature, index) => (
            <Link key={index} to={feature.path} className="feature-item">
              <div className="icon">{feature.icon}</div>
              <div className="label">{feature.label}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
