/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Pricing from './pages/Pricing';
import Policy from './pages/Policy';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-emerald-500/30 selection:text-emerald-300 flex flex-col relative">
        {/* Top Urgency Banner */}
        <div className="bg-emerald-950/40 border-b border-emerald-900/50 px-6 py-2 flex justify-between items-center z-50 relative">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 hidden sm:inline-block">System Status: Fully Operational</span>
          </div>
          <div className="text-[10px] font-bold text-emerald-400 animate-pulse">
            ⚠️ URGENT: LIMITED SLOTS AVAILABLE FOR MAY PROJECTS (3 LEFT)
          </div>
        </div>
        <Navbar />

        {/* Decorative Circuit Grid */}
        <div className="fixed inset-0 w-full h-full pointer-events-none opacity-[0.03] z-0" style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        
        <main className="flex-1 relative z-10 w-full mb-auto flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

