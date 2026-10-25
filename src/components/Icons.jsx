// Puffy 3D icons (src/assets/icons, generated at 96/192px from src/assets/source/icons).
const PUFFY = import.meta.glob('../assets/icons/*.webp', { eager: true, import: 'default' });

/** Transparent puffy PNG-style icon; decorative by default, pass `alt` when it stands alone. */
export const PuffyIcon = ({ name, size = 64, alt = "", className = "" }) => {
    const x1 = PUFFY[`../assets/icons/${name}-1x.webp`];
    const x2 = PUFFY[`../assets/icons/${name}-2x.webp`];
    return (
        <img
            src={x1}
            srcSet={`${x1} 1x, ${x2} 2x`}
            width={size}
            height={size}
            alt={alt}
            loading="lazy"
            decoding="async"
            draggable="false"
            data-icon={name}
            className={`puffy-icon ${className}`.trim()}
        />
    );
};

export const LaurelWreath = ({ size = 26, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M7 21c-2.5-3-3-8 1-13 1.5 2.5 1.5 5 0 8" />
        <path d="M5 14c-1.5-1.5-2.5-4-1-6" />
        <path d="M7 9C6 7.5 5.5 5.5 6.5 4" />
        <path d="M17 21c2.5-3 3-8-1-13-1.5 2.5-1.5 5 0 8" />
        <path d="M19 14c1.5-1.5 2.5-4 1-6" />
        <path d="M17 9c1-1.5 1.5-3.5.5-5" />
        <circle cx="12" cy="7" r="1.5" fill="currentColor" />
    </svg>
);
