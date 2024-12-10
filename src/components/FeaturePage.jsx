// src/components/FeaturePage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import '../assets/styles.css';

const FeaturePage = () => {
  const { feature } = useParams();

  return (
    <div className="feature-page">
      <div className="container">
        <h1>{feature.replace(/-/g, ' ').toUpperCase()}</h1>
        <p>This is the {feature.replace(/-/g, ' ')} page.</p>
      </div>
    </div>
  );
};

export default FeaturePage;