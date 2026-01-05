
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-20 pb-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div>
            <span className="text-slate-500 font-medium text-sm block mb-6 animate-fade-in-up">Fitness Studio Software</span>
            <div className="grid md:grid-cols-2 gap-12 items-end">
              <h1 className="text-5xl md:text-6xl font-medium tracking-tight leading-[1.1] text-slate-900 animate-fade-in-up animate-delay-100">
                All-in-one fitness studio software for class bookings and payments.
              </h1>
              <div className="animate-fade-in-up animate-delay-200">
                <p className="text-slate-500 text-lg leading-relaxed max-w-sm">
                  One profile to run it all—display your services, let clients book and pay, and keep your schedule and clients organized.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-8 animate-fade-in-up animate-delay-300">
              <button className="bg-black text-white px-8 py-3.5 rounded-full font-semibold hover:bg-slate-800 transition-all transform hover:-translate-y-0.5">
                Get started →
              </button>
              <button className="border border-slate-200 px-8 py-3.5 rounded-full font-semibold hover:bg-slate-50 transition-all">
                Book a demo
              </button>
            </div>
          </div>
        </div>

        {/* Tablet Mockup */}
        <div className="mt-16 relative flex justify-center animate-fade-in-up animate-delay-500">
          <div className="relative w-full max-w-5xl aspect-[16/10] bg-black rounded-[3rem] p-4 shadow-2xl overflow-hidden transform perspective-1000 rotate-x-2">
            <div className="absolute inset-0 bg-slate-200 m-2 rounded-[2.5rem] overflow-hidden">
               <img 
                src="/dashboard.png" 
                alt="Dashboard Preview" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
