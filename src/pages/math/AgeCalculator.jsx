import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AdPlaceholder from '../../components/AdPlaceholder';

export default function AgeCalculator() {
  const [dob, setDob] = useState('');
  const [targetDate, setTargetDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [result, setResult] = useState(null);

  const calculateAge = () => {
    if (!dob || !targetDate) return;

    const birthDate = new Date(dob);
    const target = new Date(targetDate);

    if (birthDate > target) {
      alert("Date of birth cannot be after the target date.");
      return;
    }

    let years = target.getFullYear() - birthDate.getFullYear();
    let months = target.getMonth() - birthDate.getMonth();
    let days = target.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      // Get days in the previous month
      const prevMonth = new Date(target.getFullYear(), target.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    // Total days calculation
    const diffTime = Math.abs(target - birthDate);
    const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    // Total weeks
    const totalWeeks = Math.floor(totalDays / 7);
    const remDays = totalDays % 7;

    setResult({ years, months, days, totalDays, totalWeeks, remDays });
  };

  return (
    <>
      <Helmet>
        <title>Age Calculator | Find Exact Age in Years, Months, Days</title>
        <meta name="description" content="Calculate your exact age down to the days, weeks, and months. Fast, free, and accurate age calculator." />
      </Helmet>

      <div className="calc-page-layout">
        <div className="calc-main">
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h1 className="h1" style={{ marginBottom: '1rem', fontSize: '2rem' }}>Age Calculator</h1>
            <p className="text-body" style={{ marginBottom: '2rem' }}>
              Calculate your exact age in years, months and days from your date of birth to an end date.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div className="input-group">
                <label className="input-label">Date of Birth</label>
                <input 
                  type="date" 
                  className="input-field" 
                  value={dob} 
                  onChange={(e) => setDob(e.target.value)} 
                />
              </div>

              <div className="input-group">
                <label className="input-label">Age at the Date of</label>
                <input 
                  type="date" 
                  className="input-field" 
                  value={targetDate} 
                  onChange={(e) => setTargetDate(e.target.value)} 
                />
              </div>
            </div>

            <button className="btn-primary" onClick={calculateAge} style={{ marginTop: '1rem' }}>
              Calculate Age
            </button>

            {result && (
              <div className="result-box accent" style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '1rem' }}>
                  Result: {result.years} years {result.months} months {result.days} days
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ background: 'rgba(0,0,0,0.1)', padding: '1rem', borderRadius: '8px' }}>
                    <div className="result-label" style={{ fontSize: '0.875rem' }}>Total Weeks</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{result.totalWeeks} weeks {result.remDays} days</div>
                  </div>
                  <div style={{ background: 'rgba(0,0,0,0.1)', padding: '1rem', borderRadius: '8px' }}>
                    <div className="result-label" style={{ fontSize: '0.875rem' }}>Total Days</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{result.totalDays} days</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <aside className="calc-sidebar-content">
          <AdPlaceholder type="rectangle" />
          <AdPlaceholder type="rectangle" height="600px" />
        </aside>
      </div>
    </>
  );
}
