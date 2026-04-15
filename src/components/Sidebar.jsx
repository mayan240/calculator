import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Calculator, HeartPulse, DollarSign, Menu, X, ChevronRight, Calculator as CalcIcon, TrendingUp, Calendar, Percent, Scale, Activity, Coins, PercentSquare, Tag } from 'lucide-react';
import './Sidebar.css';

const categories = [
  {
    name: 'Resources',
    icon: <Menu size={20} />,
    items: [
      { name: 'Blog & Articles', path: '/blog', icon: <TrendingUp size={18} /> },
    ]
  },
  {
    name: 'Trending',
    icon: <TrendingUp size={20} />,
    items: [
      { name: 'BMI Calculator', path: '/bmi', icon: <Activity size={18} /> },
      { name: 'EMI Calculator', path: '/emi', icon: <DollarSign size={18} /> },
      { name: 'Percentage Calc', path: '/percentage', icon: <Percent size={18} /> },
    ]
  },
  {
    name: 'Financial',
    icon: <DollarSign size={20} />,
    items: [
      { name: 'EMI / Loan', path: '/emi', icon: <Coins size={18} /> },
      { name: 'Compound Interest', path: '/compound-interest', icon: <TrendingUp size={18} /> },
      { name: 'SIP Calculator', path: '/sip', icon: <PercentSquare size={18} /> },
      { name: 'Discount Calc', path: '/discount', icon: <Tag size={18} /> },
    ]
  },
  {
    name: 'Health & Fitness',
    icon: <HeartPulse size={20} />,
    items: [
      { name: 'BMI Calculator', path: '/bmi', icon: <Activity size={18} /> },
      { name: 'BMR Calculator', path: '/bmr', icon: <HeartPulse size={18} /> },
      { name: 'Ideal Weight', path: '/ideal-weight', icon: <Scale size={18} /> },
    ]
  },
  {
    name: 'Math & Everyday',
    icon: <Calculator size={20} />,
    items: [
      { name: 'Standard Calc', path: '/standard', icon: <CalcIcon size={18} /> },
      { name: 'Percentage Calc', path: '/percentage', icon: <Percent size={18} /> },
      { name: 'Age Calculator', path: '/age', icon: <Calendar size={18} /> },
      { name: 'Date Difference', path: '/date-diff', icon: <Calendar size={18} /> },
      { name: 'Scientific Calc', path: '/scientific', icon: <CalcIcon size={18} /> },
    ]
  }
];

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
      
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <Link to="/" className="logo">
            <div className="logo-icon">
              <Calculator size={24} />
            </div>
            <span>CalcHub</span>
          </Link>
          <button className="mobile-close" onClick={toggleSidebar}>
            <X size={24} />
          </button>
        </div>

        <nav className="sidebar-nav">
          {categories.map((category, idx) => (
            <div key={idx} className="nav-group">
              <h3 className="nav-group-title">
                {category.icon}
                <span>{category.name}</span>
              </h3>
              <ul className="nav-list">
                {category.items.map((item, i) => (
                  <li key={i}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                      onClick={() => { if(window.innerWidth < 1024) toggleSidebar() }}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                      <ChevronRight size={16} className="chevron" />
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
