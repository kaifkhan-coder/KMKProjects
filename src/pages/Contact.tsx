import React, { useState } from 'react';
import { Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    branch: '',
    idea: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi KMK Projects,%0A%0AI would like to check project availability.%0A%0A*Name:* ${formData.name}%0A*Branch:* ${formData.branch}%0A*Project Idea:* ${formData.idea}`;
    window.open(`https://wa.me/919326865425?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-32 pb-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Contact Us</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Get in touch to check availability, discuss your requirements, or start your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-slate-900 border border-slate-800 p-8 md:p-10 rounded-3xl">
            <h2 className="text-2xl font-bold text-white mb-6">Check Project Availability</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="branch" className="block text-sm font-medium text-slate-400 mb-2">Branch / Course</label>
                <input
                  type="text"
                  id="branch"
                  name="branch"
                  required
                  value={formData.branch}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="Computer Engineering"
                />
              </div>
              
              <div>
                <label htmlFor="idea" className="block text-sm font-medium text-slate-400 mb-2">Project Idea / Requirements</label>
                <textarea
                  id="idea"
                  name="idea"
                  required
                  rows={4}
                  value={formData.idea}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="Describe your project idea briefly..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <Send className="w-5 h-5" />
                Submit via WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col justify-center space-y-8">
            <a 
              href="https://wa.me/919326865425"
              target="_blank"
              rel="noreferrer"
              className="group bg-gradient-to-br from-emerald-500/20 to-emerald-900/20 border border-emerald-500/30 hover:border-emerald-500/60 p-8 rounded-3xl flex flex-col items-center text-center transition-all"
            >
              <div className="w-16 h-16 bg-emerald-500 text-black rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Live Demo Request</h3>
              <p className="text-slate-400 mb-6">Click here to chat instantly with us on WhatsApp</p>
              <span className="bg-emerald-600 text-white px-8 py-3 rounded-full font-bold">Open WhatsApp</span>
            </a>

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-800/50 text-slate-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Phone / WhatsApp</p>
                  <p className="text-lg font-bold text-white">9326865425</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-800/50 text-slate-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Email</p>
                  <p className="text-lg font-bold text-white">khankaifcom551@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-800/50 text-emerald-400 rounded-full flex items-center justify-center flex-shrink-0 border border-emerald-400/20">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-emerald-400/80 mb-1">Quick Reply</p>
                  <p className="text-lg text-emerald-400 font-bold">Response within 1–2 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
