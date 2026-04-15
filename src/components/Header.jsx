import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Search, Calculator, Activity, DollarSign } from 'lucide-react';

const ALL_CALCULATORS = [
  { name: 'EMI / Loan Calculator', path: '/emi', category: 'Financial', icon: DollarSign },
  { name: 'Compound Interest', path: '/compound-interest', category: 'Financial', icon: DollarSign },
  { name: 'SIP Calculator', path: '/sip', category: 'Financial', icon: DollarSign },
  { name: 'Discount Calculator', path: '/discount', category: 'Financial', icon: DollarSign },
  { name: 'BMI Calculator', path: '/bmi', category: 'Health', icon: Activity },
  { name: 'BMR Calculator', path: '/bmr', category: 'Health', icon: Activity },
  { name: 'Ideal Weight', path: '/ideal-weight', category: 'Health', icon: Activity },
  { name: 'Standard Calculator', path: '/standard', category: 'Math', icon: Calculator },
  { name: 'Percentage Calculator', path: '/percentage', category: 'Math', icon: Calculator },
  { name: 'Age Calculator', path: '/age', category: 'Math', icon: Calculator },
  { name: 'Date Difference', path: '/date-diff', category: 'Math', icon: Calculator },
  { name: 'Scientific Calculator', path: '/scientific', category: 'Math', icon: Calculator },
  { name: 'Blog & Articles', path: '/blog', category: 'Resources', icon: Activity },
];

export default function Header({ toggleSidebar }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    
    const lowercaseQuery = query.toLowerCase();
    const filtered = ALL_CALCULATORS.filter(calc => 
      calc.name.toLowerCase().includes(lowercaseQuery) || 
      calc.category.toLowerCase().includes(lowercaseQuery)
    );
    setResults(filtered);
  }, [query]);

  // Click outside to close
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (path) => {
    navigate(path);
    setQuery('');
    setIsFocused(false);
  };

  return (
    <header className="global-header">
      <div className="header-left">
        <button onClick={toggleSidebar} className="menu-btn">
          <Menu size={24} />
        </button>
        <h1 className="mobile-title">CalcHub</h1>
      </div>

      <div className="search-container" ref={searchRef}>
        <Search size={18} className="search-icon" />
        <input 
          type="text" 
          className="search-input" 
          placeholder="Search for any calculator..." 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
        />
        
        {isFocused && results.length > 0 && (
          <div className="search-results">
            {results.map((calc, idx) => {
              const Icon = calc.icon;
              return (
                <div 
                  key={idx} 
                  className="search-result-item"
                  onClick={() => handleSelect(calc.path)}
                >
                  <Icon size={16} className="text-blue-500" />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--text-primary)' }}>{calc.name}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{calc.category}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {isFocused && query.trim() !== '' && results.length === 0 && (
          <div className="search-results" style={{ padding: '1rem', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            No calculators found.
          </div>
        )}
      </div>
    </header>
  );
}
