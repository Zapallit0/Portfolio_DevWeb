import React from 'react';
import './OnDevelopment.css';

const OnDevelopment = () => {
  return (
    <div className="under-construction">
      <div className="text-section">
        <h1>🚧 En Construcción 🚧</h1>
        <p>Estamos trabajando en esta sección, vuelve pronto.</p>
      </div>

      <div className="svg-wrap">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="construction-svg"
        >
          {/* Floor line */}
          <rect 
            x="0" 
            y="180" 
            width="200" 
            height="4" 
            fill="#555555"
          />
          
          {/* Hammer group */}
          <g id="hammer">
            {/* Mango del martillo */}
            <rect 
              x="95" 
              y="60" 
              width="10" 
              height="100" 
              rx="5" 
              fill="#8B4513"
            />
            {/* Cabeza del martillo */}
            <rect 
              x="80" 
              y="50" 
              width="40" 
              height="20" 
              rx="4" 
              fill="#C0C0C0"
            />
            {/* Reflejo en el martillo */}
            <rect 
              x="85" 
              y="52" 
              width="8" 
              height="16" 
              rx="2" 
              fill="#E8E8E8"
            />
          </g>
          
          {/* Partículas de impacto */}
          <g className="impact-particles">
            <circle 
              cx="70" 
              cy="175" 
              r="3" 
              fill="#FFD700" 
              className="particle particle-1"
            />
            <circle 
              cx="130" 
              cy="175" 
              r="2" 
              fill="#FFA500" 
              className="particle particle-2"
            />
            <circle 
              cx="100" 
              cy="175" 
              r="2.5" 
              fill="#FF6347" 
              className="particle particle-3"
            />
            <circle 
              cx="85" 
              cy="178" 
              r="2" 
              fill="#32CD32" 
              className="particle particle-1"
            />
            <circle 
              cx="115" 
              cy="178" 
              r="1.5" 
              fill="#FF69B4" 
              className="particle particle-2"
            />
          </g>
        </svg>
      </div>

      <button 
        className="back-button"
        onClick={() => window.history.back()}
      >
        Volver al inicio
      </button>
    </div>
  );
};

export default OnDevelopment;