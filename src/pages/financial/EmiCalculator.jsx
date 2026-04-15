import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AdPlaceholder from '../../components/AdPlaceholder';
import StepByStep from '../../components/StepByStep';

export default function EmiCalculator() {
  const [principal, setPrincipal] = useState('100000');
  const [rate, setRate] = useState('10');
  const [tenure, setTenure] = useState('12');
  const [result, setResult] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);
  const [steps, setSteps] = useState([]);

  const calculateEMI = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const n = parseFloat(tenure);

    if (isNaN(p) || isNaN(r) || isNaN(n) || p <= 0 || r <= 0 || n <= 0) {
      alert("Please enter valid positive numbers");
      return;
    }

    const rMonthly = r / (12 * 100);
    const emi = p * rMonthly * Math.pow(1 + rMonthly, n) / (Math.pow(1 + rMonthly, n) - 1);
    
    const emiFixed = emi.toFixed(2);
    const totalPayment = (emi * n).toFixed(2);
    const interest = (emi * n - p).toFixed(2);

    setResult(emiFixed);
    setTotalAmount(totalPayment);
    setTotalInterest(interest);

    setSteps([
      `Convert annual interest rate to monthly decimal: <b>${r}% / (12 * 100) = ${rMonthly.toFixed(6)}</b> (r)`,
      `Calculate (1 + r)^n: <b>(1 + ${rMonthly.toFixed(6)}) ^ ${n} = ${Math.pow(1 + rMonthly, n).toFixed(4)}</b>`,
      `Apply formula EMI = P × r × (1 + r)^n / ((1 + r)^n - 1).`,
      `EMI = <b>${p} × ${rMonthly.toFixed(6)} × ${Math.pow(1 + rMonthly, n).toFixed(4)} / (${Math.pow(1 + rMonthly, n).toFixed(4)} - 1) = $${emiFixed}</b>`,
      `Total Payment = EMI × Tenure = <b>$${emiFixed} × ${n} = $${totalPayment}</b>`,
      `Total Interest = Total Payment - Principal = <b>$${totalPayment} - $${p} = $${interest}</b>`
    ]);
  };

  React.useEffect(() => {
    calculateEMI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Helmet>
        <title>EMI & Loan Calculator | Fast & Free Tool</title>
        <meta name="description" content="Calculate your Equated Monthly Installment (EMI) for personal, auto, and home loans. Get precise breakdown of interest and total payable amount." />
      </Helmet>

      <div className="calc-page-layout">
        <div className="calc-main">
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h1 className="h1" style={{ marginBottom: '1rem', fontSize: '2rem' }}>EMI & Loan Calculator</h1>
            <p className="text-body" style={{ marginBottom: '2rem' }}>
              Calculate your monthly payments for any type of loan including home, auto, and personal loans.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr)', gap: '1.5rem' }}>
              <div className="input-group">
                <label className="input-label">Principal Loan Amount ($)</label>
                <input 
                  type="number" 
                  className="input-field" 
                  value={principal} 
                  onChange={(e) => setPrincipal(e.target.value)} 
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div className="input-group">
                  <label className="input-label">Interest Rate (% p.a.)</label>
                  <input 
                    type="number" 
                    className="input-field" 
                    value={rate} 
                    onChange={(e) => setRate(e.target.value)} 
                  />
                </div>

                <div className="input-group">
                  <label className="input-label">Loan Tenure (Months)</label>
                  <input 
                    type="number" 
                    className="input-field" 
                    value={tenure} 
                    onChange={(e) => setTenure(e.target.value)} 
                  />
                </div>
              </div>
            </div>

            <button className="btn-primary" onClick={calculateEMI} style={{ marginTop: '1rem' }}>
              Calculate EMI
            </button>

            {result && (
              <div className="result-box accent">
                <div className="result-label">Equated Monthly Installment (EMI)</div>
                <div className="result-value">${result}</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem', background: 'rgba(0,0,0,0.1)', padding: '1rem', borderRadius: '8px' }}>
                  <div>
                    <div className="result-label" style={{ fontSize: '0.875rem' }}>Total Interest</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>${totalInterest}</div>
                  </div>
                  <div>
                    <div className="result-label" style={{ fontSize: '0.875rem' }}>Total Amount Payable</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>${totalAmount}</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <StepByStep 
            formula="EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)"
            steps={steps}
          />
        </div>

        <aside className="calc-sidebar-content">
          <AdPlaceholder type="rectangle" />
          
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 className="h3" style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>What is EMI?</h3>
            <p className="text-body" style={{ fontSize: '0.95rem' }}>
              Equated Monthly Installment (EMI) is a fixed payment amount made by a borrower to a lender at a specified date each calendar month. EMIs are used to pay off both interest and principal each month so that over a specified number of years, the loan is paid off in full.
            </p>
          </div>
          
          <AdPlaceholder type="rectangle" height="600px" />
        </aside>
      </div>
    </>
  );
}
