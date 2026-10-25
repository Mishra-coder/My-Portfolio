import React, { useEffect, useState } from 'react';

const USER = 'Mishra-coder';
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** Last-year GitHub contribution calendar (public data); hides itself if the API is unreachable. */
const GithubGraph = () => {
    const [data, setData] = useState(null);
    const [failed, setFailed] = useState(false);

    useEffect(() => {
        const ctrl = new AbortController();
        fetch(`https://github-contributions-api.jogruber.de/v4/${USER}?y=last`, { signal: ctrl.signal })
            .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
            .then(setData)
            .catch((err) => { if (err?.name !== 'AbortError') setFailed(true); });
        return () => ctrl.abort();
    }, []);

    if (failed) return null;

    // Group days into week columns starting on Sunday (like GitHub).
    const days = data?.contributions || [];
    const weeks = [];
    if (days.length) {
        const pad = new Date(days[0].date).getDay();
        const cells = [...Array(pad).fill(null), ...days];
        for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
    }
    // One label per month change, skipping any that would collide with the previous label.
    let lastLabel = -4;
    const monthLabels = weeks.map((week, i) => {
        const first = week.find(Boolean);
        const prev = weeks[i - 1]?.find(Boolean);
        if (!first || (prev && new Date(prev.date).getMonth() === new Date(first.date).getMonth())) return '';
        if (i - lastLabel < 4) return '';
        lastLabel = i;
        return MONTHS[new Date(first.date).getMonth()];
    });

    return (
        <div className="gh-card soft-card reveal">
            {!data ? (
                <div className="gh-skeleton" aria-label="Loading GitHub activity" />
            ) : (
                <>
                    <div className="gh-scroll">
                        <div className="gh-grid" style={{ '--weeks': weeks.length }}>
                            <div className="gh-months" aria-hidden="true">
                                {monthLabels.map((m, i) => <span key={i}>{m}</span>)}
                            </div>
                            <div className="gh-days" aria-hidden="true">
                                <span></span><span>Mon</span><span></span><span>Wed</span><span></span><span>Fri</span><span></span>
                            </div>
                            <div className="gh-cells">
                                {weeks.map((week, wi) => (
                                    <div key={wi} className="gh-week">
                                        {week.map((day, di) => day ? (
                                            <span key={di} className={`gh-cell l${day.level}`} title={`${day.count} contributions on ${day.date}`} />
                                        ) : <span key={di} className="gh-cell is-empty" />)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="gh-foot">
                        <span>{data.total?.lastYear ?? 0} contributions in the last year</span>
                        <span className="gh-legend" aria-hidden="true">
                            Less <i className="gh-cell l0" /><i className="gh-cell l1" /><i className="gh-cell l2" /><i className="gh-cell l3" /><i className="gh-cell l4" /> More
                        </span>
                    </div>
                </>
            )}
        </div>
    );
};

export default GithubGraph;
