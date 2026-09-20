import { useEffect } from 'react';

const MAX_DEG = 8;

/**
 * Gives every `.tilt-3d` element a realistic 3D perspective tilt with
 * dynamic cursor-following specular glow reflection.
 */
export default function useTilt() {
    useEffect(() => {
        const isTouch = window.matchMedia('(hover: none)').matches;
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (isTouch || prefersReducedMotion) return;

        let activeEl = null;

        const reset = (el) => {
            if (!el) return;
            el.classList.remove('is-tilting');
            el.style.setProperty('--rx', '0deg');
            el.style.setProperty('--ry', '0deg');
            el.style.setProperty('--glow-opacity', '0');
        };

        const onMove = (event) => {
            const el = event.target.closest?.('.tilt-3d');

            if (el !== activeEl) {
                if (activeEl) reset(activeEl);
                activeEl = el;
                if (el) {
                    el.classList.add('is-tilting');
                    el.style.setProperty('--glow-opacity', '1');
                }
            }
            if (!el) return;

            const box = el.getBoundingClientRect();
            const x = (event.clientX - box.left) / box.width;
            const y = (event.clientY - box.top) / box.height;

            const rotateX = ((0.5 - y) * MAX_DEG * 2).toFixed(2);
            const rotateY = ((x - 0.5) * MAX_DEG * 2).toFixed(2);

            el.style.setProperty('--rx', `${rotateX}deg`);
            el.style.setProperty('--ry', `${rotateY}deg`);
            el.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`);
            el.style.setProperty('--my', `${(y * 100).toFixed(1)}%`);
        };

        const onLeave = () => {
            if (activeEl) reset(activeEl);
            activeEl = null;
        };

        window.addEventListener('pointermove', onMove, { passive: true });
        document.addEventListener('pointerleave', onLeave);

        return () => {
            window.removeEventListener('pointermove', onMove);
            document.removeEventListener('pointerleave', onLeave);
            if (activeEl) reset(activeEl);
        };
    }, []);
}
