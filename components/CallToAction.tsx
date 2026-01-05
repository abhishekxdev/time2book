
import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto bg-slate-50 rounded-[3rem] py-24 px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-medium mb-6">
          Start managing scheduling and payments<br />effortlessly
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto mb-12">
          Schedule a call with our team to see how our software can streamline your fitness studio. We'll walk you through the features and show you how it can benefit both you and your clients.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-black text-white px-8 py-3.5 rounded-full font-semibold hover:bg-slate-800 transition-colors">
            Get started →
          </button>
          <button className="border border-slate-200 px-8 py-3.5 rounded-full font-semibold hover:bg-white transition-colors">
            Book a demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
