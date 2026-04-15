import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AdPlaceholder from '../../components/AdPlaceholder';
import * as math from 'mathjs';

export default function StandardCalc() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('0');

  const handleInput = (val) => {
    if (result !== '0' && expression === '') {
      setExpression(result + val);
    } else {
      setExpression(expression + val);
    }
  };

  const calculate = () => {
    try {
      if (!expression) return;
      // Using mathjs for safe evaluation
      const res = math.evaluate(expression);
      // Format to avoid long decimals
      const rounded = math.round(res, 8);
      setResult(rounded.toString());
      setExpression('');
    } catch (e) {
      setResult('Error');
    }
  };

  const clear = () => {
    setExpression('');
    setResult('0');
  };

  return (
    <>
      <Helmet>
        <title>Standard Calculator | Free Online Tool</title>
        <meta name="description" content="Use this free online standard calculator for basic arithmetic operations like addition, subtraction, multiplication, and division." />
      </Helmet>

      <div className="calc-page-layout">
        <div className="calc-main">
          <div className="glass-panel" style={{ padding: '2rem', maxWidth: '400px', margin: '0 auto', width: '100%' }}>
            
            <div style={{ background: 'rgba(15, 23, 42, 0.05)', padding: '1.5rem', borderRadius: '12px', marginBottom: '1.5rem', textAlign: 'right' }}>
              <div style={{ color: 'var(--text-secondary)', minHeight: '1.5rem', fontSize: '1rem', overflow: 'hidden' }}>
                {expression}
              </div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--text-primary)', overflow: 'hidden' }}>
                {result}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
              <button className="btn-secondary" onClick={() => clear()} style={{ gridColumn: 'span 3', background: '#ef4444', color: 'white' }}>Clear</button>
              <button className="btn-secondary" onClick={() => handleInput('/')} style={{ background: 'var(--primary)', color: 'white' }}>÷</button>
              
              <button className="btn-secondary" onClick={() => handleInput('7')}>7</button>
              <button className="btn-secondary" onClick={() => handleInput('8')}>8</button>
              <button className="btn-secondary" onClick={() => handleInput('9')}>9</button>
              <button className="btn-secondary" onClick={() => handleInput('*')} style={{ background: 'var(--primary)', color: 'white' }}>×</button>
              
              <button className="btn-secondary" onClick={() => handleInput('4')}>4</button>
              <button className="btn-secondary" onClick={() => handleInput('5')}>5</button>
              <button className="btn-secondary" onClick={() => handleInput('6')}>6</button>
              <button className="btn-secondary" onClick={() => handleInput('-')} style={{ background: 'var(--primary)', color: 'white' }}>−</button>
              
              <button className="btn-secondary" onClick={() => handleInput('1')}>1</button>
              <button className="btn-secondary" onClick={() => handleInput('2')}>2</button>
              <button className="btn-secondary" onClick={() => handleInput('3')}>3</button>
              <button className="btn-secondary" onClick={() => handleInput('+')} style={{ background: 'var(--primary)', color: 'white' }}>+</button>
              
              <button className="btn-secondary" onClick={() => handleInput('0')} style={{ gridColumn: 'span 2' }}>0</button>
              <button className="btn-secondary" onClick={() => handleInput('.')}>.</button>
              <button className="btn-secondary" onClick={() => calculate()} style={{ background: 'var(--accent)', color: 'white' }}>=</button>
            </div>
            
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
