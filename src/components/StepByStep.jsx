import React from 'react';
import { Info } from 'lucide-react';

export default function StepByStep({ formula, steps }) {
  if (!steps || steps.length === 0) return null;

  return (
    <div className="glass-panel" style={{ padding: '1.5rem', marginTop: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>
        <Info size={20} />
        <h3 className="h3" style={{ margin: 0, fontSize: '1.25rem' }}>How it's calculated</h3>
      </div>
      
      {formula && (
        <div style={{ 
          background: 'rgba(15, 23, 42, 0.05)', 
          padding: '1rem', 
          borderRadius: '8px',
          marginBottom: '1.25rem',
          fontFamily: 'monospace',
          fontSize: '1.1rem',
          textAlign: 'center',
          overflowX: 'auto'
        }}>
          <b>Formula:</b> {formula}
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {steps.map((step, idx) => (
          <div key={idx} style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ 
              width: '24px', 
              height: '24px', 
              borderRadius: '50%', 
              background: 'var(--primary)', 
              color: 'white', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              fontSize: '0.875rem',
              fontWeight: 'bold',
              flexShrink: 0
            }}>
              {idx + 1}
            </div>
            <div style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }} dangerouslySetInnerHTML={{ __html: step }} />
          </div>
        ))}
      </div>
    </div>
  );
}
