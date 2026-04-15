import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './pages/Home';
import BmiCalculator from './pages/health/BmiCalculator';
import EmiCalculator from './pages/financial/EmiCalculator';
import StandardCalc from './pages/math/StandardCalc';
import PercentageCalculator from './pages/math/PercentageCalculator';
import AgeCalculator from './pages/math/AgeCalculator';
import DiscountCalculator from './pages/financial/DiscountCalculator';
import SipCalculator from './pages/financial/SipCalculator';
import CompoundInterest from './pages/financial/CompoundInterest';
import BmrCalculator from './pages/health/BmrCalculator';
import IdealWeight from './pages/health/IdealWeight';

import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app-container">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="main-content">
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bmi" element={<BmiCalculator />} />
            <Route path="/bmr" element={<BmrCalculator />} />
            <Route path="/ideal-weight" element={<IdealWeight />} />
            <Route path="/emi" element={<EmiCalculator />} />
            <Route path="/discount" element={<DiscountCalculator />} />
            <Route path="/sip" element={<SipCalculator />} />
            <Route path="/compound-interest" element={<CompoundInterest />} />
            <Route path="/standard" element={<StandardCalc />} />
            <Route path="/percentage" element={<PercentageCalculator />} />
            <Route path="/age" element={<AgeCalculator />} />
            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
