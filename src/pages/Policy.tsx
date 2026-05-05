import React from 'react';
import { Shield, Handshake, CreditCard, AlertCircle, CheckCircle } from 'lucide-react';

export default function Policy() {
  const policies = [
    {
      icon: Handshake,
      title: "Project Confirmation First",
      description: "Before any commitment, we thoroughly discuss your project requirements, tech stack, and scope to ensure we can deliver exactly what you need."
    },
    {
      icon: CheckCircle, // Let's just use icon check later or use other icon. Wait, checksquare doesn't exist? I'll import from lucide-react. I'll use CheckCircle instead
      title: "Price Finalized After Discussion",
      description: "Every project is unique. The final quote is provided only after a complete understanding of your requirements, ensuring no hidden costs later."
    },
    {
      icon: CreditCard,
      title: "50% Advance + 50% After Completion",
      description: "A standard 50% upfront payment is required to start the development. The remaining 50% is to be paid only after you have reviewed and are satisfied with the final project demo."
    },
    {
      icon: AlertCircle,
      title: "No Refund After Work Started",
      description: "Once the advance payment is made and our developers start coding, we do not offer refunds. We invest time and resources immediately after confirmation."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-32 pb-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Shield className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Our Policies</h1>
          <p className="text-slate-400 text-lg">
            We believe in transparency and trust. Please read our operational policies carefully before starting a project with us.
          </p>
        </div>

        <div className="space-y-6">
          {policies.map((policy, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col md:flex-row items-start gap-6">
              <div className="bg-slate-800/50 p-4 rounded-xl text-emerald-400">
                <policy.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">{policy.title}</h3>
                <p className="text-slate-400 leading-relaxed">{policy.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
