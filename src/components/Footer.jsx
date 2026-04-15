import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      marginTop: 'auto',
      padding: '2rem',
      background: 'rgba(255, 255, 255, 0.85)',
      backdropFilter: 'blur(10px)',
      borderTop: '1px solid var(--border-color)',
      color: 'var(--text-secondary)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '2rem'
      }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontWeight: 'bold' }}>
            <Calculator size={20} className="text-blue-500" />
            CalcHub
          </div>
          <p style={{ fontSize: '0.875rem', maxWidth: '300px', margin: 0 }}>
            Your premium toolset for everyday calculations, financial projections, and health tracking. Built for speed and accuracy.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.875rem', fontWeight: '500' }}>
          <Link to="/blog" style={{ transition: 'color 0.2s', textDecoration: 'none' }} className="hover-primary">Articles</Link>
          <Link to="/privacy" style={{ transition: 'color 0.2s', textDecoration: 'none' }} className="hover-primary">Privacy Policy</Link>
          <Link to="/terms" style={{ transition: 'color 0.2s', textDecoration: 'none' }} className="hover-primary">Terms of Service</Link>
          <Link to="/contact" style={{ transition: 'color 0.2s', textDecoration: 'none' }} className="hover-primary">Contact Us</Link>
        </div>
      </div>
      
      <div style={{ 
        maxWidth: '1200px', 
        margin: '2rem auto 0', 
        paddingTop: '1rem', 
        borderTop: '1px solid rgba(15, 23, 42, 0.05)',
        textAlign: 'center',
        fontSize: '0.75rem'
      }}>
        © {currentYear} CalcHub Platform. All rights reserved.
      </div>
    </footer>
  );
}
