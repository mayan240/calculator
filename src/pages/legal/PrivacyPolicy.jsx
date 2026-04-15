import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | CalcHub</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="calc-page-layout" style={{ gridTemplateColumns: '1fr' }}>
        <div className="calc-main">
          <div className="glass-panel" style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto' }}>
            <h1 className="h1" style={{ marginBottom: '2rem' }}>Privacy Policy</h1>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: '1.7' }}>
              <p>Last updated: April 16, 2026</p>

              <section>
                <h2 className="h3" style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>1. Introduction</h2>
                <p>
                  Welcome to CalcHub. We respect your privacy and are committed to protecting your personal data. 
                  This privacy policy will inform you as to how we look after your data when you visit our website 
                  (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                </p>
              </section>

              <section>
                <h2 className="h3" style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>2. Data We Collect</h2>
                <p>
                  Our calculators process numbers and data directly within your browser. We do NOT store, transmit, or save the 
                  inputs you type into our calculators (like your financial data or physical health metrics) on our servers. 
                  All calculations are executed locally on your device for absolute privacy.
                </p>
              </section>

              <section>
                <h2 className="h3" style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>3. Cookies and Advertising (Google AdSense)</h2>
                <p>
                  We use cookies and similar tracking technologies to track the activity on our website and hold certain information. 
                  Third party vendors, including Google, use cookies to serve ads based on your prior visits to our website or other websites.
                </p>
                <p style={{ marginTop: '0.5rem' }}>
                  Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites 
                  and/or other sites on the Internet. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)' }}>Ads Settings</a>.
                </p>
              </section>

              <section>
                <h2 className="h3" style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>4. Analytics</h2>
                <p>
                  We may use third-party Service Providers to monitor and analyze the use of our website to improve performance and user experience. 
                  These tools collect non-personally identifying information such as browser type, referring site, and the date/time of each visitor request.
                </p>
              </section>

              <section>
                <h2 className="h3" style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>5. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us via our Contact Us page.
                </p>
              </section>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
