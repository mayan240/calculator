import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AdPlaceholder from '../../components/AdPlaceholder';
import StepByStep from '../../components/StepByStep';

export default function DiscountCalculator() {
  const [originalPrice, setOriginalPrice] = useState('150');
  const [discountPercent, setDiscountPercent] = useState('25');
  const [result, setResult] = useState(null);
  const [savedAmount, setSavedAmount] = useState(null);
  const [steps, setSteps] = useState([]);

  const calculateDiscount = () => {
    const price = parseFloat(originalPrice);
    const discount = parseFloat(discountPercent);

    if (isNaN(price) || isNaN(discount) || price <= 0 || discount < 0 || discount > 100) return;

    const saved = price * (discount / 100);
    const finalPrice = price - saved;

    setSavedAmount(saved.toFixed(2));
    setResult(finalPrice.toFixed(2));

    setSteps([
      `Convert discount percentage to a decimal: <b>${discount} / 100 = ${discount/100}</b>`,
      `Multiply decimal by the original price to find savings: <b>$${price} × ${discount/100} = $${saved.toFixed(2)}</b>`,
      `Subtract the savings from the original price: <b>$${price} - $${saved.toFixed(2)} = $${finalPrice.toFixed(2)}</b>`
    ]);
  };

  React.useEffect(() => {
    calculateDiscount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Helmet>
        <title>Discount Calculator | Find Final Sale Price</title>
        <meta name="description" content="Calculate your final sale price and total savings after applying a percentage discount." />
      </Helmet>

      <div className="calc-page-layout">
        <div className="calc-main">
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h1 className="h1" style={{ marginBottom: '1rem', fontSize: '2rem' }}>Discount Calculator</h1>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr)', gap: '1.5rem' }}>
              <div className="input-group">
                <label className="input-label">Original Price ($)</label>
                <input 
                  type="number" 
                  className="input-field" 
                  value={originalPrice} 
                  onChange={(e) => setOriginalPrice(e.target.value)} 
                />
              </div>

              <div className="input-group">
                <label className="input-label">Discount (%)</label>
                <input 
                  type="number" 
                  className="input-field" 
                  max="100"
                  value={discountPercent} 
                  onChange={(e) => setDiscountPercent(e.target.value)} 
                />
              </div>
            </div>

            <button className="btn-primary" onClick={calculateDiscount} style={{ marginTop: '1rem' }}>
              Calculate Discount
            </button>

            {result && (
              <div className="result-box">
                <div className="result-label">Final Sale Price</div>
                <div className="result-value">${result}</div>
                <div style={{ marginTop: '1rem', fontSize: '1.1rem', background: 'rgba(0,0,0,0.1)', padding: '0.75rem', borderRadius: '8px', display: 'inline-block' }}>
                  You Saved: <b>${savedAmount}</b>
                </div>
              </div>
            )}
          </div>
          
          <StepByStep formula="Final Price = Original Price - (Original Price × (Discount % / 100))" steps={steps} />
        </div>

        <aside className="calc-sidebar-content">
          <AdPlaceholder type="rectangle" />
        </aside>
      </div>
    </>
  );
}
