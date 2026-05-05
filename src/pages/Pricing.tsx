import React from 'react';
import { Check } from 'lucide-react';

const PACKAGES = [
  {
    name: "Basic",
    target: "For students looking for a simple, working project.",
    description: "Ideal for minor projects or simple college submissions.",
    features: [
      "Working Source Code",
      "Basic Documentation",
      "Setup Instructions",
      "1 Week Email Support"
    ],
    popular: false
  },
  {
    name: "Standard",
    target: "For final year students needing a complete package.",
    description: "The complete package for your final semester submission.",
    features: [
      "Advanced Source Code",
      "Full Project Report (IEEE Format)",
      "Database Schema & Diagrams",
      "PowerPoint Presentation",
      "Remote Installation Setup",
      "Viva Preparation Guide"
    ],
    popular: true
  },
  {
    name: "Premium",
    target: "For complex projects involving AI/ML or custom requirements.",
    description: "Customized development with extensive documentation and support.",
    features: [
      "Custom UI/UX Design",
      "Complex Backend/AI Models",
      "Premium Project Report",
      "Live Deployment (Vercel/Render)",
      "Unlimited Revisions (1 month)",
      "1-on-1 Viva Mock Session",
      "Plagiarism Report"
    ],
    popular: false
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-slate-950 pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Pricing Plans</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Choose the package that fits your project requirements. Prices are finalized after discussing your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PACKAGES.map((pkg) => (
            <div 
              key={pkg.name}
              className={`relative bg-slate-900/40 rounded-3xl p-8 border ${
                pkg.popular ? 'border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.15)] md:-mt-4 md:mb-4' : 'border-slate-800 mt-0'
              } flex flex-col`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-black px-4 py-1 rounded-full text-sm font-bold tracking-wide shadow-lg">
                  MOST POPULAR
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-sm font-medium text-emerald-400 mb-4">{pkg.target}</p>
                <p className="text-slate-400 text-sm">{pkg.description}</p>
              </div>
              
              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-slate-300 text-sm">
                      <Check className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <a 
                href="https://wa.me/919326865425" 
                target="_blank" 
                rel="noreferrer"
                className={`w-full text-center px-6 py-4 rounded-xl font-bold transition-all ${
                  pkg.popular 
                    ? 'bg-emerald-500 hover:bg-emerald-400 text-black' 
                    : 'bg-slate-800/50 hover:bg-slate-800 text-white'
                }`}
              >
                Discuss Pricing
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
