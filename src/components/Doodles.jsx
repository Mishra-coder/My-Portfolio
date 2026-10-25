import React, { useId } from 'react';

/* Hand-drawn doodles and soft 3D props for the playful theme (pure SVG, no images). */

export const Crown = (props) => (
    <svg viewBox="0 0 66 40" fill="none" aria-hidden="true" {...props}>
        <path pathLength="1" d="M6 34 L9 8 L23 23 L33 4 L43 23 L57 8 L60 34 Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
);

export const Arcs = (props) => (
    <svg viewBox="0 0 64 30" fill="none" aria-hidden="true" {...props}>
        <path pathLength="1" d="M4 14 Q32 -2 60 12" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
        <path pathLength="1" d="M12 24 Q32 12 52 21" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
);

export const Sparkle = (props) => (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" {...props}>
        <path d="M20 2 C21.5 14 26 18.5 38 20 C26 21.5 21.5 26 20 38 C18.5 26 14 21.5 2 20 C14 18.5 18.5 14 20 2 Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
    </svg>
);

export const Squiggle = ({ className = '', ...props }) => (
    <svg viewBox="0 0 120 12" preserveAspectRatio="none" fill="none" aria-hidden="true" className={className} {...props}>
        <path d="M2 7 Q12 2 22 7 T42 7 T62 7 T82 7 T102 7 T118 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
);

export const Smile = (props) => (
    <svg viewBox="0 0 60 16" fill="none" aria-hidden="true" {...props}>
        <path pathLength="1" d="M3 4 Q30 20 57 4" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
);

/** Black scalloped "stamp" holding a section number. */
const scallopPath = (() => {
    const bumps = 12, r = 19, c = 24;
    let d = '';
    for (let i = 0; i <= bumps; i++) {
        const a = (i / bumps) * Math.PI * 2;
        const x = (c + r * Math.cos(a)).toFixed(2), y = (c + r * Math.sin(a)).toFixed(2);
        d += i === 0 ? `M${x} ${y}` : ` A5.2 5.2 0 0 1 ${x} ${y}`;
    }
    return d + 'Z';
})();

export const ScallopBadge = ({ children }) => (
    <span className="scallop-badge">
        <svg viewBox="0 0 48 48" aria-hidden="true"><path d={scallopPath} /></svg>
        <span>{children}</span>
    </span>
);

export const Bomb = (props) => {
    const id = useId();
    return (
        <svg viewBox="0 0 120 120" aria-hidden="true" {...props}>
            <defs>
                <radialGradient id={`${id}r`} cx=".35" cy=".3" r=".75">
                    <stop offset="0" stopColor="#6b6b6b" />
                    <stop offset=".45" stopColor="#222" />
                    <stop offset="1" stopColor="#050505" />
                </radialGradient>
            </defs>
            <path d="M74 36 Q86 18 98 22 Q106 25 104 14" stroke="#2b2622" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            <g className="bomb-spark">
                <path d="M104 4 L106 11 L113 9 L108 14 L114 19 L107 18 L105 25 L102 18 L95 20 L100 14 L95 9 L102 11 Z" fill="#ffb020" />
            </g>
            <rect x="64" y="30" width="20" height="16" rx="4" transform="rotate(38 74 38)" fill="#333" />
            <circle cx="52" cy="72" r="38" fill={`url(#${id}r)`} />
            <ellipse cx="38" cy="54" rx="11" ry="7" transform="rotate(-35 38 54)" fill="#fff" opacity=".28" />
        </svg>
    );
};

export const Starburst = (props) => {
    const pts = [];
    for (let i = 0; i < 28; i++) {
        const r = i % 2 === 0 ? 48 : 24 + ((i * 7) % 9);
        const a = (i / 28) * Math.PI * 2;
        pts.push(`${(50 + r * Math.cos(a)).toFixed(1)},${(50 + r * Math.sin(a)).toFixed(1)}`);
    }
    return (
        <svg viewBox="0 0 100 100" aria-hidden="true" {...props}>
            <polygon points={pts.join(' ')} fill="#141210" />
            <circle cx="52" cy="50" r="10" fill="#f4f1eb" />
        </svg>
    );
};
