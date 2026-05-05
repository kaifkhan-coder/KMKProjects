 import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, FileText, ArrowRight, Star, Clock } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-slate-950 to-slate-950"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Limited slots available this month
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
              Get Your Final Year Project <br className="hidden md:block"/>
              <span className="text-emerald-500 underline underline-offset-8 decoration-emerald-500/50">
                Done Without Stress
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-3xl mx-auto">
              We Build Your Ideas Into Success. Professional, complete, and ready for submission.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://wa.me/919326865425"
                target="_blank"
                rel="noreferrer"
                className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold text-sm transition-transform hover:scale-105"
              >
                Get Project Now →
              </a>
              <NavLink 
                to="/projects"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 border border-emerald-500/20 text-emerald-400 px-6 py-3 rounded-full text-sm font-medium transition-colors"
              >
                View sample projects
              </NavLink>
            </div>
          </motion.div>
          
          {/* Key Benefits */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
          >
            {[
              { icon: CheckCircle2, title: "100% Working Project", desc: "Bug-free code ready to run on your machine." },
              { icon: FileText, title: "Full Documentation", desc: "Complete reports, PPTs, and diagrams included." },
              { icon: ShieldCheck, title: "Viva Support", desc: "Full explanation to help you ace your presentation." }
            ].map((benefit, i) => (
              <div key={i} className="bg-slate-900/50 border border-slate-800/50 p-6 rounded-2xl flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-slate-400 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-12 bg-emerald-500/5 border-y border-emerald-500/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Clock className="w-12 h-12 text-emerald-500" />
            <div className="text-left">
              <h2 className="text-2xl font-bold text-white mb-1">Time is running out!</h2>
              <p className="text-emerald-400 font-medium">Limited slots available this month due to high demand.</p>
            </div>
            <a 
              href="https://wa.me/919326865425"
              target="_blank"
              rel="noreferrer"
              className="mt-4 md:mt-0 bg-white text-black px-6 py-3 rounded-md font-bold hover:bg-slate-200 transition-colors whitespace-nowrap"
            >
              Book Your Slot
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Loved by Students</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">See what others have to say about our project delivery and support.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Helped me pass viva easily. The explanation they provided was precise and exactly what the external examiner asked.",
                author: "Yahya Batliwala",
                role: "IT Student "
              },
              {
                text: "Project was smooth and clean. No bugs during the final demo, and the UI was exactly as we requested.",
                author: "Mustafa Lassanwala",
                role: "IT Student"
              },
              {
                text: "The project was submitted on time. I was really stressed about the deadline, but KMK delivered 2 days early!",
                author: "Yasir Sahikh",
                role: "IT Student"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800/50 p-8 rounded-2xl relative">
                <Star className="absolute top-8 right-8 w-6 h-6 text-yellow-500 fill-yellow-500/20" />
                <div className="flex text-yellow-500 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-300 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <h4 className="text-white font-bold">{testimonial.author}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
