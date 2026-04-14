import React from 'react';

const Resume = () => {
    const resumePdf = "/DEVENDRA_RESUME.pdf";

    return (
        <article className="resume active" data-page="resume">
            <header className="resume-header">
                <h2 className="h2 article-title">Resume</h2>
                <a href={resumePdf} download="Devendra_Mishra_Resume.pdf" className="download-btn">
                    <ion-icon name="download-outline"></ion-icon>
                    <span>Download CV</span>
                </a>
            </header>

            <section className="resume-viewer" style={{ padding: '0', overflow: 'hidden', background: '#fff' }}>
                <iframe
                    src={`${resumePdf}#view=FitH&toolbar=0`}
                    width="100%"
                    height="1150px"
                    title="Resume PDF"
                    style={{ border: 'none', display: 'block' }}
                >
                    <p>Your browser does not support iframes. <a href={resumePdf}>Click here to download the PDF.</a></p>
                </iframe>
            </section>
        </article>
    );
};

export default Resume;
