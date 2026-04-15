import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AdPlaceholder from '../../components/AdPlaceholder';
import StepByStep from '../../components/StepByStep';

export default function IdealWeight() {
  const [height, setHeight] = useState('175');
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(null);
  const [steps, setSteps] = useState([]);

  const calculateIdealWeight = () => {
    const h = parseFloat(height); // in cm
    if (isNaN(h) || h <= 0) return;

    // Use Devine Formula
    // Male: 50.0 kg + 2.3 kg per inch over 5 feet
    // Female: 45.5 kg + 2.3 kg per inch over 5 feet
    
    // 5 feet = 152.4 cm
    const inchesOver5Feet = h > 152.4 ? (h - 152.4) / 2.54 : 0;
    
    let baseWeight = gender === 'male' ? 50.0 : 45.5;
    const addedWeight = (inchesOver5Feet > 0 ? inchesOver5Feet * 2.3 : 0);
    
    let ideal = baseWeight + addedWeight;

    setResult(ideal.toFixed(1));

    setSteps([
      `Using the Devine formula for ${gender}s.`,
      `Base weight for 5 feet (152.4 cm) = ${baseWeight} kg.`,
      `Height over 5 feet: ${h} - 152.4 = ${(h > 152.4 ? h - 152.4 : 0).toFixed(2)} cm.`,
      `Convert extra cm to inches: ${(h > 152.4 ? h - 152.4 : 0).toFixed(2)} / 2.54 = ${inchesOver5Feet.toFixed(2)} inches.`,
      `Add 2.3 kg for each inch over 5 feet: ${inchesOver5Feet.toFixed(2)} × 2.3 = ${addedWeight.toFixed(2)} kg.`,
      `Ideal Weight = ${baseWeight} + ${addedWeight.toFixed(2)} = <b>${ideal.toFixed(2)} kg</b>`
    ]);
  };

  React.useEffect(() => {
    calculateIdealWeight();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Helmet>
        <title>Ideal Weight Calculator | Find Your Healthy Weight</title>
        <meta name="description" content="Calculate your ideal body weight based on your height and gender using clinical formulas." />
      </Helmet>

      <div className="calc-page-layout">
        <div className="calc-main">
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h1 className="h1" style={{ marginBottom: '1rem', fontSize: '2rem' }}>Ideal Weight Calculator</h1>
            
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
              <button 
                className={gender === 'male' ? 'btn-primary' : 'btn-secondary'} 
                onClick={() => setGender('male')}
                style={{ flex: 1 }}
              >
                Male
              </button>
              <button 
                className={gender === 'female' ? 'btn-primary' : 'btn-secondary'} 
                onClick={() => setGender('female')}
                style={{ flex: 1 }}
              >
                Female
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr)', gap: '1.5rem' }}>
              <div className="input-group">
                <label className="input-label">Height (cm)</label>
                <input 
                  type="number" 
                  className="input-field" 
                  value={height} 
                  onChange={(e) => setHeight(e.target.value)} 
                />
              </div>
            </div>

            <button className="btn-primary" onClick={calculateIdealWeight} style={{ marginTop: '1rem' }}>
              Calculate Ideal Weight
            </button>

            {result && (
              <div className="result-box accent">
                <div className="result-label">Your Ideal Weight is</div>
                <div className="result-value">{result} <span style={{fontSize:'1.5rem'}}>kg</span></div>
              </div>
            )}
          </div>
          
          <StepByStep formula={gender === 'male' ? "Ideal Weight = 50.0 kg + 2.3 kg per inch over 5 feet" : "Ideal Weight = 45.5 kg + 2.3 kg per inch over 5 feet"} steps={steps} />
        </div>

        <aside className="calc-sidebar-content">
          <AdPlaceholder type="rectangle" />
        </aside>
      </div>
    </>
  );
}
