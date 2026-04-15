import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | CalcHub</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="calc-page-layout" style={{ gridTemplateColumns: '1fr' }}>
        <div className="calc-main">
          <div className="glass-panel" style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto' }}>
            <h1 className="h1" style={{ marginBottom: '2rem' }}>Terms of Service</h1>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: '1.7' }}>
              <p>Last updated: April 16, 2026</p>

              <section>
                <h2 className="h3" style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>1. Acceptance of Terms</h2>
                <p>
                  By accessing and using CalcHub, you accept and agree to be bound by the terms and provision of this agreement. 
                  In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                </p>
              </section>

              <section>
                <h2 className="h3" style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>2. Informational Purposes Only</h2>
                <p>
                  All calculators, articles, and information provided by CalcHub are for educational and informational purposes only. 
                  They should not be considered professional financial, medical, or legal advice. 
                  While we strive to provide accurate calculation models, we cannot guarantee the complete accuracy of any results.
                </p>
              </section>

              <section>
                <h2 className="h3" style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>3. Medical Disclaimer (Health Calculators)</h2>
                <p>
                  Calculators such as the BMI or BMR tools are based on standard clinical formulas but are strictly for informational use. 
                  They are not intended to be a substitute for professional medical advice, diagnosis, or treatment. 
                  Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                </p>
              </section>

              <section>
                <h2 className="h3" style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>4. Financial Disclaimer</h2>
                <p>
                  Financial calculators provided on this site are intended for illustrative purposes. Results are estimates and do not 
                  constitute a guarantee of actual loan terms, investment returns, or financial outcomes from any specific institution.
                </p>
              </section>

              <section>
                <h2 className="h3" style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>5. Modifications</h2>
                <p>
                  CalcHub reserves the right to change these conditions from time to time as it sees fit and your continued use of the site 
                  will signify your acceptance of any adjustment to these terms.
                </p>
              </section>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
