import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | CalcHub</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="calc-page-layout">
        <div className="calc-main">
          <div className="glass-panel" style={{ padding: '3rem', maxWidth: '600px', margin: '0 auto', width: '100%' }}>
            <h1 className="h1" style={{ marginBottom: '1rem' }}>Contact Us</h1>
            <p className="text-body" style={{ marginBottom: '2rem' }}>
              Have a question about a calculation formula? Want to request a new calculator? 
              Drop us a message below and we will get back to you!
            </p>
            
            {submitted ? (
              <div style={{ background: 'var(--accent)', color: 'white', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
                <h3 className="h3">Message Sent!</h3>
                <p>Thanks for reaching out. We will get back to you shortly.</p>
                <button 
                  className="btn-secondary" 
                  style={{ marginTop: '1rem', background: 'rgba(255,255,255,0.2)', color: 'white' }}
                  onClick={() => setSubmitted(false)}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="input-group">
                  <label className="input-label">Name</label>
                  <input type="text" className="input-field" required />
                </div>
                
                <div className="input-group">
                  <label className="input-label">Email Address</label>
                  <input type="email" className="input-field" required />
                </div>
                
                <div className="input-group">
                  <label className="input-label">Your Message</label>
                  <textarea 
                    className="input-field" 
                    rows="5" 
                    required
                    style={{ resize: 'vertical', fontFamily: 'inherit' }}
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </form>
            )}

            <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-secondary)' }}>
              <strong>Direct Email:</strong>
              <a href="mailto:support@calchub.com" style={{ color: 'var(--primary)' }}>support@calchub.com</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
