import "./OnDevelopment.css";
import { Link } from "react-router-dom";
export default function OnDevelopment() {
  return (
     <div className="under-construction">
      <div className="text-section">
        <h1>🚧 En Construcción 🚧</h1>
        <p>Estamos trabajando en esta sección, vuelve pronto.</p>
      </div>

      {/* SVG Obrero martillando */}
      <div className="svg-wrap" role="img" aria-label="Obrero martillando">
        <svg
          viewBox="0 0 300 300"
          xmlns="http://www.w3.org/2000/svg"
          className="construction-svg"
        >
          {/* Obrero */}
          <g id="worker" transform="translate(150,160)">
            {/* Piernas */}
            <rect x="-18" y="40" width="12" height="45" rx="4" fill="#101720" />
            <rect x="6" y="40" width="12" height="45" rx="4" fill="#101720" />
            {/* Torso */}
            <rect x="-22" y="0" width="44" height="55" rx="8" fill="#1c2f93" />
            {/* Cabeza */}
            <circle cx="0" cy="-25" r="14" fill="#ffffff" stroke="#101720" strokeWidth="3" />
            {/* Casco */}
            <path d="M -18 -28 a18 18 0 0 1 36 0 v8 h-36z" fill="#1c2f93" stroke="#101720" strokeWidth="3" />

            {/* Brazo izquierdo fijo */}
            <rect x="-38" y="10" width="18" height="10" rx="4" fill="#1c2f93" />

            {/* Brazo derecho animado con martillo */}
            <g id="arm" transform="translate(20,15)">
              <rect x="0" y="-5" width="30" height="10" rx="4" fill="#1c2f93" />
              <circle cx="32" cy="0" r="6" fill="#ffffff" stroke="#101720" strokeWidth="2" />
              {/* Martillo */}
              <g transform="translate(38,0)">
                <rect x="0" y="-2" width="18" height="4" rx="2" fill="#101720" />
                <rect x="14" y="-8" width="6" height="16" rx="2" fill="#101720" />
              </g>
            </g>
          </g>

          {/* Viga para golpear */}
          <rect x="100" y="210" width="100" height="18" rx="4" fill="#ffffff" stroke="#101720" strokeWidth="3" />
        </svg>
      </div>

      {/* Botón para volver a Home */}
      <Link to="/" className="back-button">
        Volver al inicio
      </Link>
    </div>
  );
}