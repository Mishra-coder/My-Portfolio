import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ fullname: '', email: '', message: '' });
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
        setTimeout(() => {
            alert("Message sent! (Simulation)");
            setIsSending(false);
            setFormData({ fullname: '', email: '', message: '' });
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <article className="contact active" data-page="contact">
            <header>
                <h2 className="h2 article-title">Contact</h2>
            </header>

            <section className="contact-form">
                <h3 className="h3 form-title">Contact Form</h3>

                <form onSubmit={handleSubmit} className="form" data-form>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            name="fullname"
                            className="form-input"
                            placeholder="Full name"
                            required
                            data-form-input
                            value={formData.fullname}
                            onChange={handleChange}
                        />

                        <input
                            type="email"
                            name="email"
                            className="form-input"
                            placeholder="Email address"
                            required
                            data-form-input
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <textarea
                        name="message"
                        className="form-input"
                        placeholder="Your Message"
                        required
                        data-form-input
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>

                    <button className="form-btn" type="submit" disabled={isSending} data-form-btn>
                        <ion-icon name="paper-plane"></ion-icon>
                        <span>{isSending ? 'Sending...' : 'Send Message'}</span>
                    </button>
                </form>
            </section>
        </article>
    );
};

export default Contact;
