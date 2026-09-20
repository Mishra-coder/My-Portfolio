import React from 'react';

/* Lightweight CSS/SVG "AI core" — replaces the three.js orb (no WebGL, no 520 KB chunk). */
const AiOrb = ({ size = 240 }) => (
    <div className="ai-orb" style={{ width: size, height: size }} aria-hidden="true">
        <span className="ai-orb-core" />
        <svg className="ai-orb-ring ring-1" viewBox="0 0 100 100"><ellipse cx="50" cy="50" rx="46" ry="18" /></svg>
        <svg className="ai-orb-ring ring-2" viewBox="0 0 100 100"><ellipse cx="50" cy="50" rx="46" ry="18" /></svg>
        <svg className="ai-orb-ring ring-3" viewBox="0 0 100 100"><ellipse cx="50" cy="50" rx="46" ry="18" /></svg>
        <svg className="ai-orb-mesh" viewBox="0 0 100 100">
            <polygon points="50,6 88,28 88,72 50,94 12,72 12,28" />
            <polygon points="50,22 74,36 74,64 50,78 26,64 26,36" />
            <line x1="50" y1="6" x2="50" y2="22" /><line x1="88" y1="28" x2="74" y2="36" /><line x1="88" y1="72" x2="74" y2="64" />
            <line x1="50" y1="94" x2="50" y2="78" /><line x1="12" y1="72" x2="26" y2="64" /><line x1="12" y1="28" x2="26" y2="36" />
        </svg>
        <span className="ai-orb-dot d1" /><span className="ai-orb-dot d2" /><span className="ai-orb-dot d3" /><span className="ai-orb-dot d4" />
    </div>
);

export default AiOrb;
