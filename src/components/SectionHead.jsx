import React from 'react';
import { ScallopBadge, Squiggle } from './Doodles';

/** "01  SELECTED WORK" label + big handwritten heading used at the top of every section. */
const SectionHead = ({ num, label, title, intro, center = false }) => (
    <header className={`section-head reveal ${center ? 'is-center' : ''}`}>
        <div className="section-label">
            {num && <ScallopBadge>{num}</ScallopBadge>}
            <span className="section-label-text">
                {label}
                <Squiggle className="section-label-squiggle" />
            </span>
        </div>
        {title && <h2 className="section-title">{title}</h2>}
        {intro && <p className="section-intro">{intro}</p>}
    </header>
);

export default SectionHead;
