import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AdPlaceholder from '../../components/AdPlaceholder';
import StepByStep from '../../components/StepByStep';

export default function BmrCalculator() {
  const [weight, setWeight] = useState('70');
  const [height, setHeight] = useState('175');
  const [age, setAge] = useState('25');
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(null);
  const [steps, setSteps] = useState([]);

  const calculateBMR = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    if (isNaN(w) || isNaN(h) || isNaN(a) || w <= 0 || h <= 0 || a <= 0) return;

    let bmr = 0;
    if (gender === 'male') {
      bmr = 88.362 + (13.397 * w) + (4.799 * h) - (5.677 * a);
    } else {
      bmr = 447.593 + (9.247 * w) + (3.098 * h) - (4.330 * a);
    }

    setResult(bmr.toFixed(0));

    setSteps([
      `Use the Harris-Benedict Equation for ${gender}s.`,
      gender === 'male' 
        ? `BMR = 88.362 + (13.397 × ${w} kg) + (4.799 × ${h} cm) - (5.677 × ${a} years)`
        : `BMR = 447.593 + (9.247 × ${w} kg) + (3.098 × ${h} cm) - (4.330 × ${a} years)`,
      `Weight component: ${(gender === 'male' ? 13.397 : 9.247) * w}`,
      `Height component: ${(gender === 'male' ? 4.799 : 3.098) * h}`,
      `Age component: ${(gender === 'male' ? -5.677 : -4.330) * a}`,
      `Final BMR = <b>${bmr.toFixed(2)} Calories/day</b>`
    ]);
  };

  React.useEffect(() => {
    calculateBMR();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Helmet>
        <title>BMR Calculator | Basal Metabolic Rate</title>
        <meta name="description" content="Calculate your BMR to know exactly how many calories your body burns at rest." />
      </Helmet>

      <div className="calc-page-layout">
        <div className="calc-main">
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h1 className="h1" style={{ marginBottom: '1rem', fontSize: '2rem' }}>BMR Calculator</h1>
            <p className="text-body" style={{ marginBottom: '2rem' }}>
              Basal Metabolic Rate is the number of calories your body needs to accomplish its most basic (basal) life-sustaining functions.
            </p>
            
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
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
                <div className="input-group">
                  <label className="input-label">Age</label>
                  <input 
                    type="number" 
                    className="input-field" 
                    value={age} 
                    onChange={(e) => setAge(e.target.value)} 
                  />
                </div>
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
            </div>

            <button className="btn-primary" onClick={calculateBMR} style={{ marginTop: '1rem' }}>
              Calculate BMR
            </button>

            {result && (
              <div className="result-box accent">
                <div className="result-label">Your BMR is</div>
                <div className="result-value">{result} <span style={{fontSize:'1.5rem'}}>Calories/day</span></div>
              </div>
            )}
          </div>
          
          <StepByStep formula={gender === 'male' ? "BMR = 88.362 + (13.397 × weight) + (4.799 × height) - (5.677 × age)" : "BMR = 447.593 + (9.247 × weight) + (3.098 × height) - (4.330 × age)"} steps={steps} />
        </div>

        <aside className="calc-sidebar-content">
          <AdPlaceholder type="rectangle" />
        </aside>
      </div>
    </>
  );
}
