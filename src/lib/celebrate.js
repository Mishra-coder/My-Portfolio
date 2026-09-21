const PALETTES = {
    lime: ['#84cc16', '#a3e635', '#bef264', '#10b981'],
    indigo: ['#6366f1', '#38bdf8', '#a855f7', '#10b981'],
};

/** One confetti burst; silently no-ops where canvas isn't available. */
export function celebrate({ palette = 'lime', particleCount = 90, spread = 70, y = 0.6 } = {}) {
    // canvas-confetti is only needed after a click, so it stays out of the initial bundle.
    import('canvas-confetti')
        .then(({ default: confetti }) => confetti({ particleCount, spread, origin: { y }, colors: PALETTES[palette] }))
        .catch(() => { /* canvas unavailable — nothing to celebrate visually */ });
}
