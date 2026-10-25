import React from 'react';
import {
    BrainCircuit,
    Sparkles,
    Code2,
    Smartphone,
    Database,
    Zap
} from 'lucide-react';
import SectionHead from './SectionHead';
import { Sparkle } from './Doodles';

/** Focus statement + "Here's how it works" process (previously the lower half of the home page). */
const Approach = () => (
    <>
        <section className="section focus-section">
            <div className="container">
                <SectionHead label="Focus" center />
                <h2 className="focus-statement reveal">
                    my focus is on blending <em className="hand-underline">clear strategy</em>, <strong>scalable architecture</strong>, and <strong>intelligent AI</strong> to craft experiences that solve real problems.
                </h2>
                <Sparkle className="focus-sparkle" />

                <div className="chip-row is-center reveal">
                    <span className="chip"><Zap size={14} /> Full-Stack Engineering</span>
                    <span className="chip"><BrainCircuit size={14} /> Applied AI & ML</span>
                    <span className="chip"><Smartphone size={14} /> React Native Mobile</span>
                    <span className="chip"><Database size={14} /> Distributed Databases</span>
                    <span className="chip"><Code2 size={14} /> Clean Architecture</span>
                    <span className="chip"><Sparkles size={14} /> Open-Source Leadership</span>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <SectionHead num="02" label="My methodology" title="Here's how it works" />

                <div className="process-grid">
                    <div className="stamp-card process-card reveal tilt-3d">
                        <span className="process-num">01</span>
                        <h3 className="process-title">Discover</h3>
                        <p className="process-desc">
                            Deep dive into requirements, architecture feasibility, data pipelines, and user-centric problem analysis.
                        </p>
                    </div>

                    <svg className="process-link" viewBox="0 0 100 40" fill="none" aria-hidden="true">
                        <path d="M6 25 C 35 5, 65 35, 94 15" stroke="currentColor" strokeWidth="3" strokeDasharray="6 7" strokeLinecap="round" />
                    </svg>

                    <div className="stamp-card process-card reveal tilt-3d">
                        <span className="process-num">02</span>
                        <h3 className="process-title">Design & Build</h3>
                        <p className="process-desc">
                            Engineering responsive React/React Native frontends, high-concurrency Node.js backends, and fine-tuned AI algorithms.
                        </p>
                    </div>

                    <svg className="process-link" viewBox="0 0 100 40" fill="none" aria-hidden="true">
                        <path d="M6 15 C 35 35, 65 5, 94 25" stroke="currentColor" strokeWidth="3" strokeDasharray="6 7" strokeLinecap="round" />
                    </svg>

                    <div className="stamp-card process-card reveal tilt-3d">
                        <span className="process-num">03</span>
                        <h3 className="process-title">Deliver</h3>
                        <p className="process-desc">
                            Production deployment with automated CI/CD, performance benchmarks, and rigorous quality testing.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
);

export default Approach;
