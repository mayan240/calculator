import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AdPlaceholder from '../../components/AdPlaceholder';
import StepByStep from '../../components/StepByStep';

export default function PercentageCalculator() {
  const [val1, setVal1] = useState('20');
  const [val2, setVal2] = useState('150');
  const [result1, setResult1] = useState(null);
  const [steps1, setSteps1] = useState([]);

  const [val3, setVal3] = useState('50');
  const [val4, setVal4] = useState('200');
  const [result2, setResult2] = useState(null);
  const [steps2, setSteps2] = useState([]);

  const calculateType1 = () => {
    const p = parseFloat(val1);
    const v = parseFloat(val2);
    if (isNaN(p) || isNaN(v)) return;
    
    const res = (p / 100) * v;
    setResult1(res.toFixed(2));
    setSteps1([
      `Formula: (Percentage / 100) × Value`,
      `Convert percentage to decimal: <b>${p} / 100 = ${p/100}</b>`,
      `Multiply by value: <b>${p/100} × ${v} = ${res}</b>`
    ]);
  };

  const calculateType2 = () => {
    const a = parseFloat(val3);
    const b = parseFloat(val4);
    if (isNaN(a) || isNaN(b) || b === 0) return;
    
    const res = (a / b) * 100;
    setResult2(res.toFixed(2));
    setSteps2([
      `Formula: (Value 1 / Value 2) × 100`,
      `Divide the first value by the second: <b>${a} / ${b} = ${(a/b).toFixed(4)}</b>`,
      `Multiply by 100 to get percentage: <b>${(a/b).toFixed(4)} × 100 = ${res}%</b>`
    ]);
  };

  React.useEffect(() => {
    calculateType1();
    calculateType2();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Helmet>
        <title>Percentage Calculator | Free Tool with Steps</title>
        <meta name="description" content="Calculate percentages instantly. Find out what is X% of Y, or what percentage X is of Y with step-by-step formulas." />
      </Helmet>

      <div className="calc-page-layout">
        <div className="calc-main">
          
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h2 className="h2" style={{ marginBottom: '1.5rem' }}>What is X% of Y?</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <span>What is</span>
              <input type="number" className="input-field" style={{ width: '100px' }} value={val1} onChange={(e) => setVal1(e.target.value)} />
              <span>% of</span>
              <input type="number" className="input-field" style={{ width: '120px' }} value={val2} onChange={(e) => setVal2(e.target.value)} />
              <button className="btn-primary" style={{ width: 'auto' }} onClick={calculateType1}>Calculate</button>
            </div>
            
            {result1 && (
              <div style={{ marginTop: '1.5rem', fontSize: '1.25rem' }}>
                Answer: <b style={{ fontSize: '1.5rem', color: 'var(--primary)' }}>{result1}</b>
              </div>
            )}
          </div>
          <StepByStep steps={steps1} />

          <div className="glass-panel" style={{ padding: '2rem', marginTop: '1rem' }}>
            <h2 className="h2" style={{ marginBottom: '1.5rem' }}>X is what % of Y?</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <input type="number" className="input-field" style={{ width: '100px' }} value={val3} onChange={(e) => setVal3(e.target.value)} />
              <span>is what % of</span>
              <input type="number" className="input-field" style={{ width: '120px' }} value={val4} onChange={(e) => setVal4(e.target.value)} />
              <button className="btn-primary" style={{ width: 'auto', background: 'var(--accent)' }} onClick={calculateType2}>Calculate</button>
            </div>
            
            {result2 && (
              <div style={{ marginTop: '1.5rem', fontSize: '1.25rem' }}>
                Answer: <b style={{ fontSize: '1.5rem', color: 'var(--accent)' }}>{result2}%</b>
              </div>
            )}
          </div>
          <StepByStep steps={steps2} />

        </div>

        <aside className="calc-sidebar-content">
          <AdPlaceholder type="rectangle" />
          <AdPlaceholder type="rectangle" height="600px" />
        </aside>
      </div>
    </>
  );
}
