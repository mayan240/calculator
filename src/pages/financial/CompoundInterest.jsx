import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AdPlaceholder from '../../components/AdPlaceholder';
import StepByStep from '../../components/StepByStep';

export default function CompoundInterest() {
  const [principal, setPrincipal] = useState('5000');
  const [rate, setRate] = useState('5');
  const [years, setYears] = useState('10');
  const [compoundFreq, setCompoundFreq] = useState('12'); // Monthly default
  const [result, setResult] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [steps, setSteps] = useState([]);

  const calculateCompoundInterst = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(years);
    const n = parseFloat(compoundFreq);

    if (isNaN(P) || isNaN(r) || isNaN(t) || isNaN(n) || P <= 0 || r <= 0 || t <= 0) return;

    // A = P(1 + r/n)^(nt)
    const A = P * Math.pow((1 + r / n), (n * t));
    const interest = A - P;

    setResult(A.toFixed(2));
    setTotalInterest(interest.toFixed(2));

    setSteps([
      `Convert rate to decimal: <b>${parseFloat(rate)} / 100 = ${r}</b> (r)`,
      `Calculate 'n × t' (compounding periods): <b>${n} × ${t} = ${n * t}</b>`,
      `Apply Formula: A = P × (1 + r/n)^(nt)`,
      `A = <b>${P} × (1 + ${r}/${n})^(${n * t})</b>`,
      `A = <b>$${A.toFixed(2)}</b>`,
      `Total Interest Earned = Final Amount - Principal = <b>$${A.toFixed(2)} - $${P} = $${interest.toFixed(2)}</b>`
    ]);
  };

  React.useEffect(() => {
    calculateCompoundInterst();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Helmet>
        <title>Compound Interest Calculator | Fast & Free</title>
        <meta name="description" content="Quickly calculate compound interest with steps. Find out the future value of your savings or investments over time." />
      </Helmet>

      <div className="calc-page-layout">
        <div className="calc-main">
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h1 className="h1" style={{ marginBottom: '1rem', fontSize: '2rem' }}>Compound Interest</h1>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr)', gap: '1.5rem' }}>
              <div className="input-group">
                <label className="input-label">Initial Balance ($)</label>
                <input 
                  type="number" 
                  className="input-field" 
                  value={principal} 
                  onChange={(e) => setPrincipal(e.target.value)} 
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div className="input-group">
                  <label className="input-label">Interest Rate (%)</label>
                  <input 
                    type="number" 
                    className="input-field" 
                    value={rate} 
                    onChange={(e) => setRate(e.target.value)} 
                  />
                </div>

                <div className="input-group">
                  <label className="input-label">Time (Years)</label>
                  <input 
                    type="number" 
                    className="input-field" 
                    value={years} 
                    onChange={(e) => setYears(e.target.value)} 
                  />
                </div>
              </div>

              <div className="input-group">
                <label className="input-label">Compound Frequency</label>
                <select 
                  className="input-field" 
                  value={compoundFreq} 
                  onChange={(e) => setCompoundFreq(e.target.value)}
                  style={{ cursor: 'pointer' }}
                >
                  <option value="1">Annually</option>
                  <option value="2">Semi-Annually</option>
                  <option value="4">Quarterly</option>
                  <option value="12">Monthly</option>
                  <option value="365">Daily</option>
                </select>
              </div>
            </div>

            <button className="btn-primary" onClick={calculateCompoundInterst} style={{ marginTop: '1rem' }}>
              Calculate Results
            </button>

            {result && (
              <div className="result-box accent">
                <div className="result-label">Final Future Value</div>
                <div className="result-value">${result}</div>
                <div style={{ marginTop: '1rem', fontSize: '1.1rem', background: 'rgba(0,0,0,0.1)', padding: '0.75rem', borderRadius: '8px', display: 'inline-block' }}>
                  Interest Earned: <b>${totalInterest}</b>
                </div>
              </div>
            )}
          </div>
          
          <StepByStep formula="A = P(1 + r/n)^(nt)" steps={steps} />
        </div>

        <aside className="calc-sidebar-content">
          <AdPlaceholder type="rectangle" />
        </aside>
      </div>
    </>
  );
}
