import React, { useRef } from 'react';
import puffy1x from '../assets/devendra_puffy-1x.webp';
import puffy2x from '../assets/devendra_puffy-2x.webp';

/**
 * Inflated "DEVENDRA" wordmark (rendered artwork). Decorative: the surrounding heading
 * carries the readable name. Tilts gently toward the pointer on hover-capable devices.
 */
const PuffyName = ({ className = '', priority = false, sizes = '(max-width: 960px) 94vw, 900px' }) => {
    const ref = useRef(null);

    const onMove = (e) => {
        const el = ref.current;
        if (!el || e.pointerType !== 'mouse') return;
        const box = el.getBoundingClientRect();
        const x = (e.clientX - box.left) / box.width - 0.5;
        const y = (e.clientY - box.top) / box.height - 0.5;
        el.style.setProperty('--tx', `${(x * 10).toFixed(2)}deg`);
        el.style.setProperty('--ty', `${(-y * 12).toFixed(2)}deg`);
    };
    const onLeave = () => {
        ref.current?.style.setProperty('--tx', '0deg');
        ref.current?.style.setProperty('--ty', '0deg');
    };

    return (
        <img
            ref={ref}
            src={puffy1x}
            srcSet={`${puffy1x} 1100w, ${puffy2x} 1800w`}
            sizes={sizes}
            width="2100"
            height="411"
            alt=""
            className={`puffy-name ${className}`}
            fetchPriority={priority ? 'high' : undefined}
            loading={priority ? undefined : 'lazy'}
            decoding="async"
            draggable="false"
            onPointerMove={onMove}
            onPointerLeave={onLeave}
        />
    );
};

export default PuffyName;
