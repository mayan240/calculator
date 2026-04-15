import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { HeartPulse, DollarSign, Calculator, Activity, TrendingUp, Calendar, Percent, Scale, Coins, PercentSquare, Tag, Calculator as CalcIcon } from 'lucide-react';

const categories = [
  {
    name: 'Financial Calculators',
    icon: <DollarSign size={24} className="text-blue-500" />,
    items: [
      { name: 'EMI / Loan Calculator', path: '/emi', desc: 'Calculate your monthly loan EMI.', icon: <Coins size={20} /> },
      { name: 'Compound Interest', path: '/compound-interest', desc: 'Find future value of investments.', icon: <TrendingUp size={20} /> },
      { name: 'SIP Calculator', path: '/sip', desc: 'Calculate mutual fund returns.', icon: <PercentSquare size={20} /> },
      { name: 'Discount Calculator', path: '/discount', desc: 'Find out the sale price after discount.', icon: <Tag size={20} /> },
    ]
  },
  {
    name: 'Health & Fitness',
    icon: <HeartPulse size={24} className="text-red-500" />,
    items: [
      { name: 'BMI Calculator', path: '/bmi', desc: 'Calculate your Body Mass Index.', icon: <Activity size={20} /> },
      { name: 'BMR Calculator', path: '/bmr', desc: 'Basal Metabolic Rate.', icon: <HeartPulse size={20} /> },
      { name: 'Ideal Weight', path: '/ideal-weight', desc: 'Find your healthy weight range.', icon: <Scale size={20} /> },
    ]
  },
  {
    name: 'Math & Everyday',
    icon: <Calculator size={24} className="text-purple-500" />,
    items: [
      { name: 'Standard Calculator', path: '/standard', desc: 'Basic arithmetic tool.', icon: <CalcIcon size={20} /> },
      { name: 'Percentage Calculator', path: '/percentage', desc: 'Quick percentage tools.', icon: <Percent size={20} /> },
      { name: 'Age Calculator', path: '/age', desc: 'Exact age in years, months & days.', icon: <Calendar size={20} /> },
      { name: 'Date Difference', path: '/date-diff', desc: 'Days between two dates.', icon: <Calendar size={20} /> },
      { name: 'Scientific Calc', path: '/scientific', desc: 'Advanced math functions.', icon: <CalcIcon size={20} /> },
    ]
  }
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>CalcHub | Free Online Calculators</title>
        <meta name="description" content="Use our free online calculators for health, finance, math, and more. EMI, BMI, Percentage, Age and more calculators with step-by-step formulas." />
      </Helmet>

      <div className="home-container" style={{ paddingBottom: '3rem' }}>
        <div className="glass-panel" style={{ padding: '3rem 2rem', textAlign: 'center', marginBottom: '3rem', background: 'linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(139,92,246,0.1) 100%)' }}>
          <h1 className="h1" style={{ marginBottom: '1rem' }}>Free Online Calculators</h1>
          <p className="text-body" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            A comprehensive collection of free calculators for everyday use. Get step-by-step formulas and detailed reports instantly.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {categories.map((category, idx) => (
            <div key={idx} className="category-section">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', paddingLeft: '0.5rem' }}>
                <div style={{ padding: '0.5rem', background: 'white', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
                  {category.icon}
                </div>
                <h2 className="h2">{category.name}</h2>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {category.items.map((item, i) => (
                  <Link to={item.path} key={i}>
                    <div className="glass-panel calc-card" style={{ padding: '1.5rem', height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{ color: 'var(--primary)' }}>
                          {item.icon}
                        </div>
                        <h3 className="h3" style={{ fontSize: '1.1rem', margin: 0 }}>{item.name}</h3>
                      </div>
                      <p className="text-sm" style={{ margin: 0 }}>{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
