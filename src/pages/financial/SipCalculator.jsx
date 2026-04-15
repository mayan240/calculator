import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AdPlaceholder from '../../components/AdPlaceholder';
import StepByStep from '../../components/StepByStep';

export default function SipCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState('500');
  const [rate, setRate] = useState('12');
  const [years, setYears] = useState('10');
  const [result, setResult] = useState(null);
  const [totalInvested, setTotalInvested] = useState(null);
  const [totalReturns, setTotalReturns] = useState(null);
  const [steps, setSteps] = useState([]);

  const calculateSIP = () => {
    const P = parseFloat(monthlyInvestment);
    const r = parseFloat(rate);
    const y = parseFloat(years);

    if (isNaN(P) || isNaN(r) || isNaN(y) || P <= 0 || r <= 0 || y <= 0) return;

    const n = y * 12; // Total number of months
    const i = r / 100 / 12; // Monthly rate of return

    // SIP Formula: M = P × ({[1 + i]^n - 1} / i) × (1 + i)
    const futureValue = P * ((Math.pow((1 + i), n) - 1) / i) * (1 + i);
    const totalInvest = P * n;
    const estReturns = futureValue - totalInvest;

    setTotalInvested(totalInvest.toFixed(0));
    setTotalReturns(estReturns.toFixed(0));
    setResult(futureValue.toFixed(0));

    setSteps([
      `Convert annual rate to monthly decimal: <b>${r}% / 12 / 100 = ${i.toFixed(6)}</b> (i)`,
      `Total number of months (n): <b>${y} years × 12 = ${n}</b>`,
      `Apply SIP Formula: Future Value = P × [((1 + i)^n - 1) / i] × (1 + i)`,
      `Future Value = <b>${P} × [((1 + ${i.toFixed(4)})^${n} - 1) / ${i.toFixed(4)}] × (1 + ${i.toFixed(4)}) = $${futureValue.toFixed(2)}</b>`,
      `Total Investment = <b>${P} × ${n} = $${totalInvest}</b>`,
      `Estimated Returns = Future Value - Total Investment = <b>$${futureValue.toFixed(2)} - $${totalInvest} = $${estReturns.toFixed(2)}</b>`
    ]);
  };

  React.useEffect(() => {
    calculateSIP();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Helmet>
        <title>SIP Calculator | Systematic Investment Plan Returns</title>
        <meta name="description" content="Calculate the future value of your monthly SIP investments. See expected returns and wealth accumulation." />
      </Helmet>

      <div className="calc-page-layout">
        <div className="calc-main">
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h1 className="h1" style={{ marginBottom: '1rem', fontSize: '2rem' }}>SIP Calculator</h1>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr)', gap: '1.5rem' }}>
              <div className="input-group">
                <label className="input-label">Monthly Investment ($)</label>
                <input 
                  type="number" 
                  className="input-field" 
                  value={monthlyInvestment} 
                  onChange={(e) => setMonthlyInvestment(e.target.value)} 
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div className="input-group">
                  <label className="input-label">Expected Return Rate (% p.a)</label>
                  <input 
                    type="number" 
                    className="input-field" 
                    value={rate} 
                    onChange={(e) => setRate(e.target.value)} 
                  />
                </div>

                <div className="input-group">
                  <label className="input-label">Time Period (Years)</label>
                  <input 
                    type="number" 
                    className="input-field" 
                    value={years} 
                    onChange={(e) => setYears(e.target.value)} 
                  />
                </div>
              </div>
            </div>

            <button className="btn-primary" onClick={calculateSIP} style={{ marginTop: '1rem' }}>
              Calculate Returns
            </button>

            {result && (
              <div className="result-box accent">
                <div className="result-label">Total Future Value</div>
                <div className="result-value">${result}</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem', background: 'rgba(0,0,0,0.1)', padding: '1rem', borderRadius: '8px' }}>
                  <div>
                    <div className="result-label" style={{ fontSize: '0.875rem' }}>Total Invested</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>${totalInvested}</div>
                  </div>
                  <div>
                    <div className="result-label" style={{ fontSize: '0.875rem' }}>Wealth Gained</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>${totalReturns}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <StepByStep formula="FV = P × ({[1 + i]^n - 1} / i) × (1 + i)" steps={steps} />
        </div>

        <aside className="calc-sidebar-content">
          <AdPlaceholder type="rectangle" />
        </aside>
      </div>
    </>
  );
}
