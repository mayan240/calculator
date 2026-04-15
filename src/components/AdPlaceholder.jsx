import React from 'react';

export default function AdPlaceholder({ width = '100%', height = '250px', type = 'rectangle' }) {
  const isLeaderboard = type === 'leaderboard';
  
  return (
    <div 
      className="ad-placeholder glass-panel"
      style={{ 
        width: '100%',
        maxWidth: isLeaderboard ? '728px' : '300px',
        height: height,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(15, 23, 42, 0.02)',
        border: '1px dashed rgba(15, 23, 42, 0.2)'
      }}
    >
      <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        Advertisement Space
      </span>
      <span style={{ fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: '500', marginTop: '0.25rem' }}>
        {isLeaderboard ? '728 x 90' : '300 x 250'}
      </span>
    </div>
  );
}
