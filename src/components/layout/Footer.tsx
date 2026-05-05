import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '../ui/Logo';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Logo className="mb-4" />
            <p className="text-slate-400 mt-4 max-w-sm">
              We Build Your Ideas Into Success. Get your final year projects delivered on time with complete documentation and viva support.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wider uppercase text-xs">Quick Links</h3>
            <ul className="space-y-3">
              <li><NavLink to="/" className="text-slate-400 hover:text-emerald-400 transition-colors">Home</NavLink></li>
              <li><NavLink to="/projects" className="text-slate-400 hover:text-emerald-400 transition-colors">Projects</NavLink></li>
              <li><NavLink to="/pricing" className="text-slate-400 hover:text-emerald-400 transition-colors">Pricing</NavLink></li>
              <li><NavLink to="/policy" className="text-slate-400 hover:text-emerald-400 transition-colors">Policy</NavLink></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wider uppercase text-xs">Contact Us</h3>
            <ul className="space-y-3 text-slate-400">
              <li>WhatsApp: <a href="https://wa.me/919326865425" className="text-emerald-400 hover:underline">+91 9326865425</a></li>
              <li>Email: <a href="mailto:khankaifcom551@gmail.com" className="hover:text-white transition-colors">khankaifcom551@gmail.com</a></li>
              <li className="text-xs text-slate-500 mt-4">Response within 1-2 hours</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500">
          <p>© {new Date().getFullYear()} KMK Projects. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
