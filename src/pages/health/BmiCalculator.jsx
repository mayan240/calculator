import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AdPlaceholder from '../../components/AdPlaceholder';
import StepByStep from '../../components/StepByStep';

export default function BmiCalculator() {
  const [weight, setWeight] = useState('70');
  const [height, setHeight] = useState('175');
  const [result, setResult] = useState(null);
  const [category, setCategory] = useState('');
  const [steps, setSteps] = useState([]);

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
      alert("Please enter valid positive numbers");
      return;
    }

    const heightInMeters = h / 100;
    const bmi = w / (heightInMeters * heightInMeters);
    const roundedBmi = bmi.toFixed(1);

    setResult(roundedBmi);

    let cat = '';
    if (bmi < 18.5) cat = 'Underweight';
    else if (bmi < 24.9) cat = 'Normal weight';
    else if (bmi < 29.9) cat = 'Overweight';
    else cat = 'Obese';
    
    setCategory(cat);

    setSteps([
      `Convert height from centimeters to meters: <b>${h} cm = ${heightInMeters} m</b>`,
      `Square the height in meters: <b>${heightInMeters} × ${heightInMeters} = ${(heightInMeters * heightInMeters).toFixed(4)} m²</b>`,
      `Divide weight by squared height: <b>${w} kg / ${(heightInMeters * heightInMeters).toFixed(4)} m² = ${roundedBmi}</b>`,
      `Match the BMI value (${roundedBmi}) to standard categories. The result falls into the <b>${cat}</b> category.`
    ]);
  };

  React.useEffect(() => {
    calculateBMI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Helmet>
        <title>BMI Calculator | Free Tool with Steps</title>
        <meta name="description" content="Calculate your Body Mass Index (BMI) instantly. See step-by-step formulas and find out your health category." />
      </Helmet>

      <div className="calc-page-layout">
        <div className="calc-main">
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h1 className="h1" style={{ marginBottom: '1rem', fontSize: '2rem' }}>BMI Calculator</h1>
            <p className="text-body" style={{ marginBottom: '2rem' }}>
              Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div className="input-group">
                <label className="input-label">Weight (kg)</label>
                <input 
                  type="number" 
                  className="input-field" 
                  value={weight} 
                  onChange={(e) => setWeight(e.target.value)} 
                />
              </div>

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

            <button className="btn-primary" onClick={calculateBMI} style={{ marginTop: '1rem' }}>
              Calculate BMI
            </button>

            {result && (
              <div className="result-box">
                <div className="result-label">Your BMI is</div>
                <div className="result-value">{result}</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{category}</div>
              </div>
            )}
          </div>

          <StepByStep 
            formula="BMI = Weight (kg) / [Height (m)]²"
            steps={steps}
          />
        </div>

        <aside className="calc-sidebar-content">
          <AdPlaceholder type="rectangle" />
          
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 className="h3" style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>BMI Categories</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                <span>Underweight</span> <span style={{ fontWeight: '500' }}>&lt; 18.5</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--accent)', fontWeight: 'bold' }}>
                <span>Normal weight</span> <span>18.5 – 24.9</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', color: '#f59e0b' }}>
                <span>Overweight</span> <span style={{ fontWeight: '500' }}>25 – 29.9</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', color: '#ef4444' }}>
                <span>Obesity</span> <span style={{ fontWeight: '500' }}>≥ 30</span>
              </li>
            </ul>
          </div>
          
          <AdPlaceholder type="rectangle" height="600px" />
        </aside>
      </div>
    </>
  );
}
